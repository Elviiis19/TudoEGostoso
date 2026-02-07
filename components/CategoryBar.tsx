import React from 'react';
import { CATEGORIES } from '../constants';
import { CategoryId } from '../types';
import { Wallet, LifeBuoy, Timer, Recycle, Zap } from 'lucide-react';

interface CategoryBarProps {
  selected: CategoryId | 'all';
  onSelect: (id: CategoryId | 'all') => void;
}

// Map icon names to components
const IconMap: Record<string, React.ElementType> = {
  wallet: Wallet,
  'life-buoy': LifeBuoy,
  timer: Timer,
  recycle: Recycle,
  zap: Zap,
};

export const CategoryBar: React.FC<CategoryBarProps> = ({ selected, onSelect }) => {
  return (
    <nav 
      className="bg-brand-dark border-b border-red-900 sticky top-16 z-40 overflow-x-auto shadow-lg"
      aria-label="Menu de Utilidade"
    >
      <div className="container mx-auto px-4 py-4">
        <ul className="flex space-x-4 md:space-x-8 min-w-max md:justify-center">
          <li>
            <button
              onClick={() => onSelect('all')}
              className={`flex flex-col items-center gap-2 p-2 rounded-lg transition-all ${
                selected === 'all' 
                  ? 'text-white font-bold' 
                  : 'text-red-200 hover:text-white'
              }`}
            >
              <div className={`p-2 rounded-full border-2 transition-colors ${
                 selected === 'all' 
                   ? 'bg-white border-white text-brand-dark shadow-md' 
                   : 'bg-transparent border-red-800 text-red-300 hover:border-red-400 hover:text-white'
              }`}>
                <span className="font-bold text-lg leading-none px-1">T</span>
              </div>
              <span className="text-xs uppercase tracking-wide">Todas</span>
            </button>
          </li>
          
          {CATEGORIES.map((cat) => {
            const Icon = IconMap[cat.iconName];
            const isSelected = selected === cat.id;

            return (
              <li key={cat.id}>
                <button
                  onClick={() => onSelect(cat.id)}
                  className={`group flex flex-col items-center gap-2 p-2 rounded-lg transition-all ${
                    isSelected 
                      ? 'text-white font-bold' 
                      : 'text-red-200 hover:text-white'
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className={`p-2 rounded-full transition-colors ${
                    isSelected 
                      ? 'bg-white text-brand-dark shadow-md' 
                      : 'bg-white/5 text-red-300 group-hover:bg-white/10 group-hover:text-red-100'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-center">
                    <span className="block text-xs uppercase tracking-wide">{cat.label}</span>
                    <span className="block text-[10px] text-red-400 font-normal group-hover:text-red-300">{cat.description}</span>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};