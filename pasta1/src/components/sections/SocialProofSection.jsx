import React from 'react';
import { Star } from 'lucide-react';
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
  <section className="bg-[#F2F0E9] py-20 md:py-28">
    <div className="container mx-auto px-5 max-w-3xl">

      <ScrollReveal>
        <span className="font-mono-data text-[10px] font-medium uppercase tracking-[0.25em] text-[#CC5833] mb-4 block">
          Experiencias reales
        </span>
        <h2 className="font-editorial text-3xl md:text-4xl font-bold text-[#1C1917] leading-tight mb-2">
          Lo que vivieron personas como vos
        </h2>
        <p className="text-[#6B7260] text-base font-light mb-2">Sin retoques. Sin filtros.</p>
        <div className="w-10 h-0.5 bg-[#CC5833] mb-10 rounded-full" />
      </ScrollReveal>

      {/* Mimetic desire — counter */}
      <ScrollReveal delay={60}>
        <div className="flex items-center gap-4 mb-8 p-4 bg-white rounded-xl border border-stone-200/50 shadow-sm">
          <div className="flex-1">
            <p className="font-semibold text-[#1C1917] text-sm">
              12.000 personas como vos ya tomaron esta decisión.
            </p>
            <p className="text-xs text-[#6B7260] font-light mt-0.5">
              No son casos extraordinarios. Son personas con los mismos síntomas. El mismo cansancio. La misma confusión.
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className="font-editorial text-3xl font-bold text-[#CC5833] leading-none">+12k</p>
            <p className="font-mono-data text-[9px] text-[#6B7260] uppercase tracking-wider">casos</p>
          </div>
        </div>
      </ScrollReveal>

      <div className="space-y-4">
        {reviews.map((review, idx) => (
          <ScrollReveal key={idx} delay={80 + idx * 100}>
            <div className="bg-white rounded-2xl border border-stone-200/50 p-6 flex gap-5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-shadow duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
              <div className="shrink-0 flex flex-col items-center gap-2 pt-1">
                <img
                  src={`https://i.pravatar.cc/80?img=${review.avatar}`}
                  alt={review.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full border-2 border-[#F2F0E9] shadow-sm object-cover"
                />
                <div className="flex gap-0.5 text-[#CC5833]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={9} fill="currentColor" />
                  ))}
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-3 flex-wrap">
                  <span className="font-semibold text-[#1C1917] text-sm">{review.name}, {review.age} años</span>
                  <span className="text-[11px] text-[#6B7260] font-light">{review.city}</span>
                </div>
                <p className="text-sm sm:text-base text-[#6B7260] font-light leading-relaxed italic">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-1.5 mt-4">
                  <span className="sys-dot" />
                  <span className="font-mono-data text-[10px] font-medium uppercase tracking-widest text-[#4A7C59]">
                    Compra Verificada
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Future pacing — visualização de 6 semanas */}
      <ScrollReveal delay={380}>
        <div className="relative bg-[#2E4036] rounded-2xl overflow-hidden mt-8 px-6 sm:px-8 py-8">
          <div className="noise-bg" aria-hidden="true" />
          <div className="relative z-10 text-center">
            <p className="font-mono-data text-[#CC5833] text-[10px] uppercase tracking-[0.3em] mb-5">
              Dentro de 6 semanas
            </p>
            <p className="font-editorial text-2xl md:text-3xl italic text-white/90 leading-tight mb-5">
              "Él miró los análisis dos veces.
              <br />
              No entendía cómo habían bajado tanto."
            </p>
            <p className="text-white/50 text-sm font-light max-w-md mx-auto leading-relaxed">
              Ese momento ya ocurrió para 12.000 personas.
              Volvieron al médico con números diferentes. Con una sensación diferente.
              El protocolo te puede dar ese momento.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={440}>
        <div className="mt-6 bg-white rounded-xl border border-stone-200/50 px-6 py-5 shadow-sm">
          <p className="text-sm sm:text-base text-[#6B7260] font-light leading-relaxed">
            Estos no son casos extraordinarios. Son personas normales con el mismo diagnóstico que vos.
            Que solo necesitaban un camino claro.
          </p>
          <p className="mt-3 text-sm font-semibold text-[#1C1917]">
            Cuando estés listo para ver el protocolo completo, seguí leyendo.
          </p>
        </div>
      </ScrollReveal>

    </div>
  </section>
);
