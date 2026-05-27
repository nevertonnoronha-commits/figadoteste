import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { scrollToOffer } from '../../utils/smoothScroll';
import { ArrowDown } from 'lucide-react';

export const HeroSection = () => (
  <section className="bg-[#F8F7F4] pt-12 pb-16 md:pt-16 md:pb-24">
    <div className="container mx-auto px-5 max-w-3xl">

      <ScrollReveal delay={80}>
        <span className="inline-block bg-white border border-stone-200 text-stone-500 text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-8 shadow-sm">
          Una carta abierta · Para personas con diagnóstico de hígado graso
        </span>
      </ScrollReveal>

      <ScrollReveal delay={130}>
        <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-stone-900 leading-[1.08] mb-4">
          El día que el médico{' '}
          <em className="text-[#B91C1C] not-italic">abandonó a mi mamá</em>
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={180}>
        <p className="text-base text-stone-400 italic mb-10 font-light">
          Una carta abierta de la Dra. Elinna Novaz, nutricionista terapéutica
        </p>
      </ScrollReveal>

      {/* Letter card */}
      <ScrollReveal delay={230}>
        <div className="bg-white rounded-2xl border border-stone-200 shadow-[0_4px_32px_rgba(0,0,0,0.07)] overflow-hidden">

          {/* Author strip */}
          <div className="border-b border-stone-100 px-6 py-4 flex items-center gap-4 bg-stone-50/60">
            <div className="relative shrink-0">
              <img
                src="https://raw.githubusercontent.com/nevertonnoronha-commits/naturale-images/main/0a5cf9de-90ce-4fdf-ac99-cd2a085896a8.webp"
                alt="Dra. Elinna Novaz"
                loading="eager"
                fetchPriority="high"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover object-top border-2 border-white shadow-md"
                onError={(e) => {
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 56' fill='%23154734'%3E%3Crect width='56' height='56' rx='28'/%3E%3C/svg%3E";
                }}
              />
            </div>
            <div>
              <p className="font-semibold text-stone-900 text-sm">Dra. Elinna Novaz</p>
              <p className="text-[11px] text-stone-400 font-light">Nutricionista Terapéutica · +12.000 pacientes</p>
            </div>
          </div>

          {/* Letter body */}
          <div className="px-6 sm:px-8 py-7 space-y-4 text-stone-700 leading-[1.85] text-base sm:text-lg font-light">

            <p>Hace 10 años, mi mamá salió de una consulta con un papel en la mano.</p>

            <p>
              El diagnóstico decía{' '}
              <strong className="font-semibold text-stone-900">"esteatosis hepática grado 2"</strong>.
            </p>

            <p>El médico le dijo tres palabras: <strong className="font-semibold text-stone-900">"haga más dieta"</strong>.</p>

            <p>Eso fue todo.</p>

            <p className="text-stone-500">Sin plan. Sin explicación. Sin una dirección clara.</p>

            <p>Ella me miró en la cocina de su casa, con el papel todavía doblado, y me preguntó:</p>

            {/* Mother's quote */}
            <div className="bg-[#FEF2F2] border-l-2 border-[#B91C1C]/50 rounded-r-xl px-5 py-4 my-2">
              <p className="font-editorial text-xl md:text-2xl italic text-stone-800 leading-relaxed">
                "¿Y ahora qué hago, hija?"
              </p>
            </div>

            <p>
              Yo soy nutricionista terapéutica. Y en ese momento{' '}
              <strong className="font-semibold text-stone-900">no supe responderle</strong>.
            </p>

            <p>
              Porque lo que ella necesitaba no era una dieta genérica. Necesitaba un protocolo.
              Un camino. Alguien que le dijera paso a paso qué comer, cuándo y cómo.
            </p>

            <div className="border-t border-stone-100 pt-5">
              <p>Esa noche no dormí.</p>
              <p className="mt-3">Empecé a investigar. A probar. A ajustar combinaciones.</p>
            </div>

            {/* Results */}
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl px-5 py-4">
              <p className="font-semibold text-stone-900">
                Ocho semanas después, los análisis de mi mamá volvieron limpios.
              </p>
              <p className="text-sm text-[#166534] mt-1 font-light">
                Las transaminasas en rango. La energía de vuelta. El miedo afuera.
              </p>
            </div>

            <p className="font-semibold text-stone-900 text-lg">No fue magia. Fue método.</p>

            <p>
              Hoy, <strong className="font-semibold">12.000 pacientes después</strong>, escribo esto para ti.
            </p>
            <p>Porque sé exactamente cómo te sentiste cuando saliste de ese consultorio.</p>

            {/* Signature */}
            <div className="border-t border-stone-100 pt-5 flex items-center justify-between">
              <div>
                <p className="font-editorial text-lg font-semibold text-stone-800 italic">Dra. Elinna Novaz</p>
                <p className="text-xs text-stone-400 font-light mt-0.5">Nutricionista Terapéutica · Creadora del Protocolo NATURALE</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Scroll cue */}
      <ScrollReveal delay={350}>
        <div className="mt-10 text-center">
          <button
            onClick={scrollToOffer}
            className="btn-press inline-flex flex-col items-center gap-2 text-stone-400 hover:text-stone-700 transition-colors group"
          >
            <span className="text-[11px] font-medium uppercase tracking-widest">Ver el protocolo completo</span>
            <ArrowDown size={16} className="animate-bounce group-hover:text-[#B91C1C] transition-colors" />
          </button>
        </div>
      </ScrollReveal>

    </div>
  </section>
);
