import React from 'react';

type View = 'home' | 'recipe' | 'terms' | 'privacy' | 'about' | 'cookies' | 'contact';

interface FooterProps {
  onNavigate?: (view: View) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (view: View) => (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate?.(view);
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 text-sm mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">Sobre Nós</h3>
            <p className="mb-4">O TudoÉGostoso é seu parceiro na cozinha. Receitas rápidas, econômicas e sem desperdício.</p>
            <button onClick={handleNav('about')} className="text-brand-light hover:text-white transition-colors">Saiba mais &rarr;</button>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li><button onClick={handleNav('home')} className="hover:text-white transition-colors">Início</button></li>
              <li><button onClick={handleNav('contact')} className="hover:text-white transition-colors">Contato</button></li>
              <li><a href="#" className="hover:text-white transition-colors">Enviar Receita</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><button onClick={handleNav('terms')} className="hover:text-white transition-colors">Termos de Uso</button></li>
              <li><button onClick={handleNav('privacy')} className="hover:text-white transition-colors">Privacidade</button></li>
              <li><button onClick={handleNav('cookies')} className="hover:text-white transition-colors">Cookies</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand transition-colors" aria-label="Facebook">F</a>
              <a href="#" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand transition-colors" aria-label="Instagram">I</a>
              <a href="#" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand transition-colors" aria-label="Twitter">T</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} TudoÉGostoso. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <button onClick={handleNav('terms')} className="hover:text-white transition-colors">Termos</button>
            <button onClick={handleNav('privacy')} className="hover:text-white transition-colors">Privacidade</button>
          </div>
        </div>
      </div>
    </footer>
  );
};