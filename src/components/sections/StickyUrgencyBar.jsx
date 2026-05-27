import React from 'react';
import { Hourglass } from 'lucide-react';

export const StickyUrgencyBar = ({ timeLeft }) => {
  const fmt = (v) => v.toString().padStart(2, '0');

  return (
    <div className="sticky top-0 z-50 bg-[#1A1A1A] border-b border-[#CC5833]/30 py-2.5 px-4 shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
      <div className="container mx-auto flex flex-row items-center justify-center gap-3 sm:gap-6 text-center">

        <span className="font-mono-data text-[10px] sm:text-xs uppercase tracking-[0.18em] text-white/55">
          <span className="hidden sm:inline">Acceso al 85% OFF disponible por tiempo limitado</span>
          <span className="sm:hidden">85% OFF · Oferta limitada</span>
        </span>

        <div className="hidden sm:block w-px h-3.5 bg-white/15 shrink-0" />

        <div className="flex items-center gap-1.5 pulse-warning font-mono-data text-sm sm:text-base font-medium shrink-0">
          <Hourglass size={12} className="shrink-0 opacity-70" />
          <span className="tracking-wider">
            {fmt(timeLeft.h)}:{fmt(timeLeft.m)}:{fmt(timeLeft.s)}
          </span>
          <span className="hidden md:inline font-mono-data text-[10px] text-white/30 lowercase normal-case tracking-normal font-normal ml-1">
            restantes
          </span>
        </div>

      </div>
    </div>
  );
};
