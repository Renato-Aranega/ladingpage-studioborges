import React, { useState } from 'react';
import { POLITICAS, obterLinkWhatsApp } from '../data/catalog';
import { usarRevelacaoScroll } from '../hooks/useRevelacaoScroll';

/**
 * Seção Split Sticky de Políticas & Orientações de Atendimento
 * Coluna esquerda fixa (40%) com título e cuidados essenciais;
 * Coluna direita (60%) com acordeão minimalista em linhas horizontais e símbolo + rotativo.
 */
export const Policies: React.FC = () => {
  const [indiceAberto, definirIndiceAberto] = useState<number | null>(0);
  const referenciaSecao = usarRevelacaoScroll();

  const alternarAcordeon = (indice: number) => {
    definirIndiceAberto(indiceAberto === indice ? null : indice);
  };

  const cuidadosAntes = [
    'Venha com os olhos 100% limpos, sem rímel, delineador ou cosméticos oleosos.',
    'Informe previamente sobre sensibilidades oculares, alergias ou uso de colírios específicos.',
    'Evite consumir excesso de cafeína imediatamente antes para relaxar completamente na maca.',
  ];

  const cuidadosDepois = [
    'Evite vapores intensos (sauna, banho excessivamente quente) nas primeiras 24 horas.',
    'Higienize os cílios diariamente com espuma própria para evitar acúmulo de oleosidade.',
    'Escove delicadamente os fios secos com a escovinha exclusiva entregue ao final da sessão.',
  ];

  return (
    <section
      id="politicas"
      ref={referenciaSecao}
      className="bg-[#0E0C0A] text-[#F5F2EB] py-24 lg:py-32 border-t border-[var(--border-hairline)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Coluna Esquerda Sticky (40% -> 5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8 revelar-scroll">
            <div className="space-y-4">
              <span className="indexador-editorial text-[#C5A880] block">
                06 — Políticas &amp; Preparo
              </span>
              <h2 className="titulo-secao text-[#F5F2EB] pb-1">
                Orientações de atendimento
              </h2>
              <p className="text-sm text-[#9E9689] leading-relaxed font-light max-w-md">
                Seu momento de autocuidado começa antes da chegada. Nossas diretrizes garantem que
                cada cliente receba atenção exclusiva, sem atrasos e com máxima durabilidade.
              </p>
            </div>

            {/* Cuidados Pré e Pós em Lista Tipográfica Limpa */}
            <div className="space-y-6 pt-4 border-t border-[var(--border-hairline)]">
              <div className="space-y-2.5">
                <span className="indexador-editorial text-[#C5A880] block">
                  Antes da Sessão
                </span>
                <ul className="space-y-2 text-xs text-[#9E9689] leading-relaxed">
                  {cuidadosAntes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#C5A880]" aria-hidden="true">
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-[var(--border-hairline)]">
                <span className="indexador-editorial text-[#C5A880] block">
                  Cuidados Pós-Procedimento
                </span>
                <ul className="space-y-2 text-xs text-[#9E9689] leading-relaxed">
                  {cuidadosDepois.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#C5A880]" aria-hidden="true">
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={obterLinkWhatsApp('Agendamento e Políticas do Studio')}
                target="_blank"
                rel="noopener noreferrer"
                className="botao-editorial px-7 py-4"
              >
                <span>Reservar Horário</span>
                <span className="seta-diagonal" aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* Coluna Direita: Acordeão Sem Caixas (60% -> 7 cols) */}
          <div
            className="lg:col-span-7 border-t border-[var(--border-hairline)] revelar-scroll"
            style={{ '--atraso': '120ms' } as React.CSSProperties}
          >
            {POLITICAS.map((politica, indice) => {
              const estaAberto = indiceAberto === indice;
              const numero = String(indice + 1).padStart(2, '0');

              return (
                <div
                  key={indice}
                  className="border-b border-[var(--border-hairline)]"
                >
                  <button
                    type="button"
                    onClick={() => alternarAcordeon(indice)}
                    aria-expanded={estaAberto}
                    className="w-full py-6 flex items-center justify-between gap-4 text-left group cursor-pointer"
                  >
                    <span className="flex items-baseline gap-5">
                      <span className="indexador-editorial text-[#C5A880] shrink-0">
                        {numero}
                      </span>
                      <span className="font-serif text-xl sm:text-2xl text-[#F5F2EB] group-hover:text-[#C5A880] transition-colors">
                        {politica.titulo}
                      </span>
                    </span>

                    <span
                      className={`text-2xl font-light text-[#C5A880] leading-none shrink-0 transition-transform duration-300 ${
                        estaAberto ? 'rotate-45' : 'rotate-0'
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  <div className={`acordeon-conteudo ${estaAberto ? 'aberto' : ''}`}>
                    <div className="acordeon-interno">
                      <p className="pb-6 pl-9 sm:pl-11 pr-6 text-sm text-[#9E9689] leading-relaxed font-light">
                        {politica.descricao}
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
