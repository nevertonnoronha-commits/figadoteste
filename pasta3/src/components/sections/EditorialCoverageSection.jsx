import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const PRESS_OUTLETS = [
  { name: 'Infobae',       country: 'AR', flag: '🇦🇷', topic: 'Salud', year: '2024' },
  { name: 'El Universal',  country: 'MX', flag: '🇲🇽', topic: 'Bienestar', year: '2024' },
  { name: 'El Comercio',   country: 'PE', flag: '🇵🇪', topic: 'Salud', year: '2024' },
  { name: 'La Tercera',    country: 'CL', flag: '🇨🇱', topic: 'Medicina', year: '2023' },
  { name: 'RPP Noticias',  country: 'PE', flag: '🇵🇪', topic: 'Salud', year: '2024' },
  { name: 'Milenio',       country: 'MX', flag: '🇲🇽', topic: 'Bienestar', year: '2024' },
];

export const EditorialCoverageSection = () => (
  <section className="bg-[#E8E6DF] py-12 md:py-16">
    <div className="container mx-auto px-5 max-w-4xl">
      <ScrollReveal>

        <div className="text-center mb-8">
          <p className="font-mono-data text-[10px] font-medium uppercase tracking-[0.28em] text-[#6B7260] mb-2">
            ESTEATOSIS HEPÁTICA — TEMA DOCUMENTADO EN MEDIOS REGIONALES
          </p>
          <h2 className="font-editorial text-2xl md:text-3xl font-bold text-[#1A1A1A]">
            Como mencionado en la prensa de salud
          </h2>
          <div className="w-10 h-0.5 bg-[#CC5833] mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 mb-6">
          {PRESS_OUTLETS.map((outlet) => (
            <div
              key={outlet.name}
              className="rounded-2xl bg-[#F2F0E9] border border-[#2E4036]/10 shadow-[0_4px_16px_rgba(46,64,54,0.06)] px-4 py-4 flex flex-col gap-1.5 hover:shadow-[0_8px_24px_rgba(46,64,54,0.12)] transition-shadow duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-base leading-none" aria-hidden="true">{outlet.flag}</span>
                <span className="font-mono-data text-[9px] text-[#6B7260]/60 tracking-wide">{outlet.year}</span>
              </div>
              <p
                className="font-black text-base md:text-lg text-[#1A1A1A] leading-tight"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontStyle: 'italic' }}
              >
                {outlet.name}
              </p>
              <p className="font-mono-data text-[10px] font-medium uppercase tracking-widest text-[#6B7260]">
                {outlet.flag === '🇦🇷' ? 'Argentina' : outlet.flag === '🇲🇽' ? 'México' : outlet.flag === '🇵🇪' ? 'Perú' : 'Chile'}
                {' · '}{outlet.topic}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center font-mono-data text-[10px] text-[#6B7260]/50 tracking-wide leading-relaxed max-w-xl mx-auto">
          La esteatosis hepática afecta a 1 de cada 4 adultos mayores de 40 años en América Latina.
          Su creciente prevalencia ha sido documentada por medios de comunicación regionales en los últimos años.
        </p>

      </ScrollReveal>
    </div>
  </section>
);
