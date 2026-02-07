import React, { useState, useEffect } from 'react';
import { Recipe } from '../types';
import { 
  Clock, 
  DollarSign, 
  ChevronLeft, 
  Share2, 
  ChefHat, 
  CheckCircle2, 
  Circle,
  Lightbulb,
  Smartphone,
  Minus,
  Plus,
  ArrowRightLeft,
  Activity,
  AlertTriangle,
  Flame,
  ShieldCheck,
  Timer,
  Wrench,
  XCircle,
  HelpCircle,
  ChevronDown,
  Thermometer
} from 'lucide-react';

interface RecipePageProps {
  recipe: Recipe;
  onBack: () => void;
}

export const RecipePage: React.FC<RecipePageProps> = ({ recipe, onBack }) => {
  const [servingsMultiplier, setServingsMultiplier] = useState(1);
  const [wakeLock, setWakeLock] = useState<WakeLockSentinel | null>(null);
  const [isWakeLockSupported, setIsWakeLockSupported] = useState(false);
  const [showAlternativeMethod, setShowAlternativeMethod] = useState(false);

  useEffect(() => {
    if ('wakeLock' in navigator) {
      setIsWakeLockSupported(true);
    }
  }, []);

  const toggleWakeLock = async () => {
    if (wakeLock) {
      await wakeLock.release();
      setWakeLock(null);
    } else {
      try {
        // @ts-ignore
        const sentinel = await navigator.wakeLock.request('screen');
        setWakeLock(sentinel);
        sentinel.addEventListener('release', () => {
          setWakeLock(null);
        });
      } catch (err) {
        console.error('Wake Lock error:', err);
      }
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: recipe.title,
          text: `Confira essa receita de ${recipe.title} no TudoÉGostoso!`,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing', err);
      }
    } else {
      alert('Link copiado!');
    }
  };

  const displayAmount = (amount: number | string) => {
    if (typeof amount === 'string') return amount;
    const val = amount * servingsMultiplier;
    return Number.isInteger(val) ? val : val.toFixed(1).replace('.', ',');
  };

  const calculatedCost = recipe.performance 
    ? (recipe.performance.costPerServing * servingsMultiplier).toFixed(2).replace('.', ',') 
    : '-';

  // Schema.org Data
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": recipe.title,
    "image": [recipe.imageUrl],
    "author": { "@type": "Person", "name": recipe.author },
    "datePublished": recipe.publishedDate,
    "description": recipe.description,
    "prepTime": `PT${recipe.prepTime}M`,
    "cookTime": `PT${recipe.cookTime}M`,
    "totalTime": `PT${recipe.time}M`,
    "recipeYield": `${recipe.servings * servingsMultiplier} porções`,
    "recipeCategory": "Main Course",
    "recipeIngredient": recipe.ingredients.map(ing => 
      `${displayAmount(ing.amount)} ${ing.unit} ${ing.item}`
    ),
    "recipeInstructions": recipe.instructions.map((step, index) => ({
      "@type": "HowToStep",
      "name": `Passo ${index + 1}`,
      "text": step.text,
      "url": window.location.href + `#step-${index + 1}`
    })),
    "nutrition": recipe.nutrition ? {
      "@type": "NutritionInformation",
      "calories": recipe.nutrition.calories,
      "proteinContent": recipe.nutrition.protein,
      "carbohydrateContent": recipe.nutrition.carbs,
      "fatContent": recipe.nutrition.fat,
      "fiberContent": recipe.nutrition.fiber
    } : undefined,
    "tool": recipe.equipment?.mandatory.map(item => item),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": recipe.rating,
      "ratingCount": recipe.ratingCount
    },
    "mainEntity": recipe.faq ? recipe.faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    })) : undefined
  };

  return (
    <article className="bg-white min-h-screen pb-24 md:pb-12 animate-in fade-in duration-300 selection:bg-red-100 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100 px-4 py-3 flex items-center justify-between shadow-sm">
        <button onClick={onBack} className="p-3 -ml-2 text-slate-700 hover:text-brand hover:bg-red-50 rounded-full transition-colors flex items-center gap-2" aria-label="Voltar para a lista">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <span className="font-bold text-slate-800 text-base md:text-lg truncate max-w-[50%]">{recipe.title}</span>
        <div className="flex gap-3">
          {isWakeLockSupported && (
            <button onClick={toggleWakeLock} className={`p-3 rounded-full transition-all ${wakeLock ? 'bg-green-100 text-green-700 ring-2 ring-green-500' : 'text-slate-500 hover:bg-slate-100'}`} aria-label={wakeLock ? "Desativar tela ligada" : "Manter tela ligada"}>
              <Smartphone className={`w-5 h-5 ${wakeLock ? 'fill-current' : ''}`} />
            </button>
          )}
          <button onClick={handleShare} className="p-3 text-slate-600 hover:text-brand hover:bg-red-50 rounded-full" aria-label="Compartilhar">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* HERO IMAGE */}
        <div className="w-full aspect-video md:aspect-[21/9] bg-slate-100 relative overflow-hidden shadow-sm">
          <img 
            src={recipe.imageUrl} 
            alt={`Foto do prato: ${recipe.title}`}
            className="w-full h-full object-cover"
            loading="eager"
            width="1200"
            height="675"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden"></div>
          <div className="absolute bottom-6 left-4 right-4 md:hidden text-white">
            <span className="bg-brand px-3 py-1 text-xs font-bold uppercase rounded mb-3 inline-block tracking-wide shadow-sm">Receita Verificada</span>
            <h1 className="text-3xl font-bold leading-tight mb-2 drop-shadow-sm">{recipe.title}</h1>
            <p className="text-white/90 text-base leading-relaxed line-clamp-2 drop-shadow-sm">{recipe.description}</p>
          </div>
        </div>

        <div className="px-4 py-8 md:p-10">
          <div className="hidden md:block mb-10">
            <h1 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight">{recipe.title}</h1>
            <p className="text-2xl text-slate-600 leading-relaxed font-light">{recipe.description}</p>
          </div>

          {/* PERFORMANCE BLOCK */}
          {recipe.performance && (
            <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-12 shadow-sm" aria-label="Resumo de Custo e Tempo">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">
                    <DollarSign className="w-4 h-4" /> Custo Total
                  </div>
                  <div className="text-3xl font-bold text-slate-800 tracking-tight">R$ {calculatedCost}</div>
                  <div className="text-xs text-green-700 font-medium mt-1 bg-green-100 px-2 py-0.5 rounded-full inline-block">{recipe.performance.economyComparison}</div>
                </div>
                
                <div className="text-center border-l border-slate-200 pl-4">
                  <div className="flex items-center justify-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">
                    <Timer className="w-4 h-4" /> Mão na Massa
                  </div>
                  <div className="text-3xl font-bold text-slate-800 tracking-tight">{recipe.performance.activeTime} <span className="text-lg font-normal text-slate-500">min</span></div>
                  <div className="text-xs text-slate-500 mt-1">Tempo ativo</div>
                </div>

                <div className="text-center border-l border-slate-200 pl-4 md:border-l">
                  <div className="flex items-center justify-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">
                    <Clock className="w-4 h-4" /> Espera
                  </div>
                  <div className="text-3xl font-bold text-slate-800 tracking-tight">{recipe.performance.waitTime} <span className="text-lg font-normal text-slate-500">min</span></div>
                  <div className="text-xs text-slate-500 mt-1">Cozimento/Forno</div>
                </div>

                <div className="text-center border-l border-slate-200 pl-4">
                  <div className="flex items-center justify-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">
                    <Activity className="w-4 h-4" /> Energia
                  </div>
                  <div className="text-3xl font-bold text-slate-800 tracking-tight">{recipe.nutrition?.calories}</div>
                  <div className="text-xs text-slate-500 mt-1">kcal / porção</div>
                </div>
              </div>
            </section>
          )}

          {/* SPLIT LAYOUT: Only Ingredients and Instructions side-by-side */}
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-10 md:gap-16 items-start mb-16">
            
            {/* LEFT COLUMN: Ingredients, Substitutions, Equipment */}
            <div className="space-y-10">
              {/* Ingredients & Portions */}
              <section aria-labelledby="ingredients-heading">
                <div className="flex items-center justify-between mb-6 bg-white sticky top-16 z-20 py-3 border-b border-slate-100">
                  <h2 id="ingredients-heading" className="text-2xl font-bold text-slate-900 flex items-center gap-3">Ingredientes</h2>
                  <div className="flex items-center bg-slate-100 rounded-lg p-1.5 shadow-sm">
                    <button onClick={() => setServingsMultiplier(Math.max(0.5, servingsMultiplier - 0.5))} disabled={servingsMultiplier <= 0.5} className="p-2 hover:bg-white rounded transition disabled:opacity-50" aria-label="Diminuir porções">
                      <Minus className="w-5 h-5 text-slate-700" />
                    </button>
                    <div className="px-4 text-center min-w-[4rem]">
                      <span className="block text-lg font-bold text-slate-900 leading-none">{recipe.servings * servingsMultiplier}</span>
                      <span className="block text-[10px] font-bold text-slate-500 uppercase">Porções</span>
                    </div>
                    <button onClick={() => setServingsMultiplier(servingsMultiplier + 0.5)} className="p-2 hover:bg-white rounded transition" aria-label="Aumentar porções">
                      <Plus className="w-5 h-5 text-slate-700" />
                    </button>
                  </div>
                </div>

                <ul className="space-y-4">
                  {recipe.ingredients.map((ing, idx) => (
                    <li key={idx} className="group">
                      <label className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 cursor-pointer border border-dashed border-slate-200 hover:border-slate-300 transition-all">
                        <input type="checkbox" className="peer sr-only" />
                        <div className="mt-1 text-slate-300 peer-checked:text-brand shrink-0 transition-colors">
                          <Circle className="w-6 h-6 peer-checked:hidden" />
                          <CheckCircle2 className="w-6 h-6 hidden peer-checked:block" />
                        </div>
                        <span className="flex-grow text-lg text-slate-700 font-medium peer-checked:text-slate-400 peer-checked:line-through decoration-slate-400 transition-colors">
                          <span className="font-bold text-slate-900">{displayAmount(ing.amount)}</span> {ing.unit} {ing.item}
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </section>

              {/* SUBSTITUTION GUIDE */}
              {recipe.substitutions && (
                <section className="bg-amber-50 rounded-2xl p-6 border border-amber-100 shadow-sm">
                  <h3 className="text-amber-900 font-bold text-lg flex items-center gap-3 mb-4">
                    <ArrowRightLeft className="w-6 h-6" /> Substituições
                  </h3>
                  <div className="space-y-4">
                    {recipe.substitutions.main && (
                      <div className="bg-white/70 p-4 rounded-xl">
                        <span className="block text-xs font-extrabold text-amber-700 uppercase mb-2 tracking-wide">Ingrediente Principal</span>
                        <p className="text-base text-slate-800 leading-relaxed">
                          Troque <strong>{recipe.substitutions.main.original}</strong> por <strong className="text-brand-dark bg-red-50 px-1 rounded">{recipe.substitutions.main.replace}</strong>.
                        </p>
                      </div>
                    )}
                    {recipe.substitutions.fat && (
                      <div className="bg-white/70 p-4 rounded-xl">
                        <span className="block text-xs font-extrabold text-amber-700 uppercase mb-2 tracking-wide">Gordura</span>
                        <p className="text-base text-slate-800 leading-relaxed">
                          Use <strong>{recipe.substitutions.fat.replace}</strong> no lugar de {recipe.substitutions.fat.original}.
                        </p>
                      </div>
                    )}
                    {recipe.substitutions.dietary && (
                      <div className="bg-white/70 p-4 rounded-xl">
                        <span className="block text-xs font-extrabold text-amber-700 uppercase mb-2 tracking-wide">{recipe.substitutions.dietary.label}</span>
                        <p className="text-base text-slate-800 leading-relaxed">{recipe.substitutions.dietary.instruction}</p>
                      </div>
                    )}
                  </div>
                </section>
              )}

              {/* EQUIPMENT CHECKLIST */}
              {recipe.equipment && (
                <section className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <h3 className="text-slate-900 font-bold text-lg flex items-center gap-3 mb-4">
                    <Wrench className="w-6 h-6 text-slate-500" /> Utensílios
                  </h3>
                  <ul className="grid grid-cols-1 gap-3">
                    {recipe.equipment.mandatory.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-base text-slate-700">
                        <div className="w-2 h-2 bg-brand rounded-full shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* RIGHT COLUMN: Instructions Only */}
            <div>
              <section aria-labelledby="instructions-heading">
                <h2 id="instructions-heading" className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <ChefHat className="w-8 h-8 text-brand" /> Modo de Preparo
                </h2>
                
                {/* Alternative Method Toggle */}
                {recipe.equipment?.alternativeAppliance && (
                  <div className="mb-8 bg-blue-50 border border-blue-100 rounded-xl p-4 shadow-sm">
                     <button 
                      className="w-full flex items-center justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg p-1"
                      onClick={() => setShowAlternativeMethod(!showAlternativeMethod)}
                      aria-expanded={showAlternativeMethod}
                     >
                        <div className="flex items-center gap-3 text-blue-900 font-bold text-lg">
                          <Flame className="w-6 h-6" />
                          <span>Prefere fazer no {recipe.equipment.alternativeAppliance.name}?</span>
                        </div>
                        <span className="text-xs bg-white text-blue-700 px-3 py-1.5 rounded-full border border-blue-200 font-bold hover:bg-blue-100 transition-colors">
                          {showAlternativeMethod ? 'Ver Original' : 'Ver Alternativa'}
                        </span>
                     </button>
                     
                     {showAlternativeMethod && (
                        <div className="mt-4 pt-4 border-t border-blue-200 animate-in fade-in slide-in-from-top-2">
                          <ol className="list-decimal pl-6 space-y-3 text-blue-900 text-base leading-relaxed">
                            {recipe.equipment.alternativeAppliance.instructions.map((inst, i) => (
                              <li key={i}>{inst}</li>
                            ))}
                          </ol>
                        </div>
                     )}
                  </div>
                )}

                <ol className="space-y-8 relative border-l-2 border-slate-100 ml-4 md:ml-0 md:border-l-0">
                  {recipe.instructions.map((step, idx) => (
                    <li key={idx} id={`step-${idx + 1}`} className="pl-8 md:pl-0 relative group">
                       {/* Mobile Timeline Dot */}
                       <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-200 border-2 border-white md:hidden group-hover:bg-brand transition-colors"></div>
                       
                      <div className="flex gap-6">
                        <div className="flex-shrink-0 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-brand text-white font-bold text-lg shadow-sm group-hover:scale-110 transition-transform">
                          {idx + 1}
                        </div>
                        <div className="pb-2 flex-grow">
                          <p className="text-slate-800 leading-relaxed text-lg font-medium mb-4">
                            {step.text}
                          </p>
                          {step.tip && (
                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-xl text-base text-yellow-900 shadow-sm">
                              <strong className="flex items-center gap-2 mb-1 uppercase text-xs tracking-wider font-extrabold text-yellow-600"><Lightbulb className="w-4 h-4" /> Dica do Chef</strong>
                              {step.tip}
                            </div>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            </div>
          </div>

          {/* FULL WIDTH DEEP CONTENT - Fixes the "Hole" on the left */}
          <div className="max-w-3xl mx-auto space-y-12">
            
            {/* ANTI-FRUSTRATION / TROUBLESHOOTING */}
            {recipe.troubleshooting && (
              <section className="bg-red-50 rounded-2xl p-8 border border-red-100 shadow-sm">
                <h3 className="text-red-900 font-bold text-2xl flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-8 h-8" /> Para não dar errado (Anti-Frustração)
                </h3>
                <div className="space-y-6">
                  {recipe.troubleshooting.map((issue, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-red-100">
                      <p className="text-red-700 font-bold text-lg mb-3 flex items-start gap-2">
                        <XCircle className="w-6 h-6 shrink-0 mt-0.5" /> 
                        <span>{issue.problem}</span>
                      </p>
                      <div className="pl-8">
                        <p className="text-slate-700 text-base leading-relaxed">
                           <span className="font-bold text-green-700 block text-sm uppercase mb-1">A Solução:</span>
                           {issue.solution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* FAQ Section (Accordion) - PROMINENT AND VISIBLE */}
            {recipe.faq && recipe.faq.length > 0 && (
              <section className="bg-slate-50 rounded-3xl p-6 md:p-10 border border-slate-200">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-3 mb-2">
                    <HelpCircle className="w-8 h-8 text-brand" /> Dúvidas Frequentes
                  </h3>
                  <p className="text-slate-500">Respondemos as principais perguntas sobre esta receita</p>
                </div>
                
                <div className="space-y-4">
                  {recipe.faq.map((item, idx) => (
                    <details key={idx} className="group bg-white rounded-xl border border-slate-200 shadow-sm open:ring-2 open:ring-brand/20 open:border-brand/30 transition-all duration-300">
                      <summary className="flex items-center justify-between w-full p-5 font-bold text-lg text-slate-800 cursor-pointer list-none hover:text-brand transition-colors">
                        {item.question}
                        <div className="bg-slate-100 rounded-full p-1 group-hover:bg-brand/10 group-open:bg-brand group-open:text-white transition-colors">
                           <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                        </div>
                      </summary>
                      <div className="px-5 pb-6 pt-2">
                        <p className="text-slate-600 text-base leading-relaxed border-t border-slate-100 pt-4">
                          {item.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* SAFETY & STORAGE */}
            {recipe.foodSafety && (
              <section className="border-t border-slate-200 pt-10">
                 <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3 mb-8">
                  <ShieldCheck className="w-8 h-8 text-green-600" /> Segurança e Conservação
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                    <h4 className="font-bold text-green-900 text-lg mb-4 uppercase tracking-wide flex items-center gap-2">
                       <CheckCircle2 className="w-5 h-5" /> Higiene e Preparo
                    </h4>
                    <ul className="space-y-4">
                      {recipe.foodSafety.prep.map((tip, i) => (
                        <li key={i} className="text-base text-green-900 flex gap-3 leading-snug">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0"></span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                     <h4 className="font-bold text-blue-900 text-lg mb-4 uppercase tracking-wide flex items-center gap-2">
                        <Thermometer className="w-5 h-5" /> Armazenamento
                     </h4>
                     <p className="text-base text-blue-900 mb-4 leading-relaxed">{recipe.foodSafety.conservation}</p>
                     {recipe.storage?.freezer && (
                       <div className="bg-white/50 p-4 rounded-xl border border-blue-200">
                         <strong className="block text-xs uppercase text-blue-700 mb-1">Congelamento</strong> 
                         <p className="text-blue-900 text-sm">{recipe.storage.freezer}</p>
                       </div>
                     )}
                  </div>
                </div>
              </section>
            )}

            {/* DETAILED NUTRITION TABLE */}
            {recipe.nutrition && (
              <section className="border-t border-slate-200 pt-10 pb-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Tabela Nutricional Completa</h3>
                <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-white max-w-2xl mx-auto">
                  <table className="w-full text-base text-left">
                    <thead className="bg-slate-50 text-slate-500 font-semibold uppercase text-xs tracking-wider">
                      <tr>
                        <th className="px-6 py-4">Nutriente</th>
                        <th className="px-6 py-4 text-right">Quantidade</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr className="hover:bg-slate-50">
                        <td className="px-6 py-4 font-medium text-slate-700">Calorias</td>
                        <td className="px-6 py-4 text-right font-bold text-slate-900">{recipe.nutrition.calories}</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="px-6 py-4 font-medium text-slate-700">Carboidratos</td>
                        <td className="px-6 py-4 text-right text-slate-600">{recipe.nutrition.carbs}</td>
                      </tr>
                       <tr className="hover:bg-slate-50">
                        <td className="px-6 py-4 font-medium text-slate-700">Proteínas</td>
                        <td className="px-6 py-4 text-right text-slate-600">{recipe.nutrition.protein}</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="px-6 py-4 font-medium text-slate-700">Gorduras Totais</td>
                        <td className="px-6 py-4 text-right text-slate-600">{recipe.nutrition.fat}</td>
                      </tr>
                       <tr className="hover:bg-slate-50">
                        <td className="px-6 py-4 font-medium text-slate-700">Fibras</td>
                        <td className="px-6 py-4 text-right text-slate-600">{recipe.nutrition.fiber}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="bg-slate-50 px-6 py-3 border-t border-slate-100">
                    <p className="text-xs text-slate-400 text-center">*Valores diários de referência com base em uma dieta de 2.000kcal.</p>
                  </div>
                </div>
              </section>
            )}

          </div>
        </div>
      </div>
      
      {isWakeLockSupported && !wakeLock && (
        <div className="fixed bottom-6 right-6 md:hidden z-40 animate-bounce">
          <button 
            onClick={toggleWakeLock}
            className="bg-brand text-white p-4 rounded-full shadow-xl shadow-red-500/30 flex items-center justify-center"
            title="Modo Cozinha: Manter tela ligada"
          >
             <Smartphone className="w-6 h-6" />
          </button>
        </div>
      )}
    </article>
  );
};