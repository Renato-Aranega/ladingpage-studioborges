import React from 'react';
import { Phone, MapPin, Heart, ArrowUp } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import { DADOS_STUDIO, obterLinkWhatsApp } from '../data/catalog';

/**
 * Rodapé Principal do Site (Footer)
 * Apresenta dados da empresa, links de navegação rápida, redes sociais e créditos
 */
export const Footer: React.FC = () => {
  // Função para retornar suavemente ao topo da página
  const rolarAoTopo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="fundo-secundario border-t borda-suave pt-16 pb-24 md:pb-16 text-xs texto-secundario">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b borda-suave">
          
          {/* Coluna 1: Marca e Redes (5 colunas) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border borda-destaque overflow-hidden fundo-superficie p-0.5 flex items-center justify-center shadow-lg">
                <img
                  src="/images/studio/logo-badge.png"
                  alt="Logo Studio Borges"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-serif tracking-wider text-lg font-bold texto-principal block leading-none">
                  STUDIO BORGES
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#DFB15B] uppercase block mt-1 font-semibold">
                  Amanda Borges
                </span>
              </div>
            </div>

            <p className="text-xs texto-secundario max-w-sm leading-relaxed font-light">
              Especialista em realçar a beleza e a autoestima feminina através de técnicas personalizadas de extensão de cílios e design de sobrancelhas em Osasco, SP.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={DADOS_STUDIO.urlInstagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Studio Borges"
                className="w-9 h-9 rounded-full fundo-superficie border borda-destaque flex items-center justify-center text-[#DFB15B] hover:scale-110 hover:shadow-[0_0_12px_rgba(223,177,91,0.3)] transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={obterLinkWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Studio Borges"
                className="w-9 h-9 rounded-full fundo-superficie border borda-suave flex items-center justify-center text-[#25D366] hover:scale-110 hover:shadow-[0_0_12px_rgba(37,211,102,0.3)] transition-all"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida (3 colunas) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider texto-principal">
              Navegação
            </h4>
            <ul className="space-y-2 font-light">
              <li><a href="#cilios" className="hover:text-[#DFB15B] transition-colors">Extensões de Cílios</a></li>
              <li><a href="#sobrancelhas" className="hover:text-[#DFB15B] transition-colors">Design de Sobrancelhas</a></li>
              <li><a href="#manutencao" className="hover:text-[#DFB15B] transition-colors">Tabela de Manutenções</a></li>
              <li><a href="#sobre" className="hover:text-[#DFB15B] transition-colors">Sobre Amanda Borges</a></li>
              <li><a href="#politicas" className="hover:text-[#DFB15B] transition-colors">Políticas de Atendimento</a></li>
              <li><a href="#localizacao" className="hover:text-[#DFB15B] transition-colors">Como Chegar (Osasco)</a></li>
            </ul>
          </div>

          {/* Coluna 3: Horários e Contato (4 colunas) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider texto-principal">
              Atendimento & Contato
            </h4>
            <div className="space-y-2 text-xs font-light">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#DFB15B] shrink-0 mt-0.5" />
                <span>{DADOS_STUDIO.endereco}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>WhatsApp: {DADOS_STUDIO.telefone}</span>
              </p>
              <p className="text-[11px] texto-mutado pt-2">
                {DADOS_STUDIO.horarioFuncionamento}
              </p>
            </div>
          </div>

        </div>

        {/* Créditos Inferiores e Botão Voltar ao Topo */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] texto-mutado">
          <p>© {new Date().getFullYear()} Studio Borges - Amanda Borges. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 texto-secundario">
              Feito com <Heart className="w-3 h-3 text-[#A855F7] fill-[#A855F7]" /> para realçar sua autoestima
            </span>
            <button
              onClick={rolarAoTopo}
              className="p-2 rounded-lg fundo-superficie border borda-suave texto-secundario hover:text-[#DFB15B] hover:borda-destaque transition-colors cursor-pointer"
              aria-label="Voltar ao topo da página"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
