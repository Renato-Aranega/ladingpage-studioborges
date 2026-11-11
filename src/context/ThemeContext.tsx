import React, { createContext, useContext, useState, useEffect } from 'react';

type TipoTema = 'escuro' | 'claro';

interface ContextoTemaProps {
  tema: TipoTema;
  alternarTema: () => void;
}

const ContextoTema = createContext<ContextoTemaProps>({
  tema: 'escuro',
  alternarTema: () => {},
});

/**
 * Provedor de Tema (Modo Claro / Modo Escuro)
 * Salva a preferência da cliente no localStorage e sincroniza a classe no elemento raiz
 */
export const ProvedorTema: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tema, definirTema] = useState<TipoTema>(() => {
    const temaSalvo = localStorage.getItem('tema-studio-borges') as TipoTema | null;
    return temaSalvo || 'escuro';
  });

  useEffect(() => {
    localStorage.setItem('tema-studio-borges', tema);
    const raiz = document.documentElement;
    if (tema === 'claro') {
      raiz.classList.add('tema-claro');
      raiz.classList.remove('tema-escuro');
    } else {
      raiz.classList.add('tema-escuro');
      raiz.classList.remove('tema-claro');
    }
  }, [tema]);

  const alternarTema = () => {
    definirTema((temaAnterior) => (temaAnterior === 'escuro' ? 'claro' : 'escuro'));
  };

  return (
    <ContextoTema.Provider value={{ tema, alternarTema }}>
      {children}
    </ContextoTema.Provider>
  );
};

export const usarTema = () => useContext(ContextoTema);
