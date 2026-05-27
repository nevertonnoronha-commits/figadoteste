import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { openCheckoutModal } from '../../utils/analytics';

export const FinalCTASection = () => (
  <section className="py-20 md:py-28 relative text-white text-center overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 z-0">
      <img
        src="https://raw.githubusercontent.com/nevertonnoronha-commits/naturale-images/main/generated-image%20(8).webp"
        alt="Familia reunida en la mesa"
        loading="lazy"
        className="w-full h-full object-cover object-center"
        onError={(e) => { e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 600' fill='%232E4036'%3E%3Crect width='1000' height='600'/%3E%3C/svg%3E"; }}
      />
      {/* Organic gradient overlay — moss undertones */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/92 via-[#2E4036]/70 to-[#2E4036]/40" />
    </div>
    <div className="noise-bg z-[1]" aria-hidden="true" />

    <div className="container mx-auto px-5 max-w-3xl relative z-10">
      <ScrollReveal>
        <h2 className="font-editorial text-3xl md:text-5xl font-bold mb-5 leading-tight text-white">
          Tu hígado puede recuperarse.{' '}
          <span className="font-drama text-[#CC5833]">Ahora tenés el plan para actuar.</span>
        </h2>
        <p className="text-base md:text-lg font-light text-white/65 mb-10 max-w-xl mx-auto leading-relaxed">
          No esperes que el médico te dé malas noticias para actuar. En 5 minutos podés tener el
          protocolo en tu celular y estar planificando la cena reparadora de esta misma noche.
        </p>

        <button
          onClick={openCheckoutModal}
          className="btn-press btn-shine btn-magnetic group relative overflow-hidden inline-flex items-center justify-center w-full md:w-auto bg-[#CC5833] text-white px-8 py-5 rounded-2xl font-black text-lg md:text-2xl uppercase tracking-wide gap-3 cta-pulse"
        >
          <span className="btn-bg bg-[#A84428] rounded-2xl" />
          <span className="relative z-10 flex items-center gap-3">
            ACCEDER AL PROTOCOLO NATURALE — $17.99 <ArrowRight size={22} />
          </span>
        </button>

        <p className="mt-5 font-mono-data text-[10px] font-medium uppercase tracking-widest text-white/30">
          $17.99 (85% OFF) &nbsp;·&nbsp; Garantía Incondicional 30 Días
        </p>

        {/* P.S. */}
        <div className="mt-14 text-left rounded-2xl bg-black/30 border border-white/8 p-6 max-w-2xl mx-auto backdrop-blur-sm">
          <p className="text-base text-white/65 font-light leading-relaxed mb-4">
            <strong className="font-semibold text-white">P.S.</strong> El hígado graso no duele hasta que el daño ya está avanzado. Por eso actuar hoy, con un plan concreto y accesible, es lo más inteligente que podés hacer. El protocolo tiene garantía de 30 días — sin preguntas.{' '}
            <button onClick={openCheckoutModal} className="underline text-[#CC5833] font-semibold cursor-pointer hover:opacity-80">
              Hacé clic acá para acceder.
            </button>
          </p>
          <p className="text-base text-white/65 font-light leading-relaxed">
            <strong className="font-semibold text-white">P.P.S.</strong> En 5 minutos tenés el protocolo en tu celular. 28 días con un plan claro, comida real y sin pasar hambre.{' '}
            <button onClick={openCheckoutModal} className="underline text-[#CC5833] font-semibold cursor-pointer hover:opacity-80">
              Acceder al Sistema NATURALE.
            </button>
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
