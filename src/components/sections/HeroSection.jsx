import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { scrollToOffer } from '../../utils/smoothScroll';

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.hero-eyebrow', { y: 40, opacity: 0, duration: 0.9 })
        .from('.hero-h1-sans', { y: 50, opacity: 0, duration: 1.1, stagger: 0.08 }, '-=0.5')
        .from('.hero-h1-drama', { y: 55, opacity: 0, duration: 1.2 }, '-=0.9')
        .from('.hero-desc', { y: 30, opacity: 0, duration: 0.9 }, '-=0.6')
        .from('.hero-meta > *', { y: 20, opacity: 0, duration: 0.7, stagger: 0.08 }, '-=0.5')
        .from('.hero-cta', { y: 20, opacity: 0, duration: 0.7 }, '-=0.3');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex flex-col justify-end overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://raw.githubusercontent.com/nevertonnoronha-commits/naturale-images/main/image-15.webp"
          alt=""
          aria-hidden="true"
          fetchpriority="high"
          className="w-full h-full object-cover"
        />
        {/* Gradient layering: moss tones → deep charcoal */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/98 via-[#2E4036]/55 to-[#2E4036]/15" />
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/70 to-transparent" />
      </div>

      {/* Noise texture (GEMINI spec — 0.05 opacity) */}
      <div className="noise-bg z-[2]" aria-hidden="true" />

      {/* Content — bottom-left third (GEMINI spec) */}
      <div className="relative z-10 container mx-auto px-5 max-w-3xl pb-16 md:pb-24 pt-28">

        {/* Pre-headline chip */}
        <div className="hero-eyebrow mb-7">
          <span className="font-mono-data inline-flex items-center border border-white/20 bg-white/[0.06] backdrop-blur-sm text-white/65 text-[10px] uppercase tracking-[0.2em] px-3.5 py-2 rounded-full">
            Para personas de +40 años · Hígado graso · Protocolo 28 días
          </span>
        </div>

        {/* H1 — GEMINI spec: bold sans + massive serif italic (3–5x size ratio) */}
        <h1 className="mb-7 leading-[1.03]">
          <span className="hero-h1-sans block font-bold text-[clamp(1.75rem,4.5vw,3rem)] text-white/85 mb-0.5">
            Si te diagnosticaron
          </span>
          <span className="hero-h1-drama block font-drama text-[clamp(3.5rem,10vw,6.5rem)] leading-[0.92] text-[#CC5833]">
            hígado graso,
          </span>
          <span className="hero-h1-sans block font-bold text-[clamp(1.75rem,4.5vw,3rem)] text-white/85 mt-1">
            esto es para vos.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-desc text-base md:text-lg font-light text-white/55 leading-relaxed mb-8 max-w-lg">
          Destapar el "filtro" de tu cuerpo en{' '}
          <strong className="font-semibold text-white/85">28 días</strong>
          {' '}— sin dietas de hambre, sin batidos intomables, con comida real de tu supermercado.
        </p>

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
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} fill="currentColor" />
                ))}
                <span className="font-mono-data text-[11px] font-medium ml-1.5 text-white/70">4.9/5</span>
              </div>
              <span className="text-[10px] text-white/40 block mt-0.5">+12.000 personas que ya lo siguieron</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-[#CC5833] shrink-0" strokeWidth={2} />
            <span className="text-xs text-white/45">
              <strong className="text-white/70 font-semibold">Garantía 30 días</strong> · Riesgo Cero
            </span>
          </div>
        </div>

        {/* CTA — Magnetic button (GEMINI spec) */}
        <div className="hero-cta">
          <button
            onClick={scrollToOffer}
            className="btn-press btn-shine btn-magnetic group relative overflow-hidden bg-[#CC5833] text-white px-8 py-4 rounded-2xl font-black text-base uppercase tracking-wide inline-flex items-center gap-3 cta-pulse"
          >
            <span className="btn-bg bg-[#A84428] rounded-2xl" />
            <span className="relative z-10 flex items-center gap-3">
              QUIERO EL PROTOCOLO DE 28 DÍAS <ArrowRight size={18} />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};
