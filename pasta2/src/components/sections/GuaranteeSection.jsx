import React from 'react';
import { ShieldCheck, Lock, RotateCcw, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

const TRUST_BADGES = [
  { icon: Lock,         label: 'Compra Segura',   sub: 'SSL 256-bit' },
  { icon: ShieldCheck,  label: 'Hotmart',          sub: 'Plataforma certificada' },
  { icon: RotateCcw,    label: '30 Días',          sub: 'Reembolso total' },
  { icon: CheckCircle2, label: 'Acceso Inmediato', sub: 'Digital · 24h' },
];

export const GuaranteeSection = () => (
  <section className="bg-[#F8F7F4] py-16 md:py-20">
    <div className="container mx-auto px-5 max-w-2xl">
      <ScrollReveal>

        <div className="bg-white rounded-2xl border border-stone-200 shadow-[0_2px_20px_rgba(0,0,0,0.06)] overflow-hidden">

          {/* Header */}
          <div className="bg-[#16A34A] px-6 py-4 flex items-center justify-center gap-2.5">
            <ShieldCheck size={18} className="text-white shrink-0" strokeWidth={2} />
            <span className="text-white font-semibold text-sm tracking-wide">
              Garantía honesta de 30 días
            </span>
          </div>

          {/* Body */}
          <div className="px-6 py-7 md:px-8 flex flex-col sm:flex-row items-center gap-7">

            {/* Seal */}
            <div className="shrink-0 flex flex-col items-center gap-2">
              <div className="relative w-24 h-24 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-[3px] border-[#16A34A]" />
                <div className="absolute inset-2 rounded-full border border-dashed border-[#16A34A]/30" />
                <div className="flex flex-col items-center justify-center z-10">
                  <span className="font-editorial text-3xl font-bold text-[#16A34A] leading-none">30</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#16A34A]">DÍAS</span>
                </div>
              </div>
              <p className="text-[9px] font-bold uppercase tracking-widest text-[#166534] text-center leading-tight">
                RIESGO<br />CERO
              </p>
            </div>

            {/* Copy */}
            <div className="flex-1 space-y-4 text-base text-stone-600 font-light leading-relaxed text-center sm:text-left">
              <p>Probás el protocolo.</p>
              <p>
                Si no te sirve, me escribís un mail. Te devuelvo el 100% de tu dinero.{' '}
                <strong className="font-semibold text-stone-900">Sin cuestionar. Sin formularios eternos.</strong>
              </p>
              <div className="bg-[#F0FDF4] rounded-lg border border-[#BBF7D0] px-4 py-3 text-left">
                <p className="text-sm text-[#166534] font-light">
                  No te vendo con miedo. Te ofrezco con confianza.
                </p>
                <p className="text-sm text-[#166534] font-light mt-1">
                  Si funciona para ti, genial. Si no, también está bien. Nos separamos en buenos términos.
                </p>
              </div>
              <p className="text-sm font-semibold text-stone-900">El riesgo es mío. No tuyo.</p>
            </div>
          </div>

          {/* Trust badges */}
          <div className="border-t border-stone-100 bg-stone-50/50 px-6 py-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {TRUST_BADGES.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex flex-col items-center text-center gap-1.5">
                  <div className="w-8 h-8 rounded-full bg-[#DCFCE7] flex items-center justify-center">
                    <Icon size={15} className="text-[#16A34A]" strokeWidth={2} />
                  </div>
                  <span className="text-[11px] font-semibold text-stone-800 leading-tight">{label}</span>
                  <span className="text-[10px] text-stone-400 leading-tight">{sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-[10px] text-stone-400 mt-3 tracking-wide">
          Reembolso procesado directamente por Hotmart · Plataforma n°1 de América Latina
        </p>

      </ScrollReveal>
    </div>
  </section>
);
