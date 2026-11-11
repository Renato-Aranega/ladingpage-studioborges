import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Inicializa rolagem suave com inércia leve no desktop (mouse/trackpad)
 * preservando a rolagem nativa no mobile e respeitando acessibilidade.
 */
export function usarScrollSuave(): void {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefereMovimentoReduzido = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefereMovimentoReduzido) return;

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.085,
      wheelMultiplier: 1,
      smoothWheel: true,
      syncTouch: false,
      respectReducedMotion: true,
      prevent: (no) => Boolean(no.closest('[role="dialog"]')),
    });

    const aoClicarAncora = (evento: MouseEvent) => {
      if (
        evento.defaultPrevented ||
        evento.button !== 0 ||
        evento.metaKey ||
        evento.ctrlKey ||
        evento.shiftKey ||
        evento.altKey
      ) {
        return;
      }

      const alvoEvento = evento.target;
      if (!(alvoEvento instanceof Element)) return;

      const link = alvoEvento.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link) return;

      const hash = link.getAttribute('href');
      if (!hash) return;

      if (hash === '#' || hash === '#inicio') {
        evento.preventDefault();
        lenis.scrollTo(0, { duration: 0.85 });
        return;
      }

      const destino = document.getElementById(hash.slice(1));
      if (!destino) return;

      evento.preventDefault();
      if (window.location.hash !== hash) {
        window.history.replaceState(null, '', hash);
      }
      lenis.scrollTo(destino, { duration: 0.85 });
    };

    document.addEventListener('click', aoClicarAncora);

    return () => {
      document.removeEventListener('click', aoClicarAncora);
      lenis.destroy();
    };
  }, []);
}
