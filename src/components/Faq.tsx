import React, { useState } from 'react';
import { DUVIDAS_FREQUENTES, obterLinkWhatsApp } from '../data/catalog';
import { usarRevelacaoScroll } from '../hooks/useRevelacaoScroll';

/**
 * Seção Split Sticky de Perguntas Frequentes (FAQ)
 * Coluna esquerda fixa (40%) em fundo Alabaster (#F4EFEA) + Acordeão em linhas secas à direita (60%).
 */
export const Faq: React.FC = () => {
  const [indiceAberto, definirIndiceAberto] = useState<number | null>(0);
  const referenciaSecao = usarRevelacaoScroll();

  const alternarDuvida = (indice: number) => {
    definirIndiceAberto(indiceAberto === indice ? null : indice);
  };

  return (
    <section
      id="duvidas"
      ref={referenciaSecao}
      className="bg-[#F4EFEA] text-[#171411] py-24 lg:py-32 border-t border-[var(--border-hairline-dark)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Coluna Esquerda Sticky (40% -> 5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6 revelar-scroll">
            <span className="indexador-editorial text-[#7A5E3A] block">
              07 — Perguntas Frequentes
            </span>
            <h2 className="titulo-secao text-[#171411] pb-1">
              Dúvidas e esclarecimentos
            </h2>
            <p className="text-sm text-[#5C5449] leading-relaxed max-w-md">
              Esclareça os principais pontos sobre saúde dos fios naturais, tempo de sessão,
              condições de pagamento e localização antes de agendar.
            </p>

            <div className="pt-2">
              <a
                href={obterLinkWhatsApp('Dúvida sobre os procedimentos')}
                target="_blank"
                rel="noopener noreferrer"
                className="botao-editorial-escuro px-7 py-4"
              >
                <span>Tirar Dúvida no WhatsApp</span>
                <span className="seta-diagonal" aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* Coluna Direita: Acordeão em Linhas Divisórias (60% -> 7 cols) */}
          <div
            className="lg:col-span-7 border-t border-[var(--border-hairline-dark)] revelar-scroll"
            style={{ '--atraso': '120ms' } as React.CSSProperties}
          >
            {DUVIDAS_FREQUENTES.map((faq, indice) => {
              const estaAberto = indiceAberto === indice;
              const numero = String(indice + 1).padStart(2, '0');

              return (
                <div
                  key={indice}
                  className="border-b border-[var(--border-hairline-dark)]"
                >
                  <button
                    type="button"
                    onClick={() => alternarDuvida(indice)}
                    aria-expanded={estaAberto}
                    className="w-full py-6 flex items-center justify-between gap-4 text-left group cursor-pointer"
                  >
                    <span className="flex items-baseline gap-5">
                      <span className="indexador-editorial text-[#7A5E3A] shrink-0">
                        {numero}
                      </span>
                      <span className="font-serif text-xl sm:text-2xl text-[#171411] group-hover:text-[#7A5E3A] transition-colors">
                        {faq.pergunta}
                      </span>
                    </span>

                    <span
                      className={`text-2xl font-light text-[#7A5E3A] leading-none shrink-0 transition-transform duration-300 ${
                        estaAberto ? 'rotate-45' : 'rotate-0'
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  <div className={`acordeon-conteudo ${estaAberto ? 'aberto' : ''}`}>
                    <div className="acordeon-interno">
                      <p className="pb-6 pl-9 sm:pl-11 pr-6 text-sm text-[#5C5449] leading-relaxed">
                        {faq.resposta}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
