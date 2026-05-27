import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { goToCheckout } from '../../utils/analytics';

const NOT_FOR_YOU = [
  'Si estás buscando una solución mágica en 3 días, esto no es para ti.',
  'Si querés comer lo mismo de siempre sin cambiar nada, tampoco.',
  'Si esperás resultados sin constancia, no te va a funcionar.',
];

const FOR_YOU = [
  'Tienen un diagnóstico y quieren actuar.',
  'Están dispuestas a seguir un plan durante 28 días.',
  'Buscan un cambio sostenible, no un parche temporal.',
];

export const FinalCTASection = () => (
  <section className="bg-stone-900 py-16 md:py-24">
    <div className="container mx-auto px-5 max-w-3xl space-y-10">

      {/* For whom cards */}
      <ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-xl border border-white/10 p-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#B91C1C]/80 mb-4">
              Para quién NO es esto
            </p>
            <div className="space-y-3">
              {NOT_FOR_YOU.map((item, i) => (
                <p key={i} className="text-sm text-stone-400 font-light leading-relaxed">{item}</p>
              ))}
            </div>
          </div>
          <div className="bg-[#16A34A]/10 rounded-xl border border-[#16A34A]/20 p-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#86EFAC] mb-4">
              Este protocolo es para personas que:
            </p>
            <div className="space-y-3">
              {FOR_YOU.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 size={13} className="text-[#16A34A] shrink-0 mt-0.5" />
                  <p className="text-sm text-stone-300 font-light leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Soft offer reminder */}
      <ScrollReveal delay={100}>
        <div className="text-center space-y-3">
          <h2 className="font-editorial text-3xl md:text-4xl font-bold text-white leading-tight">
            Si ese sos vos,{' '}
            <em className="text-[#86EFAC]">está acá</em>
          </h2>
          <p className="text-base text-stone-400 font-light max-w-lg mx-auto">
            No hay contador regresivo. No hay "últimas 5 copias". No hay "mañana sube el precio".
          </p>
          <p className="text-sm text-stone-500 font-light">
            Si lo necesitás hoy, está acá. Si lo necesitás dentro de un mes, también va a estar.
          </p>
        </div>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal delay={150}>
        <div className="text-center">
          <button
            onClick={goToCheckout}
            className="btn-press btn-shine w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-br from-[#16A34A] to-[#15803D] text-white px-8 py-5 font-bold text-base sm:text-lg uppercase tracking-wide gap-2.5 rounded-xl shadow-[0_4px_24px_rgba(22,163,74,0.35)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(22,163,74,0.5)] transition-all duration-200 brutal-pulse"
          >
            Acceder al Protocolo NATURALE
            <ArrowRight size={20} />
          </button>
          <p className="mt-4 text-[11px] font-medium text-stone-500 uppercase tracking-widest">
            USD $17.99 · Pago único · Garantía 30 días
          </p>
        </div>
      </ScrollReveal>

      {/* P.S. */}
      <ScrollReveal delay={200}>
        <div className="bg-white/5 rounded-xl border border-white/10 p-6 max-w-2xl mx-auto">
          <p className="text-base text-stone-400 font-light leading-relaxed">
            <strong className="font-semibold text-white">P.S.</strong>{' '}
            Cuando mi mamá mejoró, me abrazó y me dijo:{' '}
            <em className="italic text-stone-300">
              "Ojalá esto lo hubiera tenido hace 5 años."
            </em>{' '}
            No puedo devolver esos 5 años. Pero puedo ofrecerte este plan para que no pierdas los tuyos.
          </p>
          <button
            onClick={goToCheckout}
            className="mt-4 text-[#86EFAC] text-sm font-semibold underline underline-offset-3 hover:opacity-70 transition-opacity cursor-pointer"
          >
            Acceder al Protocolo NATURALE →
          </button>
        </div>
      </ScrollReveal>

    </div>
  </section>
);
