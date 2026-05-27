import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

const FilterCard = ({ clean }) => (
  <div className={`rounded-xl border p-4 flex flex-col items-center gap-3 ${
    clean
      ? 'bg-[#F0FDF4] border-[#BBF7D0]'
      : 'bg-[#FFF7F7] border-[#FECACA]'
  }`}>
    <div className={`w-full h-7 rounded-lg flex items-center justify-center gap-1.5 ${
      clean ? 'bg-[#DBEAFE]/70' : 'bg-[#FEF3C7]/70'
    }`}>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`w-1 rounded-full ${clean ? 'bg-blue-400' : 'bg-amber-500'}`}
          style={{ height: clean ? 14 : 8 + i * 2 }}
        />
      ))}
    </div>
    <div className="text-stone-300 text-base leading-none">↓</div>
    <div className={`w-full py-2.5 rounded-lg flex items-center justify-center border ${
      clean
        ? 'bg-[#DCFCE7] border-[#86EFAC] text-[#166534]'
        : 'bg-[#FEE2E2] border-[#FCA5A5] text-[#991B1B]'
    }`}>
      <span className="text-[10px] font-bold uppercase tracking-wider">
        {clean ? 'Filtro libre' : 'Filtro tapado'}
      </span>
    </div>
    <div className="text-stone-300 text-base leading-none">↓</div>
    <div className={`w-full h-7 rounded-lg flex items-center justify-center ${
      clean ? 'bg-[#DBEAFE]/70' : 'bg-[#FEF3C7]/70'
    }`}>
      <span className={`text-xs font-medium ${clean ? 'text-blue-600' : 'text-amber-700'}`}>
        {clean ? 'Agua limpia' : 'Agua sucia'}
      </span>
    </div>
    <p className={`text-xs font-semibold text-center ${clean ? 'text-[#166534]' : 'text-[#991B1B]'}`}>
      {clean ? 'Hígado que puede descansar' : 'Hígado trabajando de más'}
    </p>
  </div>
);

export const MechanismSection = () => (
  <section className="bg-[#F8F7F4] py-20 md:py-28">
    <div className="container mx-auto px-5 max-w-3xl">

      <ScrollReveal>
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B91C1C] mb-4 block">
          El mecanismo — por qué las dietas fallan
        </span>
        <h2 className="font-editorial text-3xl md:text-5xl font-bold text-stone-900 leading-tight mb-12">
          Por qué <em>"comer menos"</em>{' '}
          <span className="text-[#B91C1C]">no funciona</span>{' '}
          para el hígado graso
        </h2>
      </ScrollReveal>

      <div className="space-y-6 text-base sm:text-lg text-stone-600 leading-[1.85] font-light">

        <ScrollReveal delay={80}>
          <p>Durante años nos dijeron que el problema era la cantidad.</p>
          <p className="mt-4">Que si comes menos, el hígado se limpia. Que si cierras la boca, todo mejora.</p>
          <p className="mt-4 font-semibold text-stone-900">Pero no es así. Y te explico por qué con una comparación simple.</p>
        </ScrollReveal>

        {/* Filter visual */}
        <ScrollReveal delay={130}>
          <div className="bg-white rounded-2xl border border-stone-200 shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-5 text-center">
              Pensá en tu hígado como un filtro de agua
            </p>
            <div className="grid grid-cols-2 gap-4 mb-5">
              <FilterCard clean={true} />
              <FilterCard clean={false} />
            </div>
            <div className="border-t border-stone-100 pt-4 text-center">
              <p className="text-sm font-semibold text-stone-900">
                No importa si le echás mucha o poca agua.
              </p>
              <p className="text-sm text-stone-500 font-light mt-1">
                El problema no es la cantidad. Es <strong className="text-stone-700">lo que lleva adentro</strong>.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={180}>
          <p>Con tu hígado pasa algo parecido.</p>
          <p className="mt-4">
            No se trata de cuánto comés. Se trata de{' '}
            <strong className="font-semibold text-stone-900">cómo combinás los alimentos</strong>.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={220}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-[#FFF7F7] border border-[#FECACA] rounded-xl p-4">
              <p className="text-sm font-semibold text-[#991B1B] mb-1.5">Combinaciones que sobrecargan</p>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                Obligan al hígado a trabajar de más. Lo sobrecargan aunque comas "poco".
              </p>
            </div>
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-4">
              <p className="text-sm font-semibold text-[#166534] mb-1.5">Combinaciones que sanan</p>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                Le permiten descansar y cumplir su función. Sin pasar hambre.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={260}>
          <div className="bg-white rounded-xl border border-stone-200 px-5 py-5 shadow-sm">
            <p>Esa fue la clave que usé con mi mamá.</p>
            <p className="mt-3 font-semibold text-stone-900">No le pedí que pasara hambre. Le enseñé a combinar.</p>
            <p className="mt-3 text-[#16A34A] font-semibold">En 8 semanas, sus análisis cambiaron.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p>Y después lo vi una y otra vez en mis pacientes.</p>
          <p className="mt-4 font-semibold text-stone-900">
            Esto no es magia. Es bioquímica básica aplicada a la comida real.
          </p>
        </ScrollReveal>

      </div>
    </div>
  </section>
);
