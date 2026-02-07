import React from 'react';
import { Search } from 'lucide-react';

interface HeroProps {
  onSearch: (query: string) => void;
  searchValue: string;
}

export const Hero: React.FC<HeroProps> = ({ onSearch, searchValue }) => {
  return (
    <section 
      className="bg-brand-dark py-12 md:py-20 px-4 text-center relative overflow-hidden"
      aria-label="Busca de receitas"
    >
      {/* Decorative pattern opacity 10% */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')] pointer-events-none"></div>

      <div className="relative z-10 max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          O que vamos cozinhar hoje?
        </h2>
        <p className="text-red-100 text-lg mb-8">
          Receitas reais, preços reais, zero desperdício.
        </p>

        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-6 w-6 text-slate-400 group-focus-within:text-brand transition-colors" />
          </div>
          <input
            type="search"
            className="block w-full pl-12 pr-4 py-4 rounded-full border-none focus:ring-4 focus:ring-red-500/50 shadow-xl text-lg text-slate-900 placeholder:text-slate-400"
            placeholder="Busque por ingrediente (ex: ovo, batata)..."
            value={searchValue}
            onChange={(e) => onSearch(e.target.value)}
            aria-label="Campo de busca de receitas"
          />
        </div>
      </div>
    </section>
  );
};