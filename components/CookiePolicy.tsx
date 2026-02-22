import React from 'react';
import { Cookie } from 'lucide-react';

export const CookiePolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex items-center gap-3 mb-8">
        <Cookie className="w-8 h-8 text-brand" />
        <h1 className="text-3xl font-bold text-slate-900">Política de Cookies</h1>
      </div>
      
      <div className="prose prose-slate max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <p className="lead text-lg text-slate-600 mb-6">
          Esta política de cookies explica o que são cookies e como os usamos no site TudoÉGostoso. Você deve ler esta política para entender que tipo de cookies usamos, as informações que coletamos usando cookies e como essas informações são usadas.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">O que são cookies?</h3>
        <p className="mb-4 text-slate-600">
          Cookies são pequenos arquivos de texto que são armazenados no seu computador ou dispositivo móvel quando você visita um site. Eles são amplamente utilizados para fazer com que os sites funcionem, ou funcionem de forma mais eficiente, bem como para fornecer informações aos proprietários do site.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Como usamos os cookies?</h3>
        <p className="mb-4 text-slate-600">
          Usamos cookies para diversos fins, incluindo:
        </p>
        <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
          <li>
            <strong>Cookies Essenciais:</strong> Estes cookies são necessários para o funcionamento do site e não podem ser desativados em nossos sistemas. Eles geralmente são definidos apenas em resposta a ações feitas por você que correspondem a uma solicitação de serviços, como definir suas preferências de privacidade, fazer login ou preencher formulários.
          </li>
          <li>
            <strong>Cookies de Desempenho:</strong> Estes cookies nos permitem contar visitas e fontes de tráfego para que possamos medir e melhorar o desempenho do nosso site. Eles nos ajudam a saber quais páginas são as mais e menos populares e ver como os visitantes se movem pelo site.
          </li>
          <li>
            <strong>Cookies Funcionais:</strong> Estes cookies permitem que o site forneça funcionalidade e personalização aprimoradas. Eles podem ser definidos por nós ou por fornecedores terceiros cujos serviços adicionamos às nossas páginas.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Gerenciando Cookies</h3>
        <p className="mb-4 text-slate-600">
          A maioria dos navegadores da web permite que você controle cookies através das configurações do navegador. Para saber mais sobre cookies, incluindo como ver quais cookies foram definidos, visite <a href="http://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">www.aboutcookies.org</a> ou <a href="http://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">www.allaboutcookies.org</a>.
        </p>
        <p className="mb-4 text-slate-600">
          Descubra como gerenciar cookies em navegadores populares:
        </p>
        <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
          <li><a href="https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&hl=pt-BR" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">Google Chrome</a></li>
          <li><a href="https://support.microsoft.com/pt-br/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">Microsoft Edge</a></li>
          <li><a href="https://support.mozilla.org/pt-BR/kb/ative-e-desative-os-cookies-que-os-sites-usam" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">Apple Safari</a></li>
        </ul>

        <p className="text-sm text-slate-500 mt-8 pt-4 border-t border-slate-200">
          Podemos atualizar esta Política de Cookies de tempos em tempos. Por favor, reveja esta política regularmente para se manter informado sobre o uso de cookies.
        </p>
      </div>
    </div>
  );
};
