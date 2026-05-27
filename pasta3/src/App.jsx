import React, { useState, useEffect, useRef, Suspense } from 'react';
import { globalStyles } from './styles/globalStyles';
import { trackViewContent } from './utils/analytics';

import { HeroSection } from './components/sections/HeroSection';
import { CheckoutModal } from './components/features/CheckoutModal';

const lazyNamed = (importFunc, name) => React.lazy(() =>
  importFunc().then(module => ({ default: module[name] }))
);

const WhatYouGetSection    = lazyNamed(() => import('./components/sections/WhatYouGetSection'), 'WhatYouGetSection');
const BonusesSection       = lazyNamed(() => import('./components/sections/BonusesSection'), 'BonusesSection');
const SocialProofSection   = lazyNamed(() => import('./components/sections/SocialProofSection'), 'SocialProofSection');
const OfferPricingSection  = lazyNamed(() => import('./components/sections/OfferPricingSection'), 'OfferPricingSection');
const GuaranteeSection     = lazyNamed(() => import('./components/sections/GuaranteeSection'), 'GuaranteeSection');
const FAQSection           = lazyNamed(() => import('./components/sections/FAQSection'), 'FAQSection');
const Footer               = lazyNamed(() => import('./components/layout/Footer'), 'Footer');
const SpeedInsights        = lazyNamed(() => import('@vercel/speed-insights/react'), 'SpeedInsights');

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => { trackViewContent(); }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(`${(totalScroll / windowHeight) * 100}%`);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <div id="scroll-progress" style={{ width: scrollProgress }} />

      <HeroSection />

      <Suspense fallback={<div className="h-10" />}>
        <WhatYouGetSection />
        <BonusesSection />
        <SocialProofSection />
        <OfferPricingSection />
        <GuaranteeSection />
        <FAQSection />
        <Footer />
        <SpeedInsights />
      </Suspense>

      <CheckoutModal />
    </div>
  );
}
