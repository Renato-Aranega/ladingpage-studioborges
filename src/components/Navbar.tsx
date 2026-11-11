import React, { useState, useEffect, useRef } from 'react';
import { obterLinkWhatsApp } from '../data/catalog';

const LINKS_NAVEGACAO = [
  { id: 'cilios', nome: 'Cílios', destino: '#cilios' },
  { id: 'sobrancelhas', nome: 'Sobrancelhas', destino: '#sobrancelhas' },
  { id: 'manutencao', nome: 'Manutenção', destino: '#manutencao' },
  { id: 'sobre', nome: 'Sobre', destino: '#sobre' },
  { id: 'localizacao', nome: 'Localização', destino: '#localizacao' },
] as const;

/**
 * Barra de Navegação Limpa (Tons Lavanda & Dourado)
 * ScrollSpy leve via IntersectionObserver e menu hambúrguer compacto no mobile.
 */
export const Navbar: React.FC = () => {
  const [rolouPagina, definirRolouPagina] = useState(false);
  const [menuAberto, definirMenuAberto] = useState(false);
  const [secaoAtiva, definirSecaoAtiva] = useState<string>('cilios');
  const referenciaMenuMobile = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const aoRolar = () => definirRolouPagina(window.scrollY > 20);
    window.addEventListener('scroll', aoRolar, { passive: true });
    aoRolar();

    if (typeof IntersectionObserver === 'undefined') {
      return () => window.removeEventListener('scroll', aoRolar);
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) {
            definirSecaoAtiva(entrada.target.id);
          }
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );

    LINKS_NAVEGACAO.forEach(({ id }) => {
      const elemento = document.getElementById(id);
      if (elemento) observador.observe(elemento);
    });

    return () => {
      window.removeEventListener('scroll', aoRolar);
      observador.disconnect();
    };
  }, []);

  // Fecha o menu compacto ao pressionar Esc ou tocar/clicar fora dele
  useEffect(() => {
    if (!menuAberto) return;

    const aoPressionarEsc = (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') definirMenuAberto(false);
    };

    const aoClicarFora = (evento: PointerEvent) => {
      if (
        referenciaMenuMobile.current &&
        !referenciaMenuMobile.current.contains(evento.target as Node)
      ) {
        definirMenuAberto(false);
      }
    };

    window.addEventListener('keydown', aoPressionarEsc);
    document.addEventListener('pointerdown', aoClicarFora);
    return () => {
      window.removeEventListener('keydown', aoPressionarEsc);
      document.removeEventListener('pointerdown', aoClicarFora);
    };
  }, [menuAberto]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        rolouPagina
          ? 'bg-[#FAF8FC]/95 backdrop-blur-md border-b border-[var(--borda-suave)] py-3 sm:py-3.5'
          : 'bg-[#FAF8FC]/85 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none py-3.5 sm:py-5'
      }`}
    >
      <nav aria-label="Navegação Principal" className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between gap-4 sm:gap-6">
          {/* Marca com Monograma Oficial */}
          <a href="#inicio" className="flex items-center gap-2.5 sm:gap-3">
            <img
              src="/images/studio/logo-monograma.webp"
              alt="Monograma Studio Borges"
              width={40}
              height={40}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-[#C49B4B]/60 shrink-0"
            />
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-2xl text-[#261835] leading-none tracking-tight">
                Studio Borges
              </span>
              <span className="hidden sm:block text-[10px] tracking-[0.22em] uppercase text-[#8A651D] mt-1 font-medium">
                Amanda Borges
              </span>
            </div>
          </a>

          {/* Links Desktop */}
          <div className="hidden md:flex items-center gap-7">
            {LINKS_NAVEGACAO.map((item) => {
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

          {/* CTA Único + Menu Hambúrguer Compacto */}
          <div ref={referenciaMenuMobile} className="relative flex items-center gap-3">
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
              onClick={() => definirMenuAberto((aberto) => !aberto)}
              className="md:hidden w-10 h-10 inline-flex items-center justify-center border border-[var(--borda-suave)] rounded-lg bg-white/90 hover:border-[#9B76C9]/45 transition-colors cursor-pointer"
              aria-expanded={menuAberto}
              aria-controls="menu-mobile-compacto"
              aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            >
              <span className="relative w-[18px] h-4 flex items-center justify-center" aria-hidden="true">
                <span
                  className={`absolute w-[18px] h-[1.5px] bg-[#261835] rounded-full transition-all duration-300 ${
                    menuAberto ? 'rotate-45 translate-y-0' : '-translate-y-[5px]'
                  }`}
                />
                <span
                  className={`absolute w-[18px] h-[1.5px] bg-[#261835] rounded-full transition-all duration-200 ${
                    menuAberto ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                  }`}
                />
                <span
                  className={`absolute w-[18px] h-[1.5px] bg-[#261835] rounded-full transition-all duration-300 ${
                    menuAberto ? '-rotate-45 translate-y-0' : 'translate-y-[5px]'
                  }`}
                />
              </span>
            </button>

            {/* Menu Flutuante Compacto (Não ocupa toda a tela) */}
            {menuAberto && (
              <div
                id="menu-mobile-compacto"
                className="md:hidden absolute right-0 top-full mt-2.5 w-60 max-w-[calc(100vw-2.5rem)] rounded-xl bg-white/95 backdrop-blur-md border border-[var(--borda-suave)] shadow-[0_10px_28px_rgba(38,24,53,0.08)] p-3 z-50"
              >
                <div className="flex flex-col gap-0.5">
                  {LINKS_NAVEGACAO.map((item) => {
                    const estaAtivo = secaoAtiva === item.id;
                    return (
                      <a
                        key={item.id}
                        href={item.destino}
                        onClick={() => definirMenuAberto(false)}
                        aria-current={estaAtivo ? 'location' : undefined}
                        className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                          estaAtivo
                            ? 'bg-[#F1EAF8] text-[#6F4B9E] font-semibold'
                            : 'text-[#261835] hover:bg-[#FAF8FC] hover:text-[#6F4B9E]'
                        }`}
                      >
                        {item.nome}
                      </a>
                    );
                  })}
                </div>
                <div className="pt-2.5 mt-2 border-t border-[var(--borda-suave)] sm:hidden">
                  <a
                    href={obterLinkWhatsApp()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => definirMenuAberto(false)}
                    className="botao-dourado w-full py-2.5"
                  >
                    Agendar Horário
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
