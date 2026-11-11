import React, { useEffect } from 'react';
import { obterLinkWhatsApp } from '../data/catalog';

interface ModalFotoProps {
  aberto: boolean;
  aoFechar: () => void;
  imagemUrl: string;
  titulo: string;
  descricao: string;
  preco: number;
  observacao?: string;
}

/**
 * Modal de Visualização Ampliada de Foto (Paleta Lavanda & Dourado)
 */
export const ModalFoto: React.FC<ModalFotoProps> = ({
  aberto,
  aoFechar,
  imagemUrl,
  titulo,
  descricao,
  preco,
  observacao,
}) => {
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
      aria-label={`Visualização de ${titulo}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#261835]/60 backdrop-blur-sm"
      onClick={aoFechar}
    >
      <div
        className="relative max-w-xl w-full bg-[#FAF8FC] border border-[var(--borda-suave)] rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[var(--borda-suave)] bg-white">
          <span className="font-serif text-xl text-[#261835]">{titulo}</span>
          <button
            type="button"
            onClick={aoFechar}
            className="text-xs uppercase tracking-[0.14em] text-[#5E4D70] hover:text-[#261835] cursor-pointer"
            aria-label="Fechar foto"
          >
            Fechar ×
          </button>
        </div>

        <div className="relative aspect-[4/5] max-h-[60vh] w-full bg-[#F1EAF8] flex items-center justify-center overflow-hidden">
          <img
            src={imagemUrl}
            alt={titulo}
            className="w-full h-full object-contain"
          />
        </div>

        {observacao && (
          <p className="text-[11px] text-[#6F4B9E] font-medium px-5 py-2.5 bg-[#FAF8FC] border-t border-[var(--borda-suave)] text-center">
            {observacao}
          </p>
        )}

        <div className="p-5 bg-white border-t border-[var(--borda-suave)] space-y-4">
          <div className="flex items-baseline justify-between gap-4">
            <p className="text-xs sm:text-sm text-[#5E4D70]">{descricao}</p>
            <div className="text-right shrink-0 numeral-tabular">
              <span className="font-serif text-2xl text-[#261835] block leading-none">
                R$ {preco.toFixed(0)}
              </span>
              <span className="text-[11px] text-[#8A651D] font-medium block mt-1">
                R$ {precoPix.toFixed(2).replace('.', ',')} no Pix
              </span>
            </div>
          </div>

          <a
            href={obterLinkWhatsApp(titulo)}
            target="_blank"
            rel="noopener noreferrer"
            className="botao-dourado w-full py-3.5"
          >
            Agendar {titulo}
          </a>
        </div>
      </div>
    </div>
  );
};
