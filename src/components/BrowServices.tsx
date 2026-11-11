import React, { useState } from 'react';
import { SERVICOS_SOBRANCELHAS, ServicoSobrancelha } from '../data/catalog';
import { ModalFoto } from './ModalFoto';
import { usarRevelacaoScroll } from '../hooks/useRevelacaoScroll';

/**
 * Seção de Design e Fortalecimento de Sobrancelhas
 * Visual claro, limpo e direto ao ponto.
 */
export const BrowServices: React.FC = () => {
  const [fotoModal, definirFotoModal] = useState<ServicoSobrancelha | null>(null);
  const referenciaSecao = usarRevelacaoScroll();

  return (
    <section
      id="sobrancelhas"
      ref={referenciaSecao}
      className="bg-[#FAF8FC] py-20 lg:py-24 border-t border-[var(--borda-suave)]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[var(--borda-suave)] mb-12 revelar-scroll">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#6F4B9E] font-medium block">
              Harmonia Facial
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#261835] mt-1">
              Sobrancelhas
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#5E4D70]">
            Possível combinar no mesmo atendimento com extensão de cílios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {SERVICOS_SOBRANCELHAS.map((servico, indice) => {
            const precoPix = servico.preco * 0.95;

            return (
              <article
                key={servico.id}
                className="group revelar-scroll"
                style={{ '--atraso': `${indice * 80}ms` } as React.CSSProperties}
              >
                <div className="relative imagem-cortina aspect-[4/5] bg-[#F1EAF8] border border-[var(--borda-suave)]">
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

                <div className="pt-4 pb-2 flex items-baseline justify-between gap-3 border-b border-[var(--borda-suave)]">
                  <h3 className="font-serif text-2xl text-[#261835] leading-tight">
                    {servico.nome}
                  </h3>
                  <div className="text-right shrink-0 numeral-tabular">
                    <span className="font-serif text-2xl text-[#261835] block leading-none">
                      R$ {servico.preco.toFixed(0)}
                    </span>
                    <span className="text-[11px] text-[#8A651D] font-medium block mt-1">
                      R$ {precoPix.toFixed(2).replace('.', ',')} no Pix
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#5E4D70] mt-2.5 leading-relaxed">
                  {servico.descricao}
                </p>
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
