import React, { useState } from 'react';
import { X, Check, ArrowRight, Sparkles, Globe, Shield, Rocket, Feather } from 'lucide-react';
import { PricingPlan } from '../types/index.ts';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: PricingPlan | null;
  onCompleteToEditor: () => void;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({
  isOpen,
  onClose,
  initialPlan,
  onCompleteToEditor,
}) => {
  const [step, setStep] = useState<number>(1);
  const [pubName, setPubName] = useState('The Independent Dispatch');
  const [subdomain, setSubdomain] = useState('independent-dispatch');
  const [topic, setTopic] = useState('Technology & Society');
  const [email, setEmail] = useState('');
  const [selectedPlanId, setSelectedPlanId] = useState<string>(initialPlan?.id || 'creator');
  const [isProvisioning, setIsProvisioning] = useState(false);

  if (!isOpen) return null;

  const handleNameChange = (val: string) => {
    setPubName(val);
    const slug = val
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .slice(0, 30);
    setSubdomain(slug || 'my-publication');
  };

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProvisioning(true);
    setTimeout(() => {
      setIsProvisioning(false);
      setStep(4); // Success step
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden relative">
        {/* Header */}
        <div className="p-6 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center">
              <Feather className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <span className="text-sm font-bold text-white font-['Outfit',sans-serif]">
              Launch on NexVora Publish
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="px-6 pt-4 flex items-center justify-between text-xs text-neutral-500 font-mono">
          <span>Step {Math.min(step, 3)} of 3</span>
          <span>14-day free trial</span>
        </div>

        {/* Step 1: Publication Name & Subdomain */}
        {step === 1 && (
          <div className="p-6 space-y-5">
            <div>
              <h3 className="text-xl font-bold text-white font-['Outfit',sans-serif]">
                Name your publication
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                You can change this or connect your custom domain anytime later.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Publication Title
                </label>
                <input
                  type="text"
                  value={pubName}
                  onChange={(e) => handleNameChange(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white placeholder-neutral-600 focus:border-emerald-500 outline-none"
                  placeholder="e.g. Dhaka Chronicle, Tech Wire"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Your Free NexVora URL
                </label>
                <div className="flex items-center px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 rounded-lg text-sm">
                  <input
                    type="text"
                    value={subdomain}
                    onChange={(e) => setSubdomain(e.target.value)}
                    className="bg-transparent text-emerald-400 outline-none flex-1 font-mono text-xs"
                  />
                  <span className="text-neutral-500 font-mono text-xs">.nexvora.pub</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full py-3 bg-white hover:bg-neutral-100 text-neutral-950 font-semibold text-xs rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-6"
            >
              <span>Continue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Step 2: Topic & Email */}
        {step === 2 && (
          <div className="p-6 space-y-5">
            <div>
              <h3 className="text-xl font-bold text-white font-['Outfit',sans-serif]">
                Tell us about your audience
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                This helps us tailor your newsletter templates and membership presets.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Primary Publication Focus
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 rounded-lg text-xs text-white outline-none focus:border-emerald-500"
                >
                  <option value="Technology & Society">Technology &amp; Society</option>
                  <option value="Independent Journalism">Independent Journalism &amp; News</option>
                  <option value="Business & Finance">Business, Investing &amp; Startups</option>
                  <option value="Culture & Creative Arts">Culture, Essays &amp; Fiction</option>
                  <option value="Personal Knowledge & Log">Personal Knowledge &amp; Tech Log</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Your Account Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white placeholder-neutral-600 focus:border-emerald-500 outline-none"
                  required
                />
              </div>
            </div>

            <div className="flex gap-2.5 mt-6">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-3 bg-neutral-800 text-neutral-300 hover:text-white rounded-lg text-xs font-medium cursor-pointer"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex-1 py-3 bg-white hover:bg-neutral-100 text-neutral-950 font-semibold text-xs rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Continue to Plan Selection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Plan Selection */}
        {step === 3 && (
          <form onSubmit={handleFinish} className="p-6 space-y-4">
            <div>
              <h3 className="text-xl font-bold text-white font-['Outfit',sans-serif]">
                Select your 14-day free trial tier
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                No credit card required. Keep 100% of subscription revenue.
              </p>
            </div>

            <div className="space-y-2.5">
              {[
                { id: 'starter', name: 'Starter', price: '$9/mo', desc: 'Up to 500 members · Official themes' },
                { id: 'creator', name: 'Creator', price: '$25/mo', desc: 'Up to 1,000 members · Custom themes & staff' },
                { id: 'team', name: 'Team', price: '$50/mo', desc: 'Unlimited team accounts · Priority delivery' },
              ].map((p) => (
                <div
                  key={p.id}
                  onClick={() => setSelectedPlanId(p.id)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                    selectedPlanId === p.id
                      ? 'bg-neutral-950 border-emerald-500 ring-1 ring-emerald-500/50'
                      : 'bg-neutral-950/60 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        selectedPlanId === p.id ? 'border-emerald-400 bg-emerald-400' : 'border-neutral-600'
                      }`}
                    >
                      {selectedPlanId === p.id && <div className="w-1.5 h-1.5 rounded-full bg-neutral-950" />}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{p.name}</div>
                      <div className="text-[11px] text-neutral-400">{p.desc}</div>
                    </div>
                  </div>
                  <div className="text-xs font-mono font-bold text-emerald-400">{p.price}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-2.5 pt-4">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-4 py-3 bg-neutral-800 text-neutral-300 hover:text-white rounded-lg text-xs font-medium cursor-pointer"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isProvisioning}
                className="flex-1 py-3 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-emerald-500/20"
              >
                {isProvisioning ? (
                  <span>Provisioning Publication Cluster...</span>
                ) : (
                  <>
                    <span>Create Publication &amp; Begin Trial</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* Step 4: Success Screen */}
        {step === 4 && (
          <div className="p-8 text-center space-y-5">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <Rocket className="w-7 h-7" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white font-['Outfit',sans-serif]">
                Your Publication is Ready!
              </h3>
              <p className="text-xs text-neutral-400 mt-1 max-w-sm mx-auto">
                Welcome to <span className="text-white font-semibold">{pubName}</span>. Your sovereign publishing environment is live.
              </p>
            </div>

            <div className="p-4 bg-neutral-950 rounded-xl border border-neutral-800 text-xs font-mono text-emerald-400">
              https://{subdomain}.nexvora.pub
            </div>

            <div className="p-3 bg-neutral-950/80 rounded-lg border border-neutral-800 text-[11px] text-neutral-400 text-left space-y-1">
              <div>✓ 14-day full access trial activated</div>
              <div>✓ 0% platform transaction fee guaranteed</div>
              <div>✓ Published by NexVora Lab&apos;s Ofc · Crafted by Prince AR Abdur Rahman</div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => {
                  onClose();
                  onCompleteToEditor();
                }}
                className="w-full py-3 bg-white hover:bg-neutral-100 text-neutral-950 font-bold text-xs rounded-lg transition-all cursor-pointer shadow-md"
              >
                Open Writing Editor &amp; Draft First Post
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
