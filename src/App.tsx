import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { RevenueCalculator } from './components/RevenueCalculator.tsx';
import { Capabilities } from './components/Capabilities.tsx';
import { ThemesShowcase } from './components/ThemesShowcase.tsx';
import { Pricing } from './components/Pricing.tsx';
import { AboutDeveloperCompany } from './components/AboutDeveloperCompany.tsx';
import { FAQ } from './components/FAQ.tsx';
import { Footer } from './components/Footer.tsx';
import { EditorModal } from './components/EditorModal.tsx';
import { OnboardingModal } from './components/OnboardingModal.tsx';
import { SignInModal } from './components/SignInModal.tsx';
import { ThemePreviewModal } from './components/ThemePreviewModal.tsx';
import { PricingPlan, ShowcaseTheme } from './types/index.ts';

export default function App() {
  const [editorOpen, setEditorOpen] = useState(false);
  const [trialOpen, setTrialOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [selectedPlanForTrial, setSelectedPlanForTrial] = useState<PricingPlan | null>(null);
  const [previewTheme, setPreviewTheme] = useState<ShowcaseTheme | null>(null);

  const handleOpenTrialWithPlan = (plan: PricingPlan) => {
    setSelectedPlanForTrial(plan);
    setTrialOpen(true);
  };

  const handleUseThemeFromPreview = (theme: ShowcaseTheme) => {
    setPreviewTheme(null);
    setTrialOpen(true);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Navigation */}
      <Navbar
        onOpenTrial={() => setTrialOpen(true)}
        onOpenSignIn={() => setSignInOpen(true)}
        onOpenEditor={() => setEditorOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero with Ghost-style live interactive product canvas */}
        <Hero
          onOpenTrial={() => setTrialOpen(true)}
          onOpenEditor={() => setEditorOpen(true)}
        />

        {/* Famous Ghost 0% Commission Revenue Calculator */}
        <RevenueCalculator
          onOpenTrial={() => setTrialOpen(true)}
        />

        {/* Core Capabilities / Publishing Stack */}
        <Capabilities
          onOpenTrial={() => setTrialOpen(true)}
          onOpenEditor={() => setEditorOpen(true)}
        />

        {/* Themes Showcase Gallery */}
        <ThemesShowcase
          onSelectTheme={(theme) => setPreviewTheme(theme)}
          onOpenTrial={() => setTrialOpen(true)}
        />

        {/* Flat Transparent Pricing */}
        <Pricing
          onSelectPlan={handleOpenTrialWithPlan}
        />

        {/* Dedicated About Developer & Company Section */}
        <AboutDeveloperCompany />

        {/* Frequently Answered Questions */}
        <FAQ />
      </main>

      {/* Footer with Credits, Technical Info & Contacts */}
      <Footer
        onOpenTrial={() => setTrialOpen(true)}
        onOpenSignIn={() => setSignInOpen(true)}
        onOpenEditor={() => setEditorOpen(true)}
      />

      {/* Interactive Modals */}
      <EditorModal
        isOpen={editorOpen}
        onClose={() => setEditorOpen(false)}
      />

      <OnboardingModal
        isOpen={trialOpen}
        onClose={() => setTrialOpen(false)}
        initialPlan={selectedPlanForTrial}
        onCompleteToEditor={() => setEditorOpen(true)}
      />

      <SignInModal
        isOpen={signInOpen}
        onClose={() => setSignInOpen(false)}
        onSuccess={() => {
          setSignInOpen(false);
          setEditorOpen(true);
        }}
      />

      <ThemePreviewModal
        theme={previewTheme}
        onClose={() => setPreviewTheme(null)}
        onUseTheme={handleUseThemeFromPreview}
      />
    </div>
  );
}
