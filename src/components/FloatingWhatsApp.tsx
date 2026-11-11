import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';
import { obterLinkWhatsApp } from '../data/catalog';

/**
 * Botão Flutuante e Barra Fixa de Conversão para WhatsApp
 * Exibe botão flutuante no computador e barra fixa inferior para celular
 */
export const FloatingWhatsApp: React.FC = () => {
  return (
    <>
      {/* Botão Flutuante para Computador */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-50">
        <a
          href={obterLinkWhatsApp()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp com Amanda Borges"
          className="group relative flex items-center gap-3 p-3.5 bg-[#25D366] text-white rounded-full shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:bg-[#20ba5a] hover:scale-105 active:scale-95 transition-all duration-300"
        >
          {/* Efeito de Pulso Suave */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#128C7E]" />
          </span>

          <MessageCircle className="w-6 h-6 fill-white" />

          {/* Rótulo Expandido ao passar o mouse */}
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 text-xs font-bold tracking-wide pr-2">
            Agendar Horário VIP
          </span>
        </a>
      </div>

      {/* Barra Fixa Inferior para Celular (Mobile-First) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#180E21]/95 backdrop-blur-md border-t border-[#DFB15B]/30 p-3 shadow-2xl">
        <div className="flex items-center gap-2">
          <a
            href="#cilios"
            className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#231530] text-[#FDFCFA] text-xs font-semibold border border-[#2E1B3D]"
          >
            <Calendar className="w-4 h-4 text-[#DFB15B]" />
            <span>Ver Serviços</span>
          </a>

          <a
            href={obterLinkWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[1.5] flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gold-gradient text-[#0F0814] text-xs font-bold shadow-lg"
          >
            <MessageCircle className="w-4 h-4 fill-[#0F0814]" />
            <span>Agendar WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
};
