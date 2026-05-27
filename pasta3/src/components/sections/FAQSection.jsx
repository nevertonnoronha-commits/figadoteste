import React from 'react';
import { Accordion } from '../ui/Accordion';
import { ScrollReveal } from '../ui/ScrollReveal';

// NLP reframing: cada objeción se convierte en confirmación
// Breakthrough advertising: handle las 10 objeciones más comunes
const faqs = [
  {
    q: "¿Y si todavía no tengo diagnóstico pero me identifico con lo que leí acá?",
    a: "Es uno de los escenarios más comunes. El hígado graso puede estar presente años antes de aparecer en análisis. Si notás fatiga persistente, hinchazón abdominal, pesadez después de comer o cansancio que no mejora con descanso, esa información es válida. El protocolo está diseñado para personas con diagnóstico confirmado y también para quienes están en ese momento previo de confusión. El paso más importante es tener una guía concreta."
  },
  {
    q: "¿Para quién es exactamente este protocolo?",
    a: "Para personas a partir de los 40 años con diagnóstico de hígado graso (esteatosis hepática), enzimas hepáticas elevadas, o síntomas como fatiga crónica, inflamación abdominal o pesadez post-comida. También para quienes recibieron la indicación médica de 'cambiar la alimentación' sin que nadie les explicara cómo hacerlo en la práctica. No reemplaza el seguimiento médico. Es un apoyo nutricional concreto para el día a día."
  },
  {
    q: "¿Qué pasa si ya probé otras dietas y ninguna me funcionó?",
    a: "Es lo más frecuente. La mayoría de las dietas no están diseñadas específicamente para el hígado graso. NATURALE no es una dieta restrictiva. Es un protocolo de combinaciones alimentarias organizado en 28 días, con alimentos de supermercado y preparaciones rápidas. La diferencia está en la estructura y en el qué combinar, no en la restricción."
  },
  {
    q: "¿Tengo que saber cocinar?",
    a: "No. Las recetas están explicadas paso a paso, con ingredientes de supermercado común y preparaciones de menos de 20 minutos. Si podés hervir agua, podés seguir este protocolo. El objetivo es que cocines para toda la familia sin hacer dos platos distintos."
  },
  {
    q: "¿Sirve si también tengo colesterol alto, triglicéridos elevados o prediabetes?",
    a: "Sí. El hígado graso frecuentemente coexiste con estas condiciones. La alimentación orientada al hígado tiene impacto positivo en el metabolismo general. El protocolo fue diseñado para personas que muchas veces tienen más de una de estas condiciones juntas. De todos modos, siempre es importante continuar el seguimiento con tu médico."
  },
  {
    q: "¿Puedo seguirlo junto con mi familia?",
    a: "Sí, y eso es una de las ventajas más mencionadas. No cocinás dos veces ni separás tus comidas del resto. Toda la familia puede comer lo mismo. Los platos están pensados para ser sabrosos para todos, no solo para quien sigue el protocolo."
  },
  {
    q: "¿Cómo recibo el acceso después de comprar?",
    a: "Apenas se confirma el pago, recibís un email con el acceso completo. Sin instalaciones, sin apps complicadas. Funciona desde cualquier dispositivo: celular, tablet o computadora. Acceso inmediato, 24 horas."
  },
  {
    q: "¿Por cuánto tiempo tengo acceso?",
    a: "De por vida. Un solo pago, acceso permanente. Incluye todas las actualizaciones futuras sin costo adicional. No hay suscripción mensual ni cobros ocultos."
  },
  {
    q: "¿Por qué cuesta solo $17.99 si tiene tanto contenido?",
    a: "Porque el objetivo es que el precio no sea el obstáculo entre vos y un plan claro. Una consulta con un especialista puede costar más de $150. Este protocolo no reemplaza esa consulta. La complementa con instrucciones prácticas diarias que el médico generalmente no tiene tiempo de darte. $17.99 es una inversión accesible con garantía de 30 días. El riesgo es nuestro."
  },
  {
    q: "¿Y si lo compro y no me convence?",
    a: "Tenés 30 días para pedir el reembolso completo, sin preguntas. Escribís a Hotmart, la plataforma de pago, y el proceso es directo. Conservás todo el material. No existe ningún riesgo para vos en probarlo."
  },
];

export const FAQSection = () => (
  <section className="py-14 md:py-20 bg-[#E8E6DF] text-[#1A1A1A]">
    <div className="container mx-auto px-5 max-w-3xl">
      <ScrollReveal>
        <div className="mb-10">
          <span className="font-mono-data text-[10px] font-medium uppercase tracking-[0.25em] text-[#CC5833] mb-3 block">
            PREGUNTAS FRECUENTES
          </span>
          <h2 className="font-editorial text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-3">
            Si todavía tenés dudas, acá van las respuestas.
          </h2>
          <p className="text-sm text-[#6B7260] font-light">
            Sin rodeos. Sin respuestas de marketing.
          </p>
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
