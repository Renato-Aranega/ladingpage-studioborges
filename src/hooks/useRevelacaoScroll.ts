import { useEffect, useRef } from 'react';

/**
 * Hook de observação de interseção para animações editoriais fluidas.
 * Ativa a classe `.visivel` em todos os elementos marcados com
 * `.revelar-scroll`, `.linha-desenho` e `.imagem-cortina` dentro de um contêiner.
 */
export function usarRevelacaoScroll(dependencia?: unknown) {
  const referenciaSecao = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const raiz = referenciaSecao.current;
    if (!raiz) return;

    const alvos = raiz.querySelectorAll<HTMLElement>(
      '.revelar-scroll, .linha-desenho, .imagem-cortina'
    );

    if (alvos.length === 0) return;

    // Respeita usuários que preferem redução de movimento no sistema
    const prefereMovimentoReduzido = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefereMovimentoReduzido || typeof IntersectionObserver === 'undefined') {
      alvos.forEach((elemento) => elemento.classList.add('visivel'));
      return;
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('visivel');
            observador.unobserve(entrada.target);
          }
        });
      },
      {
        threshold: 0.01,
        rootMargin: '0px 0px 80px 0px',
      }
    );

    alvos.forEach((elemento) => {
      if (!elemento.classList.contains('visivel')) {
        observador.observe(elemento);
      }
    });

    return () => observador.disconnect();
  }, [dependencia]);

  return referenciaSecao;
}
