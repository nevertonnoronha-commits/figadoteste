import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { BonusCard } from '../ui/BonusCard';
import { openCheckoutModal } from '../../utils/analytics';

const bonosGratis = [
  {
    title: "BONO #1: Infusiones de Apoyo Hepático",
    subtitle: "3 preparaciones naturales para acompañar tu protocolo",
    desc: "Una selección de infusiones con ingredientes simples que muchos usuarios incorporan a su rutina matutina como apoyo durante el protocolo. Sin suplementos caros, sin promesas de milagros.",
    val: "9.99",
    img: "https://raw.githubusercontent.com/nevertonnoronha-commits/naturale-images/main/generated-image%20(1).webp",
    alt: "Infusión natural con hierbas para el protocolo",
  },
  {
    title: "BONO #2: 10 Cenas Ligeras para el Final del Día",
    subtitle: "Para cuando estás cansado y no querés cocinar mucho",
    desc: "Las cenas más fáciles de preparar del protocolo. Ideales para noches donde llegás agotado. Livianas, rápidas y que no te dejan con pesadez al acostarte.",
    val: "9.99",
    img: "https://raw.githubusercontent.com/nevertonnoronha-commits/naturale-images/main/generated-image%20(6).webp",
    alt: "Cena ligera y rápida para la noche",
  },
  {
    title: "BONO #3: Alimentos que Complican el Hígado Graso",
    subtitle: "Los que parecen saludables pero no ayudan en tu caso",
    desc: "Una guía directa sobre alimentos que suelen aparecer en 'dietas saludables' pero que pueden dificultar el proceso cuando tenés hígado graso. Sin exageraciones, solo información práctica.",
    val: "7.99",
    img: "https://raw.githubusercontent.com/nevertonnoronha-commits/naturale-images/main/2f453bea-34f4-467f-ae9a-341787e258ee.webp",
    alt: "Alimentos que complican el hígado graso",
  },
  {
    title: "BONO #4: Guía para Tu Próxima Consulta Médica",
    subtitle: "Entiende tus análisis y llegá preparado al consultorio",
    desc: "¿Qué significan tus transaminasas? ¿Qué preguntas hacerle a tu médico? Esta guía explica en lenguaje simple los términos más comunes para que vayas informado a tu próxima consulta.",
    val: "12.99",
    img: "https://raw.githubusercontent.com/nevertonnoronha-commits/naturale-images/main/c2e5eaf0-d4ce-4e4c-8102-908be94d8a30.webp",
    alt: "Guía de preguntas para consulta médica",
  },
];

export const BonusesSection = () => (
  <section id="offer" className="py-16 md:py-24 bg-[#2E4036] text-white relative overflow-hidden">
    <div className="noise-bg" aria-hidden="true" />
    <div className="container mx-auto px-5 max-w-4xl relative z-10">

      <ScrollReveal>
        <div className="mb-12">
          <span className="font-mono-data text-[10px] font-medium uppercase tracking-[0.25em] text-[#CC5833]/70 mb-3 block">
            SOLO DISPONIBLE EN ESTA PÁGINA
          </span>
          <h2 className="font-editorial text-3xl md:text-5xl text-white font-bold leading-tight mb-4">
            Lo que te llevás HOY:{' '}
            <span className="font-drama text-[#CC5833]">4 Guías de Apoyo — Sin Costo Adicional</span>
          </h2>
          <p className="text-base text-white/55 font-light">
            Comprás el Protocolo NATURALE y te llevás todo esto sin costo adicional:
          </p>
        </div>
      </ScrollReveal>

      <div className="flex flex-col gap-5 mb-14 max-w-3xl mx-auto">
        {bonosGratis.map((bono, idx) => (
          <BonusCard key={idx} bono={bono} idx={idx} />
        ))}
      </div>

      {/* Value stack box */}
      <ScrollReveal delay={200}>
        <div className="rounded-2xl bg-[#F2F0E9] text-[#1A1A1A] border border-[#CC5833]/30 shadow-[0_12px_48px_rgba(204,88,51,0.18)] p-7 md:p-10 max-w-2xl mx-auto">
          <p className="font-mono-data text-[10px] font-medium uppercase tracking-widest text-[#CC5833] mb-5 text-center">
            RESUMEN · LO QUE RECIBÍS HOY
          </p>

          <ul className="space-y-3 mb-7">
            <li className="flex justify-between items-center border-b border-[#2E4036]/12 pb-2.5">
              <span className="flex gap-2 items-center text-sm font-bold">
                <CheckCircle2 size={14} className="text-[#4A7C59] shrink-0" />
                Sistema NATURALE · Protocolo Principal
              </span>
              <span className="font-mono-data font-medium text-sm">$79.99</span>
            </li>
            {[
              { label: 'Bono #1: Infusiones de Apoyo', val: '$9.99' },
              { label: 'Bono #2: Cenas Ligeras', val: '$9.99' },
              { label: 'Bono #3: Los 12 Alimentos Traidores', val: '$7.99' },
              { label: 'Bono #4: Guía de Seguimiento', val: '$12.99' },
            ].map((item, i) => (
              <li key={i} className="flex justify-between items-center border-b border-[#2E4036]/10 pb-2.5 text-[#6B7260]">
                <span className="text-sm font-light">{item.label}</span>
                <span className="font-mono-data text-sm line-through opacity-50">{item.val}</span>
              </li>
            ))}
          </ul>

          <div className="bg-[#E8E6DF] rounded-xl p-5 text-center mb-7">
            <p className="font-mono-data text-xs font-medium uppercase tracking-widest text-[#6B7260] mb-1">
              Valor Total: <span className="line-through">$120.95</span>
            </p>
            <p className="font-editorial text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-2">
              Hoy Pagás Solo:{' '}
              <span className="text-[#CC5833]">$17.99</span>
            </p>
            <span className="bg-[#CC5833] text-white font-black uppercase font-mono-data text-[10px] tracking-wider px-4 py-1.5 rounded-full inline-block">
              AHORRÁS $102.96 · 85% DE DESCUENTO
            </span>
          </div>

          <button
            onClick={openCheckoutModal}
            className="btn-press btn-shine btn-magnetic group relative overflow-hidden block w-full text-center bg-[#CC5833] text-white py-5 rounded-2xl font-black text-lg md:text-xl uppercase tracking-wide cta-pulse"
          >
            <span className="btn-bg bg-[#A84428] rounded-2xl" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              SÍ, QUIERO EL PROTOCOLO NATURALE HOY{' '}
              <ArrowRight size={20} />
            </span>
          </button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
