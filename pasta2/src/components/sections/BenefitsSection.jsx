import React from 'react';
import { Zap, Scale, Activity, Smile, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { scrollToOffer } from '../../utils/smoothScroll';

export const BenefitsSection = () => (
  <section className="py-16 md:py-24 bg-[#0F2033] text-white border-b-4 border-[#111111] relative overflow-hidden">
    <div className="noise-bg opacity-20"></div>
    <div className="container mx-auto px-5 max-w-5xl relative z-10">

      <ScrollReveal>
        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#B91C1C] mb-3 block">
          LO QUE CAMBIA CUANDO SEGUÍS EL PROTOCOLO
        </span>
        <h2 className="font-editorial text-3xl md:text-5xl text-white font-bold mb-12 leading-tight">
          ¿Qué empieza a cambiar{' '}
          <span className="italic text-[#FBBF24]">cuando tenés un plan real?</span>
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
              <div className="flex items-start gap-5 p-5 border-l-4 border-[#FBBF24] bg-white/5 hover:bg-white/10 transition-colors">
                <div className="bg-[#FBBF24] p-3 text-[#111111] shrink-0">
                  <item.icon size={22} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base md:text-lg mb-1">{item.title}</h3>
                  <p className="text-white/60 text-sm md:text-base font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="lg:col-span-5">
          <ScrollReveal delay={300}>
            <div className="border-2 border-[#FBBF24] shadow-[5px_5px_0_#B8860B]">
              <img
                src="https://raw.githubusercontent.com/nevertonnoronha-commits/naturale-images/main/Familia%20inicio.webp"
                alt="Familia feliz comiendo saludable juntos"
                loading="lazy"
                className="w-full h-full object-cover aspect-[4/5] lg:aspect-auto"
                onError={(e) => { e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500' fill='%230F2033'%3E%3Crect width='400' height='500'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='18' fill='%23aaa'%3EFamilia%3C/text%3E%3C/svg%3E"; }}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      <ScrollReveal delay={400} className="mt-10 flex justify-center">
        <button
          onClick={scrollToOffer}
          className="btn-press btn-shine bg-[#16A34A] text-white px-8 py-4 font-black text-base uppercase tracking-wide flex items-center justify-center gap-2 border-2 border-[#166534] shadow-[4px_4px_0_#166534] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#166534] transition-all duration-100 w-full md:w-auto"
        >
          QUIERO EL PROTOCOLO DE 28 DÍAS <ArrowRight size={20} />
        </button>
      </ScrollReveal>
    </div>
  </section>
);
