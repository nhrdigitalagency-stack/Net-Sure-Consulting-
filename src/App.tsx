import React, { useState } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { FullpageContainer } from './components/FullpageContainer';
import { HeroFrame } from './frames/HeroFrame';
import { PresentationFrame } from './frames/PresentationFrame';
import { ServicesFrame } from './frames/ServicesFrame';
import { DifferenciatorsFrame } from './frames/DifferenciatorsFrame';
import { PricingFrame } from './frames/PricingFrame';
import { ConsultingFrame } from './frames/ConsultingFrame';
import { TrainingFrame } from './frames/TrainingFrame';
import { InfrastructureFrame } from './frames/InfrastructureFrame';
import { AboutFrame } from './frames/AboutFrame';
import { CareersFrame } from './frames/CareersFrame';
import { ContactFrame } from './frames/ContactFrame';
import { EligibilityModal } from './components/EligibilityModal';
import { JobModal } from './components/JobModal';
import { CguModal } from './components/CguModal';
import { CookiePolicyModal } from './components/CookiePolicyModal';
import { CookieBanner } from './components/CookieBanner';
import { FloatingSupport } from './components/FloatingSupport';

function MainApp() {
  const [activeFrame, setActiveFrame] = useState(1);
  const [isEligibilityOpen, setIsEligibilityOpen] = useState(false);
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [isCguOpen, setIsCguOpen] = useState(false);
  const [isCookiePolicyOpen, setIsCookiePolicyOpen] = useState(false);

  // Cross-frame preselection state
  const [selectedOfferPreset, setSelectedOfferPreset] = useState<string>('');
  const [diagnosticNote, setDiagnosticNote] = useState<string>('');

  const navigateToFrame = (frameIndex: number) => {
    const el = document.getElementById(`frame-${frameIndex}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveFrame(frameIndex);
    }
  };

  const handleSelectPackage = (packageName: string) => {
    setSelectedOfferPreset(packageName);
    navigateToFrame(11);
  };

  const handleTransferDiagnostic = (data: {
    activity: string;
    location: string;
    status: string;
    recommendation: string;
  }) => {
    const note = `[Diagnostic Éligibilité Maps]\n- Activité : ${data.activity}\n- Localisation : ${data.location}\n- Présence actuelle : ${data.status}\n- Recommandation NSC : Top 3 Maps sous 90 jours.`;
    setDiagnosticNote(note);
    setSelectedOfferPreset('Pack SEO Premium (649 € HT / an)');
    navigateToFrame(11);
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#090A0B] text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      {/* 3-Zone Header */}
      <Header
        activeFrame={activeFrame}
        onNavigate={navigateToFrame}
        onOpenEligibility={() => setIsEligibilityOpen(true)}
      />

      {/* 11-Frame Fullpage Snap Container */}
      <FullpageContainer activeFrame={activeFrame} setActiveFrame={setActiveFrame}>
        <HeroFrame
          onOpenEligibility={() => setIsEligibilityOpen(true)}
          onNavigateToContact={() => navigateToFrame(11)}
          onNextFrame={() => navigateToFrame(2)}
        />
        <PresentationFrame onNavigateToContact={() => navigateToFrame(11)} />
        <ServicesFrame onNavigateToFrame={navigateToFrame} />
        <DifferenciatorsFrame onNavigateToPricing={() => navigateToFrame(5)} />
        <PricingFrame onSelectPackage={handleSelectPackage} />
        <ConsultingFrame onNavigateToContact={() => navigateToFrame(11)} />
        <TrainingFrame onNavigateToContact={() => navigateToFrame(11)} />
        <InfrastructureFrame onNavigateToContact={() => navigateToFrame(11)} />
        <AboutFrame onNavigateToContact={() => navigateToFrame(11)} />
        <CareersFrame onOpenJobModal={() => setIsJobModalOpen(true)} />
        <ContactFrame
          selectedOfferPreset={selectedOfferPreset}
          diagnosticNote={diagnosticNote}
          onOpenCgu={() => setIsCguOpen(true)}
          onOpenCookiePolicy={() => setIsCookiePolicyOpen(true)}
        />
      </FullpageContainer>

      {/* Floating Interactive Client Support */}
      <FloatingSupport
        onQuickAction={(action) => {
          if (action === 'audit') {
            setIsEligibilityOpen(true);
          } else {
            navigateToFrame(11);
          }
        }}
      />

      {/* Cookie Consent Banner */}
      <CookieBanner onOpenPreferences={() => setIsCookiePolicyOpen(true)} />

      {/* Interactive Overlays */}
      <EligibilityModal
        isOpen={isEligibilityOpen}
        onClose={() => setIsEligibilityOpen(false)}
        onTransferToContact={handleTransferDiagnostic}
      />

      <JobModal
        isOpen={isJobModalOpen}
        onClose={() => setIsJobModalOpen(false)}
      />

      <CguModal
        isOpen={isCguOpen}
        onClose={() => setIsCguOpen(false)}
      />

      <CookiePolicyModal
        isOpen={isCookiePolicyOpen}
        onClose={() => setIsCookiePolicyOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <MainApp />
      </LanguageProvider>
    </ThemeProvider>
  );
}
