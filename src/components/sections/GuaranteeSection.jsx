import React from 'react';
import { ShieldCheck, RotateCcw, Lock, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

const TRUST_BADGES = [
  { icon: Lock,         label: 'Compra Segura',   sub: 'SSL 256-bit' },
  { icon: ShieldCheck,  label: 'Hotmart',          sub: 'Plataforma certificada' },
  { icon: RotateCcw,    label: '30 Días',          sub: 'Reembolso total' },
  { icon: CheckCircle2, label: 'Acceso Inmediato', sub: 'Digital · 24h' },
];

export const GuaranteeSection = () => (
  <section id="garantia" className="py-16 md:py-20 bg-[#F2F0E9]">
    <div className="container mx-auto px-5 max-w-2xl">
      <ScrollReveal>

        <div className="rounded-2xl overflow-hidden border border-[#2E4036]/15 shadow-[0_16px_56px_rgba(46,64,54,0.12)]">

          {/* Header */}
          <div className="bg-[#2E4036] px-6 py-4 flex items-center justify-center gap-3">
            <ShieldCheck size={20} className="text-white/80 shrink-0" strokeWidth={2} />
            <span className="text-white font-bold font-mono-data text-xs uppercase tracking-[0.2em]">
              GARANTÍA INCONDICIONAL DE 30 DÍAS
            </span>
            <ShieldCheck size={20} className="text-white/80 shrink-0" strokeWidth={2} />
          </div>

          {/* Body — Gary Bencivenga: integridade total, sem rodeos */}
          <div className="bg-[#F2F0E9] px-6 py-8 md:px-10 flex flex-col sm:flex-row items-center gap-8">

            {/* Seal */}
            <div className="shrink-0 flex flex-col items-center gap-2">
              <div className="relative w-28 h-28 md:w-32 md:h-32 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-4 border-[#2E4036]/25" />
                <div className="absolute inset-2 rounded-full border-2 border-dashed border-[#2E4036]/15" />
                <div className="flex flex-col items-center justify-center text-center z-10">
                  <span className="font-editorial text-4xl md:text-5xl font-bold text-[#2E4036] leading-none">30</span>
                  <span className="font-mono-data text-[9px] font-medium uppercase tracking-widest text-[#2E4036]/60 leading-tight">DÍAS</span>
                </div>
              </div>
              <p className="font-mono-data text-[10px] font-medium uppercase tracking-widest text-[#2E4036]/50 text-center leading-tight">
                RIESGO<br />CERO
              </p>
            </div>

            {/* Copy — Boron Letters: direto, sem enfeite */}
            <div className="flex-1 text-center sm:text-left">
              <h2 className="font-editorial text-xl md:text-2xl font-bold text-[#1A1A1A] leading-tight mb-3">
                El riesgo es{' '}
                <span className="font-drama text-[#2E4036]">completamente nuestro.</span>
              </h2>
              <p className="text-sm md:text-base text-[#6B7260] font-light leading-relaxed mb-3">
                Probá el protocolo durante 30 días completos.
                Seguilo como está indicado. Comé con tu familia.
                Si al cabo de ese tiempo no notás ningún cambio en cómo te sentís,
                o simplemente decidís que no es para vos,
                te devolvemos cada centavo.
              </p>
              <p className="text-sm text-[#6B7260] font-light leading-relaxed mb-4">
                Sin formularios largos. Sin explicaciones. Sin preguntas.
                El proceso de reembolso es directo por Hotmart.
                Conservás todo el material.
              </p>
              <div className="bg-[#E8E6DF] border border-[#2E4036]/12 px-4 py-2.5 rounded-xl inline-block">
                <p className="text-xs font-semibold text-[#2E4036] leading-snug">
                  El único riesgo real es seguir sin un plan mientras el tiempo pasa.
                </p>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="border-t border-[#2E4036]/10 bg-[#E8E6DF] px-6 py-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {TRUST_BADGES.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex flex-col items-center text-center gap-1.5">
                  <div className="w-9 h-9 rounded-full bg-[#2E4036]/10 flex items-center justify-center">
                    <Icon size={16} className="text-[#2E4036]" strokeWidth={2} />
                  </div>
                  <span className="text-[11px] font-bold text-[#1A1A1A] leading-tight">{label}</span>
                  <span className="font-mono-data text-[10px] text-[#6B7260] leading-tight">{sub}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        <p className="text-center font-mono-data text-[10px] text-[#6B7260]/50 mt-3 tracking-wide">
          Reembolso procesado directamente por Hotmart · Plataforma n°1 de América Latina
        </p>

      </ScrollReveal>
    </div>
  </section>
);
