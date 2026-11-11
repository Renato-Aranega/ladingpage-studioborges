import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { DUVIDAS_FREQUENTES, obterLinkWhatsApp } from '../data/catalog';

/**
 * Seção de Dúvidas Frequentes (FAQ)
 * Responde às principais dúvidas sobre durabilidade, dor, cuidados e localização
 */
export const Faq: React.FC = () => {
  // Estado para controlar qual dúvida está expandida
  const [indiceAberto, definirIndiceAberto] = useState<number | null>(0);

  const alternarDuvida = (indice: number) => {
    definirIndiceAberto(indiceAberto === indice ? null : indice);
  };

  return (
    <section className="py-24 relative bg-[#0F0814] border-t border-[#DFB15B]/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E1229] border border-[#DFB15B]/40 text-xs font-semibold text-[#DFB15B] shadow-sm">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>DÚVIDAS FREQUENTES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#FDFCFA] tracking-tight">
            Perguntas & <span className="text-gold-gradient italic">Respostas</span>
          </h2>
          <p className="text-base text-[#D4C8DE] font-light">
            Esclareça suas principais dúvidas sobre cuidados, durabilidade e atendimento antes de agendar seu horário.
          </p>
        </div>

        {/* Lista de Acordeon de Dúvidas */}
        <div className="space-y-3">
          {DUVIDAS_FREQUENTES.map((faq, indice) => {
            const estaAberto = indiceAberto === indice;
            return (
              <div
                key={indice}
                className="rounded-xl border border-[#DFB15B]/20 bg-[#180E21] overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => alternarDuvida(indice)}
                  className="w-full py-4 px-6 flex items-center justify-between text-left hover:bg-[#231530]/50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-medium text-[#FDFCFA] pr-4">
                    {faq.pergunta}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#DFB15B] shrink-0 transition-transform duration-300 ${
                      estaAberto ? 'rotate-180 text-[#DFB15B]' : ''
                    }`}
                  />
                </button>
                {estaAberto && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#D4C8DE] leading-relaxed border-t border-[#2E1B3D]/70 font-light">
                    {faq.resposta}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Chamada para Dúvida Personalizada */}
        <div className="mt-12 text-center text-xs text-[#D4C8DE]">
          <p>Ainda tem alguma pergunta específica?</p>
          <a
            href={obterLinkWhatsApp('Dúvida sobre os procedimentos')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#DFB15B] font-bold hover:underline inline-flex items-center gap-1 mt-1"
          >
            Fale diretamente com a Amanda pelo WhatsApp &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
