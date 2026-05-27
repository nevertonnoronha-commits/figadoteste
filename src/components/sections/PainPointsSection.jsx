import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

const painItems = [
  { label: 'Un diagnóstico sin hoja de ruta', text: 'El médico te dijo "cambiá la dieta" y te fuiste a casa sin saber qué comer hoy al mediodía.' },
  { label: 'Confusión frente a la heladera', text: '¿Podés comer fruta? ¿El yogur light sirve? ¿La avena está bien? Cada alimento se convirtió en una pregunta.' },
  { label: 'Google empeora la confusión', text: '"Evitá los carbohidratos." "Los carbohidratos no son el problema." Buscaste y quedaste más perdido que antes.' },
  { label: 'Planes que no encajan en tu vida', text: 'Las dietas que encontraste te piden cocinar aparte, comer distinto a tu familia o seguir menús imposibles de sostener.' },
  { label: 'Cansancio que no cede', text: 'Dormís 7 u 8 horas y te levantás igual de pesado. El médico dice "mejorá los hábitos" sin explicar cómo.' },
  { label: 'El miedo silencioso', text: '¿Está avanzando? ¿Va hacia algo más grave? Esa incertidumbre está ahí, aunque no hables de ella.' },
];

export const PainPointsSection = () => (
  <section className="bg-[#E8E6DF] py-16 md:py-24">
    <div className="container mx-auto px-5 max-w-3xl space-y-7">

      <ScrollReveal>
        <p className="text-lg md:text-xl text-[#1A1A1A] leading-[1.8] font-light">
          Si te despertás agotado aunque duermas 8 horas, sentís el abdomen pesado después de cada
          comida, o vivís con esa "neblina mental" que no te deja concentrarte...{' '}
          <strong className="font-bold">
            <span className="highlight-sweep">necesito que leas esta página con extrema atención.</span>
          </strong>
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <div className="rounded-2xl bg-[#F2F0E9] border border-[#2E4036]/12 shadow-[0_4px_20px_rgba(46,64,54,0.08)] border-l-[3px] border-l-[#CC5833] px-5 py-4">
          <p className="text-base md:text-lg text-[#6B7260] leading-relaxed italic font-light">
            Sé exactamente lo que estás pensando:{' '}
            <em className="not-italic font-semibold text-[#1A1A1A]">
              "Acá viene otra dieta restrictiva más. Otro gurú que me va a decir que deje las harinas,
              que me prohíba comer con mi familia y que me mate de hambre comiendo lechuga hervida."
            </em>
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <p className="text-lg md:text-xl font-bold text-[#1A1A1A]">
          Mirá, voy a ser directo con vos:{' '}
          <span className="highlight-sweep text-[#CC5833]">No es tu culpa.</span>{' '}
          Nadie te enseñó cómo comer para un hígado graso. Y el sistema médico tampoco lo hace.
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <p className="text-base md:text-lg text-[#6B7260] leading-relaxed font-light">
          Probablemente ya fuiste al médico. Te sentaste en el consultorio, asustado por tus niveles de
          transaminasas, triglicéridos o esa ecografía que mostró "Hígado Graso Grado 2".
          ¿Y qué te dijo el especialista?
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <div className="bg-[#2E4036] text-white p-5 md:p-6 rounded-2xl shadow-[0_8px_32px_rgba(46,64,54,0.25)]">
          <p className="text-base md:text-lg font-semibold italic leading-relaxed mb-2 text-white/70">
            Te dio el peor consejo posible:
          </p>
          <p className="font-black text-xl md:text-2xl not-italic leading-snug">
            "Tenés que cambiar los hábitos. Cerrá la boca y bajá de peso."
          </p>
          <p className="text-sm text-white/45 mt-3 font-light">
            Te vas a casa con un diagnóstico, pero sin un plan.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <p className="text-base md:text-lg text-[#6B7260] leading-relaxed font-light">
          Te parás frente a la heladera con miedo a comer. ¿La fruta hace mal? ¿El yogur light sirve?
          Buscás en Google y terminás con una sobrecarga de información contradictoria.
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <div className="rounded-2xl border border-[#2E4036]/15 bg-[#F2F0E9] p-6 md:p-8 shadow-[0_8px_32px_rgba(46,64,54,0.08)]">
          <p className="font-mono-data text-[11px] font-medium uppercase tracking-widest text-[#CC5833] mb-3">
            POR QUÉ LAS DIETAS NO FUNCIONAN PARA EL HÍGADO GRASO
          </p>
          <p className="text-lg md:text-xl font-bold text-[#1A1A1A] leading-relaxed mb-4">
            Tu cansancio y tu vientre inflamado no son un problema de voluntad.{' '}
            <span className="highlight-red font-bold">Son la respuesta de un cuerpo sin un plan alimentario claro.</span>
          </p>
          <p className="text-base text-[#6B7260] leading-relaxed font-light">
            Cuando el hígado acumula grasa, todo tu metabolismo funciona con más esfuerzo: el cansancio es más profundo, la digestión más pesada, el peso más difícil de manejar. No porque seas perezoso, sino porque <strong className="font-semibold text-[#1A1A1A]">nadie te dio las herramientas correctas.</strong>
          </p>
          <p className="mt-4 text-lg font-black text-[#1A1A1A] border-t border-[#2E4036]/12 pt-4">
            Y te aseguro algo:{' '}
            <span className="highlight-sweep font-black">Pasar hambre no es la solución. Nunca lo fue.</span>
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <p className="font-mono-data text-[11px] font-medium uppercase tracking-widest text-[#6B7260] mb-4">
          ¿Te reconocés en alguno de estos síntomas?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {painItems.map((item, i) => (
            <div
              key={i}
              className="rounded-xl bg-[#F2F0E9] border border-[#2E4036]/10 p-4 flex gap-3 items-start shadow-[0_2px_8px_rgba(46,64,54,0.06)]"
              style={{
                opacity: 0,
                transform: 'translateY(16px)',
                transition: `opacity 500ms ease, transform 500ms ease`,
                transitionDelay: `${i * 80}ms`,
              }}
              ref={(el) => {
                if (!el) return;
                const obs = new IntersectionObserver(([e]) => {
                  if (e.isIntersecting) {
                    el.style.opacity = '1';
                    el.style.transform = 'none';
                    obs.unobserve(el);
                  }
                }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
                obs.observe(el);
              }}
            >
              <span className="text-[#CC5833] font-bold text-base leading-none mt-0.5 shrink-0">✕</span>
              <div>
                <p className="font-semibold text-[#1A1A1A] text-sm mb-1">{item.label}</p>
                <p className="text-[#6B7260] text-sm font-light leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="bg-[#1A1A1A] text-white px-6 py-5 text-center rounded-2xl">
          <p className="font-drama text-xl md:text-2xl italic">
            Si te reconociste en más de uno,{' '}
            <span className="text-[#CC5833]">esto es exactamente lo que necesitás leer.</span>
          </p>
        </div>
      </ScrollReveal>

    </div>
  </section>
);
