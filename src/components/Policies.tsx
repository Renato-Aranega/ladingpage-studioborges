import React, { useState } from 'react';
import { Sparkles, ChevronDown, Sparkle, Eye, Droplets } from 'lucide-react';
import { POLITICAS } from '../data/catalog';

/**
 * Seção de Políticas, Regras de Convivência e Orientações
 * Apresenta tolerância de horário, sinal de reserva, garantia e cuidados pré/pós procedimento
 */
export const Policies: React.FC = () => {
  // Estado do item de política atualmente aberto no acordeon
  const [indiceAberto, definirIndiceAberto] = useState<number | null>(0);

  const alternarAcordeon = (indice: number) => {
    definirIndiceAberto(indiceAberto === indice ? null : indice);
  };

  return (
    <section id="politicas" className="py-24 relative bg-[#0F0814] border-t border-[#DFB15B]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E1229] border border-[#DFB15B]/40 text-xs font-semibold text-[#DFB15B] shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARÊNCIA & CONVIVÊNCIA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FDFCFA] tracking-tight">
            Políticas & Orientações de <span className="text-gold-gradient italic">Atendimento</span>
          </h2>
          <p className="text-base text-[#D4C8DE] font-light">
            Seu momento de autocuidado começa antes da sua chegada! Nossas regras existem para garantir que cada cliente receba atenção total, sem atrasos e com a máxima qualidade.
          </p>
        </div>

        {/* Grade de 2 Colunas: Políticas em Acordeon e Caixa de Orientações Rápidas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Coluna da Esquerda: Acordeon de Políticas (7 colunas) */}
          <div className="lg:col-span-7 space-y-3">
            {POLITICAS.map((politica, indice) => {
              const estaAberto = indiceAberto === indice;
              return (
                <div
                  key={indice}
                  className="rounded-xl border border-[#DFB15B]/20 bg-[#180E21] overflow-hidden transition-colors shadow-sm"
                >
                  <button
                    onClick={() => alternarAcordeon(indice)}
                    className="w-full py-4 px-6 flex items-center justify-between text-left hover:bg-[#231530]/50 transition-colors"
                  >
                    <span className="text-sm font-semibold text-[#FDFCFA] flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#2E1B3D] text-[#DFB15B] text-xs flex items-center justify-center font-bold">
                        {indice + 1}
                      </span>
                      {politica.titulo}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#DFB15B] transition-transform duration-300 ${
                        estaAberto ? 'rotate-180 text-[#DFB15B]' : ''
                      }`}
                    />
                  </button>

                  {estaAberto && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#D4C8DE] leading-relaxed border-t border-[#2E1B3D]/70 font-light">
                      {politica.descricao}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Coluna da Direita: Instruções Pré e Pós Procedimento (5 colunas) */}
          <div className="lg:col-span-5 bg-[#180E21] rounded-2xl p-6 sm:p-8 border border-[#DFB15B]/35 shadow-[0_0_30px_rgba(126,34,206,0.2)] space-y-6">
            <h3 className="text-lg font-serif font-bold text-[#FDFCFA] pb-3 border-b border-[#2E1B3D] flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#DFB15B]" />
              <span>Orientações Essenciais</span>
            </h3>

            {/* Cuidados Antes do Atendimento */}
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-wider text-[#DFB15B] font-semibold flex items-center gap-1.5">
                <Sparkle className="w-3.5 h-3.5 text-[#DFB15B]" />
                Antes do seu atendimento:
              </span>
              <ul className="space-y-2 text-xs text-[#D4C8DE] font-light">
                <li className="flex items-start gap-2">
                  <span className="text-[#DFB15B] font-bold">•</span>
                  <span>Venha com os olhos <strong>100% limpos</strong>, sem rímel, delineador ou cosméticos oleosos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DFB15B] font-bold">•</span>
                  <span>Informe previamente sobre sensibilidades oculares, alergias ou uso de colírios específicos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DFB15B] font-bold">•</span>
                  <span>Evite consumir excesso de cafeína imediatamente antes para relaxar completamente na maca.</span>
                </li>
              </ul>
            </div>

            {/* Cuidados Pós-Procedimento */}
            <div className="space-y-3 pt-3 border-t border-[#2E1B3D]">
              <span className="text-xs uppercase tracking-wider text-[#DFB15B] font-semibold flex items-center gap-1.5">
                <Droplets className="w-3.5 h-3.5 text-[#DFB15B]" />
                Cuidados pós-procedimento:
              </span>
              <ul className="space-y-2 text-xs text-[#D4C8DE] font-light">
                <li className="flex items-start gap-2">
                  <span className="text-[#DFB15B] font-bold">•</span>
                  <span>Evite vapores intensos (sauna, banho excessivamente quente) nas primeiras 24 horas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DFB15B] font-bold">•</span>
                  <span>Higienize os cílios diariamente com espuma própria para evitar acúmulo de oleosidade e ácaros.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DFB15B] font-bold">•</span>
                  <span>Escove delicadamente os fios secos com a escovinha exclusiva que entregamos de presente.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
