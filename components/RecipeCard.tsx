import React from 'react';
import { Recipe } from '../types';
import { Clock, DollarSign, Star } from 'lucide-react';

interface RecipeCardProps {
  recipe: Recipe;
  onClick?: () => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onClick }) => {
  return (
    <article 
      onClick={onClick}
      className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full cursor-pointer hover:-translate-y-1"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
      aria-label={`Ver receita de ${recipe.title}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img 
          src={recipe.imageUrl} 
          alt={`Foto de ${recipe.title}`}
          loading="lazy"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          width="400"
          height="300"
        />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm flex items-center gap-1">
          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
          <span className="text-xs font-bold text-slate-800">{recipe.rating}</span>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-lg text-slate-800 mb-2 line-clamp-2 leading-tight group-hover:text-brand transition-colors">
          {recipe.title}
        </h3>
        
        <div className="mt-auto flex items-center justify-between text-sm text-slate-600 border-t border-slate-100 pt-3">
          <div className="flex items-center gap-1" title="Tempo de preparo">
            <Clock className="w-4 h-4 text-brand" />
            <span>{recipe.time} min</span>
          </div>
          
          <div className="flex items-center gap-1" title="Custo estimado">
            <DollarSign className="w-4 h-4 text-brand" />
            <span>R$ {recipe.cost.toFixed(2).replace('.', ',')}</span>
          </div>
        </div>
      </div>
    </article>
  );
};