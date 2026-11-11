import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, MapPin, Percent, Sun, Moon } from 'lucide-react';
import { DADOS_STUDIO, obterLinkWhatsApp } from '../data/catalog';
import { usarTema } from '../context/ThemeContext';

/**
 * Componente da Barra de Navegação Principal
 * Com indicador ativo de rolagem (ScrollSpy), alternador de modo claro/escuro
 * e botão magnético de agendamento.
 */
export const Navbar: React.FC = () => {
  // Estado para detectar se o usuário rolou a página
  const [rolouPagina, definirRolouPagina] = useState(false);
  // Estado para controlar abertura do menu no celular
  const [menuAberto, definirMenuAberto] = useState(false);
  // Seção ativa atualmente na tela (ScrollSpy)
  const [secaoAtiva, definirSecaoAtiva] = useState<string>('cilios');

  // Contexto do tema (modo claro / escuro)
  const { tema, alternarTema } = usarTema();

  // Links do menu com âncoras para as seções
  const linksNavegacao = [
    { id: 'cilios', nome: 'Cílios', destino: '#cilios' },
    { id: 'sobrancelhas', nome: 'Sobrancelhas', destino: '#sobrancelhas' },
    { id: 'manutencao', nome: 'Manutenção', destino: '#manutencao' },
    { id: 'sobre', nome: 'Sobre Amanda', destino: '#sobre' },
    { id: 'feedbacks', nome: 'Avaliações', destino: '#feedbacks' },
    { id: 'politicas', nome: 'Políticas', destino: '#politicas' },
    { id: 'localizacao', nome: 'Localização', destino: '#localizacao' },
  ];

  useEffect(() => {
    const monitorarRolagem = () => {
      definirRolouPagina(window.scrollY > 20);

      // ScrollSpy: identifica qual seção está no campo de visão
      const secoes = linksNavegacao.map((item) => document.getElementById(item.id));
      const deslocamentoTopo = window.scrollY + 180;

      for (let i = secoes.length - 1; i >= 0; i--) {
        const elemento = secoes[i];
        if (elemento) {
          const topoSecao = elemento.offsetTop;
          if (deslocamentoTopo >= topoSecao) {
            definirSecaoAtiva(linksNavegacao[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', monitorarRolagem, { passive: true });
    monitorarRolagem();
    return () => window.removeEventListener('scroll', monitorarRolagem);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Faixa superior de avisos e destaques */}
      <div className="fundo-superficie border-b borda-suave text-xs py-1.5 px-4 text-center transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 texto-secundario flex-wrap">
          <span className="flex items-center gap-1.5 text-[#DFB15B] font-semibold">
            <Percent className="w-3.5 h-3.5 text-[#DFB15B]" />
            5% OFF no Pix ou espécie
          </span>
          <span className="hidden md:inline texto-mutado">•</span>
          <span className="hidden md:flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#A855F7]" />
            Pestana, Osasco - SP (Fácil Estacionar)
          </span>
          <span className="hidden lg:inline texto-mutado">•</span>
          <span className="hidden lg:inline texto-principal font-medium">
            Instagram:{' '}
            <a
              href={DADOS_STUDIO.urlInstagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#DFB15B] hover:underline font-semibold"
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
            ? 'fundo-superficie border-b borda-suave py-3 shadow-xl backdrop-blur-md'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo e Nome da Marca */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border borda-destaque overflow-hidden fundo-superficie p-0.5 flex items-center justify-center shadow-lg group-hover:scale-105 transition-all">
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
              <span className="font-serif tracking-wider text-lg lg:text-xl font-bold texto-principal block leading-none">
                STUDIO BORGES
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#DFB15B] uppercase block mt-1 font-semibold">
                Amanda Borges
              </span>
            </div>
          </a>

          {/* Links para Computador com Indicador da Seção Ativa (ScrollSpy) */}
          <div className="hidden lg:flex items-center gap-6">
            {linksNavegacao.map((item) => {
              const estaAtivo = secaoAtiva === item.id;
              return (
                <a
                  key={item.id}
                  href={item.destino}
                  className={`text-xs font-semibold tracking-wide transition-all duration-200 relative py-1 px-2.5 rounded-lg ${
                    estaAtivo
                      ? 'text-[#DFB15B] fundo-elevado shadow-sm font-bold'
                      : 'texto-secundario hover:text-[#DFB15B]'
                  }`}
                >
                  {item.nome}
                  {estaAtivo && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#DFB15B] rounded-full shadow-[0_0_8px_#DFB15B]" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Área Direita: Alternador de Tema & CTA WhatsApp */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Alternador de Modo Claro / Escuro */}
            <button
              onClick={alternarTema}
              className="p-2.5 rounded-full fundo-superficie border borda-suave text-[#DFB15B] hover:scale-110 active:scale-95 transition-all shadow-md cursor-pointer"
              title={tema === 'escuro' ? 'Mudar para Modo Claro' : 'Mudar para Modo Escuro'}
              aria-label="Alternar tema de cores"
            >
              {tema === 'escuro' ? (
                <Sun className="w-4 h-4 text-[#DFB15B]" />
              ) : (
                <Moon className="w-4 h-4 text-[#7E22CE]" />
              )}
            </button>

            {/* Botão de Agendamento Prioritário */}
            <a
              href={obterLinkWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold rounded-full group bg-gradient-to-br from-[#DFB15B] via-[#C89D42] to-[#7E22CE] text-white shadow-lg hover:shadow-[0_0_20px_rgba(223,177,91,0.35)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="px-4 py-2 transition-all ease-in duration-75 fundo-principal rounded-full group-hover:bg-opacity-0 flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-white transition-colors" />
                <span className="tracking-wide">Agendar Horário</span>
              </span>
            </a>
          </div>

          {/* Botões para Celular: Alternador de Tema + Menu Hambúrguer */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={alternarTema}
              className="p-2 rounded-full fundo-superficie border borda-suave text-[#DFB15B] cursor-pointer"
              aria-label="Alternar tema"
            >
              {tema === 'escuro' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-[#7E22CE]" />}
            </button>

            <button
              onClick={() => definirMenuAberto(!menuAberto)}
              className="p-2 texto-secundario hover:text-[#DFB15B] focus:outline-none"
              aria-label="Abrir menu de navegação"
            >
              {menuAberto ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu Suspenso para Celular */}
        {menuAberto && (
          <div className="lg:hidden fundo-superficie border-b borda-destaque px-6 py-6 mt-3 rounded-2xl shadow-2xl space-y-4">
            <div className="flex flex-col space-y-2">
              {linksNavegacao.map((item) => {
                const estaAtivo = secaoAtiva === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.destino}
                    onClick={() => definirMenuAberto(false)}
                    className={`text-base py-2.5 px-3 rounded-xl border-b borda-suave font-medium flex items-center justify-between transition-colors ${
                      estaAtivo
                        ? 'text-[#DFB15B] fundo-elevado font-bold'
                        : 'texto-principal hover:text-[#DFB15B]'
                    }`}
                  >
                    <span>{item.nome}</span>
                    {estaAtivo && <span className="text-xs text-[#DFB15B]">● Ativo</span>}
                  </a>
                );
              })}
            </div>

            <div className="pt-2">
              <a
                href={obterLinkWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => definirMenuAberto(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gold-gradient text-[#0F0814] font-bold text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-[#0F0814]" />
                Agendar via WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
