import React from 'react';
import { Zap, Scale, Activity, Smile, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { scrollToOffer } from '../../utils/smoothScroll';

export const BenefitsSection = () => (
  <section className="py-16 md:py-24 bg-[#2E4036] text-white relative overflow-hidden">
    <div className="noise-bg" aria-hidden="true" />
    <div className="container mx-auto px-5 max-w-5xl relative z-10">

      <ScrollReveal>
        <span className="font-mono-data text-[10px] font-medium uppercase tracking-[0.25em] text-[#CC5833]/70 mb-3 block">
          LO QUE CAMBIA CUANDO SEGUÍS EL PROTOCOLO
        </span>
        <h2 className="font-editorial text-3xl md:text-5xl text-white font-bold mb-12 leading-tight">
          ¿Qué empieza a cambiar{' '}
          <span className="font-drama text-[#CC5833]">cuando tenés un plan real?</span>
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-4">
          {[
            { icon: Zap, title: 'Menos cansancio desde la primera semana', desc: 'Muchas personas notan la diferencia en los primeros días: menos letargo al levantarse, más claridad. No es un milagro — es el resultado de comer mejor y con orden.' },
            { icon: Scale, title: 'Menos pesadez abdominal, más orden en lo que comés', desc: 'Sabés exactamente qué comer cada día. Sin improvisación, sin culpa, sin pasar hambre. Esa claridad sola ya cambia cómo te sentís.' },
            { icon: Activity, title: 'Apoyo para mejorar tus marcadores metabólicos', desc: 'Una alimentación ordenada puede apoyar la mejora de tus análisis con el tiempo. Sin promesas mágicas, pero con un camino claro hacia tu próxima consulta.' },
            { icon: Smile, title: 'Menos pesadez después de comer', desc: 'Ese malestar post-comida que ya sentís como "normal" no tiene por qué quedarse. Muchas personas reportan mejora rápida con los cambios correctos.' },
          ].map((item, idx) => (
            <ScrollReveal key={idx} delay={100 * idx} direction={idx % 2 === 0 ? 'left' : 'right'}>
              <div className="flex items-start gap-5 p-5 rounded-2xl border-l-2 border-[#CC5833]/50 bg-white/5 hover:bg-white/8 transition-colors">
                <div className="bg-[#CC5833] p-3 text-white shrink-0 rounded-xl">
                  <item.icon size={20} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base md:text-lg mb-1">{item.title}</h3>
                  <p className="text-white/55 text-sm md:text-base font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="lg:col-span-5">
          <ScrollReveal delay={300}>
            <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <img
                src="https://raw.githubusercontent.com/nevertonnoronha-commits/naturale-images/main/Familia%20inicio.webp"
                alt="Familia feliz comiendo saludable juntos"
                loading="lazy"
                className="w-full h-full object-cover aspect-[4/5] lg:aspect-auto"
                onError={(e) => { e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500' fill='%232E4036'%3E%3Crect width='400' height='500'/%3E%3C/svg%3E"; }}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      <ScrollReveal delay={400} className="mt-10 flex justify-center">
        <button
          onClick={scrollToOffer}
          className="btn-press btn-shine btn-magnetic group relative overflow-hidden bg-[#CC5833] text-white px-8 py-4 rounded-2xl font-black text-base uppercase tracking-wide inline-flex items-center gap-3 cta-pulse w-full md:w-auto justify-center"
        >
          <span className="btn-bg bg-[#A84428] rounded-2xl" />
          <span className="relative z-10 flex items-center gap-3">
            QUIERO EL PROTOCOLO DE 28 DÍAS <ArrowRight size={18} />
          </span>
        </button>
      </ScrollReveal>
    </div>
  </section>
);
