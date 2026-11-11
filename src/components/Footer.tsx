import React from 'react';
import { DADOS_STUDIO, obterLinkWhatsApp } from '../data/catalog';

/**
 * Rodapé Institucional Minimalista
 * Alinhamento arquitetônico em 3 colunas com divisórias de 1px.
 */
export const Footer: React.FC = () => {
  const rolarAoTopo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0E0C0A] text-[#9E9689] border-t border-[var(--border-hairline)] pt-20 pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-[var(--border-hairline)]">
          {/* Coluna 1: Marca e Canais */}
          <div className="md:col-span-5 space-y-5">
            <div>
              <span className="font-serif text-2xl tracking-[0.06em] uppercase text-[#F5F2EB] block leading-none">
                Studio Borges
              </span>
              <span className="indexador-editorial text-[#C5A880] block mt-2">
                Amanda Borges — Osasco, SP
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#9E9689] max-w-sm leading-relaxed font-light">
              Especialista em realçar a beleza e a autoestima feminina através de técnicas
              personalizadas de extensão de cílios e design de sobrancelhas em Osasco, SP.
            </p>

            <div className="flex items-center gap-6 pt-1 text-[11px] uppercase tracking-[0.18em]">
              <a
                href={DADOS_STUDIO.urlInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="link-editorial text-[#F5F2EB] hover:text-[#C5A880] transition-colors inline-flex items-center gap-1"
              >
                <span>Instagram</span>
                <span className="seta-diagonal text-[#C5A880]">↗</span>
              </a>
              <a
                href={obterLinkWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="link-editorial text-[#F5F2EB] hover:text-[#C5A880] transition-colors inline-flex items-center gap-1"
              >
                <span>WhatsApp</span>
                <span className="seta-diagonal text-[#C5A880]">↗</span>
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="indexador-editorial text-[#C5A880]">Navegação</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#cilios" className="hover:text-[#F5F2EB] transition-colors">
                  Extensões de Cílios
                </a>
              </li>
              <li>
                <a href="#sobrancelhas" className="hover:text-[#F5F2EB] transition-colors">
                  Design de Sobrancelhas
                </a>
              </li>
              <li>
                <a href="#manutencao" className="hover:text-[#F5F2EB] transition-colors">
                  Tabela de Manutenções
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#F5F2EB] transition-colors">
                  Sobre Amanda Borges
                </a>
              </li>
              <li>
                <a href="#politicas" className="hover:text-[#F5F2EB] transition-colors">
                  Políticas de Atendimento
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#F5F2EB] transition-colors">
                  Como Chegar (Osasco)
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Atendimento & Endereço */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="indexador-editorial text-[#C5A880]">Atendimento</h4>
            <div className="space-y-2.5 leading-relaxed">
              <p className="text-[#F5F2EB]">{DADOS_STUDIO.endereco}</p>
              <p className="numeral-tabular">WhatsApp: {DADOS_STUDIO.telefone}</p>
              <p>{DADOS_STUDIO.horarioFuncionamento}</p>
            </div>
          </div>
        </div>

        {/* Créditos e Retorno ao Topo */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-[0.16em]">
          <p className="numeral-tabular">
            © {new Date().getFullYear()} Studio Borges — Amanda Borges. Todos os direitos reservados.
          </p>

          <button
            type="button"
            onClick={rolarAoTopo}
            className="text-[#C5A880] hover:text-[#F5F2EB] transition-colors cursor-pointer"
            aria-label="Voltar ao topo da página"
          >
            Voltar ao topo ↑
          </button>
        </div>
      </div>
    </footer>
  );
};
