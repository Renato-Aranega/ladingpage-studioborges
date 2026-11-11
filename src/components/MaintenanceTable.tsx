import React, { useState } from 'react';
import { Clock, AlertCircle, Sparkles, MessageCircle, Calculator } from 'lucide-react';
import { DADOS_MANUTENCAO, obterLinkWhatsApp } from '../data/catalog';

/**
 * Tabela e Simulador Interativo de Manutenções Periódicas
 */
export const MaintenanceTable: React.FC = () => {
  const [tecnicaSelecionada, definirTecnicaSelecionada] = useState(DADOS_MANUTENCAO[0].tecnica);
  const [faixaSelecionada, definirFaixaSelecionada] = useState<'15' | '20' | '25'>('15');

  const dadosAtuais = DADOS_MANUTENCAO.find((item) => item.tecnica === tecnicaSelecionada) || DADOS_MANUTENCAO[0];

  const obterPreco = () => {
    if (faixaSelecionada === '15') return dadosAtuais.ate15Dias;
    if (faixaSelecionada === '20') return dadosAtuais.de16a20Dias;
    return dadosAtuais.de21a25Dias;
  };

  const precoCalculado = obterPreco();
  const precoPixCalculado = precoCalculado * 0.95;

  return (
    <section id="manutencao" className="py-20 sm:py-24 relative border-t borda-suave fundo-principal transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full fundo-card border borda-destaque text-xs font-semibold text-[#DFB15B] shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CUIDADO CONTÍNUO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight texto-principal">
            Tabela de <span className="text-gold-gradient italic">Manutenções</span>
          </h2>
          <p className="text-sm sm:text-base texto-secundario font-light">
            Manter seus cílios é manter sua beleza sempre em destaque! Quanto mais frequente o cuidado, mais saudável é para o seu fio natural e mais econômico para você.
          </p>

          {/* Regras Importantes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-left">
            <div className="p-4 rounded-xl fundo-superficie border borda-suave flex items-start gap-3 shadow-sm">
              <Clock className="w-5 h-5 text-[#DFB15B] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold texto-principal">Periodicidade Ideal</p>
                <p className="text-xs texto-secundario mt-0.5 font-light">A cada 15 a 24 dias para manter o volume pleno.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl fundo-superficie border borda-suave flex items-start gap-3 shadow-sm">
              <AlertCircle className="w-5 h-5 text-[#A855F7] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold texto-principal">Limite de 30 Dias</p>
                <p className="text-xs texto-secundario mt-0.5 font-light">Após 30 dias ou &lt;40% dos fios, é cobrado novo procedimento.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl fundo-superficie border borda-suave flex items-start gap-3 shadow-sm">
              <Sparkles className="w-5 h-5 text-[#DFB15B] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold texto-principal">Olhar Sempre Impecável</p>
                <p className="text-xs texto-secundario mt-0.5 font-light">Remoção de fios crescidos e recolocação precisa.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Simulador Interativo e Tabela Comparativa Completa */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Simulador (5 colunas) */}
          <div className="lg:col-span-5 fundo-superficie rounded-2xl p-6 sm:p-8 border borda-destaque shadow-xl space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b borda-suave">
              <div className="w-10 h-10 rounded-xl bg-[#7E22CE]/20 border borda-destaque flex items-center justify-center text-[#DFB15B]">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold texto-principal">Simulador de Manutenção</h3>
                <p className="text-xs texto-secundario">Descubra o valor exato para o seu caso</p>
              </div>
            </div>

            {/* Passo 1: Escolha da Técnica */}
            <div className="space-y-2">
              <label className="text-xs font-semibold texto-principal uppercase tracking-wider block">
                1. Sua Técnica Atual:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {DADOS_MANUTENCAO.map((item) => (
                  <button
                    key={item.tecnica}
                    onClick={() => definirTecnicaSelecionada(item.tecnica)}
                    className={`py-2 px-3 rounded-lg text-xs font-medium text-left transition-all cursor-pointer ${
                      tecnicaSelecionada === item.tecnica
                        ? 'bg-gold-gradient text-[#0F0814] font-bold shadow-md'
                        : 'fundo-elevado texto-secundario hover:texto-principal border borda-suave'
                    }`}
                  >
                    {item.tecnica}
                  </button>
                ))}
              </div>
            </div>

            {/* Passo 2: Faixa de Dias */}
            <div className="space-y-2">
              <label className="text-xs font-semibold texto-principal uppercase tracking-wider block">
                2. Tempo desde a última aplicação:
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => definirFaixaSelecionada('15')}
                  className={`py-2.5 px-3 rounded-lg text-xs font-medium transition-all text-center cursor-pointer ${
                    faixaSelecionada === '15'
                      ? 'bg-gold-gradient text-[#0F0814] font-bold shadow-md'
                      : 'fundo-elevado texto-secundario hover:texto-principal border borda-suave'
                  }`}
                >
                  Até 15 dias
                </button>
                <button
                  onClick={() => definirFaixaSelecionada('20')}
                  className={`py-2.5 px-3 rounded-lg text-xs font-medium transition-all text-center cursor-pointer ${
                    faixaSelecionada === '20'
                      ? 'bg-gold-gradient text-[#0F0814] font-bold shadow-md'
                      : 'fundo-elevado texto-secundario hover:texto-principal border borda-suave'
                  }`}
                >
                  16 a 20 dias
                </button>
                <button
                  onClick={() => definirFaixaSelecionada('25')}
                  className={`py-2.5 px-3 rounded-lg text-xs font-medium transition-all text-center cursor-pointer ${
                    faixaSelecionada === '25'
                      ? 'bg-gold-gradient text-[#0F0814] font-bold shadow-md'
                      : 'fundo-elevado texto-secundario hover:texto-principal border borda-suave'
                  }`}
                >
                  21 a 25 dias
                </button>
              </div>
            </div>

            {/* Resultado do Cálculo */}
            <div className="p-5 rounded-xl fundo-card border borda-destaque text-center space-y-1 shadow-inner">
              <span className="text-xs texto-secundario">Valor da manutenção calculada:</span>
              <div className="text-3xl font-serif font-bold texto-principal">
                R$ {precoCalculado.toFixed(2).replace('.', ',')}
              </div>
              <div className="text-xs text-[#DFB15B] font-bold">
                ou R$ {precoPixCalculado.toFixed(2).replace('.', ',')} no Pix / Dinheiro (5% OFF)
              </div>
            </div>

            {/* Botão de Agendamento */}
            <a
              href={obterLinkWhatsApp(`Manutenção ${tecnicaSelecionada} (${faixaSelecionada === '15' ? 'até 15 dias' : faixaSelecionada === '20' ? '16 a 20 dias' : '21 a 25 dias'})`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gold-gradient text-[#0F0814] font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-[1.02] transition-all botao-magnetico"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar Minha Manutenção</span>
            </a>
          </div>

          {/* Tabela Completa (7 colunas) */}
          <div className="lg:col-span-7 fundo-superficie rounded-2xl p-6 sm:p-8 border borda-suave shadow-lg overflow-x-auto">
            <h3 className="text-lg font-serif font-bold texto-principal mb-4">
              Tabela Completa de Valores
            </h3>
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b borda-suave text-[#DFB15B]">
                  <th className="py-3 px-3 font-semibold uppercase tracking-wider">Técnica</th>
                  <th className="py-3 px-3 font-semibold uppercase tracking-wider text-center">Até 15 dias</th>
                  <th className="py-3 px-3 font-semibold uppercase tracking-wider text-center">16 a 20 dias</th>
                  <th className="py-3 px-3 font-semibold uppercase tracking-wider text-center">21 a 25 dias</th>
                </tr>
              </thead>
              <tbody className="divide-y borda-suave">
                {DADOS_MANUTENCAO.map((linha) => (
                  <tr
                    key={linha.tecnica}
                    className={`hover:fundo-elevado transition-colors ${
                      tecnicaSelecionada === linha.tecnica ? 'fundo-elevado font-medium' : ''
                    }`}
                  >
                    <td className="py-3.5 px-3 texto-principal font-medium flex items-center gap-1.5">
                      {tecnicaSelecionada === linha.tecnica && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#DFB15B]" />
                      )}
                      {linha.tecnica}
                    </td>
                    <td className="py-3.5 px-3 text-center texto-secundario">
                      R$ {linha.ate15Dias},00
                    </td>
                    <td className="py-3.5 px-3 text-center texto-secundario">
                      R$ {linha.de16a20Dias},00
                    </td>
                    <td className="py-3.5 px-3 text-center texto-secundario">
                      R$ {linha.de21a25Dias},00
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6 p-4 rounded-xl fundo-card border borda-suave text-xs texto-mutado leading-relaxed">
              💡 <strong>Dica da Amanda:</strong> Realizar a manutenção a cada 15-20 dias garante que os fios artificiais não fiquem distantes da raiz conforme seu cílio cresce, mantendo o alinhamento impecável e o peso equilibrado.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
