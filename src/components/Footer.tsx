import React from 'react';
import { DADOS_STUDIO, obterLinkWhatsApp } from '../data/catalog';

/**
 * Rodapé Discreto e Limpo
 */
export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF8FC] border-t border-[var(--borda-suave)] py-10 text-xs text-[#5E4D70]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="font-serif text-lg text-[#261835] block leading-none">
            Studio Borges
          </span>
          <span className="text-[11px] block mt-1">
            Amanda Borges • {DADOS_STUDIO.endereco}
          </span>
        </div>

        <div className="flex items-center gap-6 text-[11px] uppercase tracking-[0.14em] font-medium text-[#6F4B9E]">
          <a
            href={DADOS_STUDIO.urlInstagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#261835] transition-colors"
          >
            Instagram
          </a>
          <a
            href={obterLinkWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#261835] transition-colors"
          >
            WhatsApp
          </a>
          <span className="text-[#5E4D70] font-normal">
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
};
