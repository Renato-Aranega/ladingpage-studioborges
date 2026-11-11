import React from 'react';
import { DADOS_STUDIO } from '../data/catalog';
import { usarRevelacaoScroll } from '../hooks/useRevelacaoScroll';

/**
 * Faixa Editorial de Condições de Pagamento
 * Organizada por divisórias secas de 1px em superfície Warm Charcoal (#171411).
 */
export const PaymentBanner: React.FC = () => {
  const referenciaSecao = usarRevelacaoScroll();

  return (
    <section
      ref={referenciaSecao}
      aria-label="Condições de pagamento"
      className="bg-[#171411] border-y border-[var(--border-hairline)] py-12 lg:py-14"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 items-start md:divide-x md:divide-[var(--border-hairline)]">
          {/* Condição Principal */}
          <div className="md:col-span-5 md:pr-8 space-y-2 revelar-scroll">
            <span className="indexador-editorial text-[#C5A880] block">
              Benefício Direto
            </span>
            <p className="font-serif text-2xl sm:text-3xl text-[#F5F2EB] leading-snug">
              5% de desconto especial
            </p>
            <p className="text-xs sm:text-sm text-[#9E9689] leading-relaxed">
              {DADOS_STUDIO.avisoDesconto} em todos os procedimentos e manutenções.
            </p>
          </div>

          {/* 01 - Pix */}
          <div
            className="md:col-span-2 md:px-6 space-y-1.5 revelar-scroll"
            style={{ '--atraso': '80ms' } as React.CSSProperties}
          >
            <span className="indexador-editorial text-[#C5A880] block">01 — Pix</span>
            <p className="text-sm font-medium text-[#F5F2EB]">Pix Imediato</p>
            <p className="text-xs text-[#9E9689]">Desconto de 5% aplicado no atendimento</p>
          </div>

          {/* 02 - Espécie */}
          <div
            className="md:col-span-2 md:px-6 space-y-1.5 revelar-scroll"
            style={{ '--atraso': '140ms' } as React.CSSProperties}
          >
            <span className="indexador-editorial text-[#C5A880] block">02 — Espécie</span>
            <p className="text-sm font-medium text-[#F5F2EB]">Em Dinheiro</p>
            <p className="text-xs text-[#9E9689]">Mesma condição especial de 5% OFF</p>
          </div>

          {/* 03 - Cartões */}
          <div
            className="md:col-span-3 md:pl-6 space-y-1.5 revelar-scroll"
            style={{ '--atraso': '200ms' } as React.CSSProperties}
          >
            <span className="indexador-editorial text-[#C5A880] block">03 — Cartões</span>
            <p className="text-sm font-medium text-[#F5F2EB]">Crédito &amp; Débito</p>
            <p className="text-xs text-[#9E9689]">Transparência total em todos os valores</p>
          </div>
        </div>
      </div>
    </section>
  );
};
