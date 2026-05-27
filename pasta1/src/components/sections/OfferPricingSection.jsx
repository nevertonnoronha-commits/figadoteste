import React from 'react';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { goToCheckout } from '../../utils/analytics';

/* Gamificação — marcos específicos por semana */
const PHASES = [
  {
    n: '01',
    days: 'Días 1-7',
    label: 'Limpieza suave del filtro hepático',
    desc: 'El hígado entra en modo de recuperación.',
    milestone: 'La pesadez empieza a ceder.',
    color: 'bg-[#E8E6DF] text-[#6B7260]',
  },
  {
    n: '02',
    days: 'Días 8-14',
    label: 'Combinaciones que reducen inflamación',
    desc: 'El núcleo del Método de Combinación Hepática.',
    milestone: 'La energía vuelve.',
    color: 'bg-[#FAF0EA] text-[#A84428]',
  },
  {
    n: '03',
    days: 'Días 15-21',
    label: 'Consolidación de hábitos alimentarios',
    desc: 'Las combinaciones se vuelven rutina.',
    milestone: 'Los cambios se consolidan.',
    color: 'bg-[#F0FDF4] text-[#166534]',
  },
  {
    n: '04',
    days: 'Días 22-28',
    label: 'Preparación para tu análisis de control',
    desc: 'Tus números van a contar una historia diferente.',
    milestone: 'Listo para el médico.',
    color: 'bg-[#DBEAFE]/60 text-blue-700',
  },
];

const INCLUDES = [
  { label: 'Protocolo Principal de 28 días', desc: 'Menú diario con las 4 fases. Ingredientes de supermercado. Preparaciones de 20 minutos.' },
  { label: 'Guía de Infusiones de Apoyo', desc: '3 preparaciones naturales que muchos usuarios incorporan a su rutina matutina durante el protocolo.' },
  { label: '10 Recetas de Cenas Ligeras', desc: 'Para noches donde llegás agotado. Rápidas, simples, sin pesadez.' },
  { label: 'Lista de Alimentos que Complican el Proceso', desc: 'Los que parecen saludables pero dificultan la recuperación cuando tenés hígado cargado.' },
  { label: 'Guía para Tu Próxima Consulta Médica', desc: 'Qué significan tus transaminasas. Qué preguntar. En lenguaje simple, no médico.' },
];

const NOT_LIST = [
  'No es una dieta de moda que funciona 3 días y después te abandona.',
  'No es un recetario con ingredientes imposibles de conseguir.',
  'No promete resultados en 7 días. Eso no existe.',
  'No es un suplemento disfrazado de guía.',
];

