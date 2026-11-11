import React, { useState } from 'react';
import { SERVICOS_SOBRANCELHAS, obterLinkWhatsApp, ServicoSobrancelha } from '../data/catalog';
import { ModalFoto } from './ModalFoto';
import { usarRevelacaoScroll } from '../hooks/useRevelacaoScroll';

/**
 * Catálogo Lookbook de Design e Recuperação de Sobrancelhas
 * Fundo claro em Alabaster / Linho Cru (#F4EFEA) para contraste editorial e destaque natural da pele.
 */
export const BrowServices: React.FC = () => {
  const [fotoModal, definirFotoModal] = useState<ServicoSobrancelha | null>(null);
  const referenciaSecao = usarRevelacaoScroll();

  return (
    <section
      id="sobrancelhas"
      ref={referenciaSecao}
      className="bg-[#F4EFEA] text-[#171411] py-24 lg:py-32 border-t border-[var(--border-hairline-dark)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Cabeçalho Editorial Alinhado à Esquerda */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-10">
          <div className="lg:col-span-7 space-y-4 revelar-scroll">
            <span className="indexador-editorial text-[#7A5E3A] block">
              02 — Design de Sobrancelhas
            </span>
            <h2 className="titulo-secao text-[#171411] pb-1">
              Arquitetura e fortalecimento facial
            </h2>
          </div>

          <div
            className="lg:col-span-5 lg:text-right revelar-scroll"
            style={{ '--atraso': '100ms' } as React.CSSProperties}
          >
            <p className="text-sm text-[#5C5449] leading-relaxed lg:ml-auto max-w-md">
              Sobrancelhas alinhadas, simétricas e com fios saudáveis. Cada desenho nasce de
              mapeamento milimétrico para valorizar sua expressão original.
            </p>
          </div>
        </div>

        <div className="h-px w-full bg-[var(--border-hairline-dark)] mb-14 linha-desenho" />

        {/* Grade Lookbook com 3 Procedimentos Sem Caixas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          {SERVICOS_SOBRANCELHAS.map((servico, indice) => {
            const precoPix = servico.preco * 0.95;
            const numeroIndice = String(indice + 1).padStart(2, '0');

            return (
              <article
                key={servico.id}
                className="group flex flex-col justify-between revelar-scroll"
                style={{ '--atraso': `${indice * 100}ms` } as React.CSSProperties}
              >
                <div>
                  {/* Fotografia Vertical 4:5 Limpa */}
                  <div className="relative imagem-cortina aspect-[4/5] bg-[#E8E1D9]">
                    <button
                      type="button"
                      onClick={() => definirFotoModal(servico)}
                      className="block w-full h-full cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#171411]"
                      aria-label={`Ampliar fotografia de ${servico.nome}`}
                    >
                      <img
                        src={servico.imagem}
                        alt={servico.nome}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />

                      <span className="absolute top-3 left-3 bg-[#171411]/85 px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase text-[#C5A880] numeral-tabular">
                        {numeroIndice}
                      </span>

                      <span className="absolute bottom-3 right-3 bg-[#F4EFEA]/90 border border-[var(--border-hairline-dark)] px-3 py-1.5 text-[10px] tracking-[0.18em] uppercase text-[#171411] group-hover:bg-[#171411] group-hover:text-[#F4EFEA] transition-colors">
                        Ampliar +
                      </span>
                    </button>
                  </div>

                  {/* Título à Esquerda + Preço à Direita */}
                  <div className="pt-5 pb-3 flex items-baseline justify-between gap-4 border-b border-[var(--border-hairline-dark)]">
                    <h3 className="font-serif text-2xl sm:text-[1.65rem] text-[#171411] leading-tight">
                      {servico.nome}
                    </h3>
                    <span className="font-serif text-2xl text-[#171411] shrink-0 numeral-tabular">
                      R$ {servico.preco.toFixed(0)}
                    </span>
                  </div>

                  {/* Subtítulo + Pix */}
                  <div className="pt-2.5 flex flex-wrap items-baseline justify-between gap-2 text-[11px] tracking-[0.14em] uppercase">
                    <span className="text-[#7A5E3A] font-medium">{servico.slogan}</span>
                    <span className="text-[#5C5449] numeral-tabular">
                      R$ {precoPix.toFixed(2).replace('.', ',')} no Pix
                    </span>
                  </div>

                  {/* Descrição */}
                  <p className="text-sm text-[#5C5449] leading-relaxed mt-3">
                    {servico.descricao}
                  </p>

                  {/* Benefícios em Lista Limpa */}
                  <ul className="mt-5 pt-4 border-t border-[var(--border-hairline-dark)] space-y-1.5 text-xs text-[#5C5449]">
                    {servico.beneficios.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#7A5E3A]" aria-hidden="true">
                          —
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ação Direta Seca */}
                <div className="mt-7 pt-4 border-t border-[var(--border-hairline-dark)]">
                  <a
                    href={obterLinkWhatsApp(servico.nome)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-editorial inline-flex items-center justify-between w-full text-xs uppercase tracking-[0.18em] font-semibold text-[#171411] hover:text-[#7A5E3A] transition-colors"
                  >
                    <span>Agendar Procedimento</span>
                    <span className="seta-diagonal text-sm" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Faixa Editorial de Combo Facial */}
        <div className="mt-20 py-8 border-y border-[var(--border-hairline-dark)] flex flex-col md:flex-row md:items-center justify-between gap-6 revelar-scroll">
          <div className="space-y-1.5 max-w-2xl">
            <span className="indexador-editorial text-[#7A5E3A] block">
              Harmonização Completa
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#171411]">
              Combine Cílios + Design de Sobrancelhas
            </h3>
            <p className="text-sm text-[#5C5449]">
              Realize os dois procedimentos no mesmo horário e finalize com a harmonia completa do olhar e 5% OFF via Pix ou espécie.
            </p>
          </div>

          <a
            href={obterLinkWhatsApp('Combo Cílios + Design')}
            target="_blank"
            rel="noopener noreferrer"
            className="botao-editorial-escuro px-7 py-4 shrink-0"
          >
            <span>Agendar Combo</span>
            <span className="seta-diagonal" aria-hidden="true">
              ↗
            </span>
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
