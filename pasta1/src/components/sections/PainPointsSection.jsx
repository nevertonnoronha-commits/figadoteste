import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { AlertTriangle } from 'lucide-react';

export const PainPointsSection = () => (
  <section className="bg-[#F2F0E9] py-20 md:py-28">
    <div className="container mx-auto px-5 max-w-3xl">

      <ScrollReveal>
        <span className="font-mono-data text-[10px] font-medium uppercase tracking-[0.25em] text-[#CC5833] mb-4 block">
          Si llegaste hasta acá, algo en esto te suena conocido
        </span>
        <h2 className="font-editorial text-3xl md:text-5xl font-bold text-[#1C1917] leading-tight mb-12">
          El cansancio que nadie{' '}
          <em className="text-[#CC5833] italic">sabe explicar</em>
        </h2>
      </ScrollReveal>

      <div className="space-y-5 text-base sm:text-lg text-[#6B7260] leading-[1.85] font-light">

        {/* VoC — linguagem real de fóruns, sintomas-first */}
        <ScrollReveal delay={80}>
          <p>Te sentís cansado hace meses. No el cansancio de quien trabajó mucho.</p>
          <p className="mt-4">Un cansancio diferente. Que no se va aunque descanses.</p>
          <p className="mt-4">La barriga tampoco baja. Aunque comas poco. Aunque camines. Aunque te cuides.</p>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="bg-white rounded-xl border-l-2 border-l-[#CC5833]/40 border border-stone-200/60 px-5 py-4 shadow-sm">
            <p className="text-[#1C1917]">
              Fuiste al médico. O fuiste por otra razón y el hígado apareció de sorpresa.
            </p>
            <p className="mt-3">
              Te hicieron análisis. El médico miró los números y dijo algo como:
            </p>
            <p className="mt-3 font-semibold text-[#1C1917]">
              "Las transaminasas están un poco elevadas. El hígado un poco cargado. Cuide lo que come."
            </p>
            <p className="mt-3">Y te fuiste con un papel y cero respuestas.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <p>Entonces hiciste lo que haría cualquiera.</p>
          <p className="mt-4">
            Buscaste en Google. Probaste dietas de internet. Quizás compraste suplementos
            que prometían "limpiar el hígado". Quizás pagaste algún curso o guía.
          </p>
          <p className="mt-4 font-semibold text-[#1C1917]">Y nada cambió.</p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="bg-white rounded-xl px-6 py-5 border border-stone-200/60 shadow-sm">
            <p className="text-[#6B7260]">No porque seas indisciplinado.</p>
            <p className="mt-2 font-semibold text-lg text-[#1C1917]">
              Sino porque nadie te dio un plan de verdad.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={240}>
          <p>Sé lo que se siente.</p>
          <p className="mt-4">
            La confusión. La culpa cuando comés algo "prohibido". El miedo de que esto empeore.
          </p>
          <p className="mt-4">Y sobre todo, sé lo que te preocupa realmente.</p>
          <p className="mt-4">No es el número en la báscula.</p>
          <div className="bg-[#FAF0EA] border-l-2 border-[#CC5833]/60 rounded-r-xl px-5 py-4 mt-4">
            <p className="font-semibold text-[#1C1917] text-lg">
              Es la idea de no estar para tu familia dentro de 5 años.
            </p>
            <p className="mt-2 text-sm text-[#6B7260] font-light">Eso es lo que te despierta a las 3 de la mañana.</p>
          </div>
        </ScrollReveal>

        {/* TMT — Terror Management Theory específico para hígado graso */}
        <ScrollReveal delay={280}>
          <div className="bg-[#2E4036] rounded-xl px-6 py-5 relative overflow-hidden">
            <div className="noise-bg rounded-xl" aria-hidden="true" />
            <div className="relative z-10 flex items-start gap-4">
              <div className="shrink-0 w-8 h-8 rounded-full bg-[#CC5833]/20 flex items-center justify-center mt-0.5">
                <AlertTriangle size={15} className="text-[#CC5833]" strokeWidth={2} />
              </div>
              <div>
                <p className="text-white/85 font-semibold text-sm mb-2">Lo que los médicos no siempre tienen tiempo de explicar:</p>
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  El hígado graso sin tratamiento puede evolucionar. No siempre. Pero puede.
                  Fibrosis. Inflamación crónica. Daño progresivo que es mucho más difícil de revertir.
                </p>
                <p className="text-white/60 text-sm font-light leading-relaxed mt-2">
                  Cuanto antes empieza el proceso correcto, más fácil es.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Dopamine loop — promete revelação, mantém scroll */}
        <ScrollReveal delay={320}>
          <p className="text-[#1C1917] font-medium">
            Tenés derecho a tener información clara. No promesas vacías.
          </p>
          <p className="mt-4 text-[#CC5833] font-semibold">
            Hay una razón concreta por qué tu hígado está trabajando de más.
            Y no tiene nada que ver con la cantidad que comés.
          </p>
          <p className="mt-1 text-[#6B7260] text-sm">
            Te la muestro ahora.
          </p>
        </ScrollReveal>

      </div>
    </div>
  </section>
);
