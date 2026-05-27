import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ShieldCheck, Star, Stethoscope } from 'lucide-react';
import { openCheckoutModal } from '../../utils/analytics';

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.hero-eyebrow',   { y: 40, opacity: 0, duration: 0.9 })
        .from('.hero-auth',      { y: 25, opacity: 0, duration: 0.7 }, '-=0.4')
        .from('.hero-h1-line',   { y: 50, opacity: 0, duration: 1.0, stagger: 0.1 }, '-=0.5')
        .from('.hero-desc',      { y: 30, opacity: 0, duration: 0.9 }, '-=0.6')
        .from('.hero-story',     { y: 25, opacity: 0, duration: 0.8 }, '-=0.5')
        .from('.hero-meta > *',  { y: 20, opacity: 0, duration: 0.7, stagger: 0.08 }, '-=0.4')
        .from('.hero-cta',       { y: 20, opacity: 0, duration: 0.7 }, '-=0.3');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex flex-col justify-end overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://raw.githubusercontent.com/nevertonnoronha-commits/naturale-images/main/image-15.webp"
          alt=""
          aria-hidden="true"
          fetchpriority="high"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/98 via-[#2E4036]/60 to-[#2E4036]/20" />
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/75 to-transparent" />
      </div>
      <div className="noise-bg z-[2]" aria-hidden="true" />

      <div className="relative z-10 container mx-auto px-5 max-w-3xl pb-16 md:pb-24 pt-28">

        {/* Priming chip */}
        <div className="hero-eyebrow mb-5">
          <span className="font-mono-data inline-flex items-center border border-white/20 bg-white/[0.06] backdrop-blur-sm text-white/65 text-[10px] uppercase tracking-[0.2em] px-3.5 py-2 rounded-full">
            Protocolo clínico · Nutrición hepática · 28 días
          </span>
        </div>

        {/* copy-autoridade: credencial antes do pitch */}
        <div className="hero-auth flex items-center gap-2.5 mb-6">
          <div className="w-7 h-7 rounded-full bg-[#CC5833]/20 border border-[#CC5833]/40 flex items-center justify-center shrink-0">
            <Stethoscope size={13} className="text-[#CC5833]" />
          </div>
          <span className="font-mono-data text-[11px] text-white/45 uppercase tracking-widest">
            Dra. Elinna Novaz · Especialista en Nutrición Hepática · +12.000 casos clínicos
          </span>
        </div>

        {/* H1 - Kishotenketsu: sintoma primeiro, diagnóstico depois */}
        <h1 className="mb-6 leading-[1.03]">
          <span className="hero-h1-line block font-bold text-[clamp(1.6rem,4vw,2.6rem)] text-white/80 mb-1">
            Ese cansancio que no se va
          </span>
          <span className="hero-h1-line block font-drama text-[clamp(3.2rem,9.5vw,6rem)] leading-[0.9] text-[#CC5833]">
            puede tener
          </span>
          <span className="hero-h1-line block font-drama text-[clamp(3.2rem,9.5vw,6rem)] leading-[0.9] text-white mb-2">
            un nombre.
          </span>
          <span className="hero-h1-line block font-bold text-[clamp(1.4rem,3.5vw,2.2rem)] text-white/70 mt-2">
            Y ya existe un plan claro para tratarlo.
          </span>
        </h1>

        {/* Milton Model + Bamum */}
        <p className="hero-desc text-base md:text-lg font-light text-white/55 leading-relaxed mb-5 max-w-xl">
          Si tus análisis mostraron enzimas alteradas o te dijeron{' '}
          <strong className="font-semibold text-white/80">"hígado graso"</strong>
          {' '}y el médico no te explicó qué comer mañana por la mañana,
          este protocolo de{' '}
          <strong className="font-semibold text-white/80">28 días con comida real de supermercado</strong>
          {' '}fue creado exactamente para ese momento.
        </p>

        {/* Kishotenketsu: ten (giro) */}
        <div className="hero-story bg-white/[0.05] border border-white/10 rounded-xl px-5 py-4 mb-8 max-w-lg backdrop-blur-sm">
          <p className="text-sm text-white/45 font-light leading-relaxed italic">
            "Me dijeron que tenía hígado graso grado 2. La consulta duró 12 minutos.
            Me fui con una receta y la frase{' '}
            <em className="text-white/60 not-italic font-medium">'cambiá los hábitos'</em>.
            No sabía por dónde empezar."
          </p>
          <p className="font-mono-data text-[10px] text-white/30 uppercase tracking-wider mt-2">
            Lo que dicen miles de personas antes de encontrar un plan real
          </p>
        </div>

        {/* Social proof strip */}
        <div className="hero-meta flex flex-wrap items-center gap-5 mb-9">
          <div className="flex items-center gap-2.5">
            <div className="flex -space-x-2 overflow-hidden">
              {[1, 5, 9, 12, 32].map((n) => (
                <img
                  key={n}
                  className="inline-block w-7 h-7 rounded-full ring-2 ring-white/15 object-cover"
                  src={`https://i.pravatar.cc/100?img=${n}`}
                  alt="Paciente verificada"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
            <div className="leading-tight">
              <div className="flex items-center gap-0.5 text-[#CC5833]">
                {[...Array(5)].map((_, i) => <Star key={i} size={11} fill="currentColor" />)}
                <span className="font-mono-data text-[11px] font-medium ml-1.5 text-white/70">4.9/5</span>
              </div>
              <span className="text-[10px] text-white/40 block mt-0.5">+12.000 personas que ya lo siguieron</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-[#CC5833] shrink-0" strokeWidth={2} />
            <span className="text-xs text-white/45">
              <strong className="text-white/70 font-semibold">Garantía 30 días</strong> · Sin preguntas
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="hero-cta">
          <button
            onClick={openCheckoutModal}
            className="btn-press btn-shine btn-magnetic group relative overflow-hidden bg-[#CC5833] text-white px-8 py-4 rounded-2xl font-black text-base uppercase tracking-wide inline-flex items-center gap-3 cta-pulse"
          >
            <span className="btn-bg bg-[#A84428] rounded-2xl" />
            <span className="relative z-10 flex items-center gap-3">
              QUIERO EL PLAN DE 28 DÍAS <ArrowRight size={18} />
            </span>
          </button>
          <p className="text-[11px] text-white/30 mt-3 font-mono-data tracking-wider uppercase">
            Acceso inmediato · Pago único · $17.99
          </p>
        </div>

      </div>
    </section>
  );
};
