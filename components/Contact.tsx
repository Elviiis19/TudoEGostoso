import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Entre em Contato</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Tem alguma dúvida, sugestão ou quer compartilhar uma receita? Adoraríamos ouvir você!
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="bg-brand-ice p-3 rounded-full">
                <Mail className="w-6 h-6 text-brand" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 mb-1">Email</h3>
                <p className="text-slate-600 text-sm">contato@tudoegostoso.com.br</p>
                <p className="text-slate-600 text-sm">suporte@tudoegostoso.com.br</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="bg-brand-ice p-3 rounded-full">
                <Phone className="w-6 h-6 text-brand" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 mb-1">Telefone</h3>
                <p className="text-slate-600 text-sm">+55 (11) 99999-9999</p>
                <p className="text-slate-500 text-xs mt-1">Seg-Sex, 9h às 18h</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="bg-brand-ice p-3 rounded-full">
                <MapPin className="w-6 h-6 text-brand" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 mb-1">Escritório</h3>
                <p className="text-slate-600 text-sm">
                  Av. Paulista, 1000<br />
                  Bela Vista, São Paulo - SP<br />
                  CEP: 01310-100
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Envie uma mensagem</h2>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Mensagem enviada com sucesso! Entraremos em contato em breve.
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Assunto</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all bg-white"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="duvida">Dúvida sobre receita</option>
                  <option value="sugestao">Sugestão</option>
                  <option value="parceria">Parceria</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all resize-none"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
