import React, { useState } from 'react';
import { Sparkles, Check, Flame, ZoomIn, MessageCircle, CheckCircle } from 'lucide-react';
import { SERVICOS_CILIOS, obterLinkWhatsApp, ServicoCilios } from '../data/catalog';
import { ModalFoto } from './ModalFoto';

/**
 * Catálogo Interativo de Extensões de Cílios
 * Fotos reais em proporção vertical 4:5, seleção visual e CTA mestre dinâmico.
 */
export const LashCatalog: React.FC = () => {
  // Filtro de categoria selecionado
  const [filtroAtivo, definirFiltroAtivo] = useState<'todos' | 'naturais' | 'volume' | 'tendencia'>('todos');
  
  // Procedimento atualmente selecionado pela cliente
  const [servicoSelecionado, definirServicoSelecionado] = useState<ServicoCilios>(SERVICOS_CILIOS[0]);

  // Modal de foto ampliada
  const [fotoModal, definirFotoModal] = useState<ServicoCilios | null>(null);

  // Filtragem dos serviços conforme botão selecionado
  const servicosFiltrados = SERVICOS_CILIOS.filter((servico) => {
    if (filtroAtivo === 'todos') return true;
    if (filtroAtivo === 'naturais') return ['volume-brasileiro', 'volume-egipcio'].includes(servico.id);
    if (filtroAtivo === 'volume') return ['volume-hibrido', 'volume-russo'].includes(servico.id);
    if (filtroAtivo === 'tendencia') return ['fox-eyes', 'volume-power'].includes(servico.id);
    return true;
  });

  const precoPixSelecionado = servicoSelecionado.preco * 0.95;

  return (
    <section id="cilios" className="py-20 sm:py-24 relative border-t borda-suave fundo-principal transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full fundo-card border borda-destaque text-xs font-semibold text-[#DFB15B] shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CATÁLOGO BEAUTY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight texto-principal">
            Extensões de Cílios com Acabamento <span className="text-gold-gradient italic">Impecável</span>
          </h2>
          <p className="text-sm sm:text-base texto-secundario font-light">
            Toque no procedimento desejado para selecioná-lo ou na foto para ampliar os detalhes dos fios.
          </p>

          {/* Botões de Filtro */}
          <div className="flex items-center justify-start sm:justify-center gap-2 pt-4 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => definirFiltroAtivo('todos')}
              className={`px-4 py-2.5 rounded-full text-xs font-medium whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                filtroAtivo === 'todos'
                  ? 'bg-gold-gradient text-[#0F0814] font-bold shadow-md'
                  : 'fundo-superficie texto-secundario hover:texto-principal border borda-suave'
              }`}
            >
              Todos os Volumes ({SERVICOS_CILIOS.length})
            </button>
            <button
              onClick={() => definirFiltroAtivo('naturais')}
              className={`px-4 py-2.5 rounded-full text-xs font-medium whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                filtroAtivo === 'naturais'
                  ? 'bg-gold-gradient text-[#0F0814] font-bold shadow-md'
                  : 'fundo-superficie texto-secundario hover:texto-principal border borda-suave'
              }`}
            >
              Naturais & Elegantes
            </button>
            <button
              onClick={() => definirFiltroAtivo('volume')}
              className={`px-4 py-2.5 rounded-full text-xs font-medium whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                filtroAtivo === 'volume'
                  ? 'bg-gold-gradient text-[#0F0814] font-bold shadow-md'
                  : 'fundo-superficie texto-secundario hover:texto-principal border borda-suave'
              }`}
            >
              Densidade & Volume
            </button>
            <button
              onClick={() => definirFiltroAtivo('tendencia')}
              className={`px-4 py-2.5 rounded-full text-xs font-medium whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                filtroAtivo === 'tendencia'
                  ? 'bg-gold-gradient text-[#0F0814] font-bold shadow-md'
                  : 'fundo-superficie texto-secundario hover:texto-principal border borda-suave'
              }`}
            >
              Efeito Lifting & Power
            </button>
          </div>
        </div>

        {/* Grade de Cartões de Cílios com Proporção Vertical Adequada (4:5) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicosFiltrados.map((servico) => {
            const estaSelecionado = servicoSelecionado.id === servico.id;
            const precoPix = servico.preco * 0.95;

            return (
              <div
                key={servico.id}
                onClick={() => definirServicoSelecionado(servico)}
                className={`glass-card rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 cursor-pointer group relative ${
                  estaSelecionado
                    ? 'ring-2 ring-[#DFB15B] shadow-[0_0_25px_rgba(223,177,91,0.3)] -translate-y-1'
                    : 'hover:-translate-y-1'
                }`}
              >
                {/* Indicador de Seleção no Topo do Card */}
                {estaSelecionado && (
                  <div className="absolute top-3 left-3 z-20 bg-[#DFB15B] text-[#0F0814] text-[11px] font-extrabold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 fill-[#0F0814] text-[#DFB15B]" />
                    <span>Selecionado</span>
                  </div>
                )}

                {/* Imagem do Procedimento em Proporção Vertical Perfeita (4:5) Sem Bloom */}
                <div className="relative aspect-[4/5] overflow-hidden fundo-superficie">
                  <img
                    src={servico.imagem}
                    alt={servico.nome}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />

                  {/* Tag de destaque */}
                  {servico.destaque && (
                    <div className="absolute top-3 right-3 z-10 bg-gold-gradient text-[#0F0814] text-[11px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 fill-[#0F0814]" />
                      <span>{servico.destaque}</span>
                    </div>
                  )}

                  {/* Botão de Lupa para Ampliar Foto */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      definirFotoModal(servico);
                    }}
                    className="absolute bottom-3 right-3 z-10 p-2.5 rounded-xl bg-[#0F0814]/85 backdrop-blur-md border border-[#DFB15B]/35 text-[#DFB15B] shadow-lg transition-all hover:scale-110 cursor-pointer"
                    aria-label={`Ver foto ampliada de ${servico.nome}`}
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold texto-principal group-hover:text-[#DFB15B] transition-colors leading-tight">
                      {servico.nome}
                    </h3>
                    <p className="text-xs font-semibold text-[#DFB15B] uppercase tracking-wider">
                      {servico.slogan}
                    </p>

                    {/* BLOCO DE VALOR EM ALTO DESTAQUE */}
                    <div className="p-3.5 sm:p-4 rounded-2xl fundo-elevado border borda-destaque shadow-sm flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-[#DFB15B] font-bold block leading-none">
                          Valor Oficial
                        </span>
                        <div className="text-2xl sm:text-3xl font-serif font-extrabold texto-principal mt-1 leading-none">
                          R$ {servico.preco.toFixed(2).replace('.', ',')}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-gold-gradient text-[#0F0814] font-black text-xs shadow-sm">
                          R$ {precoPix.toFixed(2).replace('.', ',')} Pix
                        </span>
                        <span className="text-[10px] text-[#DFB15B] font-bold block mt-1">
                          5% OFF à vista
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm texto-secundario leading-relaxed font-light">
                      {servico.descricao}
                    </p>
                  </div>

                  {/* Lista de Diferenciais */}
                  <div className="space-y-1.5 pt-2 border-t borda-suave">
                    {servico.diferenciais.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs texto-secundario">
                        <Check className="w-3.5 h-3.5 text-[#DFB15B] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Indicador de Ação Rápida */}
                  <div className="pt-2">
                    <span className="text-[11px] texto-mutado group-hover:text-[#DFB15B] transition-colors font-medium flex items-center justify-between">
                      <span>{estaSelecionado ? '✓ Pronto para agendar abaixo' : 'Toque para selecionar'}</span>
                      <span className="text-xs">&rarr;</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA MESTRE E MAGNÉTICO */}
        <div className="mt-14 max-w-2xl mx-auto text-center space-y-4">
          <div className="p-6 sm:p-8 rounded-3xl fundo-secundario border borda-destaque shadow-2xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#DFB15B] font-bold block">
              Procedimento em Foco
            </span>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <h3 className="text-2xl sm:text-3xl font-serif font-extrabold texto-principal">
                {servicoSelecionado.nome}
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-serif font-black text-[#DFB15B]">
                  R$ {servicoSelecionado.preco.toFixed(2).replace('.', ',')}
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-gold-gradient text-[#0F0814] shadow-sm">
                  Pix: R$ {precoPixSelecionado.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>
            <p className="text-xs texto-secundario max-w-md mx-auto">
              Pagamento via Pix ou espécie com benefício de <strong className="text-[#DFB15B]">5% de desconto à vista</strong>.
            </p>

            {/* BOTÃO ULTRA-MAGNETICO COM PULSO */}
            <a
              href={obterLinkWhatsApp(servicoSelecionado.nome)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-2xl bg-gold-gradient text-[#0F0814] font-extrabold text-sm uppercase tracking-wider shadow-2xl hover:scale-105 active:scale-95 transition-all botao-magnetico"
            >
              <MessageCircle className="w-5 h-5 fill-[#0F0814]" />
              <span>Agendar {servicoSelecionado.nome} no WhatsApp</span>
            </a>
          </div>

          <p className="text-xs texto-mutado">
            Dúvida na escolha? Realizamos uma avaliação personalizada e gratuita no início do seu atendimento.
          </p>
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
