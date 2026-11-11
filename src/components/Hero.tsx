import React from 'react';
import { DADOS_STUDIO, obterLinkWhatsApp } from '../data/catalog';
import { usarRevelacaoScroll } from '../hooks/useRevelacaoScroll';

/**
 * Seção Inicial (Hero) Editorial
 * Assimetria entre tipografia serifada de grande escala e fotografia macro limpa.
 */
export const Hero: React.FC = () => {
  const referenciaSecao = usarRevelacaoScroll();

  return (
    <section
      id="inicio"
      ref={referenciaSecao}
      className="relative min-h-[100dvh] bg-[#0E0C0A] text-[#F5F2EB] pt-28 md:pt-36 pb-20 lg:pb-28 flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        {/* Linha de Metadados do Topo */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 text-[11px] tracking-[0.2em] uppercase text-[#9E9689] revelar-scroll">
          <span className="text-[#C5A880]">Ateliê de Cílios &amp; Sobrancelhas</span>
          <span>Pestana, Osasco — SP</span>
        </div>
        <div className="h-px w-full bg-[var(--border-hairline)] mb-12 lg:mb-16 linha-desenho" />

        {/* Composição Editorial Assimétrica 7 / 5 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Coluna Esquerda: Título Dramático e Especificações */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-8">
              <h1
                className="display-editorial text-[#F5F2EB] pb-1 revelar-scroll"
                style={{ '--atraso': '80ms' } as React.CSSProperties}
              >
                Onde beleza, cuidado e <em className="italic font-light">elegância</em> se encontram.
              </h1>

              <p
                className="text-base sm:text-lg text-[#9E9689] max-w-[54ch] leading-relaxed font-light revelar-scroll"
                style={{ '--atraso': '180ms' } as React.CSSProperties}
              >
                Nosso studio foi desenvolvido para oferecer muito mais do que serviços estéticos:
                proporcionamos momentos de bem-estar, autoestima e transformação. Cada olhar é único,
                e nosso compromisso é entregar excelência em cada detalhe.
              </p>

              {/* Ações Principais Secas */}
              <div
                className="flex flex-wrap items-center gap-6 pt-2 revelar-scroll"
                style={{ '--atraso': '260ms' } as React.CSSProperties}
              >
                <a
                  href={obterLinkWhatsApp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="botao-editorial px-8 py-4"
                >
                  <span>Agendar Horário</span>
                  <span className="seta-diagonal" aria-hidden="true">
                    ↗
                  </span>
                </a>

                <a
                  href="#cilios"
                  className="link-editorial inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#F5F2EB] border-b border-[rgba(245,242,235,0.3)] pb-1.5 hover:border-[#C5A880] hover:text-[#C5A880] transition-colors"
                >
                  <span>Explorar Catálogo</span>
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            {/* Faixa Tipográfica de Diferenciais Sem Caixinhas */}
            <div
              className="mt-14 lg:mt-20 pt-8 border-t border-[var(--border-hairline)] grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 revelar-scroll"
              style={{ '--atraso': '340ms' } as React.CSSProperties}
            >
              <div>
                <span className="indexador-editorial text-[#C5A880] block">01</span>
                <p className="text-sm text-[#F5F2EB] mt-1.5 font-normal">Garantia de 7 dias</p>
                <p className="text-xs text-[#9E9689] mt-0.5">Retoque assistido na primeira semana</p>
              </div>
              <div className="sm:border-l sm:border-[var(--border-hairline)] sm:pl-6">
                <span className="indexador-editorial text-[#C5A880] block">02</span>
                <p className="text-sm text-[#F5F2EB] mt-1.5 font-normal">Atendimento individual</p>
                <p className="text-xs text-[#9E9689] mt-0.5">Visagismo exclusivo por horário</p>
              </div>
              <div className="sm:border-l sm:border-[var(--border-hairline)] sm:pl-6">
                <span className="indexador-editorial text-[#C5A880] block">03</span>
                <p className="text-sm text-[#F5F2EB] mt-1.5 font-normal">5% OFF à vista</p>
                <p className="text-xs text-[#9E9689] mt-0.5">Benefício via Pix ou em espécie</p>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Fotografia Macro Limpa de Alta Resolução */}
          <div
            className="lg:col-span-5 revelar-scroll"
            style={{ '--atraso': '160ms' } as React.CSSProperties}
          >
            <div className="imagem-cortina aspect-[4/5] bg-[#171411] border border-[var(--border-hairline)]">
              <img
                src="/images/studio/volume-brasileiro.jpg"
                alt="Extensão de cílios Volume Brasileiro com acabamento natural no Studio Borges"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="mt-4 pt-3 border-t border-[var(--border-hairline)] flex items-center justify-between text-[11px] tracking-[0.18em] uppercase text-[#9E9689]">
              <span>{DADOS_STUDIO.subSlogan}</span>
              <span className="text-[#C5A880] shrink-0 ml-3">{DADOS_STUDIO.fundadora}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
