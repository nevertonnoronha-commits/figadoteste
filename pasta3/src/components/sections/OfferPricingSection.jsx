import React from 'react';
import { ShieldCheck, Star, ArrowRight, AlertCircle } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { openCheckoutModal } from '../../utils/analytics';

export const OfferPricingSection = () => (
  <section id="precio" className="py-16 md:py-24 bg-[#1A1A1A] text-white relative overflow-hidden">
    <div className="noise-bg" aria-hidden="true" />
    <div className="container mx-auto px-5 max-w-3xl relative z-10">

      {/* Sunk cost */}
      <ScrollReveal>
        <div className="mb-10">
          <span className="font-mono-data text-[10px] font-medium uppercase tracking-[0.25em] text-[#CC5833]/70 mb-4 block">
            LA DECISIÓN
          </span>
          <h2 className="font-editorial text-3xl md:text-5xl text-white font-bold leading-tight mb-5">
            Ya llegaste hasta acá.{' '}
            <span className="font-drama text-[#CC5833]">Eso no fue casualidad.</span>
          </h2>
          <p className="text-base text-white/50 font-light leading-relaxed max-w-xl">
            Leíste todo esto porque algo en vos reconoce la situación.
            El cansancio. La confusión. La sensación de que el médico no terminó de explicarte.
            Eso es información. No es hipocondría.
          </p>
        </div>
      </ScrollReveal>

      {/* Double bind */}
      <ScrollReveal delay={100}>
        <div className="mb-10 rounded-2xl border border-white/8 bg-white/[0.03] p-6 md:p-8">
          <p className="font-mono-data text-[10px] font-medium uppercase tracking-widest text-white/30 mb-5">
            DESDE ESTE MOMENTO, HAY DOS CAMINOS
          </p>
          <div className="space-y-4">
            <div className="flex gap-4 items-start p-4 rounded-xl bg-white/[0.04] border border-white/6">
              <AlertCircle size={18} className="text-white/25 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white/45 mb-1">Seguís como hasta ahora</p>
                <p className="text-sm text-white/30 font-light leading-relaxed">
                  Más búsquedas en Google. Más consultas donde te dicen "bajate de peso".
                  Más confusión sobre qué comer mañana. El tiempo pasa. El hígado graso no espera.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-4 rounded-xl bg-[#CC5833]/8 border border-[#CC5833]/25">
              <ArrowRight size={18} className="text-[#CC5833] shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-[#CC5833] mb-1">Hoy, con $17.99, tenés un plan claro</p>
                <p className="text-sm text-white/50 font-light leading-relaxed">
                  28 días organizados. Comida real. Lista del supermercado. Sin improvisar cada mañana.
                  Y si en 30 días no notás ninguna mejora, el dinero vuelve. Sin preguntas.
                </p>
              </div>
            </div>
          </div>
          <p className="text-xs text-white/25 font-light mt-4 italic text-center">
            Los dos son una elección. Solo uno tiene dirección.
          </p>
        </div>
      </ScrollReveal>

      {/* Hyperbolic discounting */}
      <ScrollReveal delay={150}>
        <div className="space-y-3 mb-10">
          {[
            { q: '¿Cuánto pagás por mes en remedios para la digestión que no resuelven el origen?', a: 'Mínimo $40 al mes. Sin plan. Sin resultado real.' },
            { q: '¿Cuánto vale una consulta privada con un especialista que te dice "cambiá los hábitos"?', a: 'Arriba de $150 por 15 minutos. Sin instrucciones concretas.' },
            { q: '¿Qué pasa si el hígado graso avanza sin intervención nutricional durante un año más?', a: 'Esa respuesta no la podés calcular en dinero.' },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-white/8 bg-white/[0.04] p-5">
              <p className="text-sm font-light text-white/45 italic mb-2">{item.q}</p>
              <p className="text-sm font-semibold text-[#CC5833]">{item.a}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Future pacing + oferta */}
      <ScrollReveal delay={200}>
        <div className="rounded-2xl border border-[#CC5833]/35 shadow-[0_12px_48px_rgba(204,88,51,0.18)] p-7 md:p-10 text-center mb-8">

          <p className="text-white/50 text-sm font-light italic leading-relaxed mb-5 max-w-md mx-auto">
            En 28 días, si seguís el protocolo, vas a saber exactamente qué comiste,
            cuándo y por qué. Tu cuerpo va a empezar a responder.
          </p>

          <p className="font-mono-data text-[10px] font-medium uppercase tracking-widest text-white/30 mb-1">
            El Sistema NATURALE + 4 Guías · Valor total:
          </p>
          <p className="text-white/30 text-2xl md:text-3xl line-through font-light mb-3">
            $120.95
          </p>

          <p className="text-white/55 font-light mb-1">No vas a pagar $120.</p>
          <p className="text-white/55 font-light mb-5">Tampoco la mitad.</p>

          <div className="border-t border-white/10 pt-5 mb-5">
            <p className="font-mono-data text-[10px] font-medium uppercase tracking-widest text-[#CC5833]/70 mb-2">
              TU INVERSIÓN HOY · UN ÚNICO PAGO DE:
            </p>
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-3xl md:text-4xl text-[#CC5833] font-light">$</span>
              <span className="font-editorial text-7xl md:text-8xl text-white leading-none font-bold">
                17<span className="text-4xl md:text-5xl text-[#CC5833]">.99</span>
              </span>
            </div>
            <span className="inline-block bg-[#CC5833] text-white font-mono-data text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
              85% OFF · ACCESO DE POR VIDA
            </span>
          </div>

          <button
            onClick={openCheckoutModal}
            className="btn-press btn-shine btn-magnetic group relative overflow-hidden w-full bg-[#CC5833] text-white py-5 md:py-6 rounded-2xl font-black text-xl md:text-2xl uppercase tracking-wide inline-flex items-center justify-center gap-3 cta-pulse"
          >
            <span className="btn-bg bg-[#A84428] rounded-2xl" />
            <span className="relative z-10 flex items-center gap-3">
              QUIERO MI PLAN AHORA · $17.99
              <ArrowRight size={22} />
            </span>
          </button>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 font-mono-data text-[10px] text-white/35 font-medium">
            <div className="flex items-center gap-1.5 text-[#CC5833]/70">
              {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
              <span className="text-white/35 ml-1">4.9/5 Verificado</span>
            </div>
            <span className="hidden sm:block opacity-20">|</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={13} className="text-[#4A7C59]" />
              <span>Garantía Incondicional 30 Días</span>
            </div>
          </div>
        </div>
      </ScrollReveal>

    </div>
  </section>
);
