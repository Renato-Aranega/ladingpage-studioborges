import React from 'react';
import { DADOS_STUDIO, obterLinkWhatsApp } from '../data/catalog';
import { usarRevelacaoScroll } from '../hooks/useRevelacaoScroll';

/**
 * Seção de Localização e Acesso
 * Numerais tipográficos, linhas secas e filtro editorial escuro aplicado ao mapa.
 */
export const LocationSection: React.FC = () => {
  const referenciaSecao = usarRevelacaoScroll();

  return (
    <section
      id="localizacao"
      ref={referenciaSecao}
      className="bg-[#0E0C0A] text-[#F5F2EB] py-24 lg:py-32 border-t border-[var(--border-hairline)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Cabeçalho Alinhado à Esquerda */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-10">
          <div className="lg:col-span-7 space-y-4 revelar-scroll">
            <span className="indexador-editorial text-[#C5A880] block">
              08 — Localização &amp; Acesso
            </span>
            <h2 className="titulo-secao text-[#F5F2EB] pb-1">
              Fácil acesso em Osasco
            </h2>
          </div>

          <div
            className="lg:col-span-5 lg:text-right revelar-scroll"
            style={{ '--atraso': '100ms' } as React.CSSProperties}
          >
            <p className="text-sm text-[#9E9689] leading-relaxed lg:ml-auto max-w-md font-light">
              Nosso espaço foi escolhido para oferecer privacidade, tranquilidade e facilidade para
              estacionar seu veículo.
            </p>
          </div>
        </div>

        <div className="h-px w-full bg-[var(--border-hairline)] mb-12 linha-desenho" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Coluna da Esquerda: Especificações de Endereço Sem Ícones em Caixas */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 revelar-scroll">
            <div className="divide-y divide-[var(--border-hairline)] border-b border-[var(--border-hairline)]">
              {/* 01 - Endereço */}
              <div className="pb-6 space-y-1.5">
                <span className="indexador-editorial text-[#C5A880] block">
                  01 — Endereço Oficial
                </span>
                <p className="font-serif text-2xl text-[#F5F2EB] leading-snug pt-1">
                  {DADOS_STUDIO.endereco}
                </p>
                <p className="text-xs text-[#9E9689]">Bairro Pestana • Osasco — SP</p>
              </div>

              {/* 02 - Estacionamento */}
              <div className="py-6 space-y-1.5">
                <span className="indexador-editorial text-[#C5A880] block">
                  02 — Estacionamento
                </span>
                <p className="text-sm text-[#F5F2EB]">Fácil de Estacionar</p>
                <p className="text-xs text-[#9E9689] leading-relaxed">
                  Rua calma e segura, com facilidade para estacionar em frente e nas proximidades do estúdio.
                </p>
              </div>

              {/* 03 - Horário */}
              <div className="py-6 space-y-1.5">
                <span className="indexador-editorial text-[#C5A880] block">
                  03 — Horário de Atendimento
                </span>
                <p className="text-sm text-[#F5F2EB]">{DADOS_STUDIO.horarioFuncionamento}</p>
              </div>

              {/* Canais Diretos */}
              <div className="py-6 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.16em]">
                <a
                  href={DADOS_STUDIO.urlInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-editorial text-[#F5F2EB] hover:text-[#C5A880] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{DADOS_STUDIO.instagram}</span>
                  <span className="seta-diagonal text-[#C5A880]">↗</span>
                </a>

                <a
                  href={obterLinkWhatsApp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-editorial text-[#F5F2EB] hover:text-[#C5A880] transition-colors inline-flex items-center gap-1.5 numeral-tabular"
                >
                  <span>{DADOS_STUDIO.telefone}</span>
                  <span className="seta-diagonal text-[#C5A880]">↗</span>
                </a>
              </div>
            </div>

            <a
              href={DADOS_STUDIO.urlMapaBusca}
              target="_blank"
              rel="noopener noreferrer"
              className="botao-editorial w-full py-4"
            >
              <span>Traçar Rota no Google Maps</span>
              <span className="seta-diagonal" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>

          {/* Coluna da Direita: Mapa Google Maps com Filtro Dark Editorial */}
          <div
            className="lg:col-span-7 relative rounded-[4px] overflow-hidden border border-[var(--border-hairline)] min-h-[380px] bg-[#171411] revelar-scroll"
            style={{ '--atraso': '140ms' } as React.CSSProperties}
          >
            <iframe
              title="Localização Studio Borges Amanda Borges em Osasco"
              src="https://maps.google.com/maps?q=Rua+Ulisses+Soares,+12+-+Pestana,+Osasco+-+SP&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[420px] border-0 mapa-editorial"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="absolute top-4 left-4 bg-[#0E0C0A]/92 border border-[var(--border-hairline)] px-4 py-3 rounded-[2px] max-w-xs">
              <p className="font-serif text-base text-[#F5F2EB] leading-tight">
                Studio Borges • Amanda Borges
              </p>
              <p className="text-[11px] text-[#9E9689] mt-1">
                Rua Ulisses Soares, 12 — Pestana, Osasco - SP
              </p>
              <p className="text-[10px] uppercase tracking-[0.16em] text-[#C5A880] mt-1.5">
                Fácil Acesso • Vaga na Rua
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
