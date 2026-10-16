import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { InteractiveShowcase } from './InteractiveShowcase.tsx';

interface HeroProps {
  onOpenTrial: () => void;
  onOpenEditor: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrial, onOpenEditor }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-neutral-950">
      {/* Background radial gradient glow */}
      <div 
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" 
      />
      <div 
        className="absolute top-40 right-10 w-[500px] h-[350px] bg-purple-500/10 blur-[140px] rounded-full pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Headline & Value Proposition */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-medium mb-6 hover:border-neutral-700 transition-colors">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Version 1.0.0 is live</span>
            <span className="text-neutral-600">/</span>
            <span className="text-neutral-400">The Independent Modern Publishing Alternative</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 font-['Outfit',sans-serif] text-balance">
            Turn your audience <br className="hidden sm:inline" />
            into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">real business</span>.
          </h1>

          <p className="text-base sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-8">
            NexVora Publish is a powerful, modern platform for creators, independent journalists, and media publishers to publish editorial content, dispatch newsletters, and retain <span className="text-white font-medium">100% of their subscription revenue</span>.
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenTrial}
              className="w-full sm:w-auto px-7 py-3.5 text-base font-semibold text-neutral-950 bg-white hover:bg-neutral-100 rounded-xl transition-all shadow-xl shadow-white/5 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Start 14-day free trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenEditor}
              className="w-full sm:w-auto px-7 py-3.5 text-base font-medium text-neutral-200 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Explore Interactive Editor</span>
            </button>
          </div>

          {/* Social Proof & Trust Pillars adjacent to Hero */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-10 text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>0% Platform Take Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400 shrink-0" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Free 1-Click Migration</span>
            </div>
          </div>
        </div>

        {/* Live Interactive Showcase Component */}
        <div className="max-w-5xl mx-auto">
          <InteractiveShowcase onLaunchEditorModal={onOpenEditor} />
        </div>
      </div>
    </section>
  );
};
