import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const PainPointsSection = () => (
  <section className="bg-white py-20 md:py-28">
    <div className="container mx-auto px-5 max-w-3xl">

      <ScrollReveal>
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B91C1C] mb-4 block">
          Si estás acá, probablemente esto te pasó
        </span>
        <h2 className="font-editorial text-3xl md:text-5xl font-bold text-stone-900 leading-tight mb-12">
          El diagnóstico sin{' '}
          <em className="text-[#B91C1C]">hoja de ruta</em>
        </h2>
      </ScrollReveal>

      <div className="space-y-5 text-base sm:text-lg text-stone-600 leading-[1.85] font-light">

        <ScrollReveal delay={80}>
          <p>Fuiste al médico por cansancio. Por el abdomen inflamado. Por algo que no andaba bien.</p>
          <p className="mt-4">
            Te hicieron análisis. Te dieron el diagnóstico.{' '}
            <strong className="font-semibold text-stone-900">Hígado graso.</strong>
          </p>
          <p className="mt-4">Y después, casi nada.</p>
        </ScrollReveal>

        <ScrollReveal delay={130}>
          <div className="bg-stone-50 border-l-2 border-stone-300 rounded-r-xl px-5 py-4">
            <p>
              Saliste con un papel y un{' '}
              <em className="not-italic font-semibold text-stone-800">"cuide lo que come"</em>.
            </p>
            <p className="mt-3">Pero nadie te dijo qué comer exactamente.</p>
            <p className="mt-2">Ni cómo combinarlo. Ni en qué horario. Ni por cuánto tiempo.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={170}>
          <p>Entonces hiciste lo que haría cualquiera.</p>
          <p className="mt-4">
            Buscaste en Google. Probaste dietas de internet. Compraste suplementos que prometían
            limpiar el hígado. Quizás hasta pagaste un curso o una guía online.
          </p>
          <p className="mt-4 font-semibold text-stone-900">Y nada cambió.</p>
        </ScrollReveal>

        <ScrollReveal delay={210}>
          <div className="bg-stone-50 rounded-xl px-6 py-5 border border-stone-200">
            <p className="text-stone-700">No porque seas indisciplinado.</p>
            <p className="mt-2 font-semibold text-lg text-stone-900">
              Sino porque nadie te dio un plan de verdad.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <p>Sé lo que se siente.</p>
          <p className="mt-4">
            La confusión. La culpa cuando comes algo "prohibido". El miedo de pensar que esto puede empeorar.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={290}>
          <p>Y sobre todo, sé lo que te preocupa realmente.</p>
          <p className="mt-4">No es el número en la báscula.</p>
          <div className="bg-[#FEF2F2] border-l-2 border-[#B91C1C]/50 rounded-r-xl px-5 py-4 mt-4">
            <p className="font-semibold text-stone-900 text-lg">
              Es la idea de no estar para tu familia dentro de 5 años.
            </p>
            <p className="mt-2 text-sm text-stone-500 font-light">Eso es lo que te despierta a las 3 de la mañana.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={330}>
          <p className="text-stone-800 font-medium">
            Y tenés derecho a tener información clara. No promesas vacías.
          </p>
        </ScrollReveal>

      </div>
    </div>
  </section>
);
