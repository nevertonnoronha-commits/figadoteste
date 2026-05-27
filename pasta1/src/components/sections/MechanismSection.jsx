import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

const FilterCard = ({ clean }) => (
  <div className={`rounded-xl border p-4 flex flex-col items-center gap-3 ${
    clean
      ? 'bg-[#F0FDF4] border-[#BBF7D0]'
      : 'bg-[#FAF0EA] border-[#E8C5B0]'
  }`}>
    <div className={`w-full h-7 rounded-lg flex items-center justify-center gap-1.5 ${
      clean ? 'bg-[#DBEAFE]/70' : 'bg-[#FAE8D4]/70'
    }`}>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`w-1 rounded-full ${clean ? 'bg-blue-400' : 'bg-[#CC5833]/70'}`}
          style={{ height: clean ? 14 : 8 + i * 2 }}
        />
      ))}
    </div>
    <div className="text-[#6B7260] text-base leading-none">↓</div>
    <div className={`w-full py-2.5 rounded-lg flex items-center justify-center border ${
      clean
        ? 'bg-[#DCFCE7] border-[#86EFAC] text-[#166534]'
        : 'bg-[#FAEAE4] border-[#E8C5B0] text-[#A84428]'
    }`}>
      <span className="font-mono-data text-[10px] font-medium uppercase tracking-wider">
        {clean ? 'Filtro libre' : 'Filtro tapado'}
      </span>
    </div>
    <div className="text-[#6B7260] text-base leading-none">↓</div>
    <div className={`w-full h-7 rounded-lg flex items-center justify-center ${
      clean ? 'bg-[#DBEAFE]/70' : 'bg-[#FAE8D4]/70'
    }`}>
      <span className={`text-xs font-medium ${clean ? 'text-blue-600' : 'text-[#A84428]'}`}>
        {clean ? 'Agua limpia' : 'Agua sucia'}
      </span>
    </div>
    <p className={`text-xs font-semibold text-center ${clean ? 'text-[#166534]' : 'text-[#A84428]'}`}>
      {clean ? 'Hígado que puede descansar' : 'Hígado trabajando de más'}
    </p>
  </div>
);

export const MechanismSection = () => (
  <section className="bg-[#E8E6DF] py-20 md:py-28">
    <div className="container mx-auto px-5 max-w-3xl">

      <ScrollReveal>
        <span className="font-mono-data text-[10px] font-medium uppercase tracking-[0.25em] text-[#CC5833] mb-4 block">
          Por qué las dietas no funcionan para el hígado
        </span>
        <h2 className="font-editorial text-3xl md:text-5xl font-bold text-[#1C1917] leading-tight mb-12">
          "Comer menos" no es{' '}
          <span className="text-[#CC5833]">el problema.</span>{' '}
          <em className="italic">Ni la solución.</em>
        </h2>
      </ScrollReveal>

      <div className="space-y-6 text-base sm:text-lg text-[#6B7260] leading-[1.85] font-light">

        <ScrollReveal delay={80}>
          <p>Durante años nos dijeron que el problema era la cantidad.</p>
          <p className="mt-4">Que si comés menos, el hígado se limpia. Que si cerrás la boca, todo mejora.</p>
          <p className="mt-4 font-semibold text-[#1C1917]">No es así. Y hay una explicación concreta.</p>
        </ScrollReveal>

        {/* Visual filtro */}
        <ScrollReveal delay={130}>
          <div className="bg-white rounded-2xl border border-stone-200/50 shadow-[0_4px_24px_rgba(0,0,0,0.07)] p-6">
            <p className="font-mono-data text-xs font-medium uppercase tracking-widest text-[#6B7260] mb-5 text-center">
              Pensá en tu hígado como un filtro de agua
            </p>
            <div className="grid grid-cols-2 gap-4 mb-5">
              <FilterCard clean={true} />
              <FilterCard clean={false} />
            </div>
            <div className="border-t border-stone-100 pt-4 text-center">
              <p className="text-sm font-semibold text-[#1C1917]">
                No importa si le echás mucha o poca agua.
              </p>
              <p className="text-sm text-[#6B7260] font-light mt-1">
                El problema no es la cantidad. Es <strong className="text-[#1C1917]">lo que lleva adentro</strong>.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={180}>
          <p>Con tu hígado pasa lo mismo.</p>
          <p className="mt-4">
            No se trata de cuánto comés. Se trata de{' '}
            <strong className="font-semibold text-[#1C1917]">cómo combinás los alimentos</strong>.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={220}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-[#FAF0EA] border border-[#E8C5B0] rounded-xl p-4">
              <p className="text-sm font-semibold text-[#A84428] mb-1.5">Combinaciones que sobrecargan</p>
              <p className="text-sm text-[#6B7260] font-light leading-relaxed">
                Obligan al hígado a trabajar de más. Lo sobrecargan aunque comas poco.
              </p>
            </div>
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-4">
              <p className="text-sm font-semibold text-[#166534] mb-1.5">Combinaciones que sanan</p>
              <p className="text-sm text-[#6B7260] font-light leading-relaxed">
                Le permiten descansar y cumplir su función. Sin pasar hambre.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Mecanismo nomeado — propriedade intelectual percebida */}
        <ScrollReveal delay={260}>
          <div className="bg-white rounded-xl border border-stone-200/50 px-5 py-5 shadow-sm">
            <p className="font-mono-data text-[10px] font-medium uppercase tracking-widest text-[#CC5833] mb-3">
              El núcleo del Protocolo NATURALE
            </p>
            <p className="font-semibold text-[#1C1917] text-base sm:text-lg mb-2">
              Método de Combinación Hepática Estratégica
            </p>
            <p className="text-[#6B7260] text-sm font-light leading-relaxed">
              Un sistema específico que define qué comer junto y qué separar, en qué momento del día,
              para que el hígado pueda descansar y cumplir su función sin inflamarse.
              No es una dieta. Es una forma de organizar lo que ya comés.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p>Eso fue lo que usé con mi mamá.</p>
          <p className="mt-3 font-semibold text-[#1C1917]">No le pedí que pasara hambre. Le enseñé a combinar.</p>
          <p className="mt-3 text-[#4A7C59] font-semibold">En 8 semanas, sus análisis cambiaron.</p>
        </ScrollReveal>

        <ScrollReveal delay={340}>
          <p>Y después lo vi una y otra vez. En mis pacientes. En sus familias.</p>
          <p className="mt-4 font-semibold text-[#1C1917]">
            Esto no es magia. Es bioquímica básica aplicada a la comida real.
          </p>
        </ScrollReveal>

        {/* FOMO médico real — consequência, não urgência falsa */}
        <ScrollReveal delay={380}>
          <div className="bg-[#F2F0E9] border border-stone-300/50 rounded-xl px-5 py-4">
            <p className="text-sm text-[#6B7260] font-light leading-relaxed">
              <span className="font-semibold text-[#1C1917]">Una cosa importante:</span>{' '}
              cada semana sin un plan claro, el proceso continúa. El hígado no hace pausa.
              Cuanto antes empieza el Método de Combinación Hepática, más fácil es revertir el proceso.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </div>
  </section>
);
