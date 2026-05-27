import React, { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

export const SocialProofPopup = ({ showPopup, setShowPopup }) => (
  <div
    className={`fixed bottom-6 left-6 z-50 bg-white border border-gray-200 shadow-2xl p-4 flex items-center gap-4 transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] rounded-lg ${
      showPopup ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-24 opacity-0 scale-90 pointer-events-none'
    }`}
  >
    <div className="w-12 h-12 rounded-full bg-[#1a5c36] flex items-center justify-center text-[#e2b764] flex-shrink-0 animate-pulse">
      <CheckCircle2 size={24} />
    </div>
    <div>
      <p className="text-[#04100b] font-bold text-sm tracking-tight">Ana Lanfranco, de Moreno</p>
      <p className="text-[#04100b]/70 text-sm">acaba de comprar.</p>
      <p className="text-xs font-bold text-[#4CAF50] mt-1 flex items-center gap-1">
        Hace 52 minutos · Compra Verificada
      </p>
    </div>
  </div>
);
