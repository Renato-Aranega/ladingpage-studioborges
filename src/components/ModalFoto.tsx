import React, { useEffect } from 'react';
import { obterLinkWhatsApp } from '../data/catalog';

interface ModalFotoProps {
  aberto: boolean;
  aoFechar: () => void;
  imagemUrl: string;
  titulo: string;
  descricao: string;
  preco: number;
}

/**
 * Lightbox Editorial para visualização em alta resolução.
 * Acabamento fosco em Obsidian Espresso (#0E0C0A) com linhas de 1px.
 */
export const ModalFoto: React.FC<ModalFotoProps> = ({
  aberto,
  aoFechar,
  imagemUrl,
  titulo,
  descricao,
  preco,
}) => {
  // Permite fechar o modal pressionando a tecla Esc
  useEffect(() => {
    if (!aberto) return;
    const lidarComTecla = (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') aoFechar();
    };
    window.addEventListener('keydown', lidarComTecla);
    return () => window.removeEventListener('keydown', lidarComTecla);
  }, [aberto, aoFechar]);

  if (!aberto) return null;

  const precoPix = preco * 0.95;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Visualização ampliada de ${titulo}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0E0C0A]/90 backdrop-blur-sm"
      onClick={aoFechar}
    >
      <div
        className="relative max-w-2xl w-full bg-[#0E0C0A] border border-[var(--border-hairline)] rounded-[4px] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho do Modal */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-hairline)]">
          <span className="indexador-editorial text-[#C5A880]">
            Registro Real — Studio Borges
          </span>
          <button
            type="button"
            onClick={aoFechar}
            className="text-[11px] uppercase tracking-[0.2em] text-[#9E9689] hover:text-[#F5F2EB] transition-colors cursor-pointer"
            aria-label="Fechar visualização da foto"
          >
            Fechar ×
          </button>
        </div>

        {/* Fotografia em Proporção Original Limpa */}
        <div className="relative aspect-[4/5] max-h-[62vh] w-full bg-[#171411] flex items-center justify-center overflow-hidden">
          <img
            src={imagemUrl}
            alt={titulo}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Rodapé Informativo e Ação Seca */}
        <div className="p-6 space-y-5 border-t border-[var(--border-hairline)]">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
            <div className="space-y-1">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F2EB] leading-tight">
                {titulo}
              </h3>
              <p className="text-xs sm:text-sm text-[#9E9689] max-w-md font-light">
                {descricao}
              </p>
            </div>
            <div className="sm:text-right shrink-0 numeral-tabular">
              <span className="font-serif text-2xl text-[#F5F2EB] block leading-none">
                R$ {preco.toFixed(2).replace('.', ',')}
              </span>
              <span className="text-[11px] text-[#C5A880] tracking-[0.08em] uppercase block mt-1.5">
                R$ {precoPix.toFixed(2).replace('.', ',')} no Pix (5% OFF)
              </span>
            </div>
          </div>

          <a
            href={obterLinkWhatsApp(titulo)}
            target="_blank"
            rel="noopener noreferrer"
            className="botao-editorial w-full py-4"
          >
            <span>Agendar Procedimento</span>
            <span className="seta-diagonal" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
