import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, Feather } from 'lucide-react';

interface NavbarProps {
  onOpenTrial: () => void;
  onOpenSignIn: () => void;
  onOpenEditor: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenTrial,
  onOpenSignIn,
  onOpenEditor,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 border-b ${
          scrolled
            ? 'bg-neutral-950/85 backdrop-blur-md border-neutral-800/80 shadow-lg shadow-black/20'
            : 'bg-neutral-950/40 backdrop-blur-sm border-neutral-800/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
          {/* Zone 1: Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-neutral-100 hover:text-white transition-colors group whitespace-nowrap shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700/80 flex items-center justify-center text-white shadow-sm group-hover:border-neutral-500 transition-colors">
              <Feather className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white font-['Outfit',sans-serif]">
                NexVora <span className="text-emerald-400 font-semibold">Publish</span>
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
            <button
              onClick={() => scrollToSection('features')}
              className="hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              Publishing
            </button>
            <button
              onClick={() => scrollToSection('newsletters')}
              className="hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              Newsletters
            </button>
            <button
              onClick={() => scrollToSection('memberships')}
              className="hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              Memberships
            </button>
            <button
              onClick={() => scrollToSection('calculator')}
              className="hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              Earnings Calculator
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('themes')}
              className="hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              Themes
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              About
            </button>
          </nav>

          {/* Zone 3: Actions */}
          <div className="flex items-center gap-3.5 shrink-0">
            <button
              onClick={onOpenSignIn}
              className="hidden sm:inline-block text-sm font-medium text-neutral-300 hover:text-white transition-colors px-3 py-2 cursor-pointer whitespace-nowrap shrink-0"
            >
              Sign In
            </button>
            <button
              onClick={onOpenTrial}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-neutral-950 bg-white hover:bg-neutral-100 rounded-lg transition-all duration-150 shadow-sm cursor-pointer whitespace-nowrap shrink-0 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-400 hover:text-white transition-colors rounded-lg hover:bg-neutral-900 cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-neutral-950/95 backdrop-blur-xl flex flex-col pt-20 px-6 pb-8 border-b border-neutral-800">
          <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
            <span className="text-lg font-bold text-white font-['Outfit',sans-serif]">
              NexVora <span className="text-emerald-400">Publish</span>
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-900"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col gap-4 py-6 text-base font-medium text-neutral-300">
            <button
              onClick={() => scrollToSection('features')}
              className="text-left py-2 hover:text-white border-b border-neutral-900"
            >
              Publishing & Editor
            </button>
            <button
              onClick={() => scrollToSection('newsletters')}
              className="text-left py-2 hover:text-white border-b border-neutral-900"
            >
              Newsletters & Delivery
            </button>
            <button
              onClick={() => scrollToSection('memberships')}
              className="text-left py-2 hover:text-white border-b border-neutral-900"
            >
              Memberships & Paywalls
            </button>
            <button
              onClick={() => scrollToSection('calculator')}
              className="text-left py-2 hover:text-white border-b border-neutral-900"
            >
              Revenue Calculator
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-left py-2 hover:text-white border-b border-neutral-900"
            >
              Pricing & Plans
            </button>
            <button
              onClick={() => scrollToSection('themes')}
              className="text-left py-2 hover:text-white border-b border-neutral-900"
            >
              Themes & Showcase
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left py-2 hover:text-white border-b border-neutral-900"
            >
              About Developer & Company
            </button>
          </div>
          <div className="mt-auto flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEditor();
              }}
              className="w-full py-3 text-sm font-semibold text-neutral-200 bg-neutral-900 border border-neutral-800 rounded-lg hover:bg-neutral-800 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Launch Live Editor Sandbox</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrial();
              }}
              className="w-full py-3 text-sm font-semibold text-neutral-950 bg-white rounded-lg hover:bg-neutral-100 flex items-center justify-center gap-2"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSignIn();
              }}
              className="w-full py-2.5 text-sm font-medium text-neutral-400 hover:text-white text-center"
            >
              Sign In to Existing Account
            </button>
          </div>
        </div>
      )}
    </>
  );
};
