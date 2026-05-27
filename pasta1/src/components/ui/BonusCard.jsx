import React, { useState, useEffect, useRef } from 'react';

export const BonusCard = ({ bono, idx }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const delay = idx * 200;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`bonus-card-wrapper ${isVisible ? 'bonus-card-visible' : ''}`}
    >
      <div className="bg-[#0F2033] border-2 border-[#FBBF24] overflow-hidden flex flex-col sm:flex-row group hover:border-white/40 transition-colors shadow-[4px_4px_0_#B8860B] relative">
        <div className="sm:w-2/5 aspect-[16/9] sm:aspect-auto overflow-hidden relative bg-black/30">
          <div className="absolute top-2 left-2 bg-[#B91C1C] text-white text-[9px] font-black px-2 py-1 uppercase tracking-wider z-10">
            BONO GRATIS
          </div>
          <img
            src={bono.img}
            alt={bono.alt}
            loading="lazy"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-85 group-hover:opacity-100"
            onError={(e) => {
              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' fill='%230F2033'%3E%3Crect width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='12' fill='%23aaa'%3EImage%3C/text%3E%3C/svg%3E";
            }}
          />
        </div>
        <div className="p-5 sm:w-3/5 flex flex-col justify-center">
          <h3 className="font-bold text-[#FBBF24] text-base mb-1 uppercase tracking-wide">{bono.title}</h3>
          <p className="text-xs italic text-white/70 mb-3">"{bono.subtitle}"</p>
          <p className="text-sm font-light text-white/60 mb-4 leading-relaxed">{bono.desc}</p>
          <p className="mt-auto text-xs font-bold uppercase tracking-wide">
            <span className="line-through text-white/30">Valor: ${bono.val}</span>
            <span className="text-[#16A34A] ml-2 font-black">TUYO GRATIS</span>
          </p>
        </div>
      </div>
    </div>
  );
};
