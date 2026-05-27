import React from 'react';
import { Accordion } from '../ui/Accordion';
import { ScrollReveal } from '../ui/ScrollReveal';

const faqs = [
  {
    q: "¿Para quién es este protocolo exactamente?",
    a: "Para personas de 40 años en adelante que tienen diagnóstico de hígado graso (esteatosis hepática), fatiga crónica, inflamación abdominal, o que simplemente no saben qué comer después de que el médico les dijo 'cambiá los hábitos'. No reemplaza el seguimiento médico — es un apoyo nutricional práctico para el día a día."
  },
  {
    q: "¿Sirve si tengo hígado graso pero no tengo síntomas graves?",
    a: "Sí. Muchas personas con hígado graso no tienen dolor fuerte, pero sí fatiga, pesadez post-comida o confusión con la alimentación. El protocolo está pensado exactamente para eso: darte un plan claro antes de que la situación avance."
  },
  {
    q: "¿Qué pasa si ya probé otras dietas y no funcionaron?",
    a: "Es lo más común. La mayoría de las dietas no están pensadas específicamente para el hígado graso. NATURALE no es una dieta restrictiva — es un protocolo de 28 días organizado por comidas, con alimentos reales y preparaciones rápidas. La diferencia está en la estructura, no en la restricción."
  },
  {
    q: "¿Necesito saber cocinar?",
    a: "No. Las recetas están explicadas paso a paso, con ingredientes de supermercado y preparaciones de menos de 20 minutos. Si podés hervir agua, podés seguir este protocolo."
  },
  {
    q: "¿Puedo usarlo junto con mi familia?",
    a: "Sí, y eso es una de las ventajas más mencionadas. No cocinás dos veces — toda la familia puede comer lo mismo. Los platos están pensados para ser sabrosos para todos, no solo para quien sigue el protocolo."
  },
  {
    q: "¿Cómo recibo el acceso después de comprar?",
    a: "Apenas se confirma el pago, recibís un email con el acceso. Sin instalaciones, sin descargas complicadas. Funciona desde cualquier dispositivo: celular, tablet o computadora."
  },
  {
    q: "¿Por cuánto tiempo tengo acceso?",
    a: "De por vida. Un solo pago, acceso para siempre — incluyendo futuras actualizaciones sin costo adicional."
  },
  {
    q: "¿Sirve si también tengo colesterol alto, triglicéridos elevados o diabetes?",
    a: "Sí. La guía fue diseñada para personas que frecuentemente tienen más de una de estas condiciones juntas. La alimentación orientada al hígado graso suele tener impacto positivo en estas otras áreas también. De todos modos, siempre recomendamos seguir la guía de tu médico."
  },
  {
    q: "¿Y si compro y no me convence?",
    a: "Tenés 30 días para pedir el reembolso completo, sin preguntas. La garantía es procesada directamente por Hotmart, la plataforma de pago. Riesgo cero para vos."
  },
  {
    q: "¿Puedo acceder desde cualquier país de América Latina?",
    a: "Sí. Es 100% digital y funciona desde cualquier país, en cualquier momento, sin restricciones geográficas."
  }
];

export const FAQSection = () => (
  <section className="py-14 md:py-20 bg-[#E8E6DF] text-[#1A1A1A]">
    <div className="container mx-auto px-5 max-w-3xl">
      <ScrollReveal>
        <div className="mb-10">
          <span className="font-mono-data text-[10px] font-medium uppercase tracking-[0.25em] text-[#CC5833] mb-3 block">
            PREGUNTAS FRECUENTES
          </span>
          <h2 className="font-editorial text-3xl md:text-4xl font-bold text-[#1A1A1A]">¿Tenés dudas? Acá van las respuestas.</h2>
        </div>

        <div className="border-t border-[#2E4036]/15">
          {faqs.map((faq, idx) => (
            <Accordion key={idx} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);
