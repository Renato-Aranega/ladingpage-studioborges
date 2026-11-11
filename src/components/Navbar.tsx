import React, { useState, useEffect } from 'react';
import { obterLinkWhatsApp } from '../data/catalog';

/**
 * Barra de Navegação Limpa (Tons Lavanda & Dourado)
 */
export const Navbar: React.FC = () => {
  const [rolouPagina, definirRolouPagina] = useState(false);
  const [menuAberto, definirMenuAberto] = useState(false);
  const [secaoAtiva, definirSecaoAtiva] = useState<string>('cilios');

  const linksNavegacao = [
    { id: 'cilios', nome: 'Cílios', destino: '#cilios' },
    { id: 'sobrancelhas', nome: 'Sobrancelhas', destino: '#sobrancelhas' },
    { id: 'manutencao', nome: 'Manutenção', destino: '#manutencao' },
    { id: 'sobre', nome: 'Sobre', destino: '#sobre' },
    { id: 'localizacao', nome: 'Localização', destino: '#localizacao' },
  ];

  useEffect(() => {
    const monitorarRolagem = () => {
      definirRolouPagina(window.scrollY > 20);
      const deslocamento = window.scrollY + 180;
      for (let i = linksNavegacao.length - 1; i >= 0; i--) {
        const elemento = document.getElementById(linksNavegacao[i].id);
        if (elemento && deslocamento >= elemento.offsetTop) {
          definirSecaoAtiva(linksNavegacao[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', monitorarRolagem, { passive: true });
    monitorarRolagem();
    return () => window.removeEventListener('scroll', monitorarRolagem);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        rolouPagina || menuAberto
          ? 'bg-[#FAF8FC]/95 backdrop-blur-md border-b border-[var(--borda-suave)] py-3 sm:py-3.5'
          : 'bg-[#FAF8FC]/85 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none py-3.5 sm:py-5'
      }`}
    >
      <nav aria-label="Navegação Principal" className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between gap-4 sm:gap-6">
          {/* Marca */}
          <a href="#inicio" className="flex flex-col">
            <span className="font-serif text-lg sm:text-2xl text-[#261835] leading-none tracking-tight">
              Studio Borges
            </span>
            <span className="hidden sm:block text-[10px] tracking-[0.22em] uppercase text-[#8A651D] mt-1 font-medium">
              Amanda Borges
            </span>
          </a>

          {/* Links Desktop */}
          <div className="hidden md:flex items-center gap-7">
            {linksNavegacao.map((item) => {
              const estaAtivo = secaoAtiva === item.id;
              return (
                <a
                  key={item.id}
                  href={item.destino}
                  className={`relative py-1 text-xs tracking-wide transition-colors ${
                    estaAtivo
                      ? 'text-[#6F4B9E] font-semibold'
                      : 'text-[#5E4D70] hover:text-[#261835]'
                  }`}
                >
                  {item.nome}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C49B4B] origin-left transition-transform duration-300 ${
                      estaAtivo ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* CTA Único + Menu Mobile */}
          <div className="flex items-center gap-3">
            <a
              href={obterLinkWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex botao-dourado px-5 py-2.5"
            >
              Agendar
            </a>

            <button
              type="button"
              onClick={() => definirMenuAberto(!menuAberto)}
              className="md:hidden px-3 py-1.5 border border-[var(--borda-suave)] rounded-md text-xs text-[#261835] bg-white/80 cursor-pointer"
              aria-expanded={menuAberto}
              aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            >
              {menuAberto ? 'Fechar' : 'Menu'}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {menuAberto && (
          <div className="md:hidden mt-4 pt-4 pb-6 border-t border-[var(--borda-suave)] space-y-4">
            <div className="flex flex-col divide-y divide-[var(--borda-suave)]">
              {linksNavegacao.map((item) => (
                <a
                  key={item.id}
                  href={item.destino}
                  onClick={() => definirMenuAberto(false)}
                  className="py-3 text-base text-[#261835] hover:text-[#6F4B9E] transition-colors"
                >
                  {item.nome}
                </a>
              ))}
            </div>
            <a
              href={obterLinkWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => definirMenuAberto(false)}
              className="botao-dourado w-full py-3"
            >
              Agendar Horário
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};
