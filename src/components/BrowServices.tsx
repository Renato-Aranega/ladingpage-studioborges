import React, { useState } from 'react';
import { Sparkles, Check, HeartHandshake, ZoomIn, MessageCircle } from 'lucide-react';
import { SERVICOS_SOBRANCELHAS, obterLinkWhatsApp, ServicoSobrancelha } from '../data/catalog';
import { ModalFoto } from './ModalFoto';

/**
 * Seção de Harmonização e Design de Sobrancelhas
 */
export const BrowServices: React.FC = () => {
  const [fotoModal, definirFotoModal] = useState<ServicoSobrancelha | null>(null);

  return (
    <section id="sobrancelhas" className="py-20 sm:py-24 relative border-t borda-suave fundo-secundario transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full fundo-card border borda-destaque text-xs font-semibold text-[#DFB15B] shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HARMONIZAÇÃO DO OLHAR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight texto-principal">
            Design & Cuidado de <span className="text-gold-gradient italic">Sobrancelhas</span>
          </h2>
          <p className="text-sm sm:text-base texto-secundario font-light">
            Sobrancelhas alinhadas, simétricas e com fios fortes. Cada desenho é planejado através de mapeamento facial detalhado para valorizar a sua expressão natural.
          </p>
        </div>

        {/* Grade com os 3 Serviços de Sobrancelhas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SERVICOS_SOBRANCELHAS.map((servico) => {
            const precoPix = servico.preco * 0.95;
            return (
              <div
                key={servico.id}
                className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Foto do Procedimento Sem Bloom */}
                  <div className="relative aspect-[4/5] overflow-hidden fundo-superficie">
                    <img
                      src={servico.imagem}
                      alt={servico.nome}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />

                    {/* Preço em Badge Nobre Flutuante com Alta Nitidez */}
                    <div className="absolute bottom-3 left-3 z-10 bg-[#0F0814]/85 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#DFB15B]/35 shadow-lg text-left">
                      <span className="text-lg font-serif font-bold text-[#FDFCFA] leading-none block">
                        R$ {servico.preco.toFixed(2).replace('.', ',')}
                      </span>
                      <span className="text-[10px] text-[#DFB15B] font-semibold block mt-0.5">
                        ou R$ {precoPix.toFixed(2).replace('.', ',')} no Pix (5% OFF)
                      </span>
                    </div>

                    {/* Botão para Ampliar Foto */}
                    <button
                      onClick={() => definirFotoModal(servico)}
                      className="absolute bottom-3 right-3 z-10 p-2.5 rounded-xl bg-[#0F0814]/85 backdrop-blur-md border border-[#DFB15B]/35 text-[#DFB15B] shadow-lg transition-all hover:scale-110 cursor-pointer"
                      aria-label={`Ver foto ampliada de ${servico.nome}`}
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Descrição e Benefícios */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <h3 className="text-xl font-serif font-bold texto-principal group-hover:text-[#DFB15B] transition-colors">
                      {servico.nome}
                    </h3>
                    <p className="text-xs font-semibold text-[#DFB15B] uppercase tracking-wider">
                      {servico.slogan}
                    </p>
                    <p className="text-xs sm:text-sm texto-secundario leading-relaxed font-light">
                      {servico.descricao}
                    </p>

                    {/* Lista de Benefícios */}
                    <div className="space-y-1.5 pt-3 border-t borda-suave">
                      {servico.beneficios.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs texto-secundario">
                          <Check className="w-3.5 h-3.5 text-[#DFB15B] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Botão de Agendamento Rápido */}
                <div className="p-5 sm:p-6 pt-0">
                  <a
                    href={obterLinkWhatsApp(servico.nome)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl fundo-elevado hover:bg-gold-gradient texto-principal hover:text-[#0F0814] border borda-destaque hover:border-transparent font-bold text-xs tracking-wide uppercase transition-all shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-[#0F0814]" />
                    <span>Agendar Sobrancelhas</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Card Promocional de Combo Facial */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl fundo-card border borda-destaque shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#7E22CE]/20 border borda-destaque flex items-center justify-center text-[#DFB15B] shrink-0 shadow-md">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-serif font-bold texto-principal">Combine Cílios + Design de Sobrancelhas</h4>
              <p className="text-xs sm:text-sm texto-secundario mt-0.5 font-light">
                Faça os dois procedimentos no mesmo dia e saia com a harmonização facial completa do seu olhar.
              </p>
            </div>
          </div>
          <a
            href={obterLinkWhatsApp('Combo Cílios + Design')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gold-gradient text-[#0F0814] font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all text-center botao-magnetico"
          >
            Consultar Combo no WhatsApp
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
