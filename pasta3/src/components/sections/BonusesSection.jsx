import React from 'react';
import { CheckCircle2, ArrowRight, Gift } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { BonusCard } from '../ui/BonusCard';
import { openCheckoutModal } from '../../utils/analytics';

// Coolidge effect: cada bônus é genuinamente diferente do anterior
// FOMO: exclusivo desta página, sem countdown falso
const bonosGratis = [
  {
    title: "BONO #1: Infusiones de Apoyo Hepático",
    subtitle: "3 preparaciones para incorporar a tu rutina matutina",
    desc: "Ingredientes simples que muchas personas ya tienen en casa. Sin suplementos, sin promesas exageradas. Solo opciones concretas para acompañar el protocolo desde el primer día.",
    val: "9.99",
    img: "https://raw.githubusercontent.com/nevertonnoronha-commits/naturale-images/main/generated-image%20(1).webp",
    alt: "Infusión natural de apoyo hepático",
  },
  {
    title: "BONO #2: 10 Cenas Ligeras para el Final del Día",
    subtitle: "Para cuando llegás agotado y no querés pensar en cocinar",
    desc: "Las preparaciones más rápidas del protocolo. Livianas, de menos de 20 minutos. Diseñadas específicamente para no interrumpir el proceso de recuperación nocturna del hígado.",
    val: "9.99",
    img: "https://raw.githubusercontent.com/nevertonnoronha-commits/naturale-images/main/generated-image%20(6).webp",
    alt: "Cena ligera y rápida para la noche",
  },
  {
    title: "BONO #3: Los Alimentos que Complican el Hígado",
    subtitle: "Algunos parecen saludables. No lo son para tu caso.",
    desc: "Una guía directa sobre alimentos que aparecen en cualquier 'dieta equilibrada' pero que pueden dificultar el proceso cuando hay hígado graso. Sin alarmismo. Solo información práctica que cambia cómo comprás.",
    val: "7.99",
    img: "https://raw.githubusercontent.com/nevertonnoronha-commits/naturale-images/main/2f453bea-34f4-467f-ae9a-341787e258ee.webp",
    alt: "Alimentos que complican el hígado graso",
  },
  {
    title: "BONO #4: Guía para Tu Próxima Consulta Médica",
    subtitle: "Llegá informada. Hacé las preguntas correctas.",
    desc: "¿Qué significan tus transaminasas? ¿Qué diferencia hay entre grado 1 y grado 2? ¿Qué preguntarle al médico? Esta guía convierte términos clínicos en lenguaje que podés usar en el consultorio.",
    val: "12.99",
    img: "https://raw.githubusercontent.com/nevertonnoronha-commits/naturale-images/main/c2e5eaf0-d4ce-4e4c-8102-908be94d8a30.webp",
    alt: "Guía de consulta médica para hígado graso",
  },
];

export const BonusesSection = () => (
  <section id="offer" className="py-16 md:py-24 bg-[#2E4036] text-white relative overflow-hidden">
    <div className="noise-bg" aria-hidden="true" />
    <div className="container mx-auto px-5 max-w-4xl relative z-10">

      <ScrollReveal>
        <div className="mb-12">
          {/* FOMO — exclusividade real, sem countdown falso */}
          <div className="inline-flex items-center gap-2 bg-[#CC5833]/15 border border-[#CC5833]/30 rounded-full px-4 py-1.5 mb-5">
            <Gift size={13} className="text-[#CC5833] shrink-0" />
            <span className="font-mono-data text-[10px] font-semibold uppercase tracking-widest text-[#CC5833]">
              Solo disponible en esta página
            </span>
          </div>
          <h2 className="font-editorial text-3xl md:text-5xl text-white font-bold leading-tight mb-4">
            Cuando comprás el protocolo hoy,{' '}
            <span className="font-drama text-[#CC5833]">llevás 4 guías sin costo adicional.</span>
          </h2>
          {/* Mimetic desire: los que ya actúan */}
          <p className="text-base text-white/50 font-light max-w-xl">
            Estas guías ya están en manos de más de 12.000 personas que decidieron no esperar
            a que el médico les diera instrucciones más claras.
          </p>
        </div>
      </ScrollReveal>

      <div className="flex flex-col gap-5 mb-14 max-w-3xl mx-auto">
        {bonosGratis.map((bono, idx) => (
          <BonusCard key={idx} bono={bono} idx={idx} />
        ))}
      </div>

      {/* Value stack — Lollapalooza: suma de partes */}
      <ScrollReveal delay={200}>
        <div className="rounded-2xl bg-[#F2F0E9] text-[#1A1A1A] border border-[#CC5833]/30 shadow-[0_12px_48px_rgba(204,88,51,0.18)] p-7 md:p-10 max-w-2xl mx-auto">
          <p className="font-mono-data text-[10px] font-medium uppercase tracking-widest text-[#CC5833] mb-5 text-center">
            TODO LO QUE RECIBÍS HOY
          </p>

          <ul className="space-y-3 mb-7">
            <li className="flex justify-between items-center border-b border-[#2E4036]/12 pb-2.5">
              <span className="flex gap-2 items-center text-sm font-bold">
                <CheckCircle2 size={14} className="text-[#4A7C59] shrink-0" />
                Sistema NATURALE · Protocolo Principal 28 Días
              </span>
              <span className="font-mono-data font-medium text-sm">$79.99</span>
            </li>
            {[
              { label: 'Bono #1: Infusiones de Apoyo', val: '$9.99' },
              { label: 'Bono #2: Cenas Ligeras', val: '$9.99' },
              { label: 'Bono #3: Alimentos que Complican', val: '$7.99' },
              { label: 'Bono #4: Guía de Consulta Médica', val: '$12.99' },
            ].map((item, i) => (
              <li key={i} className="flex justify-between items-center border-b border-[#2E4036]/10 pb-2.5 text-[#6B7260]">
                <span className="text-sm font-light">{item.label}</span>
                <span className="font-mono-data text-sm line-through opacity-50">{item.val}</span>
              </li>
            ))}
          </ul>

          <div className="bg-[#E8E6DF] rounded-xl p-5 text-center mb-7">
            <p className="font-mono-data text-xs font-medium uppercase tracking-widest text-[#6B7260] mb-1">
              Valor total: <span className="line-through">$120.95</span>
            </p>
            <p className="font-editorial text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-2">
              Hoy pagás solo:{' '}
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
              SÍ, QUIERO EL PROTOCOLO HOY <ArrowRight size={20} />
            </span>
          </button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
