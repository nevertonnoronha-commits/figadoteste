import React from 'react';

const OUTLETS = [
  { name: 'El Comercio',    country: 'PE', style: 'font-black italic' },
  { name: 'RPP Noticias',   country: 'PE', style: 'font-bold' },
  { name: 'La República',   country: 'PE', style: 'font-black uppercase tracking-tight' },
  { name: 'Gestión',        country: 'PE', style: 'font-black tracking-wide' },
  { name: 'El Universal',   country: 'MX', style: 'font-black italic' },
  { name: 'Milenio',        country: 'MX', style: 'font-bold uppercase tracking-wider' },
  { name: 'Excélsior',      country: 'MX', style: 'font-black italic' },
  { name: 'MVS Noticias',   country: 'MX', style: 'font-bold' },
  { name: 'Infobae',        country: 'AR', style: 'font-black tracking-tight' },
  { name: 'La Nación',      country: 'AR', style: 'font-black italic' },
  { name: 'Clarín',         country: 'AR', style: 'font-black uppercase' },
  { name: 'Ámbito',         country: 'AR', style: 'font-bold tracking-wide' },
  { name: 'El Mercurio',    country: 'CL', style: 'font-black italic' },
  { name: 'La Tercera',     country: 'CL', style: 'font-bold uppercase tracking-tight' },
  { name: 'T13',            country: 'CL', style: 'font-black tracking-widest' },
  { name: 'BioBío Chile',   country: 'CL', style: 'font-bold' },
];

const FLAG = { PE: '🇵🇪', MX: '🇲🇽', AR: '🇦🇷', CL: '🇨🇱' };

export const MediaTrustSection = () => (
  <section className="bg-[#E8E6DF] py-7 overflow-hidden">

    <div className="text-center mb-5 px-5">
      <p className="font-mono-data text-[10px] font-medium uppercase tracking-[0.25em] text-[#6B7260]">
        VISTO EN LOS PRINCIPALES MEDIOS DIGITALES DE
      </p>
      <div className="flex items-center justify-center gap-3 mt-1.5 text-base">
        {['🇵🇪 Perú', '🇲🇽 México', '🇦🇷 Argentina', '🇨🇱 Chile'].map((c) => (
          <span key={c} className="text-xs text-[#6B7260] font-medium">{c}</span>
        ))}
      </div>
    </div>

    {/* Row 1 — left to right */}
    <div className="marquee-container mb-3" aria-hidden="true">
      <div className="marquee-content" style={{ animationDuration: '60s' }}>
        {[...OUTLETS, ...OUTLETS].map((o, i) => (
          <div key={i} className="flex items-center gap-1.5 mx-7 shrink-0">
            <span className="text-base leading-none">{FLAG[o.country]}</span>
            <span
              className={`text-sm text-[#1A1A1A] ${o.style} leading-none`}
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              {o.name}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Row 2 — right to left */}
    <div className="marquee-container" aria-hidden="true">
      <div
        className="marquee-content"
        style={{ animationDuration: '50s', animationDirection: 'reverse' }}
      >
        {[...OUTLETS.slice(8), ...OUTLETS.slice(0, 8), ...OUTLETS.slice(8), ...OUTLETS.slice(0, 8)].map((o, i) => (
          <div key={i} className="flex items-center gap-1.5 mx-7 shrink-0">
            <span className="text-base leading-none">{FLAG[o.country]}</span>
            <span
              className={`text-sm text-[#6B7260] ${o.style} leading-none`}
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              {o.name}
            </span>
          </div>
        ))}
      </div>
    </div>

    <p className="text-center font-mono-data text-[9px] text-[#6B7260]/60 mt-4 tracking-wide px-5">
      La esteatosis hepática es un problema de salud pública ampliamente documentado en medios de comunicación regionales.
    </p>
  </section>
);
