import React, { useState } from 'react';
import { Sparkles, Check, Flame, ZoomIn, MessageCircle, CheckCircle } from 'lucide-react';
import { SERVICOS_CILIOS, obterLinkWhatsApp, ServicoCilios } from '../data/catalog';
import { ModalFoto } from './ModalFoto';

/**
 * Catálogo Interativo de Extensões de Cílios
 * Apresenta fotos reais em enquadramento vertical ideal (aspect ratio 4:5),
 * seleção intuitiva do procedimento e botão de agendamento magnético unificado.
 */
export const LashCatalog: React.FC = () => {
  // Filtro de categoria selecionado
  const [filtroAtivo, definirFiltroAtivo] = useState<'todos' | 'naturais' | 'volume' | 'tendencia'>('todos');
  
  // Procedimento atualmente selecionado pela cliente (padrão: Volume Brasileiro)
  const [servicoSelecionado, definirServicoSelecionado] = useState<ServicoCilios>(SERVICOS_CILIOS[0]);

  // Estado para controlar a visualização de foto em alta definição no modal
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
    <section id="cilios" className="py-20 sm:py-24 relative border-t border-[#DFB15B]/15">
      {/* Luzes difusas de ambientação */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#7E22CE]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#DFB15B]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E1229] border border-[#DFB15B]/40 text-xs font-semibold text-[#DFB15B] shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CATÁLOGO BEAUTY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight">
            Extensões de Cílios com Acabamento <span className="text-gold-gradient italic">Impecável</span>
          </h2>
          <p className="text-sm sm:text-base text-[#D4C8DE] font-light">
            Toque no procedimento desejado para selecioná-lo ou na foto para ampliar os detalhes dos fios.
          </p>

          {/* Botões de Filtro por Estilo de Cílios (Otimizados para toque no celular) */}
          <div className="flex items-center justify-start sm:justify-center gap-2 pt-4 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => definirFiltroAtivo('todos')}
              className={`px-4 py-2.5 rounded-full text-xs font-medium whitespace-nowrap transition-all shrink-0 ${
                filtroAtivo === 'todos'
                  ? 'bg-gold-gradient text-[#0F0814] font-bold shadow-md'
                  : 'bg-[#180E21] text-[#D4C8DE] hover:text-[#FDFCFA] border border-[#2E1B3D]'
              }`}
            >
              Todos os Volumes ({SERVICOS_CILIOS.length})
            </button>
            <button
              onClick={() => definirFiltroAtivo('naturais')}
              className={`px-4 py-2.5 rounded-full text-xs font-medium whitespace-nowrap transition-all shrink-0 ${
                filtroAtivo === 'naturais'
                  ? 'bg-gold-gradient text-[#0F0814] font-bold shadow-md'
                  : 'bg-[#180E21] text-[#D4C8DE] hover:text-[#FDFCFA] border border-[#2E1B3D]'
              }`}
            >
              Naturais & Elegantes
            </button>
            <button
              onClick={() => definirFiltroAtivo('volume')}
              className={`px-4 py-2.5 rounded-full text-xs font-medium whitespace-nowrap transition-all shrink-0 ${
                filtroAtivo === 'volume'
                  ? 'bg-gold-gradient text-[#0F0814] font-bold shadow-md'
                  : 'bg-[#180E21] text-[#D4C8DE] hover:text-[#FDFCFA] border border-[#2E1B3D]'
              }`}
            >
              Densidade & Volume
            </button>
            <button
              onClick={() => definirFiltroAtivo('tendencia')}
              className={`px-4 py-2.5 rounded-full text-xs font-medium whitespace-nowrap transition-all shrink-0 ${
                filtroAtivo === 'tendencia'
                  ? 'bg-gold-gradient text-[#0F0814] font-bold shadow-md'
                  : 'bg-[#180E21] text-[#D4C8DE] hover:text-[#FDFCFA] border border-[#2E1B3D]'
              }`}
            >
              Efeito Lifting & Power
            </button>
          </div>
        </div>

        {/* Grade de Cartões de Cílios com Proporção Vertical Adequada (aspect-4/5) */}
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
                    ? 'ring-2 ring-[#DFB15B] shadow-[0_0_30px_rgba(223,177,91,0.35)] -translate-y-1'
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

                {/* Imagem do Procedimento em Proporção Vertical Perfeita (4:5) */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#180E21]">
                  <img
                    src={servico.imagem}
                    alt={servico.nome}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#180E21] via-transparent to-transparent opacity-80" />

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
                    className="absolute bottom-3 right-3 p-2 rounded-xl bg-[#0F0814]/80 hover:bg-[#0F0814] border border-[#DFB15B]/30 text-[#DFB15B] backdrop-blur-md shadow-md transition-all hover:scale-110"
                    aria-label={`Ver foto ampliada de ${servico.nome}`}
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>

                  {/* Preço em Destaque sobre a Imagem */}
                  <div className="absolute bottom-3 left-4">
                    <span className="text-2xl font-serif font-bold text-[#FDFCFA]">
                      R$ {servico.preco.toFixed(2).replace('.', ',')}
                    </span>
                    <span className="block text-[11px] text-[#DFB15B] font-semibold">
                      ou R$ {precoPix.toFixed(2).replace('.', ',')} no Pix (5% OFF)
                    </span>
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-serif font-bold text-[#FDFCFA] group-hover:text-[#DFB15B] transition-colors">
                      {servico.nome}
                    </h3>
                    <p className="text-xs font-semibold text-[#DFB15B] uppercase tracking-wider">
                      {servico.slogan}
                    </p>
                    <p className="text-xs sm:text-sm text-[#D4C8DE] leading-relaxed font-light">
                      {servico.descricao}
                    </p>
                  </div>

                  {/* Lista de Diferenciais */}
                  <div className="space-y-1.5 pt-2 border-t border-[#2E1B3D]">
                    {servico.diferenciais.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#D4C8DE]">
                        <Check className="w-3.5 h-3.5 text-[#DFB15B] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Indicador de Ação Rápida */}
                  <div className="pt-2">
                    <span className="text-[11px] text-[#8E7F9B] group-hover:text-[#DFB15B] transition-colors font-medium flex items-center justify-between">
                      <span>{estaSelecionado ? '✓ Pronto para agendar abaixo' : 'Toque para selecionar'}</span>
                      <span className="text-xs">&rarr;</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA MESTRE E MAGNÉTICO (Elimina botões repetitivos e dá ultra-destaque) */}
        <div className="mt-14 max-w-2xl mx-auto text-center space-y-4">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#231530] to-[#180E21] border border-[#DFB15B]/40 shadow-2xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#DFB15B] font-bold block">
              Procedimento em Foco
            </span>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <h3 className="text-2xl font-serif font-bold text-[#FDFCFA]">
                {servicoSelecionado.nome}
              </h3>
              <span className="text-xl font-serif font-bold text-[#DFB15B]">
                R$ {servicoSelecionado.preco.toFixed(2).replace('.', ',')}
              </span>
            </div>
            <p className="text-xs text-[#D4C8DE] font-light max-w-md mx-auto">
              Pagamento via Pix ou espécie: apenas <strong className="text-[#DFB15B]">R$ {precoPixSelecionado.toFixed(2).replace('.', ',')}</strong> com o benefício de 5% de desconto.
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

          <p className="text-xs text-[#8E7F9B]">
            Dúvida na escolha? Amanda realiza uma avaliação facial gratuita no início do seu atendimento.
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
