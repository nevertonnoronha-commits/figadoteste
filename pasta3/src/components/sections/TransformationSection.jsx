import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const TransformationSection = () => (
  <section className="py-16 md:py-24 bg-[#2E4036] text-white relative overflow-hidden">
    <div className="noise-bg" aria-hidden="true" />
    <div className="container mx-auto px-5 max-w-5xl relative z-10">
      <ScrollReveal>
        <div className="text-center mb-12">
          <span className="font-mono-data text-[10px] font-medium uppercase tracking-[0.25em] text-[#CC5833]/70 mb-3 block">
            LO QUE CAMBIA CON UN PLAN REAL
          </span>
          <h2 className="font-drama text-3xl md:text-5xl text-white leading-tight">
            Lo que sucede cuando le das a tu cuerpo{' '}
            <span className="text-[#CC5833]">lo que realmente necesita.</span>
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 max-w-4xl mx-auto">
          {/* Before */}
          <div className="relative flex-1 w-full group max-w-sm rounded-2xl overflow-hidden border border-[#CC5833]/30 shadow-[0_8px_40px_rgba(204,88,51,0.18)]">
            <div className="absolute top-3 left-3 bg-[#CC5833] text-white font-black text-[10px] px-3 py-1 tracking-widest z-10 rounded-full">
              ANTES
            </div>
            <div className="aspect-[4/5] bg-[#1A1A1A] relative overflow-hidden">
              <img
                src="https://raw.githubusercontent.com/nevertonnoronha-commits/naturale-images/main/generated-image%20(4).webp"
                alt="Persona con fatiga y hígado graso"
                loading="lazy"
                className="w-full h-full object-cover grayscale-[60%] opacity-75 group-hover:opacity-95 group-hover:grayscale-0 transition-all duration-700"
                onError={(e) => { e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500' fill='%231A1A1A'%3E%3Crect width='400' height='500'/%3E%3C/svg%3E"; }}
              />
            </div>
            <p className="text-xs text-center py-2.5 px-3 text-white/45 font-light bg-[#1A1A1A]/80">Fatiga, pesadez, confusión alimentaria</p>
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center gap-2 z-10">
            <div className="bg-[#CC5833] text-white w-11 h-11 flex items-center justify-center rounded-full shadow-[0_4px_20px_rgba(204,88,51,0.35)]">
              <ArrowRight size={22} className="rotate-90 md:rotate-0" />
            </div>
            <span className="font-mono-data text-[10px] text-[#CC5833]/70 font-medium uppercase tracking-widest whitespace-nowrap text-center">
              Con Naturale
            </span>
          </div>

          {/* After */}
          <div className="relative flex-1 w-full group max-w-sm rounded-2xl overflow-hidden border border-[#4A7C59]/40 shadow-[0_8px_40px_rgba(74,124,89,0.25)]">
            <div className="absolute top-3 left-3 bg-[#4A7C59] text-white font-black text-[10px] px-3 py-1 tracking-widest z-10 rounded-full">
              DESPUÉS
            </div>
            <div className="aspect-[4/5] bg-[#1A1A1A] relative overflow-hidden">
              <img
                src="https://raw.githubusercontent.com/nevertonnoronha-commits/naturale-images/main/50013078-e65b-47fa-b40a-f44ff0acf15d.webp"
                alt="Persona con energía y bienestar"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => { e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500' fill='%231A1A1A'%3E%3Crect width='400' height='500'/%3E%3C/svg%3E"; }}
              />
            </div>
            <p className="text-xs text-center py-2.5 px-3 text-[#4A7C59] font-light bg-[#1A1A1A]/80">Más orden, menos pesadez, más energía</p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
