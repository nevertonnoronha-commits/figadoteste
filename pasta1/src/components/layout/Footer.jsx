import React from 'react';

export const Footer = () => (
  <footer className="bg-[#1A1A1A] text-white/35 py-12 text-center text-sm font-light border-t border-white/8 relative z-20">
    <div className="noise-bg" aria-hidden="true" />
    <div className="relative z-10 container mx-auto px-5">
      <p className="mb-3 font-editorial text-xl text-white/55 tracking-[0.2em] uppercase italic">
        Naturale
      </p>
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="sys-dot" />
        <p className="font-mono-data text-[10px] text-white/30 uppercase tracking-widest">
          © 2026 Naturale · Todos los derechos reservados
        </p>
      </div>
      <p className="max-w-2xl mx-auto mb-6 text-xs leading-relaxed opacity-40">
        El contenido de esta página es informativo y educativo. No reemplaza el consejo médico profesional. Consultá con tu médico antes de realizar cambios en tu alimentación.
      </p>
      <div className="flex justify-center gap-6 font-mono-data text-[10px] uppercase tracking-widest">
        <a href="#" className="hover:text-white/70 transition-colors">Términos</a>
        <a href="#" className="hover:text-white/70 transition-colors">Privacidad</a>
        <a href="#" className="hover:text-white/70 transition-colors">Contacto</a>
      </div>
    </div>
  </footer>
);
