import React from 'react';
import { Sparkles, Shield, Award, Heart, CheckCircle2 } from 'lucide-react';
import { obterLinkWhatsApp } from '../data/catalog';

/**
 * Seção Sobre a Fundadora e o Estúdio
 */
export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 sm:py-24 relative border-t borda-suave fundo-secundario overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Galeria de Fotos do Estúdio e Atendimento */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border borda-destaque aspect-[3/4] fundo-superficie shadow-xl group">
                <img
                  src="/images/studio/amanda-borges-1.jpeg"
                  alt="Amanda Borges atendendo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border borda-destaque aspect-square fundo-superficie shadow-xl group">
                <img
                  src="/images/studio/studio-experience-2.jpeg"
                  alt="Ambiente Studio Borges"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="rounded-2xl overflow-hidden border borda-destaque aspect-square fundo-superficie shadow-xl group">
                <img
                  src="/images/studio/amanda-borges-2.jpeg"
                  alt="Detalhes Studio Borges"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border borda-destaque aspect-[3/4] fundo-superficie shadow-xl group">
                <img
                  src="/images/studio/studio-experience-1.jpeg"
                  alt="Experiência de relaxamento Studio Borges"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Biografia e Pilares de Atendimento */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full fundo-card border borda-destaque text-xs font-semibold text-[#DFB15B] shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EXPERIÊNCIA STUDIO BORGES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight texto-principal leading-tight">
              Mais do que estética: um momento de <span className="text-gold-gradient italic">transformação e carinho</span>
            </h2>

            <p className="text-base texto-secundario leading-relaxed font-light">
              Fundado por <strong>Amanda Borges</strong>, o Studio Borges nasceu do desejo de transformar o procedimento de extensão de cílios em um verdadeiro ritual de autocuidado e relaxamento.
            </p>

            <p className="text-base texto-secundario leading-relaxed font-light">
              Entendemos que cada mulher tem uma estrutura facial, curvatura e rotina própria. Por isso, nunca aplicamos a mesma fórmula: analisamos o visagismo do seu olhar, selecionamos espessuras e curvaturas que não pesem no seu dia a dia e garantimos que você saia se sentindo radiante e confiante.
            </p>

            {/* Os 4 Pilares da Experiência */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl fundo-superficie border borda-suave space-y-1 shadow-sm">
                <div className="flex items-center gap-2 text-[#DFB15B] font-semibold text-sm">
                  <Shield className="w-4 h-4" />
                  <span>Biossegurança Total</span>
                </div>
                <p className="text-xs texto-secundario font-light">
                  Materiais 100% esterilizados, descartáveis individuais e ambiente rigorosamente higienizado.
                </p>
              </div>

              <div className="p-4 rounded-xl fundo-superficie border borda-suave space-y-1 shadow-sm">
                <div className="flex items-center gap-2 text-[#DFB15B] font-semibold text-sm">
                  <Award className="w-4 h-4" />
                  <span>Produtos Anvisa</span>
                </div>
                <p className="text-xs texto-secundario font-light">
                  Adesivos médicos de baixa emissão de vapores e fios tecnológicos de seda hipoalergênicos.
                </p>
              </div>

              <div className="p-4 rounded-xl fundo-superficie border borda-suave space-y-1 shadow-sm">
                <div className="flex items-center gap-2 text-[#DFB15B] font-semibold text-sm">
                  <Heart className="w-4 h-4 text-[#A855F7]" />
                  <span>Conforto Absoluto</span>
                </div>
                <p className="text-xs texto-secundario font-light">
                  Maca anatômica com manta aconchegante, climatização perfeita e playlist relaxante.
                </p>
              </div>

              <div className="p-4 rounded-xl fundo-superficie border borda-suave space-y-1 shadow-sm">
                <div className="flex items-center gap-2 text-[#DFB15B] font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Garantia de 7 Dias</span>
                </div>
                <p className="text-xs texto-secundario font-light">
                  Compromisso com o resultado: retoque ou ajuste gratuito caso necessário na primeira semana.
                </p>
              </div>
            </div>

            {/* Chamada para Conversa */}
            <div className="pt-4">
              <a
                href={obterLinkWhatsApp('Conhecer o Studio')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gold-gradient text-[#0F0814] font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all botao-magnetico"
              >
                <span>Conversar Diretamente com Amanda</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
