import React from 'react';
import { DADOS_STUDIO } from '../data/catalog';
import { usarRevelacaoScroll } from '../hooks/useRevelacaoScroll';

/**
 * Seção de Localização em Osasco com Perfil Oficial no Google
 */
export const LocationSection: React.FC = () => {
  const referenciaSecao = usarRevelacaoScroll();

  return (
    <section
      id="localizacao"
      ref={referenciaSecao}
      className="bg-[#F1EAF8] py-14 sm:py-20 lg:py-24 border-t border-[var(--borda-suave)]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
          {/* Endereço e Informações */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6 revelar-scroll">
            <div>
              <span className="hidden sm:block text-xs uppercase tracking-[0.2em] text-[#6F4B9E] font-medium">
                Localização
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#261835] sm:mt-1">
                Como chegar
              </h2>
            </div>

            <div className="space-y-4 text-sm text-[#5E4D70]">
              <div>
                <p className="font-medium text-[#261835]">{DADOS_STUDIO.endereco}</p>
                <p className="text-xs mt-1">Rua tranquila e com fácil estacionamento na porta.</p>
              </div>

              <div className="pt-3 border-t border-[var(--borda-suave)] text-xs space-y-1">
                <p className="font-medium text-[#261835]">Horário de Atendimento</p>
                <p>{DADOS_STUDIO.horarioFuncionamento}</p>
              </div>

              <div className="pt-3 border-t border-[var(--borda-suave)] flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-[#6F4B9E]">
                <a
                  href={DADOS_STUDIO.urlInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#261835] transition-colors"
                >
                  {DADOS_STUDIO.instagram}
                </a>
                <a
                  href={DADOS_STUDIO.urlMapaBusca}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#261835] transition-colors"
                >
                  Avaliações no Google
                </a>
                <span className="numeral-tabular text-[#5E4D70]">{DADOS_STUDIO.telefone}</span>
              </div>
            </div>

            <a
              href={DADOS_STUDIO.urlMapaBusca}
              target="_blank"
              rel="noopener noreferrer"
              className="botao-dourado w-full sm:w-auto px-7 py-3.5"
            >
              Abrir no Google Maps
            </a>
          </div>

          {/* Mapa Google Maps Claro */}
          <div
            className="lg:col-span-7 rounded-xl overflow-hidden border border-[var(--borda-suave)] bg-white revelar-scroll"
            style={{ '--atraso': '100ms' } as React.CSSProperties}
          >
            <iframe
              title="Localização Studio Borges em Osasco"
              src="https://maps.google.com/maps?q=Rua+Ulisses+Soares,+12+-+Pestana,+Osasco+-+SP&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-56 sm:h-[360px] border-0 saturate-[0.85]"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
