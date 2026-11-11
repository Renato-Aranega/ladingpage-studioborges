import React from 'react';
import { CreditCard, Banknote, QrCode, Percent, ShieldCheck } from 'lucide-react';

/**
 * Faixa Informativa de Pagamentos e Descontos
 * Destaca o desconto de 5% no Pix ou espécie e os métodos de pagamento aceitos
 */
export const PaymentBanner: React.FC = () => {
  return (
    <section className="py-14 bg-[#180E21] border-y border-[#DFB15B]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Caixa de Destaque: 5% de Desconto */}
          <div className="md:col-span-5 bg-[#0F0814] p-6 rounded-2xl border border-[#DFB15B]/45 shadow-[0_0_25px_rgba(126,34,206,0.2)] flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gold-gradient flex items-center justify-center text-[#0F0814] shrink-0 font-black text-2xl shadow-lg">
              <Percent className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#DFB15B] font-bold block">
                Economia Real
              </span>
              <h3 className="text-xl font-serif font-bold text-[#FDFCFA]">
                5% de Desconto Especial
              </h3>
              <p className="text-xs text-[#D4C8DE] mt-1 font-light">
                Válido para pagamentos à vista via <strong>Pix</strong> ou <strong>dinheiro em espécie</strong> em todos os serviços.
              </p>
            </div>
          </div>

          {/* Métodos de Pagamento Aceitos */}
          <div className="md:col-span-7 flex flex-wrap items-center justify-around gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#231530] border border-[#2E1B3D] flex items-center justify-center text-[#DFB15B] shadow-sm">
                <QrCode className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#FDFCFA]">Pix Imediato</p>
                <p className="text-[11px] text-[#DFB15B] font-medium">Com 5% OFF</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#231530] border border-[#2E1B3D] flex items-center justify-center text-[#DFB15B] shadow-sm">
                <Banknote className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#FDFCFA]">Espécie</p>
                <p className="text-[11px] text-[#DFB15B] font-medium">Com 5% OFF</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#231530] border border-[#2E1B3D] flex items-center justify-center text-[#A855F7] shadow-sm">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#FDFCFA]">Cartões</p>
                <p className="text-[11px] text-[#D4C8DE]">Crédito & Débito</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#231530] border border-[#2E1B3D] flex items-center justify-center text-[#25D366] shadow-sm">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#FDFCFA]">Transparência</p>
                <p className="text-[11px] text-[#D4C8DE]">Sem taxas surpresa</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
