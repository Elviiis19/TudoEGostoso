import React from 'react';
import { ScrollText } from 'lucide-react';

export const TermsOfUse: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex items-center gap-3 mb-8">
        <ScrollText className="w-8 h-8 text-brand" />
        <h1 className="text-3xl font-bold text-slate-900">Termos de Uso</h1>
      </div>
      
      <div className="prose prose-slate max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <p className="lead text-lg text-slate-600 mb-6">
          Bem-vindo ao TudoÉGostoso. Ao acessar e utilizar nosso portal, você concorda com os termos e condições descritos abaixo.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">1. Aceitação dos Termos</h3>
        <p className="mb-4 text-slate-600">
          Ao acessar este site, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">2. Uso de Licença</h3>
        <p className="mb-4 text-slate-600">
          É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site TudoÉGostoso, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
        </p>
        <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
          <li>Modificar ou copiar os materiais;</li>
          <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
          <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site TudoÉGostoso;</li>
          <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
          <li>Transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">3. Isenção de Responsabilidade</h3>
        <p className="mb-4 text-slate-600">
          Os materiais no site da TudoÉGostoso são fornecidos 'como estão'. TudoÉGostoso não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
        </p>
        <p className="mb-4 text-slate-600">
          Além disso, o TudoÉGostoso não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">4. Limitações</h3>
        <p className="mb-4 text-slate-600">
          Em nenhum caso o TudoÉGostoso ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em TudoÉGostoso, mesmo que TudoÉGostoso ou um representante autorizado da TudoÉGostoso tenha sido notificado oralmente ou por escrito da possibilidade de tais danos.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">5. Precisão dos Materiais</h3>
        <p className="mb-4 text-slate-600">
          Os materiais exibidos no site da TudoÉGostoso podem incluir erros técnicos, tipográficos ou fotográficos. TudoÉGostoso não garante que qualquer material em seu site seja preciso, completo ou atual. TudoÉGostoso pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, TudoÉGostoso não se compromete a atualizar os materiais.
        </p>

        <p className="text-sm text-slate-500 mt-8 pt-4 border-t border-slate-200">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </p>
      </div>
    </div>
  );
};
