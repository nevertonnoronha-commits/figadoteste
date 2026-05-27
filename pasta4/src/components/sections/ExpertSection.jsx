import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const ExpertSection = () => (
  <section className="py-16 md:py-24 bg-[#F7F5F0] border-b-4 border-[#111111]">
    <div className="container mx-auto px-5 max-w-4xl">

      <ScrollReveal>
        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#B91C1C] mb-6 block">
          QUIÉN CREÓ ESTE PROTOCOLO
        </span>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

        {/* Photo */}
        <div className="md:col-span-4 flex justify-center md:justify-start">
          <ScrollReveal>
            <div className="relative">
              <div className="absolute inset-0 border-2 border-[#B91C1C] translate-x-3 translate-y-3 pointer-events-none"></div>
              <img
                src="https://raw.githubusercontent.com/nevertonnoronha-commits/naturale-images/main/0a5cf9de-90ce-4fdf-ac99-cd2a085896a8.webp"
                alt="Dra. Elinna Novaz · Especialista en Nutrición Terapéutica Hepática"
                loading="lazy"
                className="w-[200px] md:w-[240px] h-auto object-cover relative z-10 img-shadow-pro"
                onError={(e) => { e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 400' fill='%23154734'%3E%3Crect width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14' fill='%23ccc'%3EDra. Elinna Novaz%3C/text%3E%3C/svg%3E"; }}
              />
              <div className="absolute -bottom-2 left-0 right-0 z-20 bg-[#111111] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 text-center leading-tight">
                Dra. Elinna Novaz<br />
                <span className="font-normal text-[9px] opacity-70 normal-case tracking-normal">Nutrición Terapéutica Hepática</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bio */}
        <div className="md:col-span-8">
          <ScrollReveal delay={100}>
            <h2 className="font-editorial text-2xl md:text-4xl font-bold text-[#111111] leading-tight mb-5">
              Hace más de 10 años, la Dra. Elinna notó un patrón{' '}
              <span className="italic text-[#B91C1C]">que se repetía en sus consultas.</span>
            </h2>

            <p className="text-base md:text-lg text-[#333333] leading-relaxed mb-4 font-light">
              Las personas llegaban con un diagnóstico de hígado graso — y sin ninguna guía práctica sobre cómo comer. Solo restricciones vagas. Sin un plan real para el día a día.
            </p>

            <p className="text-base md:text-lg text-[#333333] leading-relaxed mb-6 font-light">
              Con más de 10 años acompañando personas con diagnóstico de esteatosis, creó el Sistema NATURALE: un protocolo práctico, con comida real, que cabe en la vida cotidiana.
            </p>

            <ul className="space-y-2 mb-7">
              {[
                'Acompañó a más de 12.000 personas con diagnóstico de esteatosis hepática',
                'Especialista en alimentación hepática y nutrición terapéutica',
                'Creó NATURALE como la guía práctica que sus pacientes pedían y no encontraban',
                'Más de 10 años de experiencia en el acompañamiento de personas con hígado graso',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#16A34A] shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-[#333333] font-light">{item}</span>
                </li>
              ))}
            </ul>

            {/* Quote */}
            <div className="border-l-4 border-[#B91C1C] bg-white px-5 py-4 shadow-[3px_3px_0_#111111]">
              <p className="font-editorial text-lg md:text-xl italic text-[#111111] leading-relaxed">
                "La mejora no depende de CUÁNTO comés, sino de CÓMO combinás los alimentos. Muchos de los productos 'light' que mis pacientes compraban carísimos eran exactamente los que complicaban su proceso — sin que nadie les hubiera explicado por qué."
              </p>
              <footer className="mt-3 text-xs font-black uppercase tracking-widest text-[#B91C1C]">
                Dra. Elinna Novaz
              </footer>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  </section>
);
