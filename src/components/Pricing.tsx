import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';
import { PricingPlan } from '../types/index.ts';

interface PricingProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [audienceScale, setAudienceScale] = useState<number>(1000);

  // Audience multipliers
  const scaleMultiplier = audienceScale <= 1000 ? 1 : audienceScale <= 5000 ? 1.8 : audienceScale <= 10000 ? 3.2 : 5;

  const plans: PricingPlan[] = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Ideal for solo writers launching their first paid newsletter or blog.',
      monthlyPrice: Math.round(11 * (audienceScale <= 1000 ? 1 : 1.5)),
      annualPrice: Math.round(9 * (audienceScale <= 1000 ? 1 : 1.5)),
      memberLimit: `Up to ${audienceScale.toLocaleString()} members`,
      features: [
        '0% platform commission',
        'Standard editorial rich editor',
        'Official curated themes',
        'Built-in email newsletters',
        'SSL certificate & custom domain',
        'Standard CDN delivery',
      ],
    },
    {
      id: 'creator',
      name: 'Creator',
      description: 'For growing publications and independent creators scaling their audience.',
      monthlyPrice: Math.round(31 * scaleMultiplier),
      annualPrice: Math.round(25 * scaleMultiplier),
      highlight: true,
      memberLimit: `Up to ${audienceScale.toLocaleString()} members`,
      features: [
        'Everything in Starter',
        'Custom theme upload & code editing',
        '5 staff & author accounts',
        '1,000+ native integrations & webhooks',
        'Granular paid member tiers & discounts',
        'Higher speed email dispatch queue',
        'Advanced subscriber growth analytics',
      ],
    },
    {
      id: 'team',
      name: 'Team',
      description: 'For established media companies, collective newsrooms, and multi-author publications.',
      monthlyPrice: Math.round(63 * scaleMultiplier),
      annualPrice: Math.round(50 * scaleMultiplier),
      memberLimit: `Up to ${audienceScale.toLocaleString()} members`,
      features: [
        'Everything in Creator',
        'Unlimited staff & contributing editors',
        'Priority customer support',
        'Custom newsletter design & typography',
        'Custom domain emails',
        'Role-based permissions & audit log',
        'Early access to beta features',
      ],
    },
    {
      id: 'business',
      name: 'Business',
      description: 'Enterprise-grade reliability, dedicated infrastructure, and 99.9% uptime SLA.',
      monthlyPrice: Math.round(249 * (audienceScale <= 1000 ? 1 : scaleMultiplier * 0.8)),
      annualPrice: Math.round(199 * (audienceScale <= 1000 ? 1 : scaleMultiplier * 0.8)),
      memberLimit: `Up to ${Math.max(10000, audienceScale).toLocaleString()} members`,
      features: [
        'Everything in Team',
        'Guaranteed 99.9% uptime SLA',
        'Dedicated IP address for emails',
        'Dedicated technical account manager',
        'Custom contract & invoicing',
        'Managed white-glove migration assistance',
        'Automated daily backup offsite archives',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
            Transparent Flat Pricing
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mt-2 mb-4 font-['Outfit',sans-serif]">
            Predictable pricing that doesn&apos;t penalize your success.
          </h2>
          <p className="text-base text-neutral-400">
            No transaction fees, no surprise revenue cuts. All plans include full access to publishing, subscriptions, and newsletter dispatch.
          </p>

          {/* Billing Interval Toggle */}
          <div className="inline-flex items-center gap-3 p-1.5 bg-neutral-900 border border-neutral-800 rounded-xl mt-8 text-xs font-semibold">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-neutral-800 text-white shadow'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 cursor-pointer ${
                billingCycle === 'yearly'
                  ? 'bg-neutral-800 text-white shadow'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30">
                SAVE 20%
              </span>
            </button>
          </div>

          {/* Audience Scale Filter */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-neutral-500 mr-2">Audience Size:</span>
            {[500, 1000, 5000, 10000, 25000].map((count) => (
              <button
                key={count}
                onClick={() => setAudienceScale(count)}
                className={`px-3 py-1.5 rounded-md font-mono transition-colors cursor-pointer ${
                  audienceScale === count
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white'
                }`}
              >
                {count >= 1000 ? `${count / 1000}k` : count} members
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => {
            const price = billingCycle === 'yearly' ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`bg-neutral-900/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 relative border ${
                  plan.highlight
                    ? 'border-emerald-500/60 shadow-xl shadow-emerald-500/5 ring-1 ring-emerald-500/30'
                    : 'border-neutral-800 hover:border-neutral-700 shadow-lg'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-neutral-950 text-[10px] font-extrabold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-md">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="text-lg font-bold text-white font-['Outfit',sans-serif] mb-1">
                    {plan.name}
                  </div>
                  <p className="text-xs text-neutral-400 min-h-[34px] leading-relaxed mb-4">
                    {plan.description}
                  </p>

                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">
                      ${price}
                    </span>
                    <span className="text-xs text-neutral-500 font-normal">/ month</span>
                  </div>
                  <div className="text-[11px] text-neutral-500 font-mono mb-6">
                    {billingCycle === 'yearly' ? `Billed annually ($${price * 12}/yr)` : 'Billed monthly, cancel anytime'}
                  </div>

                  <div className="py-2.5 px-3 rounded-lg bg-neutral-950 border border-neutral-800/80 text-xs font-mono text-neutral-300 mb-6 text-center">
                    {plan.memberLimit}
                  </div>

                  <ul className="space-y-2.5 text-xs text-neutral-300 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onSelectPlan(plan)}
                  className={`w-full py-2.5 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    plan.highlight
                      ? 'bg-emerald-500 hover:bg-emerald-400 text-neutral-950 shadow-md shadow-emerald-500/20'
                      : 'bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700'
                  }`}
                >
                  <span>Start 14-day free trial</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Free migration footnote */}
        <div className="mt-12 text-center text-xs text-neutral-400 flex flex-wrap items-center justify-center gap-6">
          <span>✓ 14-day free trial on all plans</span>
          <span>·</span>
          <span>✓ Free concierge migration from Substack, WordPress, or Medium</span>
          <span>·</span>
          <span>✓ Zero transaction fees on your memberships</span>
        </div>
      </div>
    </section>
  );
};
