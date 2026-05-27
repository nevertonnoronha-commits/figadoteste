import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const MechanismSection = () => (
  <section className="py-16 md:py-24 bg-[#F2F0E9]">
    <div className="container mx-auto px-5 max-w-3xl">

      <ScrollReveal>
        <div className="mb-10">
          <span className="font-mono-data text-[10px] font-medium uppercase tracking-[0.25em] text-[#CC5833] mb-2 block">
            POR QUÉ LAS DIETAS NO FUNCIONAN PARA ESTO
          </span>
          <h2 className="font-editorial text-3xl md:text-5xl font-bold text-[#1A1A1A] leading-tight mb-5">
            Por qué las dietas fallan{' '}
            <span className="font-drama text-[#CC5833]">— y qué funciona de verdad para el hígado graso</span>
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          {[
            { n: '01', label: 'Recetas 24/7', desc: 'Desayuno, almuerzo, snack y cena específicos para el hígado graso.' },
            { n: '02', label: 'Solo 20 min', desc: 'Preparaciones rápidas con ingredientes de tu supermercado local.' },
            { n: '03', label: 'Para la familia', desc: 'No cocinás dos veces. Tu familia come lo mismo que vos.' },
          ].map((f) => (
            <div key={f.n} className="rounded-2xl bg-[#E8E6DF] border border-[#2E4036]/12 p-5 shadow-[0_4px_16px_rgba(46,64,54,0.07)]">
              <span className="font-mono-data text-xs font-medium text-[#CC5833] tracking-widest block mb-2">{f.n}</span>
              <p className="font-bold text-[#1A1A1A] mb-1.5">{f.label}</p>
              <p className="text-sm text-[#6B7260] font-light leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <p className="text-base md:text-lg text-[#6B7260] leading-relaxed mb-5 font-light">
          <strong className="font-bold text-[#1A1A1A]">NATURALE</strong> no es un recetario cualquiera. Es un protocolo estructurado de 28 días, dividido en 4 fases, con combinaciones específicas de alimentos reales que trabajan juntos para apoyar tu hígado.
        </p>
        <p className="text-base md:text-lg text-[#6B7260] leading-relaxed mb-8 font-light">
          Cuando combinás los alimentos correctos, en el orden correcto y en el momento correcto, tu cuerpo empieza a usar la grasa acumulada como combustible. Sin pasar hambre. Sin ingredientes exóticos. Con comida de tu propio supermercado.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <div className="bg-[#2E4036] text-white p-5 md:p-6 mb-8 rounded-2xl shadow-[0_8px_32px_rgba(46,64,54,0.2)]">
          <p className="text-base md:text-lg font-drama italic leading-relaxed">
            "Podés mejorar comiendo platos abundantes, sabrosos y reales. Compartiendo la misma mesa
            y la misma comida con tu familia, sin que nadie note que estás siguiendo
            un protocolo especial."
          </p>
          <p className="mt-3 font-mono-data text-xs font-medium uppercase tracking-widest text-[#CC5833]/70">
            · Dra. Elinna Novaz, Especialista en Nutrición Terapéutica Hepática
          </p>
        </div>
      </ScrollReveal>

    </div>
  </section>
);
