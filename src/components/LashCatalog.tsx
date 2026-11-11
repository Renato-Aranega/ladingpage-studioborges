import React, { useState } from 'react';
import { SERVICOS_CILIOS, obterLinkWhatsApp, ServicoCilios } from '../data/catalog';
import { ModalFoto } from './ModalFoto';
import { usarRevelacaoScroll } from '../hooks/useRevelacaoScroll';

/**
 * Catálogo Lookbook de Extensões de Cílios
 * Layout editorial aberto com fotografias 4:5 (4px), título e preço alinhados
 * por linha seca de 1px e ação direta minimalista.
 */
export const LashCatalog: React.FC = () => {
  const [filtroAtivo, definirFiltroAtivo] = useState<'todos' | 'naturais' | 'volume' | 'tendencia'>('todos');
  const [fotoModal, definirFotoModal] = useState<ServicoCilios | null>(null);

  const referenciaSecao = usarRevelacaoScroll(filtroAtivo);

  const filtros: { id: 'todos' | 'naturais' | 'volume' | 'tendencia'; rotulo: string }[] = [
    { id: 'todos', rotulo: `Todos (${SERVICOS_CILIOS.length})` },
    { id: 'naturais', rotulo: 'Naturais & Elegantes' },
    { id: 'volume', rotulo: 'Densidade & Volume' },
    { id: 'tendencia', rotulo: 'Lifting & Power' },
  ];

  const servicosFiltrados = SERVICOS_CILIOS.filter((servico) => {
    if (filtroAtivo === 'todos') return true;
    if (filtroAtivo === 'naturais') return ['volume-brasileiro', 'volume-egipcio'].includes(servico.id);
    if (filtroAtivo === 'volume') return ['volume-hibrido', 'volume-russo'].includes(servico.id);
    if (filtroAtivo === 'tendencia') return ['fox-eyes', 'volume-power'].includes(servico.id);
    return true;
  });

  return (
    <section
      id="cilios"
      ref={referenciaSecao}
      className="bg-[#0E0C0A] text-[#F5F2EB] py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Cabeçalho Editorial Alinhado à Esquerda */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-10">
          <div className="lg:col-span-7 space-y-4 revelar-scroll">
            <span className="indexador-editorial text-[#C5A880] block">
              01 — Extensão de Cílios
            </span>
            <h2 className="titulo-secao text-[#F5F2EB] pb-1">
              Técnicas autorais de alongamento
            </h2>
          </div>

          <div
            className="lg:col-span-5 lg:text-right revelar-scroll"
            style={{ '--atraso': '100ms' } as React.CSSProperties}
          >
            <p className="text-sm text-[#9E9689] leading-relaxed lg:ml-auto max-w-md font-light">
              Cada curvatura, espessura e mapeamento é definido mediante visagismo ocular no início
              do atendimento. Toque na fotografia para ampliar os fios em alta definição.
            </p>
          </div>
        </div>

        {/* Barra de Filtros Minimalista */}
        <div className="border-y border-[var(--border-hairline)] py-4 mb-14 flex items-center gap-6 overflow-x-auto">
          {filtros.map((filtro) => {
            const ativo = filtroAtivo === filtro.id;
            return (
              <button
                key={filtro.id}
                type="button"
                onClick={() => definirFiltroAtivo(filtro.id)}
                className={`relative py-1.5 text-[11px] uppercase tracking-[0.18em] whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  ativo ? 'text-[#F5F2EB] font-medium' : 'text-[#9E9689] hover:text-[#F5F2EB]'
                }`}
              >
                {filtro.rotulo}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-px bg-[#C5A880] origin-left transition-transform duration-300 ${
                    ativo ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Grade Lookbook Editorial Sem Caixas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {servicosFiltrados.map((servico, indice) => {
            const precoPix = servico.preco * 0.95;
            const numeroIndice = String(indice + 1).padStart(2, '0');

            return (
              <article
                key={servico.id}
                className="group flex flex-col justify-between revelar-scroll"
                style={{ '--atraso': `${(indice % 3) * 100}ms` } as React.CSSProperties}
              >
                <div>
                  {/* Fotografia Vertical 4:5 com Abertura em Cortina */}
                  <div className="relative imagem-cortina aspect-[4/5] bg-[#171411]">
                    <button
                      type="button"
                      onClick={() => definirFotoModal(servico)}
                      className="block w-full h-full cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5A880]"
                      aria-label={`Ampliar fotografia de ${servico.nome}`}
                    >
                      <img
                        src={servico.imagem}
                        alt={servico.nome}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />

                      {/* Índice discreto no canto superior esquerdo */}
                      <span className="absolute top-3 left-3 bg-[#0E0C0A]/85 px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase text-[#C5A880] numeral-tabular">
                        {numeroIndice}
                        {servico.destaque ? ` — ${servico.destaque}` : ''}
                      </span>

                      {/* Rótulo minimalista para ampliar */}
                      <span className="absolute bottom-3 right-3 bg-[#0E0C0A]/85 border border-[var(--border-hairline)] px-3 py-1.5 text-[10px] tracking-[0.18em] uppercase text-[#F5F2EB] group-hover:border-[#C5A880] group-hover:text-[#C5A880] transition-colors">
                        Ampliar +
                      </span>
                    </button>
                  </div>

                  {/* Título à Esquerda + Preço à Direita na Mesma Linha */}
                  <div className="pt-5 pb-3 flex items-baseline justify-between gap-4 border-b border-[var(--border-hairline)]">
                    <h3 className="font-serif text-2xl sm:text-[1.75rem] text-[#F5F2EB] leading-tight">
                      {servico.nome}
                    </h3>
                    <span className="font-serif text-2xl text-[#F5F2EB] shrink-0 numeral-tabular">
                      R$ {servico.preco.toFixed(0)}
                    </span>
                  </div>

                  {/* Slogan + Preço no Pix */}
                  <div className="pt-2.5 flex flex-wrap items-baseline justify-between gap-2 text-[11px] tracking-[0.14em] uppercase">
                    <span className="text-[#C5A880]">{servico.slogan}</span>
                    <span className="text-[#9E9689] numeral-tabular">
                      R$ {precoPix.toFixed(2).replace('.', ',')} no Pix
                    </span>
                  </div>

                  {/* Descrição Editorial */}
                  <p className="text-sm text-[#9E9689] leading-relaxed font-light mt-3">
                    {servico.descricao}
                  </p>

                  {/* Especificações Secas Separadas por Traço */}
                  <ul className="mt-5 pt-4 border-t border-[var(--border-hairline)] space-y-1.5 text-xs text-[#9E9689]">
                    {servico.diferenciais.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#C5A880]" aria-hidden="true">
                          —
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ação Direta Seca Alinhada na Base */}
                <div className="mt-7 pt-4 border-t border-[var(--border-hairline)]">
                  <a
                    href={obterLinkWhatsApp(servico.nome)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-editorial inline-flex items-center justify-between w-full text-xs uppercase tracking-[0.18em] font-medium text-[#F5F2EB] hover:text-[#C5A880] transition-colors"
                  >
                    <span>Agendar Procedimento</span>
                    <span className="seta-diagonal text-sm text-[#C5A880]" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Nota Editorial Discreta */}
        <div className="mt-20 pt-8 border-t border-[var(--border-hairline)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#9E9689]">
          <p>
            <strong className="uppercase tracking-[0.18em] text-[#C5A880] font-medium mr-2">
              Consultoria em Visagismo —
            </strong>
            Dúvida na escolha do volume? Realizamos avaliação personalizada gratuita no início do seu atendimento.
          </p>
          <a
            href={obterLinkWhatsApp('Avaliação de Técnica Ideal')}
            target="_blank"
            rel="noopener noreferrer"
            className="link-editorial shrink-0 uppercase tracking-[0.16em] text-[#F5F2EB] hover:text-[#C5A880] transition-colors"
          >
            Consultar Horários <span className="seta-diagonal">↗</span>
          </a>
        </div>
      </div>

      {/* Modal de Foto Ampliada */}
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
