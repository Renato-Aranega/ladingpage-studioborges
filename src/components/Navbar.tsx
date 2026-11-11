import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, MapPin, Percent } from 'lucide-react';
import { DADOS_STUDIO, obterLinkWhatsApp } from '../data/catalog';

/**
 * Componente da Barra de Navegação Principal
 * Contém aviso superior com desconto Pix, links de navegação e botão para WhatsApp
 */
export const Navbar: React.FC = () => {
  // Estado para detectar se o usuário rolou a página para aplicar fundo com desfoque
  const [rolouPagina, definirRolouPagina] = useState(false);
  // Estado para controlar abertura do menu no celular
  const [menuAberto, definirMenuAberto] = useState(false);

  useEffect(() => {
    const monitorarRolagem = () => {
      definirRolouPagina(window.scrollY > 20);
    };
    window.addEventListener('scroll', monitorarRolagem);
    return () => window.removeEventListener('scroll', monitorarRolagem);
  }, []);

  // Links do menu com âncoras para as seções
  const linksNavegacao = [
    { nome: 'Cílios', destino: '#cilios' },
    { nome: 'Sobrancelhas', destino: '#sobrancelhas' },
    { nome: 'Manutenção', destino: '#manutencao' },
    { nome: 'Sobre Amanda', destino: '#sobre' },
    { nome: 'Políticas', destino: '#politicas' },
    { nome: 'Localização', destino: '#localizacao' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Faixa superior de avisos e destaques */}
      <div className="bg-[#180E21] border-b border-[#DFB15B]/20 text-xs py-1.5 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 text-[#D4C8DE] flex-wrap">
          <span className="flex items-center gap-1.5 text-[#DFB15B] font-semibold">
            <Percent className="w-3.5 h-3.5 text-[#DFB15B]" />
            5% OFF no Pix ou espécie
          </span>
          <span className="hidden md:inline text-[#8E7F9B]">•</span>
          <span className="hidden md:flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#A855F7]" />
            Pestana, Osasco - SP (Fácil Estacionar)
          </span>
          <span className="hidden lg:inline text-[#8E7F9B]">•</span>
          <span className="hidden lg:inline text-[#FDFCFA]/90">
            Instagram:{' '}
            <a
              href={DADOS_STUDIO.urlInstagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#DFB15B] hover:underline font-medium"
            >
              @lashamandaborges
            </a>
          </span>
        </div>
      </div>

      {/* Barra de navegação principal */}
      <nav
        className={`transition-all duration-300 px-4 lg:px-8 ${
          rolouPagina
            ? 'bg-[#0F0814]/92 backdrop-blur-md border-b border-[#DFB15B]/20 py-3 shadow-2xl'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo e nome da marca */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-[#DFB15B]/40 overflow-hidden bg-[#180E21] p-0.5 flex items-center justify-center shadow-lg group-hover:border-[#DFB15B] group-hover:shadow-[0_0_15px_rgba(223,177,91,0.3)] transition-all">
              <img
                src="/images/studio/logo-badge.png"
                alt="Logo Studio Borges"
                className="w-full h-full object-cover rounded-full"
                onError={(evento) => {
                  (evento.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div>
              <span className="font-serif tracking-wider text-lg lg:text-xl font-semibold text-[#FDFCFA] block leading-none">
                STUDIO BORGES
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#DFB15B] uppercase block mt-1 font-semibold">
                Amanda Borges
              </span>
            </div>
          </a>

          {/* Links para tela de computador */}
          <div className="hidden md:flex items-center gap-7">
            {linksNavegacao.map((item) => (
              <a
                key={item.nome}
                href={item.destino}
                className="text-sm text-[#D4C8DE] hover:text-[#DFB15B] transition-colors font-medium relative group"
              >
                {item.nome}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#DFB15B] to-[#A855F7] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Botão de agendamento prioritário */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={obterLinkWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold rounded-full group bg-gradient-to-br from-[#DFB15B] via-[#C89D42] to-[#7E22CE] text-white shadow-lg hover:shadow-[0_0_20px_rgba(223,177,91,0.35)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="px-4 py-2 transition-all ease-in duration-75 bg-[#0F0814] rounded-full group-hover:bg-opacity-0 flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-white transition-colors" />
                <span className="tracking-wide">Agendar Horário</span>
              </span>
            </a>
          </div>

          {/* Botão de menu para celular */}
          <button
            onClick={() => definirMenuAberto(!menuAberto)}
            className="md:hidden p-2 text-[#D4C8DE] hover:text-[#DFB15B] focus:outline-none"
            aria-label="Abrir menu de navegação"
          >
            {menuAberto ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu suspenso para celular */}
        {menuAberto && (
          <div className="md:hidden bg-[#180E21] border-b border-[#DFB15B]/30 px-6 py-6 mt-3 rounded-2xl shadow-2xl space-y-4">
            <div className="flex flex-col space-y-3">
              {linksNavegacao.map((item) => (
                <a
                  key={item.nome}
                  href={item.destino}
                  onClick={() => definirMenuAberto(false)}
                  className="text-base text-[#FDFCFA] hover:text-[#DFB15B] py-2 border-b border-[#2E1B3D] font-medium"
                >
                  {item.nome}
                </a>
              ))}
            </div>
            <div className="pt-2">
              <a
                href={obterLinkWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => definirMenuAberto(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gold-gradient text-[#0F0814] font-bold text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                Agendar via WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
