import React, { useState, useEffect, useRef } from 'react';
import { scrollToOffer } from '../../utils/smoothScroll';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0.1 }
    );

    // Observe the first section (hero)
    const hero = document.querySelector('section');
    if (hero) observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-[90] px-5 py-2.5 rounded-full navbar-pill ${scrolled ? 'scrolled' : ''}`}
      style={{ maxWidth: 'calc(100vw - 32px)' }}
    >
      <div className="flex items-center gap-6 md:gap-8">
        {/* Logo */}
        <span
          className={`font-drama text-xl tracking-wider leading-none transition-colors duration-300 ${
            scrolled ? 'text-[#2E4036]' : 'text-white'
          }`}
        >
          NATURALE
        </span>

        {/* Nav links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-6">
          {[
            { label: 'Protocolo', href: '#offer' },
            { label: 'Testimonios', href: '#testimonios' },
            { label: 'Garantía', href: '#garantia' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${
                scrolled ? 'text-[#6B7260] hover:text-[#2E4036]' : 'text-white/70 hover:text-white'
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={scrollToOffer}
          className="btn-press btn-magnetic relative overflow-hidden bg-[#CC5833] text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-[0_4px_16px_rgba(204,88,51,0.35)]"
        >
          <span className="btn-bg bg-[#A84428] rounded-full" />
          <span className="relative z-10">Acceder</span>
        </button>
      </div>
    </nav>
  );
};
