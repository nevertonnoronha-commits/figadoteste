import React from 'react';
import { Star, CheckCircle2, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { openCheckoutModal } from '../../utils/analytics';

const reviews = [
  {
    text: 'Me diagnosticaron hígado graso grado 2. Salí del médico sin saber qué comer ni por dónde empezar. Empecé el protocolo y en pocas semanas ya no me sentía tan pesada. En mi siguiente análisis, mis transaminasas habían mejorado bastante. Mi médico me preguntó qué había cambiado.',
    author: 'Carmen R. — 52 años, Argentina',
    detail: 'Transaminasas mejoradas en análisis de seguimiento',
  },
  {
    text: 'Tenía triglicéridos muy altos y la energía por el piso. Lo que me convenció fue que no tenía que cocinar distinto para mi familia. Todos comemos lo mismo. En un mes noté menos pesadez y bajé unos kilos que no esperaba bajar sin hacer dieta.',
    author: 'Roberto M. — 48 años, México',
    detail: 'Menos pesadez. Bajó de peso sin dieta separada',
  },
  {
    text: 'Me sorprendió lo rápido que dejé de sentirme hinchada. No pensé que cambiar lo que como pudiera hacer tanto. La parte de los snacks fue lo que más me ayudó — ya no paso hambre desesperada a las 5 de la tarde.',
    author: 'Gabriela F. — 45 años, Colombia',
    detail: 'Menos hinchazón y ansiedad por comer',
  },
];

export const SocialProofSection = () => (
  <section id="testimonios" className="py-16 md:py-24 bg-[#E8E6DF]">
    <div className="container mx-auto px-5 max-w-4xl">

      <ScrollReveal>
        <div className="mb-12">
          <span className="font-mono-data text-[10px] font-medium uppercase tracking-[0.25em] text-[#CC5833] mb-3 block">
            LO QUE DICEN QUIENES YA LO PROBARON
          </span>
          <h2 className="font-editorial text-3xl md:text-5xl font-bold text-[#1A1A1A] leading-tight">
            Experiencias de Personas Como Vos
          </h2>
          <div className="w-12 h-0.5 bg-[#CC5833] mt-4 rounded-full" />
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {reviews.map((review, idx) => (
          <ScrollReveal key={idx} delay={idx * 120}>
            <div className="rounded-2xl bg-[#F2F0E9] border border-[#2E4036]/10 shadow-[0_8px_32px_rgba(46,64,54,0.08)] p-6 h-full flex flex-col">
              <div className="flex gap-1 text-[#CC5833] mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="currentColor" />)}
              </div>
              <p className="text-sm md:text-base font-light text-[#6B7260] italic leading-relaxed mb-5 flex-1">
                "{review.text}"
              </p>
              <div className="border-t border-[#2E4036]/10 pt-4">
                <p className="font-semibold text-[#1A1A1A] text-sm">{review.author}</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <CheckCircle2 size={12} className="text-[#4A7C59] shrink-0" />
                  <span className="font-mono-data text-[10px] font-medium uppercase tracking-wider text-[#4A7C59]">
                    Compra Verificada
                  </span>
                </div>
                <div className="mt-2 bg-[#E8E6DF] border border-[#2E4036]/10 px-3 py-1.5 rounded-lg">
                  <p className="font-mono-data text-[10px] font-medium text-[#2E4036] leading-tight">{review.detail}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={300}>
        <div className="text-center">
          <button
            onClick={openCheckoutModal}
            className="btn-press btn-shine btn-magnetic group relative overflow-hidden bg-[#CC5833] text-white px-8 py-4 rounded-2xl font-black text-base uppercase tracking-wide inline-flex items-center gap-3 cta-pulse"
          >
            <span className="btn-bg bg-[#A84428] rounded-2xl" />
            <span className="relative z-10 flex items-center gap-3">
              VER EL PROTOCOLO COMPLETO — $17.99 <ArrowRight size={16} />
            </span>
          </button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
