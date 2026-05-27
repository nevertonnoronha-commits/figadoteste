import React, { useEffect, useRef } from 'react';
import { scrollToOffer } from '../../utils/smoothScroll';
import { ArrowDown } from 'lucide-react';
import { gsap } from 'gsap';

export const HeroSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl
        .from('.hero-eyebrow', { y: 30, opacity: 0, duration: 0.8 })
        .from('.hero-title-line1', { y: 44, opacity: 0, duration: 1.0 }, '-=0.45')
        .from('.hero-title-line2', { y: 44, opacity: 0, duration: 1.0 }, '-=0.7')
        .from('.hero-sub', { y: 20, opacity: 0, duration: 0.7 }, '-=0.5')
        .from('.hero-card', { y: 60, opacity: 0, duration: 1.1 }, '-=0.5')
        .from('.hero-scroll-cue', { opacity: 0, duration: 0.6 }, '-=0.1');
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#1A1A1A] overflow-hidden">
      <div className="noise-bg" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(160deg, transparent 40%, rgba(46,64,54,0.22) 100%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-5 max-w-3xl pt-14 pb-16 md:pt-16 md:pb-20">

        {/* Hook cold traffic — sintomas-first, não diagnóstico */}
        <p className="hero-eyebrow font-mono-data text-[#CC5833] text-[10px] uppercase tracking-[0.28em] mb-5">
          Para quien se siente cansado sin razón · La barriga que no baja · El médico que no tiene respuestas
        </p>

        {/* H1 — emocional, funciona para cold traffic */}
        <h1 className="mb-3 leading-none">
          <span className="hero-title-line1 block text-white/90 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1]">
            El día que el médico
          </span>
          <span className="hero-title-line2 block font-editorial italic text-[#CC5833] text-4xl sm:text-5xl md:text-6xl leading-[1.1]">
            abandonó a mi mamá
          </span>
        </h1>

        <p className="hero-sub text-[#6B7260] text-base italic font-light mb-10 md:mb-12">
          Una carta abierta de la Dra. Elinna Novaz, nutricionista terapéutica · +12.000 casos documentados
        </p>

        {/* Carta — cream over dark = máximo contraste editorial */}
        <div className="hero-card bg-[#F2F0E9] rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.50)]">

          {/* Author strip */}
          <div className="border-b border-stone-200/60 px-6 py-4 flex items-center gap-4 bg-[#E8E6DF]">
            <div className="relative shrink-0">
              <img
                src="https://raw.githubusercontent.com/nevertonnoronha-commits/naturale-images/main/0a5cf9de-90ce-4fdf-ac99-cd2a085896a8.webp"
                alt="Dra. Elinna Novaz"
                loading="eager"
                fetchPriority="high"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover object-top border-2 border-white shadow-md"
                onError={(e) => {
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 56' fill='%232E4036'%3E%3Crect width='56' height='56' rx='28'/%3E%3C/svg%3E";
                }}
              />
            </div>
            <div>
              <p className="font-semibold text-[#1C1917] text-sm">Dra. Elinna Novaz</p>
              <p className="text-[11px] text-[#6B7260] font-light">Nutricionista Terapéutica · +12.000 pacientes</p>
            </div>
          </div>

          {/* Carta */}
          <div className="px-6 sm:px-8 py-7 space-y-4 text-[#1C1917] leading-[1.85] text-base sm:text-lg font-light">

            <p>Hace 10 años, mi mamá llegó de una consulta con un papel en la mano.</p>

            <p>
              El diagnóstico decía{' '}
              <strong className="font-semibold">"esteatosis hepática grado 2"</strong>.
            </p>

            <p>El médico le dijo tres palabras: <strong className="font-semibold">"haga más dieta"</strong>.</p>

            <p>Eso fue todo.</p>

            <p className="text-[#6B7260]">Sin plan. Sin explicación. Sin una dirección.</p>

            <p>Ella me miró en la cocina y me preguntó:</p>

            {/* Quote — clay border */}
            <div className="bg-[#FAF0EA] border-l-2 border-[#CC5833]/60 rounded-r-xl px-5 py-4 my-2">
              <p className="font-editorial text-xl md:text-2xl italic text-[#1C1917] leading-relaxed">
                "¿Y ahora qué hago, hija?"
              </p>
            </div>

            <p>
              Yo soy nutricionista terapéutica. Y en ese momento{' '}
              <strong className="font-semibold">no supe responderle</strong>.
            </p>

            <p>
              Porque lo que ella necesitaba no era una dieta genérica. Necesitaba un protocolo.
              Un camino. Alguien que le dijera paso a paso qué comer, cuándo y cómo.
            </p>

            <div className="border-t border-stone-200/50 pt-5">
              <p>Esa noche no dormí.</p>
              <p className="mt-3">Empecé a investigar. A probar. A ajustar combinaciones.</p>
            </div>

            {/* Resultado */}
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl px-5 py-4">
              <p className="font-semibold text-[#1C1917]">
                Ocho semanas después, los análisis de mi mamá volvieron limpios.
              </p>
              <p className="text-sm text-[#166534] mt-1 font-light">
                Las transaminasas en rango. La energía de vuelta. El miedo afuera.
              </p>
            </div>

            <p className="font-semibold text-[#1C1917] text-lg">No fue magia. Fue método.</p>

            <p>
              Hoy, <strong className="font-semibold">12.000 pacientes después</strong>, escribo esto para vos.
            </p>
            <p>Porque sé exactamente cómo se sintió cuando saliste de ese consultorio.</p>

            {/* Firma */}
            <div className="border-t border-stone-200/50 pt-5">
              <p className="font-editorial text-lg font-semibold text-[#1C1917] italic">Dra. Elinna Novaz</p>
              <p className="text-xs text-[#6B7260] font-light mt-0.5">Nutricionista Terapéutica · Creadora del Protocolo NATURALE</p>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="hero-scroll-cue mt-10 text-center">
          <button
            onClick={scrollToOffer}
            className="btn-press inline-flex flex-col items-center gap-2 text-[#6B7260] hover:text-[#CC5833] transition-colors duration-200 group"
          >
            <span className="font-mono-data text-[10px] uppercase tracking-widest">Ver el protocolo completo</span>
            <ArrowDown size={16} className="animate-bounce group-hover:text-[#CC5833] transition-colors" />
          </button>
        </div>

      </div>
    </section>
  );
};
