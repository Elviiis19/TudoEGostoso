import React from 'react';
import { Menu, ChefHat } from 'lucide-react';

interface HeaderProps {
  onLogoClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
  return (
    <header className="bg-brand text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Mobile Menu Button - Semantics: aria-label for accessibility */}
        <button 
          className="md:hidden p-2 -ml-2 hover:bg-brand-dark/20 rounded-lg transition-colors"
          aria-label="Abrir menu de navegação"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={onLogoClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onLogoClick?.()}
        >
          <ChefHat className="w-8 h-8 text-red-200" />
          <h1 className="text-xl font-bold tracking-tight">
            Tudo<span className="font-normal text-red-200">É</span>Gostoso
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <button onClick={onLogoClick} className="hover:text-red-200 transition-colors">Receitas</button>
          <a href="#" className="hover:text-red-200 transition-colors">Blog</a>
          <a href="#" className="hover:text-red-200 transition-colors">Enviar Receita</a>
        </nav>
        
        {/* Empty div to maintain spacing */}
        <div className="w-6 md:hidden"></div>
      </div>
    </header>
  );
};