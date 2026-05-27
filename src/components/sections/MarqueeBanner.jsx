import React from 'react';
import { HeartPulse, Stethoscope } from 'lucide-react';

export const MarqueeBanner = () => (
  <div
    className="bg-[#2E4036] text-white/70 py-3 font-semibold uppercase tracking-[0.18em] text-[11px] marquee-container relative z-20 max-w-full"
    style={{ overflow: 'hidden' }}
  >
    <div className="marquee-content" style={{ animationDuration: '55s' }}>
      {[...Array(10)].map((_, i) => (
        <div key={i} className="flex items-center mx-8 gap-8">
          <div className="flex items-center gap-2 text-white/50">
            <Stethoscope size={13} />
            <span>PROTOCOLO CLÍNICO VERIFICADO</span>
          </div>
          <span className="opacity-20">·</span>
          <div className="flex items-center gap-2 text-[#CC5833]/80">
            <HeartPulse size={13} />
            <span>+12.000 CASOS DOCUMENTADOS</span>
          </div>
          <span className="opacity-20">·</span>
          <span className="text-white/40">ESTEATOSIS HEPÁTICA · REGENERACIÓN EN 28 DÍAS</span>
          <span className="opacity-20">·</span>
        </div>
      ))}
    </div>
  </div>
);
