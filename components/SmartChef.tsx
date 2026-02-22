import React, { useState } from 'react';
import { Sparkles, ChefHat, DollarSign, Users, ArrowRight, Leaf, AlertCircle, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface EconomyReport {
  costPerPortion: string;
  substitutionTip: string;
  zeroWasteBadge: boolean;
  totalSavings: string;
}

interface RecipeResult {
  recipeName: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  economyReport: EconomyReport;
}

export const SmartChef: React.FC = () => {
  const [step, setStep] = useState<'input' | 'loading' | 'result'>('input');
  const [ingredients, setIngredients] = useState('');
  const [budget, setBudget] = useState('20');
  const [people, setPeople] = useState(2);
  const [result, setResult] = useState<RecipeResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = async () => {
    if (!ingredients.trim()) {
      setError('Por favor, digite os ingredientes que você tem em casa.');
      return;
    }

    setStep('loading');
    setError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const prompt = `
        Você é um Chef Inteligente focado em economia e zero desperdício.
        O usuário tem os seguintes ingredientes em casa: "${ingredients}".
        O orçamento desejado é de até R$ ${budget}.
        A receita deve servir ${people} pessoas.

        Crie uma receita criativa e econômica usando o máximo possível dos ingredientes informados.
        Se faltar algo essencial, sugira algo barato para comprar.
        
        Retorne APENAS um objeto JSON com a seguinte estrutura, sem markdown ou texto adicional:
        {
          "recipeName": "Nome da Receita",
          "description": "Uma breve descrição apetitosa.",
          "ingredients": ["Lista de ingredientes com quantidades ajustadas para ${people} pessoas"],
          "instructions": ["Passo a passo da preparação"],
          "economyReport": {
            "costPerPortion": "Custo estimado por pessoa (ex: R$ 4,50)",
            "substitutionTip": "Uma dica inteligente de substituição para economizar mais (ex: Troque X por Y)",
            "zeroWasteBadge": true (se a receita usar quase tudo que foi informado),
            "totalSavings": "Estimativa de economia comparada a pedir delivery (ex: R$ 25,00)"
          }
        }
      `;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      const text = response.text || "";
      
      // Clean up markdown code blocks if present
      const jsonString = text.replace(/```json\n?|\n?```/g, '').trim();
      const data = JSON.parse(jsonString);
      
      setResult(data);
      setStep('result');
    } catch (err) {
      console.error("Erro ao gerar receita:", err);
      setError('Ocorreu um erro ao criar sua receita. Tente novamente com outros ingredientes.');
      setStep('input');
    }
  };

  const handleReset = () => {
    setStep('input');
    setResult(null);
    setError(null);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-brand-ice rounded-full mb-4">
          <Sparkles className="w-8 h-8 text-brand" />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Chef Inteligente</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Diga o que tem na geladeira e nós criamos uma receita econômica e sem desperdício para você.
        </p>
      </div>

      {step === 'input' && (
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 max-w-2xl mx-auto">
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              {error}
            </div>
          )}

          <div className="space-y-8">
            {/* Ingredientes */}
            <div>
              <label className="block text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <ChefHat className="w-5 h-5 text-brand" />
                O que tem na geladeira?
              </label>
              <textarea
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="Ex: meio frango assado, 2 cenouras murchas, arroz sobrado..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all h-32 resize-none"
              />
              <p className="text-sm text-slate-500 mt-2">
                Dica: O Chef IA entende termos como "um restinho" ou "meia lata".
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Orçamento */}
              <div>
                <label className="block text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-brand" />
                  Orçamento Extra
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all bg-white"
                >
                  <option value="10">Até R$ 10,00</option>
                  <option value="20">Até R$ 20,00</option>
                  <option value="50">Até R$ 50,00</option>
                  <option value="100">Sem limite</option>
                </select>
              </div>

              {/* Pessoas */}
              <div>
                <label className="block text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-brand" />
                  Para quantas pessoas?
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={people}
                    onChange={(e) => setPeople(parseInt(e.target.value))}
                    className="flex-grow h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand"
                  />
                  <span className="text-xl font-bold text-brand w-8 text-center">{people}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleCalculate}
              className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-brand/20"
            >
              <Sparkles className="w-5 h-5" />
              Calcular Receita Mágica
            </button>
          </div>
        </div>
      )}

      {step === 'loading' && (
        <div className="text-center py-20">
          <Loader2 className="w-16 h-16 text-brand animate-spin mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-slate-800 mb-2">O Chef está pensando...</h2>
          <p className="text-slate-600">Calculando custos e combinando sabores.</p>
        </div>
      )}

      {step === 'result' && result && (
        <div className="animate-fade-in">
          <button 
            onClick={handleReset}
            className="mb-6 text-slate-500 hover:text-brand flex items-center gap-2 transition-colors"
          >
            ← Criar outra receita
          </button>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Coluna Principal - Receita */}
            <div className="md:col-span-2 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{result.recipeName}</h2>
                <p className="text-slate-600 mb-8 text-lg leading-relaxed">{result.description}</p>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <ChefHat className="w-5 h-5 text-brand" />
                    Ingredientes
                  </h3>
                  <ul className="space-y-3">
                    {result.ingredients.map((ing, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700">
                        <span className="w-1.5 h-1.5 bg-brand rounded-full mt-2 flex-shrink-0" />
                        {ing}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <ArrowRight className="w-5 h-5 text-brand" />
                    Modo de Preparo
                  </h3>
                  <div className="space-y-6">
                    {result.instructions.map((inst, idx) => (
                      <div key={idx} className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 bg-brand-ice text-brand font-bold rounded-full flex items-center justify-center text-sm">
                          {idx + 1}
                        </span>
                        <p className="text-slate-700 mt-1 leading-relaxed">{inst}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna Lateral - Relatório de Economia */}
            <div className="md:col-span-1">
              <div className="bg-gradient-to-br from-brand to-brand-dark text-white p-6 rounded-2xl shadow-lg sticky top-24">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-6 h-6 text-yellow-300" />
                  <h3 className="text-xl font-bold">Relatório de Economia</h3>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                    <p className="text-brand-ice text-sm mb-1">Custo por Porção</p>
                    <p className="text-3xl font-bold">{result.economyReport.costPerPortion}</p>
                  </div>

                  <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                    <p className="text-brand-ice text-sm mb-1">Economia Total (vs Delivery)</p>
                    <p className="text-2xl font-bold text-green-300">{result.economyReport.totalSavings}</p>
                  </div>

                  <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                    <div className="flex items-start gap-3">
                      <Leaf className="w-5 h-5 text-green-300 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold mb-1">Dica de Ouro</p>
                        <p className="text-sm text-brand-ice leading-relaxed">
                          {result.economyReport.substitutionTip}
                        </p>
                      </div>
                    </div>
                  </div>

                  {result.economyReport.zeroWasteBadge && (
                    <div className="bg-green-500/20 border border-green-400/30 p-4 rounded-xl flex items-center gap-3">
                      <div className="bg-green-500 p-2 rounded-full">
                        <Leaf className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-green-100">Zero Desperdício</p>
                        <p className="text-xs text-green-200">Você usou 100% dos ingredientes!</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
