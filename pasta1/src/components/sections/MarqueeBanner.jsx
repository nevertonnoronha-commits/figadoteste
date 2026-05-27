import React from 'react';

const OUTLETS = [
  'El Comercio', 'RPP Noticias', 'La República', 'Gestión',
  'El Universal', 'Milenio', 'Excélsior', 'MVS Noticias',
  'Infobae', 'La Nación', 'Clarín', 'Ámbito',
  'El Mercurio', 'La Tercera', 'T13', 'BioBío Chile',
];

export const MarqueeBanner = () => (
  <div className="bg-[#2E4036] py-3 overflow-hidden">
    <div className="marquee-content" style={{ animationDuration: '52s' }}>
      {[...Array(4)].map((_, i) => (
        <span key={i} className="flex items-center gap-0 shrink-0">
          {OUTLETS.map((outlet, j) => (
            <span key={j} className="flex items-center gap-5 mx-5 shrink-0">
              <span className="text-[11px] font-medium text-white/40 uppercase tracking-[0.18em] whitespace-nowrap font-mono-data">
                {outlet}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/20 shrink-0" />
            </span>
          ))}
        </span>
      ))}
    </div>
  </div>
);
