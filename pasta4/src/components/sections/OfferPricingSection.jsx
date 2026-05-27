import React from 'react';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { goToCheckout } from '../../utils/analytics';

const PHASES = [
  { n: '01', label: 'Limpieza suave del filtro hepático', desc: 'Los primeros días ordenan el terreno para que el hígado empiece a recuperarse.' },
  { n: '02', label: 'Combinaciones estratégicas para reducir inflamación', desc: 'Qué comer junto y qué separar. El núcleo del método.' },
  { n: '03', label: 'Consolidación de hábitos alimentarios', desc: 'Las combinaciones se vuelven rutina. Tu cuerpo empieza a responder.' },
  { n: '04', label: 'Mantenimiento a largo plazo', desc: 'Cómo sostener los cambios sin volver a empezar de cero.' },
];

const INCLUDES = [
  { label: 'Protocolo Principal de 28 días', desc: 'Menú diario con las 4 fases. Ingredientes de supermercado. Preparaciones de 20 minutos.' },
  { label: 'Guía de Infusiones de Apoyo', desc: '3 preparaciones naturales que muchos usuarios incorporan a su rutina matutina durante el protocolo.' },
  { label: '10 Recetas de Cenas Ligeras', desc: 'Para noches donde llegás agotado y no querés cocinar mucho. Rápidas y sin pesadez.' },
  { label: 'Lista de Alimentos que Complican el Proceso', desc: 'Los que parecen saludables pero pueden dificultar cuando tenés hígado graso.' },
  { label: 'Guía para Tu Próxima Consulta Médica', desc: 'Qué significan tus transaminasas. Qué preguntas hacerle a tu médico. En lenguaje simple.' },
];

const NOT_LIST = [
  'No es una dieta de moda que funciona 3 días y después te abandona.',
  'No es un recetario con ingredientes imposibles de conseguir.',
  'No promete resultados en 7 días (eso no existe).',
  'No es un suplemento disfrazado de guía.',
];

export const OfferPricingSection = () => (
  <section id="offer" className="bg-[#F8F7F4] py-20 md:py-28">
    <div className="container mx-auto px-5 max-w-3xl space-y-10">

      {/* Headline */}
      <ScrollReveal>
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B91C1C] mb-4 block">
          El Protocolo NATURALE
        </span>
        <h2 className="font-editorial text-3xl md:text-5xl font-bold text-stone-900 leading-tight mb-4">
          28 días. Comida real.{' '}
          <em className="text-[#16A34A]">Sin suplementos. Sin pasar hambre.</em>
        </h2>
        <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed">
          Después de aplicar este método con más de 12.000 pacientes, lo sistematicé para que
          cualquier persona pueda seguirlo desde su casa, sin depender de una consulta.
        </p>
      </ScrollReveal>

      {/* 4 Phases */}
      <ScrollReveal delay={80}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PHASES.map((phase) => (
            <div key={phase.n} className="bg-white rounded-xl border border-stone-200 p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="text-[10px] font-bold text-[#B91C1C] tracking-widest block mb-1.5">
                Fase {phase.n}
              </span>
              <p className="font-semibold text-stone-900 mb-2 text-sm sm:text-base">{phase.label}</p>
              <p className="text-sm text-stone-500 font-light leading-relaxed">{phase.desc}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Key features */}
      <ScrollReveal delay={120}>
        <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-center">
            {[
              { label: 'Ingredientes de supermercado', sub: 'Sin productos raros ni costosos' },
              { label: 'Preparaciones de 20 min', sub: 'Cocinás una sola vez para toda la familia' },
              { label: 'Sin suplementos ni batidos', sub: 'Solo comida real, bien combinada' },
            ].map((f, i) => (
              <div key={i} className={i > 0 ? 'border-t sm:border-t-0 sm:border-l border-stone-100 pt-4 sm:pt-0 sm:pl-5' : ''}>
                <p className="font-semibold text-stone-900 text-sm mb-1">{f.label}</p>
                <p className="text-[11px] text-stone-400 font-light">{f.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* NOT list */}
      <ScrollReveal delay={160}>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-stone-400 mb-4">
            Lo que el Protocolo NATURALE NO es
          </p>
          <div className="space-y-2">
            {NOT_LIST.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-lg border border-stone-100 px-4 py-3">
                <X size={14} className="text-[#B91C1C]/60 shrink-0 mt-0.5" strokeWidth={2.5} />
                <p className="text-sm text-stone-500 font-light">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-stone-500 font-light">
            Es un método. Probado con 12.000 personas reales. Sin atajos.
          </p>
        </div>
      </ScrollReveal>

      {/* Pricing card */}
      <ScrollReveal delay={200}>
        <div className="bg-white rounded-2xl border border-stone-200 shadow-[0_4px_32px_rgba(0,0,0,0.08)] overflow-hidden">

          {/* Header */}
          <div className="bg-stone-900 px-6 py-4 text-center">
            <p className="text-white font-semibold text-sm tracking-wide">
              Todo esto viene incluido en tu compra
            </p>
          </div>

          {/* Includes list */}
          <div className="p-6 space-y-4 border-b border-stone-100">
            {INCLUDES.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#DCFCE7] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 size={12} className="text-[#16A34A]" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="font-semibold text-stone-900 text-sm sm:text-base">{item.label}</p>
                  <p className="text-sm text-stone-500 font-light mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Price + CTA */}
          <div className="px-6 py-7 text-center bg-stone-50/40">
            <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">Todo por</p>
            <div className="flex items-baseline justify-center gap-0.5 mb-1">
              <span className="font-editorial text-xl font-light text-stone-500">USD $</span>
              <span className="font-editorial text-6xl md:text-7xl font-bold text-stone-900 leading-none">17</span>
              <span className="font-editorial text-3xl font-bold text-[#16A34A]">.99</span>
            </div>
            <p className="text-sm text-stone-400 font-light mb-7">Pago único · Acceso de por vida</p>

            <button
              onClick={goToCheckout}
              className="btn-press btn-shine w-full bg-gradient-to-br from-[#16A34A] to-[#15803D] text-white py-4 sm:py-5 font-bold text-base sm:text-lg uppercase tracking-wide flex items-center justify-center gap-2.5 rounded-xl shadow-[0_4px_20px_rgba(22,163,74,0.35)] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(22,163,74,0.45)] transition-all duration-200 brutal-pulse"
            >
              SÍ, QUIERO EL PROTOCOLO NATURALE
              <ArrowRight size={20} strokeWidth={2.5} />
            </button>

            <p className="mt-4 text-xs text-stone-400 font-light">
              Si en 30 días sentís que no te aportó nada, te devolvemos el dinero completo. Sin preguntas.
            </p>
          </div>
        </div>
      </ScrollReveal>

    </div>
  </section>
);
