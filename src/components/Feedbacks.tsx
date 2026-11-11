import React from 'react';
import { Star, Sparkles, CheckCircle2, MessageCircle, Heart } from 'lucide-react';
import { DEPOIMENTOS_CLIENTES, obterLinkWhatsApp } from '../data/catalog';

/**
 * Seção de Feedbacks e Depoimentos de Clientes Reais
 * Gera prova social, credibilidade e reforça a segurança na decisão da cliente
 */
export const Feedbacks: React.FC = () => {
  return (
    <section id="feedbacks" className="py-24 relative border-t border-[#DFB15B]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1E1229] border border-[#DFB15B]/40 text-xs font-semibold text-[#DFB15B] shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PROVA SOCIAL & CONFIANÇA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight">
            Histórias Reais de <span className="text-gold-gradient italic">Autoestima Elevada</span>
          </h2>

          <p className="text-base text-[#D4C8DE] font-light max-w-2xl mx-auto">
            A satisfação das nossas clientes reflete o compromisso com biossegurança, retenção impecável e atendimento humanizado.
          </p>

          {/* Selo Centralizador de Avaliação Geral */}
          <div className="inline-flex items-center gap-3 p-3 px-5 rounded-2xl bg-[#180E21] border border-[#DFB15B]/30 shadow-lg mt-4">
            <div className="flex text-[#DFB15B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#DFB15B]" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#FDFCFA]">5.0 de Avaliação Média</span>
            <span className="text-xs text-[#8E7F9B] hidden sm:inline">•</span>
            <span className="text-xs text-[#D4C8DE] hidden sm:inline">+120 atendimentos em Osasco</span>
          </div>
        </div>

        {/* Grade de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEPOIMENTOS_CLIENTES.map((depoimento) => (
            <div
              key={depoimento.id}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-4 relative group hover:-translate-y-1 transition-transform"
            >
              <div className="space-y-3">
                {/* Estrelas e Tempo */}
                <div className="flex items-center justify-between">
                  <div className="flex text-[#DFB15B]">
                    {[...Array(depoimento.estrelas)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#DFB15B]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#8E7F9B] font-light">{depoimento.tempo}</span>
                </div>

                {/* Texto do Comentário */}
                <p className="text-sm text-[#D4C8DE] leading-relaxed font-light italic">
                  "{depoimento.comentario}"
                </p>
              </div>

              {/* Autor e Procedimento Realizado */}
              <div className="pt-4 border-t border-[#2E1B3D]/70 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#7E22CE] to-[#DFB15B] p-0.5 flex items-center justify-center text-[#0F0814] font-bold text-xs shadow-md">
                    <span className="bg-[#180E21] text-[#DFB15B] w-full h-full rounded-full flex items-center justify-center text-xs">
                      {depoimento.iniciais}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#FDFCFA] flex items-center gap-1.5">
                      {depoimento.nome}
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DFB15B]" />
                    </h4>
                    <p className="text-[11px] text-[#DFB15B] font-medium">{depoimento.servico}</p>
                  </div>
                </div>

                <Heart className="w-4 h-4 text-[#A855F7] opacity-60 group-hover:scale-125 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Chamada Final da Seção de Feedbacks */}
        <div className="mt-14 text-center">
          <a
            href={obterLinkWhatsApp('Quero agendar meu horário VIP')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gold-gradient text-[#0F0814] font-bold text-sm uppercase tracking-wider shadow-lg hover:scale-105 transition-all botao-magnetico"
          >
            <MessageCircle className="w-5 h-5 text-[#0F0814]" />
            <span>Quero Viver Essa Experiência Também</span>
          </a>
        </div>

      </div>
    </section>
  );
};
