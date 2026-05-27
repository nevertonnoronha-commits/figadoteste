import React, { useState, useEffect, useRef, Suspense } from 'react';
import { globalStyles } from './styles/globalStyles';
import { trackViewContent } from './utils/analytics';

import { StickyUrgencyBar } from './components/sections/StickyUrgencyBar';
import { MarqueeBanner } from './components/sections/MarqueeBanner';
import { HeroSection } from './components/sections/HeroSection';
import { EditorialCoverageSection } from './components/sections/EditorialCoverageSection';
import { CheckoutModal } from './components/features/CheckoutModal';
import { Navbar } from './components/layout/Navbar';

// Implementando Code Splitting / Lazy Loading para seções abaixo da dobra principal (Alívio de TTI)
const lazyNamed = (importFunc, name) => React.lazy(() => 
  importFunc().then(module => ({ default: module[name] }))
);

const MediaTrustSection = lazyNamed(() => import('./components/sections/MediaTrustSection'), 'MediaTrustSection');
const PainPointsSection = lazyNamed(() => import('./components/sections/PainPointsSection'), 'PainPointsSection');
const TransformationSection = lazyNamed(() => import('./components/sections/TransformationSection'), 'TransformationSection');
const MechanismSection = lazyNamed(() => import('./components/sections/MechanismSection'), 'MechanismSection');
const ExpertSection = lazyNamed(() => import('./components/sections/ExpertSection'), 'ExpertSection');
const BenefitsSection = lazyNamed(() => import('./components/sections/BenefitsSection'), 'BenefitsSection');
const DetailedContentSection = lazyNamed(() => import('./components/sections/DetailedContentSection'), 'DetailedContentSection');
const BonusesSection = lazyNamed(() => import('./components/sections/BonusesSection'), 'BonusesSection');
const OfferPricingSection = lazyNamed(() => import('./components/sections/OfferPricingSection'), 'OfferPricingSection');
const GuaranteeSection = lazyNamed(() => import('./components/sections/GuaranteeSection'), 'GuaranteeSection');
const SocialProofSection = lazyNamed(() => import('./components/sections/SocialProofSection'), 'SocialProofSection');
const AccessDeliverySection = lazyNamed(() => import('./components/sections/AccessDeliverySection'), 'AccessDeliverySection');
const FAQSection = lazyNamed(() => import('./components/sections/FAQSection'), 'FAQSection');
const FinalCTASection = lazyNamed(() => import('./components/sections/FinalCTASection'), 'FinalCTASection');
const Footer = lazyNamed(() => import('./components/layout/Footer'), 'Footer');
const SocialProofPopup = lazyNamed(() => import('./components/features/SocialProofPopup'), 'SocialProofPopup');
const AIChatWidget = lazyNamed(() => import('./components/features/AIChatWidget'), 'AIChatWidget');
const SpeedInsights = lazyNamed(() => import('@vercel/speed-insights/react'), 'SpeedInsights');

export default function App() {
  const [timeLeft, setTimeLeft] = useState({ h: 1, m: 32, s: 31 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: 'model', text: '¡Hola! Soy tu asesora virtual de Naturale. ¿Tienes alguna duda sobre la guía de recetas o la oferta del 85% OFF de hoy?' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Auto-scroll chat to bottom
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

      const systemInstruction = "Eres un asistente virtual experto y amable para 'Naturale', una guía de recetas creada por la Dra. Elinna Novaz para sanar el hígado graso. Tu objetivo es resolver dudas del producto y animar a la compra (hoy a $17.99 con 85% OFF). No des consejos médicos, sugiere consultar a un profesional para casos graves, pero resalta que la nutrición de Naturale es el primer paso ideal. Responde de forma concisa (máximo 2 párrafos cortos), empática y persuasiva. Usa viñetas si es necesario.";

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
    } catch (error) {
      setChatMessages(prev => [...prev, { role: 'model', text: 'Hubo un error de conexión al procesar tu mensaje. Por favor, intenta de nuevo.' }]);
    } finally {
      setIsChatLoading(false);
    }
  };

  // ViewContent — dispara uma vez quando a página carrega
  useEffect(() => { trackViewContent(); }, []);

  // Timer logic with LocalStorage persistency
  useEffect(() => {
    const savedTime = localStorage.getItem('naturale_timer');
    if (savedTime) {
      setTimeLeft(JSON.parse(savedTime));
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { h, m, s } = prev;
        if (s > 0) s--;
        else {
          s = 59;
          if (m > 0) m--;
          else { m = 59; h--; }
        }
        const newTime = { h, m, s };
        localStorage.setItem('naturale_timer', JSON.stringify(newTime));
        return newTime;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Scroll Progress logic
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

  // Popup logic (Social Proof)
  useEffect(() => {
    const timeout = setTimeout(() => setShowPopup(true), 15000);
    const hideTimeout = setTimeout(() => setShowPopup(false), 25000);
    return () => { clearTimeout(timeout); clearTimeout(hideTimeout); };
  }, []);

  return (
    <div className="relative">
      <div id="scroll-progress" style={{ width: scrollProgress }}></div>

      {/* Floating pill navbar (GEMINI spec) */}
      <Navbar />

      {/* Componentes da Dobra Principal com Carregamento Eager/Imediato */}
      <StickyUrgencyBar timeLeft={timeLeft} />
      <HeroSection />
      <MarqueeBanner />

      {/* Componentes abaixo da dobra sob demanda (Suspense / Code Splitting) */}
      <Suspense fallback={<div className="h-10" />}>
        <PainPointsSection />
        <TransformationSection />
        <MechanismSection />
        <ExpertSection />
        <MediaTrustSection />
        <BenefitsSection />
        <DetailedContentSection />
        <BonusesSection />
        <OfferPricingSection />
        <GuaranteeSection />
        <SocialProofSection />
        <EditorialCoverageSection />
        <AccessDeliverySection />
        <FAQSection />
        <FinalCTASection />
        <Footer />

        <SocialProofPopup showPopup={showPopup} setShowPopup={setShowPopup} />

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

      <CheckoutModal />
    </div>
  );
}
