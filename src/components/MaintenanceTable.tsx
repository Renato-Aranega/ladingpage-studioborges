import React, { useState } from 'react';
import { DADOS_MANUTENCAO, obterLinkWhatsApp } from '../data/catalog';
import { usarRevelacaoScroll } from '../hooks/useRevelacaoScroll';

/**
 * Tabela Editorial e Simulador Interativo de Manutenções
 * Mantém integralmente a lógica de cálculo em tempo real com visual limpo sem cards nem emojis.
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
      className="bg-[#0E0C0A] text-[#F5F2EB] py-24 lg:py-32 border-t border-[var(--border-hairline)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Cabeçalho Alinhado à Esquerda */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-10">
          <div className="lg:col-span-7 space-y-4 revelar-scroll">
            <span className="indexador-editorial text-[#C5A880] block">
              03 — Manutenção Periódica
            </span>
            <h2 className="titulo-secao text-[#F5F2EB] pb-1">
              Preservação e saúde dos fios
            </h2>
          </div>

          <div
            className="lg:col-span-5 lg:text-right revelar-scroll"
            style={{ '--atraso': '100ms' } as React.CSSProperties}
          >
            <p className="text-sm text-[#9E9689] leading-relaxed lg:ml-auto max-w-md font-light">
              Manter seus cílios é preservar a saúde do fio natural e o alinhamento perfeito do
              desenho com maior economia a cada retorno.
            </p>
          </div>
        </div>

        {/* Faixa Editorial Horizontal de 3 Colunas (Sem Caixas) */}
        <div className="border-y border-[var(--border-hairline)] py-8 mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-[var(--border-hairline)] revelar-scroll">
          <div className="md:pr-8 space-y-2">
            <span className="indexador-editorial text-[#C5A880] block">01</span>
            <h3 className="font-serif text-xl text-[#F5F2EB]">Periodicidade Ideal</h3>
            <p className="text-xs text-[#9E9689] leading-relaxed">
              A cada 15 a 24 dias para manter o volume pleno.
            </p>
          </div>

          <div className="md:px-8 space-y-2">
            <span className="indexador-editorial text-[#C5A880] block">02</span>
            <h3 className="font-serif text-xl text-[#F5F2EB]">Limite de 30 Dias</h3>
            <p className="text-xs text-[#9E9689] leading-relaxed">
              Após 30 dias ou menos de 40% dos fios, é cobrado novo procedimento.
            </p>
          </div>

          <div className="md:pl-8 space-y-2">
            <span className="indexador-editorial text-[#C5A880] block">03</span>
            <h3 className="font-serif text-xl text-[#F5F2EB]">Olhar Sempre Impecável</h3>
            <p className="text-xs text-[#9E9689] leading-relaxed">
              Remoção de fios crescidos e recolocação precisa.
            </p>
          </div>
        </div>

        {/* Simulador + Tabela Minimalista */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Coluna Esquerda: Simulador Interativo (5 colunas) */}
          <div className="lg:col-span-5 space-y-8 revelar-scroll">
            <div className="pb-4 border-b border-[var(--border-hairline)]">
              <span className="indexador-editorial text-[#C5A880] block">
                Cálculo em Tempo Real
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F2EB] mt-1">
                Simulador de Manutenção
              </h3>
            </div>

            {/* Passo 01: Técnica */}
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#9E9689] block numeral-tabular">
                01. Sua Técnica Atual
              </span>
              <div className="grid grid-cols-2 gap-2">
                {DADOS_MANUTENCAO.map((item) => {
                  const selecionada = tecnicaSelecionada === item.tecnica;
                  return (
                    <button
                      key={item.tecnica}
                      type="button"
                      onClick={() => definirTecnicaSelecionada(item.tecnica)}
                      className={`py-2.5 px-3.5 text-xs text-left rounded-[2px] border transition-colors cursor-pointer ${
                        selecionada
                          ? 'bg-[#C5A880] text-[#0E0C0A] border-[#C5A880] font-semibold'
                          : 'bg-transparent text-[#9E9689] border-[var(--border-hairline)] hover:border-[#C5A880] hover:text-[#F5F2EB]'
                      }`}
                    >
                      {item.tecnica}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Passo 02: Período */}
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#9E9689] block numeral-tabular">
                02. Tempo desde a última aplicação
              </span>
              <div className="grid grid-cols-3 gap-2">
                {(
                  [
                    { id: '15', rotulo: 'Até 15 dias' },
                    { id: '20', rotulo: '16 a 20 dias' },
                    { id: '25', rotulo: '21 a 25 dias' },
                  ] as const
                ).map((faixa) => {
                  const selecionada = faixaSelecionada === faixa.id;
                  return (
                    <button
                      key={faixa.id}
                      type="button"
                      onClick={() => definirFaixaSelecionada(faixa.id)}
                      className={`py-2.5 px-2 text-xs text-center rounded-[2px] border transition-colors cursor-pointer numeral-tabular ${
                        selecionada
                          ? 'bg-[#C5A880] text-[#0E0C0A] border-[#C5A880] font-semibold'
                          : 'bg-transparent text-[#9E9689] border-[var(--border-hairline)] hover:border-[#C5A880] hover:text-[#F5F2EB]'
                      }`}
                    >
                      {faixa.rotulo}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Leitura Tipográfica do Valor */}
            <div className="py-6 border-y border-[var(--border-hairline)] flex items-baseline justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-[0.18em] text-[#9E9689] block">
                  Valor da Manutenção
                </span>
                <span className="text-xs text-[#C5A880] mt-1 block numeral-tabular">
                  R$ {precoPixCalculado.toFixed(2).replace('.', ',')} no Pix ou espécie (5% OFF)
                </span>
              </div>
              <div className="font-serif text-4xl text-[#F5F2EB] numeral-tabular leading-none">
                R$ {precoCalculado.toFixed(2).replace('.', ',')}
              </div>
            </div>

            {/* Ação Direta */}
            <a
              href={obterLinkWhatsApp(`Manutenção ${tecnicaSelecionada} (${rotuloFaixa})`)}
              target="_blank"
              rel="noopener noreferrer"
              className="botao-editorial w-full py-4"
            >
              <span>Agendar Manutenção</span>
              <span className="seta-diagonal" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>

          {/* Coluna Direita: Tabela Limpa com Linhas Horizontais (7 colunas) */}
          <div
            className="lg:col-span-7 revelar-scroll"
            style={{ '--atraso': '140ms' } as React.CSSProperties}
          >
            <div className="pb-4 border-b border-[var(--border-hairline)]">
              <span className="indexador-editorial text-[#C5A880] block">
                Referência Completa
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F2EB] mt-1">
                Tabela de Valores
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm numeral-tabular">
                <thead>
                  <tr className="border-b border-[var(--border-hairline)] text-[11px] uppercase tracking-[0.18em] text-[#C5A880]">
                    <th className="py-4 pr-4 font-medium">Técnica</th>
                    <th className="py-4 px-3 font-medium text-right">Até 15 dias</th>
                    <th className="py-4 px-3 font-medium text-right">16 a 20 dias</th>
                    <th className="py-4 pl-3 font-medium text-right">21 a 25 dias</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-hairline)]">
                  {DADOS_MANUTENCAO.map((linha) => {
                    const ativa = tecnicaSelecionada === linha.tecnica;
                    return (
                      <tr
                        key={linha.tecnica}
                        onClick={() => definirTecnicaSelecionada(linha.tecnica)}
                        className={`transition-colors cursor-pointer ${
                          ativa ? 'bg-[#171411]' : 'hover:bg-[#171411]/70'
                        }`}
                      >
                        <td className="py-4 pr-4 font-medium text-[#F5F2EB]">
                          <span className="inline-flex items-center gap-2.5">
                            {ativa && (
                              <span className="text-[#C5A880]" aria-hidden="true">
                                —
                              </span>
                            )}
                            <span>{linha.tecnica}</span>
                          </span>
                        </td>
                        <td className="py-4 px-3 text-right text-[#9E9689]">
                          R$ {linha.ate15Dias},00
                        </td>
                        <td className="py-4 px-3 text-right text-[#9E9689]">
                          R$ {linha.de16a20Dias},00
                        </td>
                        <td className="py-4 pl-3 text-right text-[#9E9689]">
                          R$ {linha.de21a25Dias},00
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Nota Editorial sem Emoji */}
            <div className="mt-8 pt-6 border-t border-[var(--border-hairline)] text-xs sm:text-sm text-[#9E9689] leading-relaxed">
              <strong className="indexador-editorial text-[#C5A880] mr-2">
                NOTA DA ESPECIALISTA —
              </strong>
              Realizar a manutenção a cada 15 a 20 dias garante que os fios artificiais não fiquem
              distantes da raiz conforme seu cílio cresce, mantendo o alinhamento impecável e o peso
              equilibrado.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
