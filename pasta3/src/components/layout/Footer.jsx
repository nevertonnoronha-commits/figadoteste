import React from 'react';

export const Footer = () => (
  <footer className="bg-[#1A1A1A] text-white/35 py-12 text-center text-sm font-light rounded-t-[3rem] relative z-20">
    <div className="noise-bg rounded-t-[3rem]" aria-hidden="true" />
    <div className="container mx-auto px-5 relative z-10">

      {/* Brand */}
      <p className="font-drama text-2xl text-white/55 tracking-widest mb-1">NATURALE</p>
      <p className="font-mono-data text-[10px] text-white/25 tracking-widest uppercase mb-6">
        Protocolo Clínico · Nutrición Terapéutica Hepática
      </p>

      {/* Nav links */}
      <div className="flex justify-center gap-6 font-mono-data text-[10px] uppercase tracking-widest mb-6">
        <a href="#" className="hover:text-white/70 transition-colors">Términos</a>
        <a href="#" className="hover:text-white/70 transition-colors">Privacidad</a>
        <a href="#" className="hover:text-white/70 transition-colors">Contacto</a>
      </div>

      {/* Disclaimer */}
      <p className="max-w-2xl mx-auto mb-6 font-mono-data text-[10px] leading-relaxed opacity-30 tracking-wide">
        El contenido de esta página es informativo y educativo. No reemplaza el consejo médico profesional.
        Consultá con tu médico antes de realizar cambios en tu alimentación.
      </p>

      {/* System Operational indicator (GEMINI spec) */}
      <div className="inline-flex items-center gap-2 font-mono-data text-[10px] text-white/25 tracking-wider">
        <span className="sys-dot" />
        <span>SISTEMA OPERACIONAL</span>
      </div>

      <p className="font-mono-data text-[10px] tracking-widest uppercase mt-4 opacity-20">
        © 2026 Naturale · Todos los derechos reservados.
      </p>

    </div>
  </footer>
);
