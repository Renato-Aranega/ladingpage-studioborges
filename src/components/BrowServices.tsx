import React from 'react';
import { MessageCircle, Sparkles, Check, HeartHandshake } from 'lucide-react';
import { SERVICOS_SOBRANCELHAS, obterLinkWhatsApp } from '../data/catalog';

/**
 * Seção de Harmonização e Design de Sobrancelhas
 * Destaca o mapeamento facial, aplicação de henna e protocolo de recuperação dos fios
 */
export const BrowServices: React.FC = () => {
  return (
    <section id="sobrancelhas" className="py-24 relative bg-[#130A19] border-t border-[#DFB15B]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E1229] border border-[#DFB15B]/40 text-xs font-semibold text-[#DFB15B] shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HARMONIZAÇÃO DO OLHAR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FDFCFA] tracking-tight">
            Design & Cuidado de <span className="text-gold-gradient italic">Sobrancelhas</span>
          </h2>
          <p className="text-base text-[#D4C8DE] font-light">
            Sobrancelhas alinhadas, simétricas e com fios fortes. Cada desenho é planejado através de mapeamento facial detalhado para valorizar a sua expressão natural.
          </p>
        </div>

        {/* Grade com os 3 Serviços de Sobrancelhas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICOS_SOBRANCELHAS.map((servico) => {
            const precoPix = servico.preco * 0.95;
            return (
              <div
                key={servico.id}
                className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5"
              >
                <div>
                  {/* Foto do Procedimento */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#180E21]">
                    <img
                      src={servico.imagem}
                      alt={servico.nome}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#180E21] via-transparent to-transparent opacity-85" />

                    {/* Preço em Destaque */}
                    <div className="absolute bottom-3 left-4">
                      <span className="text-2xl font-serif font-bold text-[#FDFCFA]">
                        R$ {servico.preco.toFixed(2).replace('.', ',')}
                      </span>
                      <span className="block text-[11px] text-[#DFB15B] font-semibold">
                        ou R$ {precoPix.toFixed(2).replace('.', ',')} no Pix (5% OFF)
                      </span>
                    </div>
                  </div>

                  {/* Descrição e Benefícios */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-serif font-bold text-[#FDFCFA] group-hover:text-[#DFB15B] transition-colors">
                      {servico.nome}
                    </h3>
                    <p className="text-xs font-semibold text-[#DFB15B] uppercase tracking-wider">
                      {servico.slogan}
                    </p>
                    <p className="text-sm text-[#D4C8DE] leading-relaxed font-light">
                      {servico.descricao}
                    </p>

                    {/* Lista de Benefícios */}
                    <div className="space-y-1.5 pt-3 border-t border-[#2E1B3D]">
                      {servico.beneficios.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#D4C8DE]">
                          <Check className="w-3.5 h-3.5 text-[#DFB15B] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Botão de Agendamento */}
                <div className="p-6 pt-0">
                  <a
                    href={obterLinkWhatsApp(servico.nome)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#231530] group-hover:bg-gold-gradient text-[#FDFCFA] group-hover:text-[#0F0814] border border-[#DFB15B]/35 group-hover:border-transparent font-bold text-xs tracking-wide uppercase transition-all shadow-md group-hover:shadow-[0_0_20px_rgba(223,177,91,0.3)]"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-[#0F0814]" />
                    <span>Agendar Sobrancelhas</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Card Promocional de Combo */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#180E21] via-[#231530] to-[#180E21] border border-[#DFB15B]/35 shadow-[0_0_30px_rgba(126,34,206,0.2)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#7E22CE]/30 border border-[#DFB15B]/40 flex items-center justify-center text-[#DFB15B] shrink-0 shadow-md">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-serif font-bold text-[#FDFCFA]">Combine Cílios + Design de Sobrancelhas</h4>
              <p className="text-sm text-[#D4C8DE] mt-0.5 font-light">
                Faça os dois procedimentos no mesmo dia e saia com a harmonização facial completa do seu olhar.
              </p>
            </div>
          </div>
          <a
            href={obterLinkWhatsApp('Combo Cílios + Design')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-gold-gradient text-[#0F0814] font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all"
          >
            Consultar Combo no WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
