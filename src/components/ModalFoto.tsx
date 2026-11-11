import React from 'react';
import { X, ZoomIn, MessageCircle } from 'lucide-react';
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
 * Modal Lightbox para visualização de fotos em alta resolução
 * Permite que a cliente veja todos os detalhes dos fios e acabamento
 */
export const ModalFoto: React.FC<ModalFotoProps> = ({
  aberto,
  aoFechar,
  imagemUrl,
  titulo,
  descricao,
  preco,
}) => {
  if (!aberto) return null;

  const precoPix = preco * 0.95;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={aoFechar}
    >
      <div
        className="relative max-w-2xl w-full fundo-superficie border borda-destaque rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão de Fechar */}
        <button
          onClick={aoFechar}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full fundo-card-translucido text-[#DFB15B] hover:fundo-card border borda-suave transition-colors cursor-pointer"
          aria-label="Fechar visualização da foto"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Imagem em tamanho nobre com aspecto vertical original */}
        <div className="relative aspect-[3/4] max-h-[65vh] w-full overflow-hidden bg-black flex items-center justify-center">
          <img
            src={imagemUrl}
            alt={titulo}
            className="w-full h-full object-contain"
          />
          <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs text-[#DFB15B] fundo-superficie-translucido px-3 py-1 rounded-full border borda-suave backdrop-blur-sm">
            <ZoomIn className="w-3.5 h-3.5" />
            <span>Foto real do Studio Borges</span>
          </div>
        </div>

        {/* Rodapé do Modal com Informações e CTA */}
        <div className="p-6 space-y-4 fundo-superficie">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-serif font-bold texto-principal">{titulo}</h3>
              <p className="text-xs texto-secundario mt-0.5 font-light">{descricao}</p>
            </div>
            <div className="text-left sm:text-right shrink-0">
              <span className="text-2xl font-serif font-bold texto-principal">
                R$ {preco.toFixed(2).replace('.', ',')}
              </span>
              <span className="block text-[11px] text-[#DFB15B] font-semibold">
                R$ {precoPix.toFixed(2).replace('.', ',')} no Pix (5% OFF)
              </span>
            </div>
          </div>

          <a
            href={obterLinkWhatsApp(titulo)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-gold-gradient text-[#0F0814] font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-[1.01] transition-all botao-magnetico"
          >
            <MessageCircle className="w-4 h-4 text-[#0F0814]" />
            <span>Agendar {titulo} no WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

