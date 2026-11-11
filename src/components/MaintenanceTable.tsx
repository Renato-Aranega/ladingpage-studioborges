import React, { useState } from 'react';
import { DADOS_MANUTENCAO, obterLinkWhatsApp } from '../data/catalog';
import { usarRevelacaoScroll } from '../hooks/useRevelacaoScroll';

/**
 * Seção de Manutenção com Simulador em Tempo Real e Tabela Simples
 */
export const MaintenanceTable: React.FC = () => {
  const [tecnicaSelecionada, definirTecnicaSelecionada] = useState(DADOS_MANUTENCAO[0].tecnica);
  const [faixaSelecionada, definirFaixaSelecionada] = useState<'15' | '20' | '25'>('15');
  const referenciaSecao = usarRevelacaoScroll();

  const dadosAtuais =
    DADOS_MANUTENCAO.find((item) => item.tecnica === tecnicaSelecionada) || DADOS_MANUTENCAO[0];

  const obterPreco = () => {
    if (faixaSelecionada === '15') return dadosAtuais.ate15Dias;
    if (faixaSelecionada === '20') return dadosAtuais.de16a20Dias;
    return dadosAtuais.de21a25Dias;
  };

  const precoCalculado = obterPreco();
  const precoPixCalculado = precoCalculado * 0.95;
  const rotuloFaixa =
    faixaSelecionada === '15'
      ? 'até 15 dias'
      : faixaSelecionada === '20'
        ? '16 a 20 dias'
        : '21 a 25 dias';

  return (
    <section
      id="manutencao"
      ref={referenciaSecao}
      className="bg-[#F1EAF8] py-20 lg:py-24 border-t border-[var(--borda-suave)]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[var(--borda-suave)] mb-12 revelar-scroll">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#6F4B9E] font-medium block">
              Cuidado Contínuo
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#261835] mt-1">
              Manutenção Periódica
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#5E4D70]">
            Ideal entre 15 e 25 dias. Após 30 dias, é cobrado novo procedimento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Simulador Rápido */}
          <div className="lg:col-span-5 bg-white border border-[var(--borda-suave)] rounded-xl p-6 sm:p-7 space-y-6 revelar-scroll">
            <div>
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#6F4B9E] font-semibold block mb-2.5">
                1. Técnica
              </span>
              <div className="grid grid-cols-2 gap-2">
                {DADOS_MANUTENCAO.map((item) => {
                  const ativa = tecnicaSelecionada === item.tecnica;
                  return (
                    <button
                      key={item.tecnica}
                      type="button"
                      onClick={() => definirTecnicaSelecionada(item.tecnica)}
                      className={`py-2 px-3 rounded-md text-xs text-left border transition-colors cursor-pointer ${
                        ativa
                          ? 'bg-[#E9DFF7] border-[#9B76C9] text-[#261835] font-semibold'
                          : 'bg-transparent border-[var(--borda-suave)] text-[#5E4D70] hover:border-[#9B76C9]'
                      }`}
                    >
                      {item.tecnica}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#6F4B9E] font-semibold block mb-2.5">
                2. Tempo da última aplicação
              </span>
              <div className="grid grid-cols-3 gap-2">
                {(
                  [
                    { id: '15', rotulo: 'Até 15 dias' },
                    { id: '20', rotulo: '16 a 20 dias' },
                    { id: '25', rotulo: '21 a 25 dias' },
                  ] as const
                ).map((faixa) => {
                  const ativa = faixaSelecionada === faixa.id;
                  return (
                    <button
                      key={faixa.id}
                      type="button"
                      onClick={() => definirFaixaSelecionada(faixa.id)}
                      className={`py-2 px-2 rounded-md text-xs text-center border transition-colors cursor-pointer numeral-tabular ${
                        ativa
                          ? 'bg-[#E9DFF7] border-[#9B76C9] text-[#261835] font-semibold'
                          : 'bg-transparent border-[var(--borda-suave)] text-[#5E4D70] hover:border-[#9B76C9]'
                      }`}
                    >
                      {faixa.rotulo}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--borda-suave)] flex items-baseline justify-between">
              <div>
                <span className="text-xs text-[#5E4D70] block">Valor calculado</span>
                <span className="text-xs text-[#8A651D] font-medium block mt-0.5 numeral-tabular">
                  R$ {precoPixCalculado.toFixed(2).replace('.', ',')} no Pix (5% OFF)
                </span>
              </div>
              <span className="font-serif text-3xl text-[#261835] numeral-tabular">
                R$ {precoCalculado.toFixed(0)}
              </span>
            </div>

            <a
              href={obterLinkWhatsApp(`Manutenção ${tecnicaSelecionada} (${rotuloFaixa})`)}
              target="_blank"
              rel="noopener noreferrer"
              className="botao-dourado w-full py-3.5"
            >
              Agendar Manutenção
            </a>
          </div>

          {/* Tabela Direta de Valores */}
          <div
            className="lg:col-span-7 bg-white border border-[var(--borda-suave)] rounded-xl overflow-hidden revelar-scroll"
            style={{ '--atraso': '100ms' } as React.CSSProperties}
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm numeral-tabular">
                <thead>
                  <tr className="border-b border-[var(--borda-suave)] bg-[#FAF8FC] text-[11px] uppercase tracking-[0.14em] text-[#6F4B9E]">
                    <th className="py-3.5 px-5 font-semibold">Técnica</th>
                    <th className="py-3.5 px-4 font-semibold text-right">Até 15d</th>
                    <th className="py-3.5 px-4 font-semibold text-right">16 a 20d</th>
                    <th className="py-3.5 px-5 font-semibold text-right">21 a 25d</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--borda-suave)]">
                  {DADOS_MANUTENCAO.map((linha) => {
                    const ativa = tecnicaSelecionada === linha.tecnica;
                    return (
                      <tr
                        key={linha.tecnica}
                        onClick={() => definirTecnicaSelecionada(linha.tecnica)}
                        className={`transition-colors cursor-pointer ${
                          ativa ? 'bg-[#F1EAF8]/70 font-medium' : 'hover:bg-[#FAF8FC]'
                        }`}
                      >
                        <td className="py-4 px-5 text-[#261835]">{linha.tecnica}</td>
                        <td className="py-4 px-4 text-right text-[#5E4D70]">
                          R$ {linha.ate15Dias}
                        </td>
                        <td className="py-4 px-4 text-right text-[#5E4D70]">
                          R$ {linha.de16a20Dias}
                        </td>
                        <td className="py-4 px-5 text-right text-[#5E4D70]">
                          R$ {linha.de21a25Dias}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
