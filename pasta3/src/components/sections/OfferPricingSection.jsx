import React from 'react';
import { ShieldCheck, Star, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { openCheckoutModal } from '../../utils/analytics';

export const OfferPricingSection = () => (
  <section className="py-16 md:py-24 bg-[#1A1A1A] text-white relative overflow-hidden">
    <div className="noise-bg" aria-hidden="true" />
    <div className="container mx-auto px-5 max-w-3xl relative z-10">

      <ScrollReveal>
        <span className="font-mono-data text-[10px] font-medium uppercase tracking-[0.25em] text-[#CC5833]/70 mb-6 block">
          LA MATEMÁTICA DE TU SALUD
        </span>
        <h2 className="font-editorial text-3xl md:text-5xl text-white font-bold leading-tight mb-10">
          El Costo Oculto de{' '}
          <span className="font-drama text-[#CC5833]">No Hacer Nada</span>
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="space-y-3 mb-10">
          {[
            { q: '¿Cuánto gastás por mes en pastillas para la digestión, Omeprazol o tés mágicos que no funcionan?', a: 'Mínimo $40 al mes · sin resultados reales.' },
            { q: '¿Cuánto cuesta una consulta privada con un especialista donde solo te dicen "bajá de peso"?', a: 'Arriba de $150 por 15 minutos de nada.' },
            { q: '¿Y cuánto tiempo, energía y dinero seguís invirtiendo en soluciones sin un plan claro para tu caso?', a: 'Más de lo que te imaginás. Y la solución puede costar $17.99.' },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-white/8 bg-white/[0.04] p-5">
              <p className="text-sm md:text-base font-light text-white/55 italic mb-2">{item.q}</p>
              <p className="text-sm md:text-base font-semibold text-[#CC5833]">→ {item.a}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <div className="rounded-2xl border border-[#CC5833]/35 shadow-[0_12px_48px_rgba(204,88,51,0.18)] p-7 md:p-10 text-center mb-8">
          <p className="font-mono-data text-[10px] font-medium uppercase tracking-widest text-white/35 mb-1">
            El Sistema NATURALE + 4 Guías de Apoyo tienen un valor total de:
          </p>
          <p className="text-white/35 text-2xl md:text-3xl line-through font-light mb-2">
            $120.95
          </p>

          <p className="text-white/65 text-sm md:text-base font-light mb-1">
            Pero si ingresás ahora, mientras el acceso con 85% de descuento esté activo...
          </p>
          <p className="text-white/65 font-light mb-1">No vas a pagar $120.</p>
          <p className="text-white/65 font-light mb-5">Tampoco vas a pagar la mitad, $60.</p>

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
              QUIERO EL PROTOCOLO NATURALE — $17.99
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
              <span>Garantía Incondicional de 30 Días</span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
