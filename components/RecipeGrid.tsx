import React from 'react';
import { Recipe } from '../types';
import { RecipeCard } from './RecipeCard';

interface RecipeGridProps {
  recipes: Recipe[];
  onRecipeClick: (id: string) => void;
}

export const RecipeGrid: React.FC<RecipeGridProps> = ({ recipes, onRecipeClick }) => {
  if (recipes.length === 0) {
    return (
      <div className="text-center py-20 bg-slate-50 rounded-lg border-2 border-dashed border-slate-200">
        <p className="text-slate-500 text-lg">Nenhuma receita encontrada para sua busca.</p>
        <button 
          className="mt-4 text-brand font-medium hover:underline"
          onClick={() => window.location.reload()}
        >
          Limpar filtros
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {recipes.map((recipe) => (
        <RecipeCard 
          key={recipe.id} 
          recipe={recipe} 
          onClick={() => onRecipeClick(recipe.id)}
        />
      ))}
    </div>
  );
};