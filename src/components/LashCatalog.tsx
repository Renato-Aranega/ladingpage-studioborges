import React, { useState } from 'react';
import { SERVICOS_CILIOS, obterLinkWhatsApp, ServicoCilios } from '../data/catalog';
import { ModalFoto } from './ModalFoto';
import { usarRevelacaoScroll } from '../hooks/useRevelacaoScroll';

/**
 * Catálogo Enxuto de Extensões de Cílios
 * Fundo lilás suave (#F1EAF8) com foco visual nas fotos, nomes e preços.
 */
export const LashCatalog: React.FC = () => {
  const [filtroAtivo, definirFiltroAtivo] = useState<'todos' | 'naturais' | 'volume' | 'tendencia'>('todos');
  const [fotoModal, definirFotoModal] = useState<ServicoCilios | null>(null);
  const referenciaSecao = usarRevelacaoScroll(filtroAtivo);

  const filtros: { id: 'todos' | 'naturais' | 'volume' | 'tendencia'; rotulo: string }[] = [
    { id: 'todos', rotulo: 'Todos (6)' },
    { id: 'naturais', rotulo: 'Naturais' },
    { id: 'volume', rotulo: 'Volume' },
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
      className="bg-[#F1EAF8] py-20 lg:py-24 border-t border-[var(--borda-suave)]"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Cabeçalho Limpo */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[var(--borda-suave)] revelar-scroll">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#6F4B9E] font-medium block">
              Catálogo
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#261835] mt-1">
              Extensões de Cílios
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#5E4D70]">
            5% OFF no Pix ou dinheiro • Toque na foto para ampliar
          </p>
        </div>

        {/* Filtros Discretos */}
        <div className="flex items-center gap-6 py-5 mb-8 overflow-x-auto">
          {filtros.map((filtro) => {
            const ativo = filtroAtivo === filtro.id;
            return (
              <button
                key={filtro.id}
                type="button"
                onClick={() => definirFiltroAtivo(filtro.id)}
                className={`relative py-1 text-xs uppercase tracking-[0.14em] whitespace-nowrap transition-colors cursor-pointer ${
                  ativo ? 'text-[#261835] font-semibold' : 'text-[#5E4D70] hover:text-[#261835]'
                }`}
              >
                {filtro.rotulo}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C49B4B] origin-left transition-transform duration-300 ${
                    ativo ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Grade Limpa: Foto + Título + Preço + 1 Linha */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {servicosFiltrados.map((servico, indice) => {
            const precoPix = servico.preco * 0.95;

            return (
              <article
                key={servico.id}
                className="group revelar-scroll"
                style={{ '--atraso': `${(indice % 3) * 80}ms` } as React.CSSProperties}
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
                      <span className="absolute top-3 left-3 bg-[#FAF8FC]/92 text-[#6F4B9E] px-2.5 py-1 rounded text-[10px] uppercase tracking-[0.14em] font-semibold">
                        {servico.destaque}
                      </span>
                    )}
                  </button>
                </div>

                {/* Título e Preço na Mesma Linha */}
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

        {/* Botão Único ao Final do Catálogo */}
        <div className="mt-14 pt-8 border-t border-[var(--borda-suave)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-[#5E4D70]">
            Dúvida na escolha? Definimos a técnica ideal na avaliação inicial gratuita.
          </p>
          <a
            href={obterLinkWhatsApp('Agendar Extensão de Cílios')}
            target="_blank"
            rel="noopener noreferrer"
            className="botao-dourado px-7 py-3.5 shrink-0"
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
