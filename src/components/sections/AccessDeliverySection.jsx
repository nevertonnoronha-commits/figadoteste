import React from 'react';
import { Smartphone, Zap, Activity } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { openCheckoutModal } from '../../utils/analytics';

export const AccessDeliverySection = () => (
  <section className="py-14 md:py-20 bg-[#F2F0E9]">
    <div className="container mx-auto px-5 max-w-4xl text-center">
      <ScrollReveal>
        <span className="font-mono-data text-[10px] font-medium uppercase tracking-[0.25em] text-[#CC5833] mb-3 block">
          ENTREGA DIGITAL INMEDIATA
        </span>
        <h2 className="font-editorial text-2xl md:text-4xl font-bold text-[#1A1A1A] mb-10 leading-tight">
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
            <div key={i} className="rounded-2xl bg-[#E8E6DF] border border-[#2E4036]/12 p-6 shadow-[0_4px_16px_rgba(46,64,54,0.07)] text-left">
              <div className="w-11 h-11 bg-[#2E4036] flex items-center justify-center mb-4 text-white rounded-xl">
                <item.icon size={20} strokeWidth={2} />
              </div>
              <h3 className="font-bold text-[#1A1A1A] mb-2">{item.label}</h3>
              <p className="text-[#6B7260] text-sm font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <button
          onClick={openCheckoutModal}
          className="btn-press btn-magnetic group relative overflow-hidden inline-flex items-center justify-center border-2 border-[#2E4036] text-[#2E4036] px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-[#2E4036] hover:text-white transition-colors duration-300 cursor-pointer"
        >
          Acceder Ahora con 85% OFF
        </button>
      </ScrollReveal>
    </div>
  </section>
);
