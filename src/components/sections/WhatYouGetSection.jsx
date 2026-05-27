import React from 'react';
import { CheckCircle2, ArrowRight, BookOpen, Calendar, ShoppingCart, Leaf, BarChart2 } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { scrollToOffer } from '../../utils/smoothScroll';

// Mecanismo único + Lollapalooza: cada item amplifica o anterior
const items = [
  {
    icon: BookOpen,
    tag: 'EL NÚCLEO DEL PROTOCOLO',
    title: 'Sistema NATURALE — Protocolo Completo de 28 Días',
    body: 'No es una lista de alimentos prohibidos. Es un sistema de combinaciones que reduce la sobrecarga en el hígado sin que tengas que hacer dieta por separado. Comés con tu familia. Comés rico. La diferencia está en el orden y en la combinación.',
    highlight: 'Mecanismo único: Combinación Anti-Sobrecarga Hepática',
  },
  {
    icon: Calendar,
    tag: 'ESTRUCTURA SEMANA A SEMANA',
    title: 'Plan de Comidas Diario — Las 4 Semanas Organizadas',
    body: 'Cada día ya está pensado. Desayuno, almuerzo, merienda y cena. No tenés que decidir nada por la mañana. Abrís el protocolo y sabés exactamente qué preparar. Eso elimina el mayor enemigo: la duda.',
    highlight: 'Sin improvisar. Sin adivinar. Sin culpa.',
  },
  {
    icon: ShoppingCart,
    tag: 'PARA EL SUPERMERCADO',
    title: 'Lista de Compras Organizada por Semana',
    body: 'Lo que necesitás cada semana, en una lista clara. Ingredientes de supermercado común. Sin productos importados, sin suplementos, sin nada que no encuentres a tres cuadras de tu casa.',
    highlight: 'Todo lo que comés ya existe en tu barrio.',
  },
  {
    icon: Leaf,
    tag: 'EL DIFERENCIAL DEL SISTEMA',
    title: 'Guía de Combinaciones Alimentarias para el Hígado',
    body: 'Hay alimentos que parecen saludables pero combinados de cierta forma sobrecargan el hígado. Esta guía explica exactamente qué combinar, qué separar y por qué. Sin términos médicos complicados. Directo y aplicable.',
    highlight: 'Lo que nadie te explicó en el consultorio.',
  },
  {
    icon: BarChart2,
    tag: 'SEGUIMIENTO',
    title: 'Sistema de Progreso Personal — Semana por Semana',
    body: 'Una hoja de seguimiento para que puedas ver lo que va cambiando: energía, digestión, pesadez, sueño. No dependés de nadie más para saber si el protocolo está funcionando en tu cuerpo.',
    highlight: 'Vos medís. Vos ves. Nadie lo hace por vos.',
  },
];

export const WhatYouGetSection = () => (
  <section className="py-16 md:py-24 bg-[#F2F0E9]">
    <div className="container mx-auto px-5 max-w-4xl">

      <ScrollReveal>
        <div className="mb-12">
          <span className="font-mono-data text-[10px] font-medium uppercase tracking-[0.25em] text-[#CC5833] mb-3 block">
            LO QUE RECIBÍS
          </span>
          <h2 className="font-editorial text-3xl md:text-5xl font-bold text-[#1A1A1A] leading-tight mb-4">
            Un sistema diseñado para{' '}
            <span className="font-drama text-[#2E4036]">personas que ya intentaron todo</span>
            {' '}sin un plan real.
          </h2>
          <p className="text-base text-[#6B7260] font-light max-w-2xl">
            El Protocolo NATURALE no es una dieta. Es un sistema de combinaciones alimentarias
            que reduce la sobrecarga hepática. Cada parte está pensada para que puedas aplicarlo
            en el día a día real, no en condiciones ideales.
          </p>
          {/* Mecanismo único — named and credible */}
          <div className="mt-5 inline-flex items-center gap-2.5 bg-[#2E4036]/8 border border-[#2E4036]/18 rounded-xl px-4 py-2.5">
            <Leaf size={14} className="text-[#2E4036] shrink-0" />
            <span className="font-mono-data text-[11px] font-semibold text-[#2E4036] uppercase tracking-wider">
              Método: Combinación Anti-Sobrecarga Hepática
            </span>
          </div>
        </div>
      </ScrollReveal>

      {/* Dopamine loop: cada card revela mais */}
      <div className="space-y-4 mb-12">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <ScrollReveal key={idx} delay={idx * 80}>
              <div className="rounded-2xl bg-white border border-[#2E4036]/10 shadow-[0_4px_24px_rgba(46,64,54,0.07)] p-6 flex gap-5 items-start">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#2E4036]/8 flex items-center justify-center mt-0.5">
                  <Icon size={18} className="text-[#2E4036]" strokeWidth={1.8} />
                </div>
                <div className="flex-1">
                  <span className="font-mono-data text-[9px] font-semibold uppercase tracking-[0.22em] text-[#CC5833] mb-1.5 block">
                    {item.tag}
                  </span>
                  <h3 className="font-editorial text-xl md:text-2xl font-bold text-[#1A1A1A] leading-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#6B7260] font-light leading-relaxed mb-3">
                    {item.body}
                  </p>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-[#4A7C59] shrink-0" />
                    <span className="text-xs font-semibold text-[#2E4036]">{item.highlight}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      <ScrollReveal delay={200}>
        <div className="text-center">
          <button
            onClick={scrollToOffer}
            className="btn-press btn-shine btn-magnetic group relative overflow-hidden bg-[#CC5833] text-white px-8 py-4 rounded-2xl font-black text-base uppercase tracking-wide inline-flex items-center gap-3 cta-pulse"
          >
            <span className="btn-bg bg-[#A84428] rounded-2xl" />
            <span className="relative z-10 flex items-center gap-3">
              VER LA OFERTA COMPLETA <ArrowRight size={18} />
            </span>
          </button>
        </div>
      </ScrollReveal>

    </div>
  </section>
);
