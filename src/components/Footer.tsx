import React from 'react';
import { Feather, Heart, ExternalLink, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenTrial: () => void;
  onOpenSignIn: () => void;
  onOpenEditor: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenTrial,
  onOpenSignIn,
  onOpenEditor,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 text-xs">
      {/* Pre-footer Call to Action */}
      <div className="border-b border-neutral-800/80 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-['Outfit',sans-serif]">
            Ready to build a real publishing business?
          </h3>
          <p className="text-neutral-400 text-sm max-w-xl mx-auto">
            Join thousands of independent journalists, creators, and media companies who own their content and keep 100% of their revenue.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenTrial}
              className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-neutral-100 text-neutral-950 font-semibold rounded-lg text-sm transition-all cursor-pointer shadow-md"
            >
              Start 14-day free trial
            </button>
            <button
              onClick={onOpenEditor}
              className="w-full sm:w-auto px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-800 rounded-lg text-sm font-medium transition-all cursor-pointer"
            >
              Test Live Editor
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Col 1: Brand */}
          <div className="col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5 text-white">
              <div className="w-7 h-7 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center">
                <Feather className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <span className="text-base font-bold tracking-tight font-['Outfit',sans-serif]">
                NexVora <span className="text-emerald-400">Publish</span>
              </span>
            </a>
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              An independent, modern publishing platform engineered for content creators, newsletters, and memberships with 0% transaction commissions.
            </p>
            <div className="flex items-center gap-2 pt-2 text-[11px] font-mono text-neutral-500">
              <span>Platform Build</span>
              <span>·</span>
              <span className="text-white bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
                Version 1.0.0
              </span>
            </div>
          </div>

          {/* Col 2: Product */}
          <div className="space-y-3">
            <div className="text-white font-semibold text-xs uppercase tracking-wider">Product</div>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollTo('features')} className="hover:text-white transition-colors cursor-pointer">
                  Card Editor
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('newsletters')} className="hover:text-white transition-colors cursor-pointer">
                  Newsletters
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('memberships')} className="hover:text-white transition-colors cursor-pointer">
                  Memberships
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('calculator')} className="hover:text-white transition-colors cursor-pointer">
                  Earnings Calculator
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('pricing')} className="hover:text-white transition-colors cursor-pointer">
                  Pricing &amp; Plans
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div className="space-y-3">
            <div className="text-white font-semibold text-xs uppercase tracking-wider">Resources</div>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollTo('themes')} className="hover:text-white transition-colors cursor-pointer">
                  Theme Directory
                </button>
              </li>
              <li>
                <button onClick={onOpenEditor} className="hover:text-white transition-colors cursor-pointer">
                  Live Editor Demo
                </button>
              </li>
              <li>
                <a href="#about" onClick={() => scrollTo('about')} className="hover:text-white transition-colors">
                  Creator Migration
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => scrollTo('about')} className="hover:text-white transition-colors">
                  Stripe Setup Guide
                </a>
              </li>
              <li>
                <button onClick={onOpenSignIn} className="hover:text-white transition-colors cursor-pointer">
                  Account Sign In
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Developer & Company */}
          <div className="space-y-3">
            <div className="text-white font-semibold text-xs uppercase tracking-wider">Creator &amp; Company</div>
            <ul className="space-y-2">
              <li>
                <span className="text-neutral-300 font-medium block">Prince AR Abdur Rahman</span>
                <span className="text-[11px] text-neutral-500">Independent Developer</span>
              </li>
              <li>
                <a 
                  href="https://wa.me/8801707424006" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-400 flex items-center gap-1"
                >
                  <span>WhatsApp: 01707424006</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/8801796951709" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-400 flex items-center gap-1"
                >
                  <span>WhatsApp: 01796951709</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.facebook.com/share/1BNn32qoJo/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 flex items-center gap-1"
                >
                  <span>Facebook Profile</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/ur___abdur____rahman__2008" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-pink-400 flex items-center gap-1"
                >
                  <span>Instagram Profile</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li className="pt-1">
                <span className="text-white font-semibold block">NexVora Lab&apos;s Ofc</span>
                <span className="text-[11px] text-neutral-500">Innovative Android &amp; Web Apps</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Credits Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            Developed by <span className="text-neutral-300 font-medium">Prince AR Abdur Rahman</span> · Published by <span className="text-neutral-300 font-medium">NexVora Lab&apos;s Ofc</span>
          </div>
          <div className="font-mono text-center md:text-right">
            © 2026 NexVora Lab&apos;s Ofc. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};
