import React from 'react';
import { DEPOIMENTOS_CLIENTES, obterLinkWhatsApp } from '../data/catalog';
import { usarRevelacaoScroll } from '../hooks/useRevelacaoScroll';

/**
 * Seção Editorial de Relatos & Prova Social
 * Elimina avatares circulares e cards repetitivos em favor de citações em fonte serifada.
 */
export const Feedbacks: React.FC = () => {
  const referenciaSecao = usarRevelacaoScroll();

  return (
    <section
      id="feedbacks"
      ref={referenciaSecao}
      className="bg-[#171411] text-[#F5F2EB] py-24 lg:py-32 border-t border-[var(--border-hairline)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Cabeçalho Alinhado à Esquerda */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-10">
          <div className="lg:col-span-7 space-y-4 revelar-scroll">
            <span className="indexador-editorial text-[#C5A880] block">
              05 — Experiências Reais
            </span>
            <h2 className="titulo-secao text-[#F5F2EB] pb-1">
              Histórias de autoestima e retenção
            </h2>
          </div>

          <div
            className="lg:col-span-5 lg:text-right revelar-scroll"
            style={{ '--atraso': '100ms' } as React.CSSProperties}
          >
            <p className="text-xs uppercase tracking-[0.18em] text-[#C5A880] numeral-tabular">
              5.0 / 5.0 Média — +120 Atendimentos em Osasco
            </p>
            <p className="text-sm text-[#9E9689] mt-2 font-light">
              A satisfação das nossas clientes reflete o cuidado em biossegurança, leveza e duração.
            </p>
          </div>
        </div>

        <div className="h-px w-full bg-[var(--border-hairline)] linha-desenho" />

        {/* Grade Editorial de Citações Sem Cartões ou Avatares */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14">
          {DEPOIMENTOS_CLIENTES.map((depoimento, indice) => (
            <blockquote
              key={depoimento.id}
              className={`py-10 border-b border-[var(--border-hairline)] flex flex-col justify-between space-y-6 revelar-scroll ${
                indice === 0 ? 'md:col-span-2 lg:py-12' : ''
              }`}
              style={{ '--atraso': `${(indice % 2) * 100}ms` } as React.CSSProperties}
            >
              <div className="space-y-3 max-w-4xl">
                <span
                  className="font-serif text-3xl text-[#C5A880] leading-none block select-none"
                  aria-hidden="true"
                >
                  “
                </span>
                <p
                  className={`font-serif text-[#F5F2EB] leading-[1.35] font-light ${
                    indice === 0 ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-[1.4rem]'
                  }`}
                >
                  {depoimento.comentario}
                </p>
              </div>

              <footer className="flex flex-wrap items-baseline justify-between gap-2 text-xs">
                <span className="text-[#F5F2EB] tracking-[0.06em]">
                  — {depoimento.nome},{' '}
                  <span className="text-[#C5A880]">{depoimento.servico}</span>
                </span>
                <span className="text-[11px] uppercase tracking-[0.16em] text-[#9E9689]">
                  {depoimento.tempo}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Chamada Final Limpa */}
        <div className="pt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6 revelar-scroll">
          <p className="text-sm text-[#9E9689] font-light">
            Pronta para vivenciar o padrão Studio Borges em Osasco?
          </p>
          <a
            href={obterLinkWhatsApp('Quero agendar minha experiência no Studio Borges')}
            target="_blank"
            rel="noopener noreferrer"
            className="botao-editorial px-8 py-4 shrink-0"
          >
            <span>Agendar Meu Horário</span>
            <span className="seta-diagonal" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
