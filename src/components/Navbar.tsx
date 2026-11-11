import React, { useState, useEffect } from 'react';
import { DADOS_STUDIO, obterLinkWhatsApp } from '../data/catalog';

/**
 * Barra de Navegação Editorial
 * Navegação limpa em linha única com ScrollSpy por linha fina e CTA fosco.
 */
export const Navbar: React.FC = () => {
  const [rolouPagina, definirRolouPagina] = useState(false);
  const [menuAberto, definirMenuAberto] = useState(false);
  const [secaoAtiva, definirSecaoAtiva] = useState<string>('cilios');

  const linksNavegacao = [
    { id: 'cilios', numero: '01', nome: 'Cílios', destino: '#cilios' },
    { id: 'sobrancelhas', numero: '02', nome: 'Sobrancelhas', destino: '#sobrancelhas' },
    { id: 'manutencao', numero: '03', nome: 'Manutenção', destino: '#manutencao' },
    { id: 'sobre', numero: '04', nome: 'Sobre', destino: '#sobre' },
    { id: 'feedbacks', numero: '05', nome: 'Relatos', destino: '#feedbacks' },
    { id: 'politicas', numero: '06', nome: 'Políticas', destino: '#politicas' },
    { id: 'localizacao', numero: '07', nome: 'Localização', destino: '#localizacao' },
  ];

  useEffect(() => {
    const monitorarRolagem = () => {
      definirRolouPagina(window.scrollY > 30);

      const deslocamentoTopo = window.scrollY + 200;
      for (let i = linksNavegacao.length - 1; i >= 0; i--) {
        const elemento = document.getElementById(linksNavegacao[i].id);
        if (elemento && deslocamentoTopo >= elemento.offsetTop) {
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
    <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300">
      {/* Faixa superior discreta em desktop */}
      <div className="hidden md:block bg-[#0E0C0A] border-b border-[var(--border-hairline)] px-6 lg:px-10 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] tracking-[0.18em] uppercase text-[#9E9689] numeral-tabular">
          <span>Osasco, SP — Pestana (Fácil Estacionar)</span>
          <span className="text-[#C5A880]">5% OFF no Pix ou espécie</span>
          <a
            href={DADOS_STUDIO.urlInstagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F5F2EB] transition-colors"
          >
            @lashamandaborges
          </a>
        </div>
      </div>

      {/* Barra principal de navegação */}
      <nav
        aria-label="Navegação Principal"
        className={`px-6 lg:px-10 transition-all duration-300 ${
          rolouPagina || menuAberto
            ? 'bg-[#0E0C0A]/94 backdrop-blur-md border-b border-[var(--border-hairline)] py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
          {/* Assinatura Tipográfica da Marca */}
          <a href="#inicio" className="group flex flex-col">
            <span className="font-serif text-xl sm:text-2xl tracking-[0.06em] uppercase text-[#F5F2EB] leading-none">
              Studio Borges
            </span>
            <span className="text-[10px] tracking-[0.24em] uppercase text-[#C5A880] mt-1">
              Amanda Borges
            </span>
          </a>

          {/* Links Desktop com ScrollSpy minimalista */}
          <div className="hidden lg:flex items-center gap-7">
            {linksNavegacao.map((item) => {
              const estaAtivo = secaoAtiva === item.id;
              return (
                <a
                  key={item.id}
                  href={item.destino}
                  className={`relative py-1.5 text-[11px] uppercase tracking-[0.16em] transition-colors ${
                    estaAtivo
                      ? 'text-[#F5F2EB] font-medium'
                      : 'text-[#9E9689] hover:text-[#F5F2EB]'
                  }`}
                >
                  {item.nome}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-px bg-[#C5A880] origin-left transition-transform duration-300 ${
                      estaAtivo ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* CTA Desktop + Botão Menu Mobile */}
          <div className="flex items-center gap-4">
            <a
              href={obterLinkWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex botao-editorial px-5 py-2.5"
            >
              <span>Agendar</span>
              <span className="seta-diagonal" aria-hidden="true">
                ↗
              </span>
            </a>

            <button
              type="button"
              onClick={() => definirMenuAberto(!menuAberto)}
              className="lg:hidden px-3 py-2 border border-[var(--border-hairline)] rounded-[2px] text-[11px] uppercase tracking-[0.2em] text-[#F5F2EB] hover:border-[#C5A880] transition-colors cursor-pointer"
              aria-expanded={menuAberto}
              aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            >
              {menuAberto ? 'Fechar ×' : 'Menu'}
            </button>
          </div>
        </div>

        {/* Menu Mobile Editorial */}
        {menuAberto && (
          <div className="lg:hidden mt-4 pt-6 pb-8 border-t border-[var(--border-hairline)] space-y-6">
            <div className="flex flex-col divide-y divide-[var(--border-hairline)]">
              {linksNavegacao.map((item) => {
                const estaAtivo = secaoAtiva === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.destino}
                    onClick={() => definirMenuAberto(false)}
                    className="py-3.5 flex items-center justify-between text-sm tracking-[0.06em] transition-colors"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="text-[11px] text-[#C5A880] tracking-[0.2em] numeral-tabular">
                        {item.numero}
                      </span>
                      <span
                        className={`font-serif text-2xl ${
                          estaAtivo ? 'text-[#C5A880]' : 'text-[#F5F2EB]'
                        }`}
                      >
                        {item.nome}
                      </span>
                    </span>
                    <span className="text-xs text-[#9E9689]" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                );
              })}
            </div>

            <a
              href={obterLinkWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => definirMenuAberto(false)}
              className="botao-editorial w-full py-4"
            >
              <span>Agendar Horário</span>
              <span className="seta-diagonal" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};
