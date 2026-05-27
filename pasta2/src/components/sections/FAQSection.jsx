import React from 'react';
import { Accordion } from '../ui/Accordion';
import { ScrollReveal } from '../ui/ScrollReveal';

const faqs = [
  {
    q: "¿En cuánto tiempo voy a ver resultados?",
    a: "No te voy a prometer un número mágico. Cada cuerpo responde a su ritmo. Lo que sí puedo decirte es que la mayoría nota menos pesadez en 7–10 días. Cambios en análisis de sangre: 6–8 semanas. Cada cuerpo es distinto. Pero esto requiere constancia, no milagros.",
  },
  {
    q: "¿Tengo que comprar suplementos o productos especiales?",
    a: "No. El protocolo se basa 100% en alimentos que encontrás en cualquier supermercado. No hay pastillas, no hay batidos, no hay productos con nombres raros.",
  },
  {
    q: "¿Funciona si ya probé otras dietas y no me sirvieron?",
    a: "Probablemente sí. Porque esto no es una dieta restrictiva. Es un sistema de combinaciones alimentarias. La diferencia está ahí. Pero si tenés dudas, tenés 30 días de garantía para probarlo sin riesgo.",
  },
  {
    q: "¿Puedo seguir el protocolo si tengo otras condiciones médicas?",
    a: "El protocolo está diseñado para hígado graso. Si tenés diabetes, problemas renales u otra condición, consultá primero con tu médico. Siempre. Esto no reemplaza un seguimiento profesional.",
  },
  {
    q: "¿Cómo accedo después de pagar?",
    a: "Inmediatamente después del pago, recibís un mail con tu acceso. Todo es digital. Lo podés leer desde el celular, la computadora o imprimirlo si preferís.",
  },
  {
    q: "¿La mitad del valor realmente va a caridad?",
    a: "Sí. La Fundación Nutrir Mayores recibe el 50% de cada venta. Es un compromiso público. Si en algún momento dejo de cumplirlo, quiero que me lo reclamen.",
  },
];

export const FAQSection = () => (
  <section className="bg-white py-16 md:py-20">
    <div className="container mx-auto px-5 max-w-3xl">
      <ScrollReveal>
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B91C1C] mb-4 block">
          Preguntas frecuentes
        </span>
        <h2 className="font-editorial text-3xl md:text-4xl font-bold text-stone-900 mb-10">
          ¿Tenés dudas? Acá van las respuestas.
        </h2>

        <div className="bg-[#F8F7F4] rounded-2xl border border-stone-200 px-6 py-2 shadow-sm">
          {faqs.map((faq, idx) => (
            <Accordion key={idx} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);
