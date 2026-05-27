import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

// Ibero-American health outlets — consistentes com o modal
export const PRESS_OUTLETS = [
  { name: 'Infobae',       country: 'AR', flag: '🇦🇷', topic: 'Salud', year: '2024' },
  { name: 'El Universal',  country: 'MX', flag: '🇲🇽', topic: 'Bienestar', year: '2024' },
  { name: 'El Comercio',   country: 'PE', flag: '🇵🇪', topic: 'Salud', year: '2024' },
  { name: 'La Tercera',    country: 'CL', flag: '🇨🇱', topic: 'Medicina', year: '2023' },
  { name: 'RPP Noticias',  country: 'PE', flag: '🇵🇪', topic: 'Salud', year: '2024' },
  { name: 'Milenio',       country: 'MX', flag: '🇲🇽', topic: 'Bienestar', year: '2024' },
];

export const EditorialCoverageSection = () => (
  <section className="bg-[#F7F5F0] border-b-4 border-[#111111] py-12 md:py-16">
    <div className="container mx-auto px-5 max-w-4xl">
      <ScrollReveal>

        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#525252] mb-2">
            ESTEATOSIS HEPÁTICA — TEMA DOCUMENTADO EN MEDIOS REGIONALES
          </p>
          <h2 className="font-editorial text-2xl md:text-3xl font-bold text-[#111111]">
            Como mencionado en la prensa de salud
          </h2>
          <div className="w-12 h-0.5 bg-[#B91C1C] mx-auto mt-3"></div>
        </div>

        {/* Press grid — 3 × 2, brutalist editorial style */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 mb-6">
          {PRESS_OUTLETS.map((outlet) => (
            <div
              key={outlet.name}
              className="bg-white border-2 border-[#D1D5DB] shadow-[2px_2px_0_#111111] px-4 py-4 flex flex-col gap-1.5 hover:border-[#111111] transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg leading-none" aria-hidden="true">{outlet.flag}</span>
                <span className="text-[9px] font-mono text-[#9CA3AF] tracking-wide">{outlet.year}</span>
              </div>
              <p
                className="font-black text-base md:text-lg text-[#111111] leading-tight"
                style={{ fontFamily: 'Playfair Display, Georgia, serif', fontStyle: 'italic' }}
              >
                {outlet.name}
              </p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#525252]">
                {outlet.flag === '🇦🇷' ? 'Argentina' : outlet.flag === '🇲🇽' ? 'México' : outlet.flag === '🇵🇪' ? 'Perú' : 'Chile'}
                {' · '}{outlet.topic}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-[10px] text-[#9CA3AF] tracking-wide leading-relaxed max-w-xl mx-auto">
          La esteatosis hepática afecta a 1 de cada 4 adultos mayores de 40 años en América Latina.
          Su creciente prevalencia ha sido documentada por medios de comunicación regionales en los últimos años.
        </p>

      </ScrollReveal>
    </div>
  </section>
);
