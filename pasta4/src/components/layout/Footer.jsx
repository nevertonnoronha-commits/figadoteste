import React from 'react';
import { Leaf } from 'lucide-react';

export const Footer = () => (
  <footer className="bg-[#111111] text-white/40 py-12 text-center text-sm font-light border-t-2 border-white/10 relative z-20">
    <div className="container mx-auto px-5">
      <p className="mb-3 font-editorial text-xl text-white/60 tracking-widest uppercase">NATURALE</p>
      <p className="mb-4 text-xs tracking-widest uppercase">© 2026 Naturale · Todos los derechos reservados.</p>
      <p className="max-w-2xl mx-auto mb-6 text-xs leading-relaxed opacity-50">
        El contenido de esta página es informativo y educativo. No reemplaza el consejo médico profesional. Consultá con tu médico antes de realizar cambios en tu alimentación.
      </p>
      <div className="flex justify-center gap-6 text-[10px] uppercase tracking-widest">
        <a href="#" className="hover:text-white transition-colors">Términos</a>
        <a href="#" className="hover:text-white transition-colors">Privacidad</a>
        <a href="#" className="hover:text-white transition-colors">Contacto</a>
      </div>
    </div>
  </footer>
);
