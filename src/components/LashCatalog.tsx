import React, { useState } from 'react';
import { MessageCircle, Sparkles, Check, Flame } from 'lucide-react';
import { SERVICOS_CILIOS, obterLinkWhatsApp } from '../data/catalog';

/**
 * Catálogo Interativo de Procedimentos de Cílios
 * Permite filtrar por tipo de efeito e agendar diretamente cada procedimento via WhatsApp
 */
export const LashCatalog: React.FC = () => {
  // Filtro ativo de categoria de cílios
  const [filtroAtivo, definirFiltroAtivo] = useState<'todos' | 'naturais' | 'volume' | 'tendencia'>('todos');

  // Filtragem dos serviços conforme botão selecionado
  const servicosFiltrados = SERVICOS_CILIOS.filter((servico) => {
    if (filtroAtivo === 'todos') return true;
    if (filtroAtivo === 'naturais') return ['volume-brasileiro', 'volume-egipcio'].includes(servico.id);
    if (filtroAtivo === 'volume') return ['volume-hibrido', 'volume-russo'].includes(servico.id);
    if (filtroAtivo === 'tendencia') return ['fox-eyes', 'volume-power'].includes(servico.id);
    return true;
  });

  return (
    <section id="cilios" className="py-24 relative bg-[#0F0814] border-t border-[#DFB15B]/15">
      {/* Luzes difusas de ambientação */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#7E22CE]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#DFB15B]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E1229] border border-[#DFB15B]/40 text-xs font-semibold text-[#DFB15B] shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CATÁLOGO BEAUTY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FDFCFA] tracking-tight">
            Extensões de Cílios com Acabamento <span className="text-gold-gradient italic">Impecável</span>
          </h2>
          <p className="text-base text-[#D4C8DE] font-light">
            Trabalhamos exclusivamente com fios tecnológicos ultraleves e cola de retenção premium certificada pela Anvisa, respeitando a saúde dos seus fios naturais.
          </p>

          {/* Botões de Filtro por Estilo de Cílios */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => definirFiltroAtivo('todos')}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                filtroAtivo === 'todos'
                  ? 'bg-gold-gradient text-[#0F0814] font-bold shadow-[0_0_15px_rgba(223,177,91,0.3)]'
                  : 'bg-[#180E21] text-[#D4C8DE] hover:text-[#FDFCFA] border border-[#2E1B3D]'
              }`}
            >
              Todos os Volumes ({SERVICOS_CILIOS.length})
            </button>
            <button
              onClick={() => definirFiltroAtivo('naturais')}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                filtroAtivo === 'naturais'
                  ? 'bg-gold-gradient text-[#0F0814] font-bold shadow-[0_0_15px_rgba(223,177,91,0.3)]'
                  : 'bg-[#180E21] text-[#D4C8DE] hover:text-[#FDFCFA] border border-[#2E1B3D]'
              }`}
            >
              Naturais & Elegantes
            </button>
            <button
              onClick={() => definirFiltroAtivo('volume')}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                filtroAtivo === 'volume'
                  ? 'bg-gold-gradient text-[#0F0814] font-bold shadow-[0_0_15px_rgba(223,177,91,0.3)]'
                  : 'bg-[#180E21] text-[#D4C8DE] hover:text-[#FDFCFA] border border-[#2E1B3D]'
              }`}
            >
              Densidade & Volume
            </button>
            <button
              onClick={() => definirFiltroAtivo('tendencia')}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                filtroAtivo === 'tendencia'
                  ? 'bg-gold-gradient text-[#0F0814] font-bold shadow-[0_0_15px_rgba(223,177,91,0.3)]'
                  : 'bg-[#180E21] text-[#D4C8DE] hover:text-[#FDFCFA] border border-[#2E1B3D]'
              }`}
            >
              Efeito Lifting & Power
            </button>
          </div>
        </div>

        {/* Grade de Cartões de Cílios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicosFiltrados.map((servico) => {
            const precoPix = servico.preco * 0.95;
            return (
              <div
                key={servico.id}
                className="glass-card rounded-2xl overflow-hidden flex flex-col transition-all duration-300 group hover:-translate-y-1.5"
              >
                {/* Imagem do Procedimento */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#180E21]">
                  <img
                    src={servico.imagem}
                    alt={servico.nome}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#180E21] via-transparent to-transparent opacity-85" />

                  {/* Tag de destaque quando houver */}
                  {servico.destaque && (
                    <div className="absolute top-3 right-3 bg-gold-gradient text-[#0F0814] text-[11px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 fill-[#0F0814]" />
                      <span>{servico.destaque}</span>
                    </div>
                  )}

                  {/* Preço em destaque sobre a imagem */}
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
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif font-bold text-[#FDFCFA] group-hover:text-[#DFB15B] transition-colors">
                      {servico.nome}
                    </h3>
                    <p className="text-xs font-semibold text-[#DFB15B] uppercase tracking-wider">
                      {servico.slogan}
                    </p>
                    <p className="text-sm text-[#D4C8DE] leading-relaxed font-light">
                      {servico.descricao}
                    </p>
                  </div>

                  {/* Lista de diferenciais com ícone de confirmação */}
                  <div className="space-y-1.5 pt-2 border-t border-[#2E1B3D]">
                    {servico.diferenciais.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#D4C8DE]">
                        <Check className="w-3.5 h-3.5 text-[#DFB15B] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Botão de Agendamento Direto no WhatsApp */}
                  <div className="pt-3">
                    <a
                      href={obterLinkWhatsApp(servico.nome)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#231530] group-hover:bg-gold-gradient text-[#FDFCFA] group-hover:text-[#0F0814] border border-[#DFB15B]/35 group-hover:border-transparent font-bold text-xs tracking-wide uppercase transition-all shadow-md group-hover:shadow-[0_0_20px_rgba(223,177,91,0.3)]"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-[#0F0814]" />
                      <span>Agendar Este Procedimento</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Faixa inferior de consultoria gratuita */}
        <div className="mt-14 p-6 rounded-2xl bg-[#180E21] border border-[#DFB15B]/25 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xl">
          <div>
            <h4 className="text-sm font-semibold text-[#FDFCFA]">Dúvida sobre qual técnica combina com seu olhar?</h4>
            <p className="text-xs text-[#D4C8DE] mt-1 font-light">
              Amanda realiza uma consultoria de visagismo gratuita no início do seu atendimento para indicar o mapa ideal.
            </p>
          </div>
          <a
            href={obterLinkWhatsApp('Consultoria de Olhar')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-[#231530] hover:bg-[#2E1B3D] border border-[#DFB15B]/40 text-[#DFB15B] text-xs font-bold transition-all flex items-center gap-2 hover:border-[#DFB15B]"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Tirar Dúvida com Amanda
          </a>
        </div>

      </div>
    </section>
  );
};
