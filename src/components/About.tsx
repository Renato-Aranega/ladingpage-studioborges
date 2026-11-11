import React from 'react';
import { obterLinkWhatsApp } from '../data/catalog';
import { usarRevelacaoScroll } from '../hooks/useRevelacaoScroll';

/**
 * Seção Sobre Amanda Borges
 * Fundo Alabaster (#F4EFEA), composição assimétrica com 2 fotografias reais
 * bem recortadas e especificações em lista horizontal com divisórias de 1px.
 */
export const About: React.FC = () => {
  const referenciaSecao = usarRevelacaoScroll();

  const especificacoes = [
    {
      numero: '01',
      titulo: 'Biossegurança Total',
      descricao:
        'Materiais 100% esterilizados, descartáveis individuais e ambiente rigorosamente higienizado.',
    },
    {
      numero: '02',
      titulo: 'Produtos Anvisa',
      descricao:
        'Adesivos médicos de baixa emissão de vapores e fios tecnológicos de seda hipoalergênicos.',
    },
    {
      numero: '03',
      titulo: 'Conforto Absoluto',
      descricao:
        'Maca anatômica com manta aconchegante, climatização perfeita e playlist relaxante.',
    },
    {
      numero: '04',
      titulo: 'Garantia de 7 Dias',
      descricao:
        'Compromisso com o resultado: retoque ou ajuste gratuito caso necessário na primeira semana.',
    },
  ];

  return (
    <section
      id="sobre"
      ref={referenciaSecao}
      className="bg-[#F4EFEA] text-[#171411] py-24 lg:py-32 border-t border-[var(--border-hairline-dark)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Composição Assimétrica com Apenas 2 Fotografias Reais */}
          <div className="lg:col-span-5 relative pb-12 sm:pb-16 revelar-scroll">
            {/* Foto Principal Grande (Amanda no estúdio com paleta de fios) */}
            <div className="w-[84%] imagem-cortina aspect-[4/5] bg-[#E8E1D9]">
              <img
                src="/images/studio/amanda-atendimento.jpg"
                alt="Amanda Borges apresentando paleta de fios no Studio Borges"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>

            {/* Foto Secundária Deslocada no Eixo Y (Close de olhar impecável) */}
            <div className="w-[54%] ml-auto -mt-20 sm:-mt-28 relative z-10 p-1.5 bg-[#F4EFEA]">
              <div className="imagem-cortina aspect-[4/5] bg-[#E8E1D9]">
                <img
                  src="/images/studio/volume-hibrido.jpg"
                  alt="Close detalhado de extensão de cílios no Studio Borges"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[var(--border-hairline-dark)] flex items-center justify-between text-[11px] tracking-[0.18em] uppercase text-[#5C5449]">
              <span>Amanda Borges</span>
              <span>Visagismo &amp; Extensões</span>
            </div>
          </div>

          {/* Biografia e Especificações com Divisórias de 1px */}
          <div
            className="lg:col-span-7 space-y-8 revelar-scroll"
            style={{ '--atraso': '120ms' } as React.CSSProperties}
          >
            <div className="space-y-4">
              <span className="indexador-editorial text-[#7A5E3A] block">
                04 — Sobre o Ateliê
              </span>
              <h2 className="titulo-secao text-[#171411] pb-1">
                Mais do que estética: um ritual de cuidado
              </h2>
            </div>

            <div className="space-y-4 text-base text-[#5C5449] leading-relaxed max-w-[60ch]">
              <p>
                Fundado por <strong className="font-medium text-[#171411]">Amanda Borges</strong>, o
                Studio Borges nasceu do desejo de transformar o procedimento de extensão de cílios
                em um verdadeiro ritual de autocuidado e relaxamento.
              </p>
              <p>
                Entendemos que cada mulher tem uma estrutura facial, curvatura e rotina própria. Por
                isso, nunca aplicamos a mesma fórmula: analisamos o visagismo do seu olhar,
                selecionamos espessuras e curvaturas que não pesem no seu dia a dia e garantimos que
                você saia se sentindo radiante e confiante.
              </p>
            </div>

            {/* Lista de Especificações em 1px (Substitui os 4 mini-cards) */}
            <div className="pt-2 border-b border-[var(--border-hairline-dark)] divide-y divide-[var(--border-hairline-dark)]">
              {especificacoes.map((item) => (
                <div
                  key={item.numero}
                  className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline"
                >
                  <div className="sm:col-span-5 flex items-baseline gap-3">
                    <span className="indexador-editorial text-[#7A5E3A]">
                      {item.numero}
                    </span>
                    <span className="font-serif text-xl text-[#171411]">
                      {item.titulo}
                    </span>
                  </div>
                  <p className="sm:col-span-7 text-xs sm:text-sm text-[#5C5449] leading-relaxed">
                    {item.descricao}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={obterLinkWhatsApp('Conhecer o Studio')}
                target="_blank"
                rel="noopener noreferrer"
                className="botao-editorial-escuro px-8 py-4"
              >
                <span>Agendar Experiência</span>
                <span className="seta-diagonal" aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
