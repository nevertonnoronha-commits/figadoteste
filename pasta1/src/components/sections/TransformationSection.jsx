import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const TransformationSection = () => (
  <section className="py-16 md:py-24 bg-[#0F2033] text-white">
    <div className="noise-bg opacity-20"></div>
    <div className="container mx-auto px-5 max-w-5xl relative z-10">
      <ScrollReveal>
        <div className="text-center mb-12">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#B91C1C] mb-3 block">
            LO QUE CAMBIA CON UN PLAN REAL
          </span>
          <h2 className="font-editorial text-3xl md:text-5xl text-white leading-tight">
            Lo que sucede cuando le das a tu cuerpo{' '}
            <span className="italic text-[#FBBF24]">lo que realmente necesita.</span>
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 max-w-4xl mx-auto">
          {/* Before */}
          <div className="relative flex-1 w-full group max-w-sm border-2 border-[#B91C1C] shadow-[5px_5px_0_#B91C1C]">
            <div className="absolute top-3 left-3 bg-[#B91C1C] text-white font-black text-xs px-3 py-1 tracking-widest z-10">
              ANTES
            </div>
            <div className="aspect-[4/5] bg-gray-900 relative overflow-hidden">
              <img
                src="https://raw.githubusercontent.com/nevertonnoronha-commits/naturale-images/main/generated-image%20(4).webp"
                alt="Persona con fatiga y hígado graso"
                loading="lazy"
                className="w-full h-full object-cover grayscale-[50%] opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                onError={(e) => { e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500' fill='%23111'%3E%3Crect width='400' height='500'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%23555'%3EAntes%3C/text%3E%3C/svg%3E"; }}
              />
            </div>
            <p className="text-xs text-center py-2 text-white/50 font-light">Fatiga, pesadez, confusión alimentaria</p>
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center gap-2 z-10">
            <div className="bg-[#16A34A] text-white w-12 h-12 flex items-center justify-center border-2 border-[#166534] shadow-[3px_3px_0_#166534]">
              <ArrowRight size={24} className="rotate-90 md:rotate-0" />
            </div>
            <span className="text-[10px] text-[#FBBF24] font-black uppercase tracking-widest whitespace-nowrap text-center">
              Con Naturale
            </span>
          </div>

          {/* After */}
          <div className="relative flex-1 w-full group max-w-sm border-2 border-[#16A34A] shadow-[5px_5px_0_#16A34A]">
            <div className="absolute top-3 left-3 bg-[#16A34A] text-white font-black text-xs px-3 py-1 tracking-widest z-10">
              DESPUÉS
            </div>
            <div className="aspect-[4/5] bg-gray-900 relative overflow-hidden">
              <img
                src="https://raw.githubusercontent.com/nevertonnoronha-commits/naturale-images/main/50013078-e65b-47fa-b40a-f44ff0acf15d.webp"
                alt="Persona con energía y bienestar"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => { e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500' fill='%23111'%3E%3Crect width='400' height='500'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%23555'%3EDespués%3C/text%3E%3C/svg%3E"; }}
              />
            </div>
            <p className="text-xs text-center py-2 text-[#4ADE80] font-light">Más orden, menos pesadez, más energía</p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
