import React from 'react';
import { MessageCircle, Sparkles, ShieldCheck, Heart, ArrowDown, MapPin, Star } from 'lucide-react';
import { obterLinkWhatsApp } from '../data/catalog';

/**
 * Seção de Destaque Inicial (Hero)
 * Apresenta a promessa de valor, imagem da fundadora Amanda Borges e botões de chamada rápida
 */
export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-32 flex items-center justify-center overflow-hidden">
      {/* Luzes de fundo em degradê roxo e dourado imperial */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#7E22CE]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-[450px] h-[450px] bg-[#DFB15B]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Coluna da Esquerda: Textos, Benefícios e Botões */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Selo superior do Studio */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full fundo-card border borda-destaque text-xs font-semibold text-[#DFB15B] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#DFB15B] animate-pulse" />
              <span>STUDIO BORGES • AMANDA BORGES</span>
            </div>

            {/* Título Principal de Impacto */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold texto-principal leading-[1.12] tracking-tight">
              Onde beleza, cuidado e <span className="text-gold-gradient italic font-normal">elegância</span> se encontram.
            </h1>

            {/* Subtítulo institucional */}
            <p className="text-base sm:text-lg texto-secundario max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Nosso studio foi desenvolvido para oferecer muito mais do que serviços estéticos: proporcionamos momentos de bem-estar, autoestima e transformação. Cada olhar é único, e nosso compromisso é entregar excelência em cada detalhe.
            </p>

            {/* Diferenciais rápidos */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm texto-principal">
              <div className="flex items-center gap-2 fundo-superficie px-3.5 py-2 rounded-xl border borda-suave shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#DFB15B]" />
                <span>Garantia de 7 dias</span>
              </div>
              <div className="flex items-center gap-2 fundo-superficie px-3.5 py-2 rounded-xl border borda-suave shadow-sm">
                <Heart className="w-4 h-4 text-[#A855F7]" />
                <span>Atendimento 100% Individual</span>
              </div>
              <div className="flex items-center gap-2 fundo-superficie px-3.5 py-2 rounded-xl border borda-suave shadow-sm">
                <MapPin className="w-4 h-4 text-[#DFB15B]" />
                <span>Osasco (Fácil Estacionar)</span>
              </div>
            </div>

            {/* Botões de Ação Principal */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={obterLinkWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gold-gradient text-[#0F0814] font-bold text-base shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all botao-magnetico"
              >
                <MessageCircle className="w-5 h-5 text-[#0F0814]" />
                <span>Agendar Meu Horário VIP</span>
              </a>

              <a
                href="#cilios"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl fundo-superficie hover:fundo-elevado border borda-destaque texto-principal font-medium text-sm transition-all hover:border-[#DFB15B]"
              >
                <span>Ver Catálogo de Serviços</span>
                <ArrowDown className="w-4 h-4 text-[#DFB15B]" />
              </a>
            </div>

            {/* Prova Social de 5 Estrelas */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3 text-xs texto-mutado">
              <div className="flex text-[#DFB15B]">
                {[...Array(5)].map((_, indice) => (
                  <Star key={indice} className="w-3.5 h-3.5 fill-[#DFB15B]" />
                ))}
              </div>
              <span>Experiência 5 Estrelas recomendada por dezenas de clientes em Osasco</span>
            </div>
          </div>

          {/* Coluna da Direita: Moldura da Especialista Amanda Borges */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Anel Externo com Degradê Nobre */}
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] aspect-[4/5] rounded-3xl p-3 bg-gradient-to-b from-[#DFB15B]/50 via-[#7E22CE]/30 to-transparent shadow-2xl">
              {/* Contêiner da Imagem */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden fundo-superficie border borda-destaque">
                <img
                  src="/images/studio/amanda-borges-portrait.jpeg"
                  alt="Amanda Borges - Lash Designer Studio Borges"
                  className="w-full h-full object-cover object-center filter brightness-[0.98] hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 gradiente-foto" />

                {/* Card Inferior Flutuante com Nome e Instagram */}
                <div className="absolute bottom-5 left-5 right-5 text-left fundo-superficie-translucido backdrop-blur-md p-4 rounded-xl border borda-destaque shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#DFB15B] font-semibold">Fundadora & Especialista</p>
                      <p className="text-base font-serif font-bold texto-principal">Amanda Borges</p>
                    </div>
                    <span className="text-[11px] bg-[#7E22CE]/20 text-[#A855F7] px-2.5 py-1 rounded-full border border-[#A855F7]/30 font-medium">
                      @lashamandaborges
                    </span>
                  </div>
                  <p className="text-xs texto-secundario mt-1.5 font-light">
                    "O brilho que você procura começa aqui."
                  </p>
                </div>
              </div>

              {/* Tag Flutuante: Desconto Pix */}
              <div className="absolute -top-4 -right-4 fundo-card border borda-destaque px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 backdrop-blur-md">
                <div className="w-8 h-8 rounded-full bg-gold-gradient flex items-center justify-center text-[#0F0814] font-bold text-xs shadow-md">
                  %
                </div>
                <div>
                  <p className="text-[11px] texto-secundario leading-none">Benefício Exclusivo</p>
                  <p className="text-xs font-bold texto-principal">5% OFF no Pix</p>
                </div>
              </div>

              {/* Tag Flutuante: Agenda Aberta */}
              <div className="absolute -bottom-4 -left-4 fundo-card border borda-suave px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 backdrop-blur-md">
                <div className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-ping" />
                <span className="text-xs font-medium texto-principal">Agenda Aberta</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
