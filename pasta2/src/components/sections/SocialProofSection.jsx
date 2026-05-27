import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

const reviews = [
  {
    name: 'Carmen',
    age: 58,
    city: 'Lima, Perú',
    avatar: 1,
    text: 'Llevaba tres años con el diagnóstico y la misma sensación de no saber qué hacer. Seguí el protocolo 28 días. No fue fácil al principio, pero las recetas eran simples. A las 6 semanas me repetí los análisis y las transaminasas bajaron. No fue mágico. Pero funcionó.',
  },
  {
    name: 'Roberto',
    age: 62,
    city: 'Ciudad de México',
    avatar: 11,
    text: 'Yo era de los que pensaban que esto del hígado graso era cosa de tomar menos alcohol y ya. Cuando vi los números, entendí que no. Apliqué el protocolo sin mucha expectativa. En dos meses, mi doctora me dijo que el grado había bajado. Eso no me lo esperaba.',
  },
  {
    name: 'Gabriela',
    age: 55,
    city: 'Córdoba, Argentina',
    avatar: 5,
    text: 'Lo que más me costó fue creer que algo tan accesible podía servir. Ya había gastado mucho en suplementos que no me hicieron nada. Pero esto era distinto: comida del supermercado, combinada de una manera específica. A los 40 días dormía mejor y la inflamación bajó. Eso fue lo primero que noté.',
  },
];

export const SocialProofSection = () => (
  <section className="bg-white py-20 md:py-28">
    <div className="container mx-auto px-5 max-w-3xl">

      <ScrollReveal>
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B91C1C] mb-4 block">
          Lo que vivieron personas como vos
        </span>
        <h2 className="font-editorial text-3xl md:text-4xl font-bold text-stone-900 leading-tight mb-3">
          Experiencias reales. Sin retoques.
        </h2>
        <div className="w-10 h-0.5 bg-[#B91C1C] mb-12 rounded-full" />
      </ScrollReveal>

      <div className="space-y-4">
        {reviews.map((review, idx) => (
          <ScrollReveal key={idx} delay={idx * 100}>
            <div className="bg-[#F8F7F4] rounded-2xl border border-stone-200 p-6 flex gap-5 hover:shadow-md transition-shadow duration-200">
              <div className="shrink-0 flex flex-col items-center gap-2 pt-1">
                <img
                  src={`https://i.pravatar.cc/80?img=${review.avatar}`}
                  alt={review.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover"
                />
                <div className="flex gap-0.5 text-[#B91C1C]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={9} fill="currentColor" />
                  ))}
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-3 flex-wrap">
                  <span className="font-semibold text-stone-900 text-sm">{review.name}, {review.age} años</span>
                  <span className="text-[11px] text-stone-400 font-light">{review.city}</span>
                </div>
                <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed italic">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-1.5 mt-4">
                  <CheckCircle2 size={12} className="text-[#16A34A] shrink-0" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                    Compra Verificada
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={300}>
        <div className="mt-8 bg-stone-50 rounded-xl border border-stone-200 px-6 py-5">
          <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
            Estos no son casos extraordinarios. Son personas reales con el mismo diagnóstico que vos.
            Que solo necesitaban un plan claro.
          </p>
          <p className="mt-3 text-sm font-semibold text-stone-900">
            Si todo esto te hace sentido hasta acá, dejame mostrarte exactamente qué es el Protocolo NATURALE y cómo funciona.
          </p>
        </div>
      </ScrollReveal>

    </div>
  </section>
);
