import React from 'react';
import { ArrowRight } from 'lucide-react';
import { goToCheckout } from '../../utils/analytics';

export const StickyUrgencyBar = () => (
  <div className="sticky top-0 z-50 bg-[#F2F0E9]/95 backdrop-blur-sm border-b border-[#2E4036]/10 py-2.5 px-4 shadow-sm">
    <div className="container mx-auto flex items-center justify-between gap-3 max-w-4xl">
      <p className="text-[11px] sm:text-xs text-[#6B7260] font-medium truncate">
        <span className="font-bold text-[#2E4036]">Protocolo NATURALE</span>
        <span className="hidden sm:inline"> · USD $17.99 · Pago único · Garantía 30 días</span>
      </p>
      <button
        onClick={goToCheckout}
        className="btn-press shrink-0 bg-[#16A34A] text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-3.5 py-2 rounded-lg shadow-sm hover:bg-[#15803D] hover:-translate-y-px transition-all duration-150 flex items-center gap-1.5"
      >
        <span className="hidden sm:inline">Acceder</span>
        <span className="sm:hidden">$17.99</span>
        <ArrowRight size={11} />
      </button>
    </div>
  </div>
);
