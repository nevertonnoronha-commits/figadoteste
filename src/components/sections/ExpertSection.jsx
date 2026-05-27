import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const ExpertSection = () => (
  <section className="py-16 md:py-24 bg-[#E8E6DF]">
    <div className="container mx-auto px-5 max-w-4xl">

      <ScrollReveal>
        <span className="font-mono-data text-[10px] font-medium uppercase tracking-[0.25em] text-[#CC5833] mb-6 block">
          QUIÉN CREÓ ESTE PROTOCOLO
        </span>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

        {/* Photo */}
        <div className="md:col-span-4 flex justify-center md:justify-start">
          <ScrollReveal>
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl border border-[#CC5833]/30 translate-x-3 translate-y-3 pointer-events-none" />
              <img
                src="https://raw.githubusercontent.com/nevertonnoronha-commits/naturale-images/main/0a5cf9de-90ce-4fdf-ac99-cd2a085896a8.webp"
                alt="Dra. Elinna Novaz · Especialista en Nutrición Terapéutica Hepática"
                loading="lazy"
                className="w-[200px] md:w-[240px] h-auto object-cover relative z-10 img-shadow-pro rounded-2xl"
                onError={(e) => { e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 400' fill='%232E4036'%3E%3Crect width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14' fill='%23ccc'%3EDra. Elinna Novaz%3C/text%3E%3C/svg%3E"; }}
              />
              <div className="absolute -bottom-2 left-0 right-0 z-20 bg-[#2E4036] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 text-center leading-tight rounded-b-2xl">
                Dra. Elinna Novaz<br />
                <span className="font-normal text-[9px] opacity-60 normal-case tracking-normal">Nutrición Terapéutica Hepática</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bio */}
        <div className="md:col-span-8">
          <ScrollReveal delay={100}>
            <h2 className="font-editorial text-2xl md:text-4xl font-bold text-[#1A1A1A] leading-tight mb-5">
              Hace más de 10 años, la Dra. Elinna notó un patrón{' '}
              <span className="font-drama text-[#CC5833]">que se repetía en sus consultas.</span>
            </h2>

            <p className="text-base md:text-lg text-[#6B7260] leading-relaxed mb-4 font-light">
              Las personas llegaban con un diagnóstico de hígado graso — y sin ninguna guía práctica sobre cómo comer. Solo restricciones vagas. Sin un plan real para el día a día.
            </p>

            <p className="text-base md:text-lg text-[#6B7260] leading-relaxed mb-6 font-light">
              Con más de 10 años acompañando personas con diagnóstico de esteatosis, creó el Sistema NATURALE: un protocolo práctico, con comida real, que cabe en la vida cotidiana.
            </p>

            <ul className="space-y-2.5 mb-7">
              {[
                'Acompañó a más de 12.000 personas con diagnóstico de esteatosis hepática',
                'Especialista en alimentación hepática y nutrición terapéutica',
                'Creó NATURALE como la guía práctica que sus pacientes pedían y no encontraban',
                'Más de 10 años de experiencia en el acompañamiento de personas con hígado graso',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 size={15} className="text-[#4A7C59] shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-[#6B7260] font-light">{item}</span>
                </li>
              ))}
            </ul>

            {/* Quote */}
            <div className="rounded-2xl bg-[#F2F0E9] border border-[#2E4036]/12 border-l-[3px] border-l-[#CC5833] px-5 py-4 shadow-[0_4px_16px_rgba(46,64,54,0.07)]">
              <p className="font-drama text-lg md:text-xl text-[#1A1A1A] leading-relaxed">
                "La mejora no depende de CUÁNTO comés, sino de CÓMO combinás los alimentos. Muchos de los productos 'light' que mis pacientes compraban carísimos eran exactamente los que complicaban su proceso — sin que nadie les hubiera explicado por qué."
              </p>
              <footer className="mt-3 font-mono-data text-xs font-medium uppercase tracking-widest text-[#CC5833]">
                Dra. Elinna Novaz
              </footer>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  </section>
);