export const OfferPricingSection = () => (
  <section id="offer" className="bg-[#E8E6DF] py-20 md:py-28">
    <div className="container mx-auto px-5 max-w-3xl space-y-10">

      {/* Headline */}
      <ScrollReveal>
        <span className="font-mono-data text-[10px] font-medium uppercase tracking-[0.25em] text-[#CC5833] mb-4 block">
          El Protocolo NATURALE
        </span>
        <h2 className="font-editorial text-3xl md:text-5xl font-bold text-[#1C1917] leading-tight mb-4">
          28 días. Comida real.{' '}
          <em className="text-[#4A7C59] italic">Sin suplementos. Sin pasar hambre.</em>
        </h2>
        <p className="text-base sm:text-lg text-[#6B7260] font-light leading-relaxed">
          Después de aplicar el Método de Combinación Hepática con más de 12.000 pacientes,
          lo sistematicé para que cualquier persona pueda seguirlo desde su casa.
          Sin depender de una consulta.
        </p>
      </ScrollReveal>

      {/* 4 Fases gamificadas con marcadores */}
      <ScrollReveal delay={80}>
        <p className="font-mono-data text-[11px] font-medium uppercase tracking-widest text-[#6B7260] mb-4">
          Las 4 fases del protocolo
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PHASES.map((phase) => (
            <div key={phase.n} className="bg-white rounded-xl border border-stone-200/50 p-5 shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.09)] transition-shadow duration-300">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono-data text-[10px] font-medium text-[#CC5833] tracking-widest">
                  Fase {phase.n}
                </span>
                <span className={`font-mono-data text-[9px] font-medium px-2 py-0.5 rounded-full ${phase.color}`}>
                  {phase.days}
                </span>
              </div>
              <p className="font-semibold text-[#1C1917] mb-1 text-sm sm:text-base">{phase.label}</p>
              <p className="text-sm text-[#6B7260] font-light leading-relaxed">{phase.desc}</p>
              <p className="text-xs font-semibold text-[#4A7C59] mt-2">→ {phase.milestone}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Features */}
      <ScrollReveal delay={120}>
        <div className="bg-white rounded-xl border border-stone-200/50 p-5 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-center">
            {[
              { label: 'Ingredientes de supermercado', sub: 'Sin productos raros ni costosos' },
              { label: 'Preparaciones de 20 min', sub: 'Cocinás una sola vez para toda la familia' },
              { label: 'Sin suplementos ni batidos', sub: 'Solo comida real, bien combinada' },
            ].map((f, i) => (
              <div key={i} className={i > 0 ? 'border-t sm:border-t-0 sm:border-l border-stone-100 pt-4 sm:pt-0 sm:pl-5' : ''}>
                <p className="font-semibold text-[#1C1917] text-sm mb-1">{f.label}</p>
                <p className="text-[11px] text-[#6B7260] font-light">{f.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* NOT list — schismogenesis */}
      <ScrollReveal delay={160}>
        <div>
          <p className="font-mono-data text-[11px] font-medium uppercase tracking-widest text-[#6B7260] mb-4">
            Lo que el Protocolo NATURALE NO es
          </p>
          <div className="space-y-2">
            {NOT_LIST.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-lg border border-stone-200/50 px-4 py-3">
                <X size={14} className="text-[#CC5833]/60 shrink-0 mt-0.5" strokeWidth={2.5} />
                <p className="text-sm text-[#6B7260] font-light">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-[#6B7260] font-light">
            Es un método. Probado con 12.000 personas reales. Sin atajos.
          </p>
        </div>
      </ScrollReveal>

      {/* Pricing card */}
      <ScrollReveal delay={200}>
        <div className="bg-white rounded-2xl border border-stone-200/50 shadow-[0_8px_48px_rgba(0,0,0,0.10)] overflow-hidden">

          {/* Header — Musgo */}
          <div className="bg-[#2E4036] px-6 py-4 text-center relative overflow-hidden">
            <div className="noise-bg rounded-none" aria-hidden="true" />
            <p className="relative z-10 text-white font-semibold text-sm tracking-wide">
              Todo esto viene incluido en tu compra
            </p>
          </div>

          {/* Includes */}
          <div className="p-6 space-y-4 border-b border-stone-100">
            {INCLUDES.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#DCFCE7] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 size={12} className="text-[#4A7C59]" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="font-semibold text-[#1C1917] text-sm sm:text-base">{item.label}</p>
                  <p className="text-sm text-[#6B7260] font-light mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Price + CTA */}
          <div className="px-6 py-7 text-center bg-[#F2F0E9]/40">
            {/* Hyperbolic discounting — ancora de valor */}
            <p className="text-xs text-[#6B7260] font-light mb-5 max-w-xs mx-auto">
              Por menos de lo que pagás por un almuerzo, tenés un plan de 28 días
              construido sobre 12.000 casos reales. Acceso de por vida.
            </p>

            <p className="font-mono-data text-[10px] font-medium uppercase tracking-widest text-[#6B7260] mb-2">Todo por</p>
            <div className="flex items-baseline justify-center gap-0.5 mb-1">
              <span className="font-editorial text-xl font-light text-[#6B7260]">USD $</span>
              <span className="font-editorial text-6xl md:text-7xl font-bold text-[#1C1917] leading-none">17</span>
              <span className="font-editorial text-3xl font-bold text-[#4A7C59]">.99</span>
            </div>
            <p className="text-sm text-[#6B7260] font-light mb-7">Pago único · Acceso de por vida</p>

            {/* NLP presupposition — "cuando", no "si" */}
            <p className="text-xs text-[#6B7260] font-light mb-4">
              Cuando empieces el protocolo, vas a recibir acceso inmediato a los 5 materiales.
            </p>

            <button
              onClick={goToCheckout}
              className="btn-press btn-shine w-full bg-gradient-to-br from-[#16A34A] to-[#15803D] text-white py-4 sm:py-5 font-bold text-base sm:text-lg uppercase tracking-wide flex items-center justify-center gap-2.5 rounded-xl shadow-[0_4px_20px_rgba(22,163,74,0.35)] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(22,163,74,0.45)] transition-all duration-200 brutal-pulse"
            >
              SÍ, QUIERO EL PROTOCOLO NATURALE
              <ArrowRight size={20} strokeWidth={2.5} />
            </button>

            <p className="mt-4 text-xs text-[#6B7260] font-light">
              Si en 30 días sentís que no te aportó nada, te devolvemos el dinero completo. Sin preguntas.
            </p>
          </div>
        </div>
      </ScrollReveal>

    </div>
  </section>
);
