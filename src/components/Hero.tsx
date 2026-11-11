import React from 'react';
import { obterLinkWhatsApp } from '../data/catalog';

/**
 * Seção Inicial (Hero) Leve e Enxuta
 * Foco direto na proposta de valor, foto da especialista e botão principal de agendamento.
 */
export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="bg-[#FAF8FC] pt-20 pb-12 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-10 lg:gap-12 items-center">
          {/* Texto Direto e Claro */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <span className="hidden sm:block text-xs uppercase tracking-[0.2em] text-[#6F4B9E] font-medium">
              Osasco, SP — Cílios &amp; Sobrancelhas
            </span>

            <h1 className="font-serif text-[2rem] sm:text-5xl lg:text-[3.5rem] text-[#261835] leading-[1.1]">
              Onde beleza, cuidado e <em className="italic text-[#8A651D]">elegância</em> se encontram.
            </h1>

            <p className="text-sm sm:text-base text-[#5E4D70] max-w-md leading-relaxed">
              Extensões de cílios e design de sobrancelhas com atendimento individual e visagismo
              exclusivo para realçar o seu olhar.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-1 sm:pt-2">
              <a
                href={obterLinkWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="botao-dourado w-full sm:w-auto px-7 py-3.5"
              >
                Agendar Horário
              </a>

              <a
                href="#cilios"
                className="hidden sm:inline-block text-xs uppercase tracking-[0.14em] text-[#6F4B9E] hover:text-[#261835] font-medium border-b border-[#9B76C9]/40 pb-1 transition-colors"
              >
                Ver valores
              </a>
            </div>
          </div>

          {/* Fotografia Limpa da Fundadora */}
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="imagem-cortina aspect-[4/3] sm:aspect-[4/5] bg-[#F1EAF8] border border-[var(--borda-suave)]">
              <img
                src="/images/studio/amanda-atendimento.webp"
                alt="Amanda Borges apresentando fios de extensão no Studio Borges"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
