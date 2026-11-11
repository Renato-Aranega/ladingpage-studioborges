import React, { useState } from 'react';
import { SERVICOS_SOBRANCELHAS, ServicoSobrancelha } from '../data/catalog';
import { ModalFoto } from './ModalFoto';
import { usarRevelacaoScroll } from '../hooks/useRevelacaoScroll';

/**
 * Seção de Design e Fortalecimento de Sobrancelhas
 * Lista compacta horizontal no mobile e grade 3 colunas no desktop.
 */
export const BrowServices: React.FC = () => {
  const [fotoModal, definirFotoModal] = useState<ServicoSobrancelha | null>(null);
  const referenciaSecao = usarRevelacaoScroll();

  return (
    <section
      id="sobrancelhas"
      ref={referenciaSecao}
      className="bg-[#FAF8FC] py-14 sm:py-20 lg:py-24 border-t border-[var(--borda-suave)]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 sm:gap-4 pb-6 sm:pb-8 border-b border-[var(--borda-suave)] mb-8 sm:mb-12 revelar-scroll">
          <div>
            <span className="hidden sm:block text-xs uppercase tracking-[0.2em] text-[#6F4B9E] font-medium">
              Harmonia Facial
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#261835] sm:mt-1">
              Sobrancelhas
            </h2>
          </div>

          <p className="hidden sm:block text-sm text-[#5E4D70]">
            Possível combinar no mesmo atendimento com extensão de cílios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-x-8 sm:gap-y-12">
          {SERVICOS_SOBRANCELHAS.map((servico, indice) => {
            const precoPix = servico.preco * 0.95;

            return (
              <article
                key={servico.id}
                className="group flex flex-row md:block gap-4 items-center pb-5 md:pb-0 border-b md:border-b-0 border-[var(--borda-suave)] last:border-b-0 last:pb-0 revelar-scroll"
                style={{ '--atraso': `${indice * 60}ms` } as React.CSSProperties}
              >
                <div className="relative imagem-cortina w-24 md:w-full shrink-0 aspect-[4/5] bg-[#F1EAF8] border border-[var(--borda-suave)]">
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
                  </button>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="md:pt-4 pb-1.5 md:pb-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 md:gap-3 md:border-b md:border-[var(--borda-suave)]">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#261835] leading-snug">
                      {servico.nome}
                    </h3>
                    <div className="sm:text-right shrink-0 numeral-tabular flex items-baseline sm:block gap-2">
                      <span className="font-serif text-xl sm:text-2xl text-[#261835] sm:block leading-none">
                        R$ {servico.preco.toFixed(0)}
                      </span>
                      <span className="text-[11px] text-[#8A651D] font-medium sm:block sm:mt-1">
                        R$ {precoPix.toFixed(2).replace('.', ',')} Pix
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5E4D70] mt-1.5 md:mt-2.5 leading-relaxed line-clamp-2 md:line-clamp-none">
                    {servico.descricao}
                  </p>
                </div>
              </article>
            );
          })}
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
