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
  <section id="offer" className="py-16 md:py-24 bg-[#0F2033] text-white border-b-4 border-[#111111]">
    <div className="noise-bg opacity-20"></div>
    <div className="container mx-auto px-5 max-w-4xl relative z-10">

      <ScrollReveal>
        <div className="mb-12">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#B91C1C] mb-3 block">
            SOLO DISPONIBLE EN ESTA PÁGINA
          </span>
          <h2 className="font-editorial text-3xl md:text-5xl text-white font-bold leading-tight mb-4">
            Lo que te llevás HOY:{' '}
            <span className="italic text-[#FBBF24]">4 Guías de Apoyo — Sin Costo Adicional</span>
          </h2>
          <p className="text-base text-white/70 font-light">
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
        <div className="bg-white text-[#111111] border-2 border-[#FBBF24] shadow-[6px_6px_0_#FBBF24] p-7 md:p-10 max-w-2xl mx-auto">
          <p className="text-[10px] font-black uppercase tracking-widest text-[#B91C1C] mb-5 text-center">
            📦 RESUMEN · LO QUE RECIBÍS HOY
          </p>

          <ul className="space-y-3 mb-7">
            <li className="flex justify-between items-center border-b border-[#D1D5DB] pb-2.5">
              <span className="flex gap-2 items-center text-sm font-bold">
                <CheckCircle2 size={15} className="text-[#16A34A] shrink-0" />
                Sistema NATURALE · Protocolo Principal
              </span>
              <span className="font-bold text-sm">$79.99</span>
            </li>
            {[
              { label: 'Bono #1: Infusiones de Apoyo', val: '$9.99' },
              { label: 'Bono #2: Cenas Ligeras', val: '$9.99' },
              { label: 'Bono #3: Los 12 Alimentos Traidores', val: '$7.99' },
              { label: 'Bono #4: Guía de Seguimiento', val: '$12.99' },
            ].map((item, i) => (
              <li key={i} className="flex justify-between items-center border-b border-[#D1D5DB] pb-2.5 text-[#525252]">
                <span className="text-sm font-light">{item.label}</span>
                <span className="text-sm line-through">{item.val}</span>
              </li>
            ))}
          </ul>

          <div className="bg-[#F7F5F0] border-2 border-[#111111] p-5 text-center mb-7">
            <p className="text-xs font-black uppercase tracking-widest text-[#525252] mb-1">
              Valor Total: <span className="line-through">$120.95</span>
            </p>
            <p className="font-editorial text-3xl md:text-4xl font-bold text-[#111111] mb-2">
              Hoy Pagás Solo:{' '}
              <span className="text-[#16A34A]">$17.99</span>
            </p>
            <span className="bg-[#16A34A] text-white font-black uppercase text-xs tracking-wider px-4 py-1.5 inline-block">
              AHORRÁS $102.96 · 85% DE DESCUENTO
            </span>
          </div>

          <button
            onClick={openCheckoutModal}
            className="btn-press btn-shine block w-full text-center bg-[#16A34A] text-white py-5 font-black text-lg md:text-xl uppercase tracking-wide border-2 border-[#166534] shadow-[5px_5px_0_#166534] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_#166534] transition-all duration-100"
          >
            SÍ, QUIERO EL PROTOCOLO NATURALE HOY{' '}
            <ArrowRight size={20} className="inline-block ml-2" />
          </button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
