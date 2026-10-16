import React, { useState } from 'react';
import { 
  FileText, Mail, CreditCard, Sparkles, Zap, Layers, 
  ArrowRight, ShieldCheck, Check, Code2, Globe, HeartHandshake
} from 'lucide-react';

export const Capabilities: React.FC<{ onOpenTrial: () => void; onOpenEditor: () => void }> = ({
  onOpenTrial,
  onOpenEditor,
}) => {
  const [activeTier, setActiveTier] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="features" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
            Complete Publishing Stack
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mt-2 mb-4 font-['Outfit',sans-serif]">
            Everything modern creators need to publish, send, and monetize.
          </h2>
          <p className="text-base text-neutral-400">
            Engineered from first principles for independent publications, journalism newsrooms, and solo writers who refuse to compromise on design or data ownership.
          </p>
        </div>

        {/* Feature 01: Rich Card Editor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono text-neutral-500">01. Editorial Experience</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-['Outfit',sans-serif]">
              A distraction-free writing environment that stays out of your way.
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              No clutter, no endless sidebars. Use dynamic card insertion to drop in markdown, image galleries, paywall splits, code snippets with syntax highlighting, and responsive bookmarks seamlessly.
            </p>
            <ul className="space-y-2.5 text-xs text-neutral-300 pt-2">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Card-based dynamic slash menu (&quot;/&quot;)</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Automatic SEO tags, structured schema &amp; social previews</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Instant drag-and-drop media &amp; responsive galleries</span>
              </li>
            </ul>
            <div className="pt-2">
              <button
                onClick={onOpenEditor}
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
              >
                <span>Try the live editor sandbox</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 bg-neutral-900 rounded-2xl border border-neutral-800 p-6 sm:p-8 shadow-xl">
            <div className="bg-neutral-950 rounded-xl border border-neutral-800 p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <span className="text-xs font-medium text-neutral-400">Post Editor Preview</span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  Live Markdown
                </span>
              </div>
              <h4 className="text-xl font-bold text-white font-['Outfit',sans-serif]">
                The Architecture of Modern Digital Media
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Publishing on the web used to be open. Now, large social aggregators determine what gets distributed. By deploying your own sovereign media hub, your distribution is permanently guaranteed.
              </p>
              <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5 text-neutral-300">
                  <div className="w-7 h-7 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                    /
                  </div>
                  <div>
                    <div className="font-semibold text-white">Slash Menu Activated</div>
                    <div className="text-[11px] text-neutral-500">Insert Card: Image, Gallery, Paywall, Code, Button</div>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-neutral-400">ESC to dismiss</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 02: Native Newsletters & Email */}
        <div id="newsletters" className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1 bg-neutral-900 rounded-2xl border border-neutral-800 p-6 sm:p-8 shadow-xl">
            <div className="bg-neutral-950 rounded-xl border border-neutral-800 p-5 space-y-3">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3 text-xs">
                <span className="text-neutral-400">Audience Segmentation</span>
                <span className="text-neutral-300 font-mono">18,450 Free · 3,120 Paid</span>
              </div>
              <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Weekly Editorial Briefing #108</div>
                    <div className="text-[11px] text-neutral-500">Sent Oct 12 · 62.4% Open Rate</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-400 font-semibold">Delivered</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center pt-2">
                <div className="p-2 bg-neutral-900/60 rounded border border-neutral-800/80">
                  <div className="text-[10px] text-neutral-500">Spam Complaint</div>
                  <div className="text-xs font-mono font-bold text-white">0.01%</div>
                </div>
                <div className="p-2 bg-neutral-900/60 rounded border border-neutral-800/80">
                  <div className="text-[10px] text-neutral-500">Click Rate</div>
                  <div className="text-xs font-mono font-bold text-emerald-400">22.8%</div>
                </div>
                <div className="p-2 bg-neutral-900/60 rounded border border-neutral-800/80">
                  <div className="text-[10px] text-neutral-500">New Paid Subs</div>
                  <div className="text-xs font-mono font-bold text-purple-400">+48</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
            <span className="text-xs font-mono text-neutral-500">02. Native Newsletters</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-['Outfit',sans-serif]">
              Publish once. Send to web and inboxes simultaneously.
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Forget integrating messy third-party newsletter tools like Mailchimp. In NexVora Publish, every article can be delivered straight to your readers' email inboxes with one click, beautiful typography, and zero styling breakage.
            </p>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Custom sending domain support (e.g. newsletter.yourbrand.com)</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Segment broadcasts to Free members, Paid tiers, or VIPs</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Built-in open, click, and unsubscribe tracking</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Feature 03: Memberships & Paywalls */}
        <div id="memberships" className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono text-neutral-500">03. Subscriptions & Paywalls</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-['Outfit',sans-serif]">
              Turn occasional readers into recurring monthly revenue.
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Launch subscription tiers in minutes. With deep Stripe Connect integration, you collect payments directly in 135+ currencies without paying a dime in platform commissions.
            </p>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Multiple member tiers with custom perks &amp; access</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Granular paywalls: Free, Members-Only, or Paid-Only</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Complimentary passes, gift subscriptions &amp; promo discounts</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7 bg-neutral-900 rounded-2xl border border-neutral-800 p-6 sm:p-8 shadow-xl">
            <div className="bg-neutral-950 rounded-xl border border-neutral-800 p-6 space-y-5">
              <div className="flex justify-between items-center pb-3 border-b border-neutral-800">
                <span className="text-xs font-semibold text-white">Membership Tier Configuration</span>
                <span className="text-xs font-mono text-emerald-400">Stripe Connected ✓</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800">
                  <div className="text-neutral-500">Standard Tier</div>
                  <div className="text-base font-bold text-white mt-1">$7 / month</div>
                  <div className="text-[11px] text-neutral-400 mt-1">Full archive access</div>
                </div>
                <div className="p-3 bg-neutral-900 rounded-lg border border-purple-500/40">
                  <div className="text-purple-400">Founder&apos;s Circle</div>
                  <div className="text-base font-bold text-white mt-1">$25 / month</div>
                  <div className="text-[11px] text-neutral-400 mt-1">Private calls + community</div>
                </div>
              </div>
              <div className="p-3 bg-purple-950/20 border border-purple-500/30 rounded-lg flex items-center justify-between text-xs">
                <span className="text-purple-300">NexVora Platform Fee</span>
                <span className="font-mono font-bold text-white">$0.00 / 0.0%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 3-Card Technical Rigor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-6 bg-neutral-900/60 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-1.5">Lighting Fast Performance</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Built on a high-throughput modern architecture that renders in sub-100ms. Tested to withstand sudden traffic surges from front-page Hacker News and viral newsletters.
            </p>
          </div>

          <div className="p-6 bg-neutral-900/60 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
              <Code2 className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-1.5">Developer Headless API</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Full GraphQL &amp; REST Content and Admin APIs. Build custom frontends in Next.js, Remix, Astro, or native Android &amp; iOS mobile apps seamlessly.
            </p>
          </div>

          <div className="p-6 bg-neutral-900/60 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
              <Globe className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-1.5">Permanent Data Ownership</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Your subscribers, your articles, your members. Export all JSON data, member emails, and media assets anytime with 1-click without lock-in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
