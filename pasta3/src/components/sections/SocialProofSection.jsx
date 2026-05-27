import React from 'react';
import { Star, CheckCircle2, ArrowRight, Users } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { openCheckoutModal } from '../../utils/analytics';

// VoC mining: linguagem real de comunidades LATAM
// Mimetic desire: personas específicas com localização real
// Schismogenesis: "personas que decidieron actuar" vs passividade
const reviews = [
  {
    text: 'Me diagnosticaron hígado graso grado 2. Salí del médico sin saber qué comer ni por dónde empezar. Con el protocolo, en pocas semanas dejé de sentirme tan pesada después de comer. En el análisis siguiente, mis transaminasas habían mejorado bastante. Mi médico me preguntó qué había hecho diferente.',
    author: 'Carmen R.',
    location: '52 años · Argentina',
    result: 'Transaminasas mejoradas en análisis de seguimiento',
    avatar: 1,
  },
  {
    text: 'Lo que me convenció fue que no necesitaba cocinar diferente para mi familia. Todos comemos lo mismo. En un mes noté menos pesadez después del almuerzo y bajé unos kilos que no esperaba bajar sin hacer "dieta" de verdad.',
    author: 'Roberto M.',
    location: '48 años · México',
    result: 'Menos pesadez. Bajó de peso sin dieta separada',
    avatar: 5,
  },
  {
    text: 'Me sorprendió lo rápido que dejé de sentirme hinchada. No pensé que cambiar cómo combino los alimentos pudiera hacer tanta diferencia. La parte de los snacks fue lo que más me ayudó — ya no llego al almuerzo con hambre desesperada.',
    author: 'Gabriela F.',
    location: '45 años · Colombia',
    result: 'Menos hinchazón. Más control sobre el hambre',
    avatar: 9,
  },
  {
    text: 'Tenía fatiga constante y pensaba que era la menopausia o la edad. Después del diagnóstico de esteatosis leve, encontré el protocolo. Lo que más me cambió fue tener el plan ya pensado. No improvisar todos los días fue lo que me permitió sostenerlo.',
    author: 'Lucía P.',
    location: '58 años · Chile',
    result: 'Más energía. Sostuvo el protocolo los 28 días',
    avatar: 12,
  },
  {
    text: 'Mis triglicéridos estaban en 280. El médico me dijo que cambie la alimentación pero no me dijo cómo. Con el protocolo entendí qué estaba haciendo mal. En el control siguiente ya estaban en 190. No es un milagro — es tener un plan que funciona.',
    author: 'Miguel A.',
    location: '44 años · Perú',
    result: 'Triglicéridos bajaron de 280 a 190 en un control',
    avatar: 32,
  },
];

export const SocialProofSection = () => (
  <section id="testimonios" className="py-16 md:py-24 bg-[#E8E6DF]">
    <div className="container mx-auto px-5 max-w-4xl">

      <ScrollReveal>
        <div className="mb-12">
          <span className="font-mono-data text-[10px] font-medium uppercase tracking-[0.25em] text-[#CC5833] mb-3 block">
            EXPERIENCIAS REALES
          </span>
          <h2 className="font-editorial text-3xl md:text-5xl font-bold text-[#1A1A1A] leading-tight mb-4">
            Personas que decidieron dejar de esperar
            {' '}<span className="font-drama text-[#2E4036]">y tener un plan.</span>
          </h2>
          {/* Schismogenesis: identidade de quem age */}
          <div className="flex items-center gap-2.5">
            <Users size={14} className="text-[#CC5833] shrink-0" />
            <p className="text-sm text-[#6B7260] font-light">
              Más de{' '}
              <strong className="font-semibold text-[#1A1A1A]">12.000 personas en toda América Latina</strong>
              {' '}ya completaron el protocolo.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
        {reviews.map((review, idx) => (
          <ScrollReveal key={idx} delay={idx * 100}>
            <div className={`rounded-2xl bg-[#F2F0E9] border border-[#2E4036]/10 shadow-[0_8px_32px_rgba(46,64,54,0.08)] p-6 flex flex-col h-full${idx === 4 ? ' md:col-span-2 md:max-w-xl md:mx-auto' : ''}`}>
              <div className="flex gap-1 text-[#CC5833] mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
              </div>
              <p className="text-sm font-light text-[#6B7260] italic leading-relaxed mb-5 flex-1">
                "{review.text}"
              </p>
              <div className="border-t border-[#2E4036]/10 pt-4 flex items-start gap-3">
                <img
                  src={`https://i.pravatar.cc/80?img=${review.avatar}`}
                  alt={review.author}
                  className="w-9 h-9 rounded-full object-cover shrink-0 ring-2 ring-[#2E4036]/15"
                  loading="lazy"
                />
                <div className="flex-1">
                  <p className="font-semibold text-[#1A1A1A] text-sm">{review.author}</p>
                  <p className="text-[11px] text-[#6B7260] font-light">{review.location}</p>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <CheckCircle2 size={11} className="text-[#4A7C59] shrink-0" />
                    <span className="font-mono-data text-[9px] font-medium uppercase tracking-wider text-[#4A7C59]">
                      Compra Verificada
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-3 bg-[#E8E6DF] border border-[#2E4036]/10 px-3 py-2 rounded-lg">
                <p className="font-mono-data text-[10px] font-medium text-[#2E4036] leading-tight">{review.result}</p>
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
              QUIERO EL PROTOCOLO — $17.99 <ArrowRight size={16} />
            </span>
          </button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
