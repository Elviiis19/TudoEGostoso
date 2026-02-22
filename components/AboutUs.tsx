import React from 'react';
import { Users, Leaf, TrendingUp, Heart } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Sobre o TudoÉGostoso</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Transformando a maneira como você cozinha: rápido, econômico e sem desperdício.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Nossa Missão</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Nascemos da necessidade de simplificar a cozinha do dia a dia. Acreditamos que cozinhar não precisa ser complicado, caro ou demorado. Nossa missão é democratizar o acesso a receitas de qualidade, focando na economia real e no aproveitamento total dos alimentos.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Em um mundo onde o tempo é escasso e o desperdício é um problema global, o TudoÉGostoso se posiciona como seu parceiro na cozinha inteligente.
          </p>
        </div>
        <div className="bg-brand-ice rounded-2xl p-8 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Leaf className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <span className="font-semibold text-slate-700">Zero Desperdício</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <span className="font-semibold text-slate-700">Economia Real</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Heart className="w-8 h-8 text-brand mx-auto mb-2" />
              <span className="font-semibold text-slate-700">Sabor Caseiro</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Users className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <span className="font-semibold text-slate-700">Comunidade</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Nossos Valores</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg text-brand mb-2">Praticidade</h3>
            <p className="text-slate-600 text-sm">
              Receitas testadas para funcionarem na vida real, com ingredientes que você encontra no mercadinho da esquina.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-brand mb-2">Sustentabilidade</h3>
            <p className="text-slate-600 text-sm">
              Incentivamos o uso integral dos alimentos, cascas, talos e sementes. Nada se perde, tudo se transforma.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-brand mb-2">Transparência</h3>
            <p className="text-slate-600 text-sm">
              Informações nutricionais claras e custos estimados reais para ajudar no seu planejamento financeiro.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Junte-se a Nós</h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-8">
          Estamos construindo a maior comunidade de culinária consciente do Brasil. Siga-nos nas redes sociais e compartilhe suas criações.
        </p>
      </div>
    </div>
  );
};
