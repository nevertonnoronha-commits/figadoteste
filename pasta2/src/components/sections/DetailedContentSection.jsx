import React from 'react';
import { Sunrise, Utensils, Nut, Moon } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

const phases = [
  {
    n: 'FASE 1',
    icon: Sunrise,
    title: 'Desayunos de Activación',
    sub: 'Empezá el día sin pesadez ni sueño a media mañana',
    desc: 'Una combinación simple de 3 alimentos que te ayudan a empezar el día con más energía y sin ese letargo que aparece antes del mediodía. Sin privarte de nada, sin saltarte comidas.',
  },
  {
    n: 'FASE 2',
    icon: Utensils,
    title: 'Almuerzos Listos en 20 Minutos',
    sub: 'Listos en 20 min · tu familia come lo mismo que vos',
    desc: 'Platos sabrosos y completos, preparados en menos de 20 minutos. Toda la familia come lo mismo. Sin ingredientes raros, sin presupuesto extra, sin cocinar dos veces.',
  },
  {
    n: 'FASE 3',
    icon: Nut,
    title: 'Snacks para la Tarde',
    sub: 'Sin hambre desesperada a las 5 PM',
    desc: 'El momento más difícil de cualquier cambio alimentario es la tarde, con hambre y cansancio. Estas opciones son rápidas, saciantes y no te dejan con culpa ni pesadez.',
  },
  {
    n: 'FASE 4',
    icon: Moon,
    title: 'Cenas Ligeras de Noche',
    sub: 'Te levantás sin pesadez · sin sobrecargar la digestión',
    desc: 'Preparaciones livianas que no sobrecargan tu digestión. Te ayudan a despertar sin pesadez y con energía para el día que empieza. Adiós a la pesadez matutina.',
  },
];

export const DetailedContentSection = () => (
  <section className="py-16 md:py-24 bg-white border-b-4 border-[#111111]">
    <div className="container mx-auto px-5 max-w-3xl">

      <ScrollReveal>
        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#B91C1C] mb-3 block">
          PRESENTAMOS EL SISTEMA NATURALE
        </span>
        <h2 className="font-editorial text-3xl md:text-5xl font-bold text-[#111111] leading-tight mb-4">
          Lo que recibís: El Protocolo NATURALE de 28 Días
        </h2>
        <p className="text-base md:text-lg text-[#525252] font-light leading-relaxed mb-12 border-l-4 border-[#111111] pl-4">
          No es un recetario genérico. Es una guía práctica de 28 días, organizada por comidas, con ingredientes de supermercado y preparaciones de menos de 20 minutos.
        </p>
      </ScrollReveal>

      <div className="space-y-5">
        {phases.map((phase, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className="border-2 border-[#111111] bg-white shadow-[4px_4px_0_#111111] overflow-hidden">
              <div className="bg-[#111111] text-white px-5 py-3 flex items-center gap-3">
                <phase.icon size={18} className="shrink-0 text-[#FBBF24]" />
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#FBBF24] block leading-none mb-0.5">
                    {phase.n}
                  </span>
                  <p className="font-bold text-white text-sm md:text-base leading-tight">{phase.title}</p>
                </div>
              </div>
              <div className="px-5 py-4">
                <p className="text-xs font-black uppercase tracking-wider text-[#B91C1C] mb-2">{phase.sub}</p>
                <p className="text-sm md:text-base text-[#333333] font-light leading-relaxed">{phase.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);
