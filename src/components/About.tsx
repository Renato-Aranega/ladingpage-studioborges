import React from 'react';
import { REGRAS_ATENDIMENTO } from '../data/catalog';
import { usarRevelacaoScroll } from '../hooks/useRevelacaoScroll';

/**
 * Seção Sobre o Ateliê e Orientações Essenciais
 * Une a apresentação da Amanda Borges com as diretrizes resumidas de atendimento.
 */
export const About: React.FC = () => {
  const referenciaSecao = usarRevelacaoScroll();

  return (
    <section
      id="sobre"
      ref={referenciaSecao}
      className="bg-[#FAF8FC] py-14 sm:py-20 lg:py-24 border-t border-[var(--borda-suave)]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 space-y-10 sm:space-y-16">
        {/* Sobre Amanda Borges */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="hidden lg:block lg:col-span-5 revelar-scroll">
            <div className="imagem-cortina aspect-[4/5] bg-[#F1EAF8] border border-[var(--borda-suave)]">
              <img
                src="/images/studio/volume-hibrido.webp"
                alt="Detalhe de extensão de cílios no Studio Borges"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div
            className="lg:col-span-7 space-y-4 sm:space-y-5 revelar-scroll"
            style={{ '--atraso': '80ms' } as React.CSSProperties}
          >
            <span className="hidden sm:block text-xs uppercase tracking-[0.2em] text-[#6F4B9E] font-medium">
              Sobre o Studio
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#261835] leading-tight">
              Cuidado individual pensado para o seu olhar
            </h2>

            <p className="text-sm sm:text-base text-[#5E4D70] leading-relaxed max-w-xl">
              Idealizado por <strong className="font-medium text-[#261835]">Amanda Borges</strong>, o
              ateliê combina biossegurança, materiais aprovados pela Anvisa e mapeamento facial
              personalizado para entregar leveza, retenção e conforto do início ao fim da sessão.
            </p>

            <div className="pt-2 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#6F4B9E] font-medium">
              <span>• Biossegurança total</span>
              <span>• Produtos Anvisa</span>
              <span>• Atendimento individual</span>
              <span>• Garantia de 7 dias</span>
            </div>
          </div>
        </div>

        {/* Orientações Essenciais Enxutas */}
        <div className="pt-8 sm:pt-12 border-t border-[var(--borda-suave)] revelar-scroll">
          <h3 className="font-serif text-2xl text-[#261835] mb-4 sm:mb-6">
            Orientações de Atendimento
          </h3>

          <div className="divide-y divide-[var(--borda-suave)] sm:divide-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            {REGRAS_ATENDIMENTO.map((regra) => (
              <div
                key={regra.titulo}
                className="space-y-1 py-3 sm:py-0 sm:pt-3 sm:border-t sm:border-[var(--borda-dourada)]"
              >
                <p className="text-sm font-semibold text-[#261835]">{regra.titulo}</p>
                <p className="text-xs text-[#5E4D70] leading-relaxed">{regra.detalhe}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
