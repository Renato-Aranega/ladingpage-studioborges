import React, { useState } from 'react';
import { SERVICOS_CILIOS, obterLinkWhatsApp, ServicoCilios } from '../data/catalog';
import { ModalFoto } from './ModalFoto';
import { usarRevelacaoScroll } from '../hooks/useRevelacaoScroll';

/**
 * Catálogo Enxuto de Extensões de Cílios
 * Grade de 2 colunas no mobile para leitura rápida e fotos limpas sem poluição.
 */
export const LashCatalog: React.FC = () => {
  const [fotoModal, definirFotoModal] = useState<ServicoCilios | null>(null);
  const referenciaSecao = usarRevelacaoScroll();

  return (
    <section
      id="cilios"
      ref={referenciaSecao}
      className="bg-[#F1EAF8] py-14 sm:py-20 lg:py-24 border-t border-[var(--borda-suave)]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Cabeçalho Limpo */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 sm:gap-4 pb-6 sm:pb-8 border-b border-[var(--borda-suave)] mb-8 sm:mb-12 revelar-scroll">
          <div>
            <span className="hidden sm:block text-xs uppercase tracking-[0.2em] text-[#6F4B9E] font-medium">
              Catálogo
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#261835] sm:mt-1">
              Extensões de Cílios
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#5E4D70]">
            5% OFF no Pix ou dinheiro
          </p>
        </div>

        {/* Grade 2 colunas no mobile / 3 colunas no desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3.5 gap-y-7 sm:gap-x-8 sm:gap-y-12">
          {SERVICOS_CILIOS.map((servico, indice) => {
            const precoPix = servico.preco * 0.95;

            return (
              <article
                key={servico.id}
                className="group revelar-scroll"
                style={{ '--atraso': `${(indice % 3) * 60}ms` } as React.CSSProperties}
              >
                <div className="relative imagem-cortina aspect-[4/5] bg-white border border-[var(--borda-suave)]">
                  <button
                    type="button"
                    onClick={() => definirFotoModal(servico)}
                    className="block w-full h-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9B76C9]"
                    aria-label={`Ampliar foto de ${servico.nome}`}
                  >
                    <img
                      src={servico.imagem}
                      alt={servico.nome}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                    {servico.destaque && (
                      <span className="hidden sm:inline-block absolute top-3 left-3 bg-[#FAF8FC]/92 text-[#6F4B9E] px-2.5 py-1 rounded text-[10px] uppercase tracking-[0.14em] font-semibold">
                        {servico.destaque}
                      </span>
                    )}
                  </button>
                </div>

                {/* Título e Preço */}
                <div className="pt-2.5 sm:pt-4 pb-1.5 sm:pb-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-3 border-b border-[var(--borda-suave)]">
                  <h3 className="font-serif text-lg sm:text-2xl text-[#261835] leading-snug">
                    {servico.nome}
                  </h3>
                  <div className="sm:text-right shrink-0 numeral-tabular flex items-baseline sm:block gap-2">
                    <span className="font-serif text-lg sm:text-2xl text-[#261835] sm:block leading-none">
                      R$ {servico.preco.toFixed(0)}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-[#8A651D] font-medium sm:block sm:mt-1">
                      R$ {precoPix.toFixed(2).replace('.', ',')} Pix
                    </span>
                  </div>
                </div>

                <p className="hidden sm:block text-sm text-[#5E4D70] mt-2.5 leading-relaxed">
                  {servico.descricao}
                </p>
              </article>
            );
          })}
        </div>

        {/* Botão Único ao Final */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-[var(--borda-suave)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="hidden sm:block text-sm text-[#5E4D70]">
            Dúvida na escolha? Definimos a técnica ideal na avaliação inicial gratuita.
          </p>
          <a
            href={obterLinkWhatsApp('Agendar Extensão de Cílios')}
            target="_blank"
            rel="noopener noreferrer"
            className="botao-dourado w-full sm:w-auto px-7 py-3.5 shrink-0"
          >
            Agendar Cílios no WhatsApp
          </a>
        </div>
      </div>

      {fotoModal && (
        <ModalFoto
          aberto={!!fotoModal}
          aoFechar={() => definirFotoModal(null)}
          imagemUrl={fotoModal.imagem}
          titulo={fotoModal.nome}
          descricao={fotoModal.descricao}
          preco={fotoModal.preco}
        />
      )}
    </section>
  );
};
