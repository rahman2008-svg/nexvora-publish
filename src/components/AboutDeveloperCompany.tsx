import React, { useState } from 'react';
import { 
  User, Building2, Phone, MessageSquare, Facebook, Instagram, 
  ExternalLink, Copy, Check, Shield, Code, Cpu, Sparkles, Feather
} from 'lucide-react';

export const AboutDeveloperCompany: React.FC = () => {
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const handleCopy = (num: string) => {
    navigator.clipboard.writeText(num);
    setCopiedNumber(num);
    setTimeout(() => setCopiedNumber(null), 2000);
  };

  return (
    <section id="about" className="py-24 bg-neutral-900/70 border-t border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
            Leadership &amp; Engineering
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mt-2 mb-4 font-['Outfit',sans-serif]">
            About Developer &amp; Company
          </h2>
          <p className="text-base text-neutral-400">
            Meet the developer and creative engineering studio behind NexVora Publish and next-generation digital experiences.
          </p>
        </div>

        {/* 2-Column Grid: Developer & Company */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Card 1: About Developer */}
          <div className="bg-neutral-950 rounded-2xl border border-neutral-800 p-7 sm:p-9 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-neutral-800 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-md">
                  <User className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                    Lead Creator &amp; Engineer
                  </div>
                  <h3 className="text-2xl font-bold text-white font-['Outfit',sans-serif]">
                    Prince AR Abdur Rahman
                  </h3>
                  <div className="text-xs text-neutral-400">
                    Independent App Developer &amp; Software Craftsman
                  </div>
                </div>
              </div>

              {/* Developer Bio */}
              <div className="bg-neutral-900/70 rounded-xl p-5 border border-neutral-800/80 mb-6 text-sm text-neutral-300 leading-relaxed">
                Independent App Developer passionate about building modern Android applications, productivity tools, AI-powered experiences, media players, educational apps, and next-generation digital products.
              </div>

              {/* Direct Contacts */}
              <div className="space-y-3 mb-6">
                <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  Direct Contact &amp; Messaging
                </div>

                {/* WhatsApp 1 */}
                <div className="flex items-center justify-between p-3 bg-neutral-900 rounded-lg border border-neutral-800 hover:border-neutral-700 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-neutral-400">WhatsApp Primary</div>
                      <div className="text-xs font-mono text-white font-semibold">01707424006</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopy('01707424006')}
                      className="p-1.5 text-neutral-400 hover:text-white rounded hover:bg-neutral-800 transition-colors cursor-pointer"
                      title="Copy Number"
                    >
                      {copiedNumber === '01707424006' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <a
                      href="https://wa.me/8801707424006"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 text-xs bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/30 rounded font-medium flex items-center gap-1 transition-colors"
                    >
                      <span>Chat</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* WhatsApp 2 */}
                <div className="flex items-center justify-between p-3 bg-neutral-900 rounded-lg border border-neutral-800 hover:border-neutral-700 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-neutral-400">WhatsApp Secondary</div>
                      <div className="text-xs font-mono text-white font-semibold">01796951709</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopy('01796951709')}
                      className="p-1.5 text-neutral-400 hover:text-white rounded hover:bg-neutral-800 transition-colors cursor-pointer"
                      title="Copy Number"
                    >
                      {copiedNumber === '01796951709' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <a
                      href="https://wa.me/8801796951709"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 text-xs bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/30 rounded font-medium flex items-center gap-1 transition-colors"
                    >
                      <span>Chat</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap items-center gap-3">
              <a
                href="https://www.facebook.com/share/1BNn32qoJo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs text-neutral-200 rounded-lg transition-colors cursor-pointer"
              >
                <Facebook className="w-4 h-4 text-blue-400" />
                <span>Facebook Profile</span>
                <ExternalLink className="w-3 h-3 text-neutral-500" />
              </a>

              <a
                href="https://www.instagram.com/ur___abdur____rahman__2008"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs text-neutral-200 rounded-lg transition-colors cursor-pointer"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>Instagram Profile</span>
                <ExternalLink className="w-3 h-3 text-neutral-500" />
              </a>
            </div>
          </div>

          {/* Card 2: About Company & Mission */}
          <div className="bg-neutral-950 rounded-2xl border border-neutral-800 p-7 sm:p-9 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-neutral-800 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-md">
                  <Building2 className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-xs font-mono text-blue-400 uppercase tracking-wider">
                    Organization &amp; Publishing House
                  </div>
                  <h3 className="text-2xl font-bold text-white font-['Outfit',sans-serif]">
                    NexVora Lab&apos;s Ofc
                  </h3>
                  <div className="text-xs text-neutral-400">
                    Innovative Digital Products &amp; Software Studio
                  </div>
                </div>
              </div>

              {/* Company Focus */}
              <div className="bg-neutral-900/70 rounded-xl p-5 border border-neutral-800/80 mb-6 text-sm text-neutral-300 leading-relaxed">
                NexVora Lab&apos;s Ofc focuses on creating innovative Android applications designed to improve productivity, entertainment, learning, and digital experiences.
              </div>

              {/* Mission Statement */}
              <div className="p-5 bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-xl border border-neutral-800 mb-6 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Company Mission</span>
                </div>
                <p className="text-sm text-neutral-200 font-medium leading-relaxed">
                  &ldquo;Build fast, beautiful, privacy-friendly, and user-focused applications accessible to everyone.&rdquo;
                </p>
              </div>

              {/* Core Pillars */}
              <div className="grid grid-cols-2 gap-3 text-xs mb-6">
                <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800">
                  <div className="font-semibold text-white mb-0.5">Privacy First</div>
                  <div className="text-[11px] text-neutral-400">Zero non-consensual tracking or data brokerage.</div>
                </div>
                <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800">
                  <div className="font-semibold text-white mb-0.5">User-Centric</div>
                  <div className="text-[11px] text-neutral-400">Crafted with ergonomic aesthetics and speed.</div>
                </div>
              </div>
            </div>

            {/* Technical Information & Version */}
            <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap items-center justify-between text-xs text-neutral-400 gap-3">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-emerald-400" />
                <span>Technical Information:</span>
                <span className="font-mono text-white font-semibold px-2 py-0.5 bg-neutral-900 rounded border border-neutral-800">
                  Version: 1.0.0
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-500">
                <span>Production Release</span>
              </div>
            </div>
          </div>
        </div>

        {/* Credits Strip */}
        <div className="max-w-4xl mx-auto p-5 bg-neutral-950/80 rounded-xl border border-neutral-800/80 text-center space-y-1.5 text-xs">
          <div className="text-neutral-300 font-medium">
            Credits: Developed by <span className="text-white font-semibold">Prince AR Abdur Rahman</span> · Published by <span className="text-emerald-400 font-semibold">NexVora Lab&apos;s Ofc</span>
          </div>
          <div className="text-neutral-500 font-mono">
            © 2026 NexVora Lab&apos;s Ofc. All Rights Reserved
          </div>
        </div>
      </div>
    </section>
  );
};
