import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { goToCheckout } from '../../utils/analytics';

const NOT_FOR_YOU = [
  'Si buscás una solución mágica en 3 días, esto no es para vos.',
  'Si querés comer lo mismo de siempre sin cambiar nada, tampoco.',
  'Si ya sabés que no vas a seguir el plan 28 días, no tiene sentido.',
];

const FOR_YOU = [
  'Tenés un diagnóstico (o análisis alterados) y querés actuar.',
  'Estás dispuesto a seguir un plan durante 28 días.',
  'Buscás un cambio real, no un parche temporal.',
];

export const FinalCTASection = () => (
  <section className="bg-[#1A1A1A] py-16 md:py-24 relative overflow-hidden">
    <div className="noise-bg" aria-hidden="true" />
    <div className="relative z-10 container mx-auto px-5 max-w-3xl space-y-10">

      {/* Double bind — schismogenesis */}
      <ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-xl border border-white/10 p-5">
            <p className="font-mono-data text-[10px] font-medium uppercase tracking-widest text-[#CC5833]/80 mb-4">
              Para quién NO es esto
            </p>
            <div className="space-y-3">
              {NOT_FOR_YOU.map((item, i) => (
                <p key={i} className="text-sm text-white/45 font-light leading-relaxed">{item}</p>
              ))}
            </div>
          </div>
          <div className="bg-[#4A7C59]/10 rounded-xl border border-[#4A7C59]/20 p-5">
            <p className="font-mono-data text-[10px] font-medium uppercase tracking-widest text-[#86EFAC] mb-4">
              Este protocolo es para personas que:
            </p>
            <div className="space-y-3">
              {FOR_YOU.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 size={13} className="text-[#4A7C59] shrink-0 mt-0.5" />
                  <p className="text-sm text-white/70 font-light leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Sunk cost + antiurgencia */}
      <ScrollReveal delay={80}>
        <div className="text-center space-y-3">
          <h2 className="font-editorial text-3xl md:text-4xl font-bold text-white leading-tight">
            Si ese sos vos,{' '}
            <em className="text-[#CC5833] italic">está acá</em>
          </h2>
          <p className="text-base text-white/45 font-light max-w-lg mx-auto">
            No hay contador regresivo. No hay "últimas 5 copias". No hay "mañana sube el precio".
          </p>
          <p className="text-sm text-white/35 font-light max-w-md mx-auto">
            Ya probaste otras cosas. Ya gastaste tiempo y plata en cosas que no explicaban el mecanismo.
            Esta vez sabés exactamente qué hace y por qué funciona antes de comprar.
          </p>
        </div>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal delay={130}>
        <div className="text-center">
          <button
            onClick={goToCheckout}
            className="btn-press btn-shine w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-br from-[#16A34A] to-[#15803D] text-white px-8 py-5 font-bold text-base sm:text-lg uppercase tracking-wide gap-2.5 rounded-xl shadow-[0_4px_24px_rgba(22,163,74,0.35)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(22,163,74,0.5)] transition-all duration-200 brutal-pulse"
          >
            Acceder al Protocolo NATURALE
            <ArrowRight size={20} />
          </button>
          <p className="mt-4 font-mono-data text-[11px] font-medium text-white/35 uppercase tracking-widest">
            USD $17.99 · Pago único · Garantía 30 días
          </p>
        </div>
      </ScrollReveal>

      {/* P.S. — cierra el círculo narrativo */}
      <ScrollReveal delay={180}>
        <div className="bg-white/5 rounded-xl border border-white/10 p-6 max-w-2xl mx-auto">
          <p className="text-base text-white/45 font-light leading-relaxed">
            <strong className="font-semibold text-white/80">P.S.</strong>{' '}
            Cuando mi mamá mejoró, me abrazó y me dijo:{' '}
            <em className="italic text-white/60">
              "Ojalá esto lo hubiera tenido hace 5 años."
            </em>
          </p>
          <p className="text-base text-white/45 font-light leading-relaxed mt-3">
            No puedo devolver esos 5 años. Pero puedo darte el plan para que no pierdas los tuyos.
          </p>
          <button
            onClick={goToCheckout}
            className="mt-4 text-[#CC5833] text-sm font-semibold underline underline-offset-3 hover:opacity-70 transition-opacity cursor-pointer"
          >
            Acceder al Protocolo NATURALE →
          </button>
        </div>
      </ScrollReveal>

    </div>
  </section>
);
