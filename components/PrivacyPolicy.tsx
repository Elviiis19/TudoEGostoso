import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex items-center gap-3 mb-8">
        <ShieldCheck className="w-8 h-8 text-brand" />
        <h1 className="text-3xl font-bold text-slate-900">Política de Privacidade</h1>
      </div>
      
      <div className="prose prose-slate max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <p className="lead text-lg text-slate-600 mb-6">
          A sua privacidade é importante para nós. É política do TudoÉGostoso respeitar a sua privacidade em relação a qualquer informação que possamos coletar no site TudoÉGostoso, e outros sites que possuímos e operamos.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Coleta de Informações</h3>
        <p className="mb-4 text-slate-600">
          Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Retenção de Dados</h3>
        <p className="mb-4 text-slate-600">
          Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Compartilhamento de Dados</h3>
        <p className="mb-4 text-slate-600">
          Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Links para Sites Externos</h3>
        <p className="mb-4 text-slate-600">
          O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Consentimento</h3>
        <p className="mb-4 text-slate-600">
          Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
        </p>
        <p className="mb-4 text-slate-600">
          O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto conosco.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Compromisso do Usuário</h3>
        <p className="mb-4 text-slate-600">
          O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o TudoÉGostoso oferece no site e com caráter enunciativo, mas não limitativo:
        </p>
        <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
          <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>
          <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
          <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do TudoÉGostoso, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</li>
        </ul>

        <p className="text-sm text-slate-500 mt-8 pt-4 border-t border-slate-200">
          Esta política é efetiva a partir de {new Date().getFullYear()}.
        </p>
      </div>
    </div>
  );
};
