import React, { useState } from 'react';
import { DollarSign, Check, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface RevenueCalculatorProps {
  onOpenTrial: () => void;
}

export const RevenueCalculator: React.FC<RevenueCalculatorProps> = ({ onOpenTrial }) => {
  const [subscribers, setSubscribers] = useState<number>(2500);
  const [pricePerMonth, setPricePerMonth] = useState<number>(8);

  // Math: Annual Gross = subscribers * price * 12
  const annualGross = subscribers * pricePerMonth * 12;

  // Platform cut rates:
  // NexVora: 0% cut (only standard Stripe fee, same across all)
  const substackCut = annualGross * 0.10;
  const patreonCut = annualGross * 0.12;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculator" className="py-24 bg-neutral-900/60 border-y border-neutral-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
            Sovereign Creator Economics
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mt-2 mb-4 font-['Outfit',sans-serif]">
            Keep 100% of your earnings.
          </h2>
          <p className="text-base text-neutral-400">
            Unlike other platforms that take 10% or more from your hard-earned revenue forever, NexVora Publish charges 0% transaction fees. Every dollar from your supporters goes directly to your business.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-neutral-950 rounded-2xl border border-neutral-800 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Sliders Input Area */}
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor="subscribers-slider" className="text-sm font-semibold text-neutral-200">
                    Paid Subscribers
                  </label>
                  <span className="text-xl font-bold text-emerald-400 font-mono tabular-nums">
                    {subscribers.toLocaleString()}
                  </span>
                </div>
                <input
                  id="subscribers-slider"
                  type="range"
                  min="250"
                  max="25000"
                  step="250"
                  value={subscribers}
                  onChange={(e) => setSubscribers(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 font-mono mt-1.5">
                  <span>250</span>
                  <span>10,000</span>
                  <span>25,000+</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor="price-slider" className="text-sm font-semibold text-neutral-200">
                    Monthly Subscription Price
                  </label>
                  <span className="text-xl font-bold text-emerald-400 font-mono tabular-nums">
                    ${pricePerMonth}/mo
                  </span>
                </div>
                <input
                  id="price-slider"
                  type="range"
                  min="3"
                  max="40"
                  step="1"
                  value={pricePerMonth}
                  onChange={(e) => setPricePerMonth(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 font-mono mt-1.5">
                  <span>$3/mo</span>
                  <span>$20/mo</span>
                  <span>$40/mo</span>
                </div>
              </div>

              <div className="p-4 bg-neutral-900/80 rounded-xl border border-neutral-800/80 text-xs text-neutral-400 space-y-2">
                <div className="flex items-center gap-2 text-white font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Transparent Flat Pricing</span>
                </div>
                <p>
                  You pay only a predictable low monthly membership for the NexVora infrastructure. As your audience grows from $10k to $500k/yr, your fee stays flat.
                </p>
              </div>
            </div>

            {/* Results Comparison Card */}
            <div className="bg-neutral-900 rounded-xl border border-neutral-800 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider mb-1">
                  Estimated Annual Revenue
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums mb-1">
                  {formatCurrency(annualGross)}
                  <span className="text-sm font-normal text-neutral-500 font-sans"> / year</span>
                </div>
                <p className="text-xs text-emerald-400 flex items-center gap-1.5 mb-6">
                  <Check className="w-3.5 h-3.5" />
                  <span>You retain 100% on NexVora Publish</span>
                </p>

                {/* Platform Fee Comparison Table */}
                <div className="space-y-3 pt-4 border-t border-neutral-800/80 text-xs">
                  <div className="flex justify-between items-center py-1.5">
                    <span className="text-neutral-400">NexVora Publish Fee</span>
                    <span className="font-mono font-bold text-emerald-400 tabular-nums">$0.00 / 0%</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 text-neutral-400">
                    <span>Substack (10% Cut)</span>
                    <span className="font-mono text-red-400 tabular-nums">-{formatCurrency(substackCut)}</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 text-neutral-400">
                    <span>Patreon (12% Cut)</span>
                    <span className="font-mono text-red-400 tabular-nums">-{formatCurrency(patreonCut)}</span>
                  </div>
                </div>

                {/* Savings Callout */}
                <div className="mt-5 p-3.5 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                  <div className="text-xs text-emerald-300 font-medium">
                    You save <span className="font-bold text-white font-mono">{formatCurrency(substackCut)}</span> every year compared to Substack.
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenTrial}
                className="mt-6 w-full py-3 bg-white hover:bg-neutral-100 text-neutral-950 font-semibold text-sm rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Claim Your 100% Revenue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
