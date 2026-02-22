import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryBar } from './components/CategoryBar';
import { RecipeGrid } from './components/RecipeGrid';
import { RecipePage } from './components/RecipePage';
import { Footer } from './components/Footer';
import { TermsOfUse } from './components/TermsOfUse';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { AboutUs } from './components/AboutUs';
import { CookiePolicy } from './components/CookiePolicy';
import { Contact } from './components/Contact';
import { SmartChef } from './components/SmartChef';
import { RECIPES } from './constants';
import { CategoryId, View } from './types';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Navigation State
  const [currentView, setCurrentView] = useState<View>('home');
  const [activeRecipeId, setActiveRecipeId] = useState<string | null>(null);

  // Derived state
  const activeRecipe = activeRecipeId ? RECIPES.find(r => r.id === activeRecipeId) : null;

  // Filter logic for utility and speed
  const filteredRecipes = RECIPES.filter((recipe) => {
    const matchesCategory = selectedCategory === 'all' || recipe.categoryIds.includes(selectedCategory);
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          recipe.ingredients.some(ing => ing.item.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleOpenRecipe = (recipeId: string) => {
    setActiveRecipeId(recipeId);
    setCurrentView('recipe');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setActiveRecipeId(null);
    setCurrentView('home');
    window.scrollTo(0, 0);
  };

  const handleNavigate = (view: View) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  // View Router
  const renderContent = () => {
    switch (currentView) {
      case 'recipe':
        if (activeRecipe) {
          return <RecipePage recipe={activeRecipe} onBack={handleBackToHome} />;
        }
        // Fallback if recipe not found, render Home
        return (
          <main id="main-content" className="flex-grow">
            <Hero 
              onSearch={setSearchQuery} 
              searchValue={searchQuery}
            />
            
            <CategoryBar 
              selected={selectedCategory} 
              onSelect={setSelectedCategory} 
            />

            <section 
              className="container mx-auto px-4 py-8 max-w-6xl"
              aria-label="Lista de Receitas"
            >
              <div className="flex justify-between items-baseline mb-6">
                <h2 className="text-2xl font-bold text-brand-dark">
                  {selectedCategory === 'all' ? 'Destaques do Dia' : 'Receitas Selecionadas'}
                </h2>
                <span className="text-sm text-slate-500 font-medium">
                  {filteredRecipes.length} receitas encontradas
                </span>
              </div>

              <RecipeGrid 
                recipes={filteredRecipes} 
                onRecipeClick={handleOpenRecipe} 
              />
            </section>
          </main>
        );
      case 'smart-chef':
        return <SmartChef />;
      case 'terms':
        return <TermsOfUse />;
      case 'privacy':
        return <PrivacyPolicy />;
      case 'about':
        return <AboutUs />;
      case 'cookies':
        return <CookiePolicy />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return (
          <main id="main-content" className="flex-grow">
            <Hero 
              onSearch={setSearchQuery} 
              searchValue={searchQuery}
            />
            
            <CategoryBar 
              selected={selectedCategory} 
              onSelect={setSelectedCategory} 
            />

            <section 
              className="container mx-auto px-4 py-8 max-w-6xl"
              aria-label="Lista de Receitas"
            >
              <div className="flex justify-between items-baseline mb-6">
                <h2 className="text-2xl font-bold text-brand-dark">
                  {selectedCategory === 'all' ? 'Destaques do Dia' : 'Receitas Selecionadas'}
                </h2>
                <span className="text-sm text-slate-500 font-medium">
                  {filteredRecipes.length} receitas encontradas
                </span>
              </div>

              <RecipeGrid 
                recipes={filteredRecipes} 
                onRecipeClick={handleOpenRecipe} 
              />
            </section>
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-ice">
      {/* Skip to content for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-brand focus:text-white top-0 left-0"
      >
        Pular para o conteúdo principal
      </a>

      <Header onLogoClick={() => handleNavigate('home')} onNavigate={handleNavigate} />
      
      {renderContent()}

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}