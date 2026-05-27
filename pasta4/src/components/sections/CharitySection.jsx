import React from 'react';
import { Heart } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const CharitySection = () => (
  <section className="bg-white py-16 md:py-20">
    <div className="container mx-auto px-5 max-w-3xl">
      <ScrollReveal>
        <div className="bg-white rounded-2xl border border-stone-200 shadow-[0_2px_20px_rgba(0,0,0,0.05)] overflow-hidden">

          {/* Header */}
          <div className="flex items-center gap-3.5 px-6 py-5 border-b border-stone-100 bg-stone-50/50">
            <div className="w-9 h-9 rounded-full bg-[#FEE2E2] flex items-center justify-center shrink-0">
              <Heart size={16} className="text-[#B91C1C]" fill="currentColor" />
            </div>
            <span className="text-sm font-semibold text-stone-800">
              Por qué la mitad de lo que pagás no es para mí
            </span>
          </div>

          <div className="px-6 sm:px-8 py-7 space-y-4 text-base sm:text-lg text-stone-600 leading-[1.85] font-light">

            <p>
              Cuando mi mamá se recuperó, empecé a atender sin cobrar a varias personas del barrio
              que tenían el mismo diagnóstico.
            </p>
            <p>Con el tiempo no alcancé. Eran demasiadas.</p>
            <p>Entonces tomé una decisión.</p>

            <div className="bg-stone-50 border-l-2 border-stone-300 rounded-r-xl px-5 py-4">
              <p className="font-semibold text-stone-900">
                Sistematizar el protocolo. Venderlo a un precio accesible. Y donar la mitad.
              </p>
            </div>

            {/* Foundation highlight */}
            <div className="bg-[#F0FDF4] rounded-xl border border-[#BBF7D0] px-6 py-5">
              <p className="font-semibold text-[#166534] text-base sm:text-lg mb-2">
                La mitad de cada venta va a la Fundación Nutrir Mayores.
              </p>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                Una organización que trabaja con adultos mayores en situación de vulnerabilidad,
                brindando acompañamiento nutricional gratuito.
              </p>
            </div>

            <p className="font-semibold text-stone-900">No es una estrategia de marketing.</p>
            <p>
              Es la única forma que encontré de que esto llegue a más personas sin que yo colapse en el intento.
            </p>

            <div className="border-t border-stone-100 pt-5 space-y-3">
              <p>Cuando comprás el Protocolo NATURALE, no estás comprando solo una guía.</p>
              <p>Estás ayudando a que alguien que no puede pagarla también la reciba.</p>
              <p className="font-semibold text-stone-900">
                Y eso, para mí, vale más que cualquier facturación.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
