import React from 'react';
import { Smartphone, Zap, Activity } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { openCheckoutModal } from '../../utils/analytics';

export const AccessDeliverySection = () => (
  <section className="py-14 md:py-20 bg-white border-b-4 border-[#111111]">
    <div className="container mx-auto px-5 max-w-4xl text-center">
      <ScrollReveal>
        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#B91C1C] mb-3 block">
          ENTREGA DIGITAL INMEDIATA
        </span>
        <h2 className="font-editorial text-2xl md:text-4xl font-bold text-[#111111] mb-10 leading-tight">
          Acceso inmediato. Desde cualquier dispositivo. Para siempre.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {[
            {
              icon: Smartphone,
              label: 'Multidispositivo',
              desc: 'Funciona en celular, tablet y computadora. Lo tenés a mano cuando cocinás.',
            },
            {
              icon: Zap,
              label: 'Entrega Inmediata',
              desc: 'Te llega el acceso por email en minutos. En 5 min ya podés leer el protocolo.',
            },
            {
              icon: Activity,
              label: 'Acceso de Por Vida',
              desc: 'Comprás una vez y es tuyo para siempre. Incluye todas las actualizaciones futuras.',
            },
          ].map((item, i) => (
            <div key={i} className="border-2 border-[#111111] p-6 shadow-[3px_3px_0_#111111] text-left">
              <div className="w-10 h-10 bg-[#111111] flex items-center justify-center mb-4 text-[#FBBF24]">
                <item.icon size={20} strokeWidth={2} />
              </div>
              <h3 className="font-bold text-[#111111] mb-2">{item.label}</h3>
              <p className="text-[#525252] text-sm font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <button
          onClick={openCheckoutModal}
          className="btn-press btn-shine inline-flex items-center justify-center border-2 border-[#111111] text-[#111111] px-8 py-4 font-black uppercase tracking-widest text-sm shadow-[3px_3px_0_#111111] hover:bg-[#111111] hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-100 cursor-pointer"
        >
          Acceder Ahora con 85% OFF
        </button>
      </ScrollReveal>
    </div>
  </section>
);
