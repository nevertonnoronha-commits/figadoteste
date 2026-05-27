import React, { useState, useEffect, useRef, Suspense } from 'react';
import { trackViewContent } from './utils/analytics';

import { StickyUrgencyBar } from './components/sections/StickyUrgencyBar';
import { HeroSection } from './components/sections/HeroSection';
import { MarqueeBanner } from './components/sections/MarqueeBanner';

const lazyNamed = (importFunc, name) => React.lazy(() =>
  importFunc().then(module => ({ default: module[name] }))
);

const PainPointsSection     = lazyNamed(() => import('./components/sections/PainPointsSection'),     'PainPointsSection');
const MechanismSection      = lazyNamed(() => import('./components/sections/MechanismSection'),      'MechanismSection');
const SocialProofSection    = lazyNamed(() => import('./components/sections/SocialProofSection'),    'SocialProofSection');
const OfferPricingSection   = lazyNamed(() => import('./components/sections/OfferPricingSection'),   'OfferPricingSection');
const CharitySection        = lazyNamed(() => import('./components/sections/CharitySection'),        'CharitySection');
const GuaranteeSection      = lazyNamed(() => import('./components/sections/GuaranteeSection'),      'GuaranteeSection');
const FAQSection            = lazyNamed(() => import('./components/sections/FAQSection'),            'FAQSection');
const FinalCTASection       = lazyNamed(() => import('./components/sections/FinalCTASection'),       'FinalCTASection');
const Footer                = lazyNamed(() => import('./components/layout/Footer'),                  'Footer');
const AIChatWidget          = lazyNamed(() => import('./components/features/AIChatWidget'),          'AIChatWidget');
const SpeedInsights         = lazyNamed(() => import('@vercel/speed-insights/react'),                'SpeedInsights');

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: 'model', text: '¡Hola! Soy tu asesora virtual de Naturale. ¿Tienes alguna duda sobre el Protocolo NATURALE o cómo puede ayudarte con el hígado graso?' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, isChatOpen]);

  const handleSendChat = async (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput.trim();
    setChatMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setChatInput('');
    setIsChatLoading(true);

    try {
      const apiKey = "";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;

      const systemInstruction = "Eres un asistente virtual experto y amable para 'Naturale', una guía creada por la Dra. Elinna Novaz para personas con hígado graso. Tu objetivo es resolver dudas del producto y animar a la compra (USD $17.99, pago único). No des consejos médicos, sugiere consultar a un profesional para casos graves. Responde de forma concisa (máximo 2 párrafos cortos), empática y directa.";

      const formattedHistory = chatMessages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      }));
      formattedHistory.push({ role: 'user', parts: [{ text: userMsg }] });

      const payload = {
        contents: formattedHistory,
        systemInstruction: { parts: [{ text: systemInstruction }] }
      };

      let delay = 1000;
      let data = null;
      const maxRetries = 3;

      for (let i = 0; i < maxRetries; i++) {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (response.status === 429) {
          await new Promise(r => setTimeout(r, delay));
          delay *= 2;
          continue;
        }

        if (!response.ok) throw new Error("HTTP Error");
        data = await response.json();
        break;
      }

      if (data && data.candidates && data.candidates[0].content) {
        const aiReply = data.candidates[0].content.parts[0].text;
        setChatMessages(prev => [...prev, { role: 'model', text: aiReply }]);
      } else {
        throw new Error("Invalid response");
      }
    } catch {
      setChatMessages(prev => [...prev, { role: 'model', text: 'Hubo un error al procesar tu mensaje. Por favor, intenta de nuevo.' }]);
    } finally {
      setIsChatLoading(false);
    }
  };

  useEffect(() => { trackViewContent(); }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}%`;
      setScrollProgress(scroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative selection:bg-[#e2b764] selection:text-[#04100b]">
      <div id="scroll-progress" style={{ width: scrollProgress }} />

      <StickyUrgencyBar />
      <HeroSection />
      <MarqueeBanner />

      <Suspense fallback={<div className="h-10" />}>
        <PainPointsSection />
        <MechanismSection />
        <SocialProofSection />
        <OfferPricingSection />
        <CharitySection />
        <GuaranteeSection />
        <FAQSection />
        <FinalCTASection />
        <Footer />

        <AIChatWidget
          isChatOpen={isChatOpen}
          setIsChatOpen={setIsChatOpen}
          chatMessages={chatMessages}
          chatInput={chatInput}
          setChatInput={setChatInput}
          isChatLoading={isChatLoading}
          chatEndRef={chatEndRef}
          handleSendChat={handleSendChat}
        />
        <SpeedInsights />
      </Suspense>
    </div>
  );
}
