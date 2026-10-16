import React, { useState } from 'react';
import { 
  FileText, Mail, Users, BarChart3, Plus, Image as ImageIcon, 
  Lock, CheckCircle2, Send, Eye, ShieldAlert, Sparkles, TrendingUp,
  Share2, ArrowUpRight, Laptop, Smartphone, HelpCircle
} from 'lucide-react';

export const InteractiveShowcase: React.FC<{ onLaunchEditorModal: () => void }> = ({
  onLaunchEditorModal,
}) => {
  const [activeTab, setActiveTab] = useState<'editor' | 'newsletter' | 'memberships' | 'analytics'>('editor');
  const [deviceView, setDeviceView] = useState<'desktop' | 'mobile'>('desktop');

  // Interactive Editor State
  const [title, setTitle] = useState('How independent publishers are reclaiming the open web');
  const [content, setContent] = useState(
    'For the past decade, creators were promised that social platforms would connect them with their true audience. Instead, algorithms changed every six months, feeds throttled reach, and platforms extracted higher taxes.\n\nNow, a quiet revolution is underway: sovereign publishing with direct relationships, owned subscriber lists, and zero intermediaries.'
  );
  const [hasPaywall, setHasPaywall] = useState(true);
  const [showCallout, setShowCallout] = useState(true);
  const [savedNotification, setSavedNotification] = useState<string | null>(null);

  // Newsletter test email state
  const [testEmail, setTestEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  // Analytics filter state
  const [timeRange, setTimeRange] = useState<'30d' | '90d' | '1y'>('30d');

  const handleAddCard = (type: string) => {
    if (type === 'paywall') {
      setHasPaywall(!hasPaywall);
      triggerNotice(hasPaywall ? 'Paywall card removed' : 'Paywall divider inserted');
    } else if (type === 'callout') {
      setShowCallout(!showCallout);
      triggerNotice(showCallout ? 'Callout box removed' : 'Info callout inserted');
    }
  };

  const triggerNotice = (msg: string) => {
    setSavedNotification(msg);
    setTimeout(() => setSavedNotification(null), 2500);
  };

  const handleSendTestEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testEmail) return;
    setEmailSent(true);
    setTimeout(() => setEmailSent(false), 3500);
  };

  return (
    <div className="w-full bg-neutral-900/90 rounded-2xl border border-neutral-800 shadow-2xl overflow-hidden backdrop-blur-xl">
      {/* Top Browser / Canvas Chrome */}
      <div className="px-4 py-3 bg-neutral-950/80 border-b border-neutral-800/80 flex flex-wrap items-center justify-between gap-3">
        {/* Mac-style traffic lights & Title */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          </div>
          <span className="ml-2 text-xs font-mono text-neutral-400 hidden sm:inline">
            nexvora.pub/admin/{activeTab}
          </span>
        </div>

        {/* Feature Segmented Tabs */}
        <div className="flex items-center gap-1 p-1 bg-neutral-900 border border-neutral-800 rounded-lg text-xs font-medium">
          <button
            onClick={() => setActiveTab('editor')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all cursor-pointer ${
              activeTab === 'editor'
                ? 'bg-neutral-800 text-white shadow-sm'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span>Editor</span>
          </button>
          <button
            onClick={() => setActiveTab('newsletter')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all cursor-pointer ${
              activeTab === 'newsletter'
                ? 'bg-neutral-800 text-white shadow-sm'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Mail className="w-3.5 h-3.5 text-blue-400" />
            <span>Newsletter</span>
          </button>
          <button
            onClick={() => setActiveTab('memberships')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all cursor-pointer ${
              activeTab === 'memberships'
                ? 'bg-neutral-800 text-white shadow-sm'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Users className="w-3.5 h-3.5 text-purple-400" />
            <span>Memberships</span>
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all cursor-pointer ${
              activeTab === 'analytics'
                ? 'bg-neutral-800 text-white shadow-sm'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5 text-amber-400" />
            <span>Analytics</span>
          </button>
        </div>

        {/* Viewport & Fullscreen action */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center p-0.5 bg-neutral-900 border border-neutral-800 rounded-md">
            <button
              onClick={() => setDeviceView('desktop')}
              className={`p-1 rounded cursor-pointer ${
                deviceView === 'desktop' ? 'bg-neutral-800 text-white' : 'text-neutral-500 hover:text-neutral-300'
              }`}
              title="Desktop Preview"
            >
              <Laptop className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setDeviceView('mobile')}
              className={`p-1 rounded cursor-pointer ${
                deviceView === 'mobile' ? 'bg-neutral-800 text-white' : 'text-neutral-500 hover:text-neutral-300'
              }`}
              title="Mobile Preview"
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
          </div>
          <button
            onClick={onLaunchEditorModal}
            className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Open Sandbox</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className={`p-4 sm:p-8 min-h-[460px] flex items-center justify-center transition-all ${
        deviceView === 'mobile' ? 'max-w-md mx-auto py-6' : 'w-full'
      }`}>
        {/* TAB 1: Ghost-Style Rich Editor */}
        {activeTab === 'editor' && (
          <div className="w-full max-w-3xl bg-neutral-950 rounded-xl border border-neutral-800 p-6 sm:p-8 shadow-inner relative">
            {savedNotification && (
              <div className="absolute top-4 right-4 bg-emerald-500/20 text-emerald-300 text-xs px-3 py-1.5 rounded-md border border-emerald-500/40 animate-fade-in flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{savedNotification}</span>
              </div>
            )}

            {/* Quick Editor Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-neutral-800/80 text-xs">
              <div className="flex items-center gap-1.5 text-neutral-400">
                <span className="font-semibold text-neutral-300">Draft</span>
                <span>·</span>
                <span>Saved 2s ago</span>
                <span>·</span>
                <span className="font-mono tabular-nums">480 words</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleAddCard('callout')}
                  className={`px-2.5 py-1 rounded border text-xs cursor-pointer transition-colors ${
                    showCallout
                      ? 'bg-neutral-800 text-emerald-400 border-emerald-500/40'
                      : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  {showCallout ? '✓ Callout Card' : '+ Callout Card'}
                </button>
                <button
                  onClick={() => handleAddCard('paywall')}
                  className={`px-2.5 py-1 rounded border text-xs cursor-pointer transition-colors ${
                    hasPaywall
                      ? 'bg-neutral-800 text-purple-400 border-purple-500/40'
                      : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  {hasPaywall ? '✓ Paywall Divider' : '+ Paywall Card'}
                </button>
              </div>
            </div>

            {/* Post Title Field */}
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              aria-label="Article headline"
              className="w-full text-2xl sm:text-3xl font-bold text-white bg-transparent outline-none mb-4 tracking-tight placeholder-neutral-600 font-['Outfit',sans-serif]"
              placeholder="Article headline..."
            />

            {/* Metadata Bar */}
            <div className="flex items-center gap-2 text-xs text-neutral-400 mb-6">
              <span>By Prince AR Abdur Rahman</span>
              <span>·</span>
              <span>Published on NexVora Media</span>
              <span>·</span>
              <span className="text-emerald-400">Public & Members</span>
            </div>

            {/* Post Content */}
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              aria-label="Article content"
              rows={4}
              className="w-full text-neutral-300 text-sm sm:text-base leading-relaxed bg-transparent resize-none outline-none mb-4 font-normal"
              placeholder="Write your story using markdown, rich cards, or drag-and-drop..."
            />

            {/* Dynamic Callout Card */}
            {showCallout && (
              <div className="p-4 my-4 bg-neutral-900 border border-neutral-800 rounded-lg flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white mb-0.5">The NexVora Difference</div>
                  <div className="text-xs text-neutral-400 leading-relaxed">
                    Unlike traditional platforms that shave 10% off your gross subscriptions, NexVora Publish charges 0% platform take-rate. Everything you earn through Stripe goes directly to your bank account.
                  </div>
                </div>
              </div>
            )}

            {/* Dynamic Paywall Break Divider */}
            {hasPaywall && (
              <div className="my-6 relative border-t-2 border-dashed border-purple-500/40 pt-4 pb-2">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-purple-950 text-purple-300 text-[11px] font-semibold px-3 py-0.5 rounded-full border border-purple-500/40 flex items-center gap-1.5">
                  <Lock className="w-3 h-3 text-purple-400" />
                  <span>Public preview ends here · Paid subscribers only below</span>
                </div>
                <p className="text-xs text-neutral-500 italic text-center pt-2">
                  Non-paying readers will encounter your customized membership signup widget right here.
                </p>
              </div>
            )}

            {/* Footer action bar */}
            <div className="flex items-center justify-between pt-4 mt-6 border-t border-neutral-800 text-xs">
              <span className="text-neutral-500">Pro tip: Type &quot;/&quot; anywhere to insert rich cards</span>
              <button
                onClick={() => triggerNotice('Draft post published to live site!')}
                className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-semibold rounded-md transition-colors cursor-pointer"
              >
                Publish & Dispatch
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: Newsletter Dispatch */}
        {activeTab === 'newsletter' && (
          <div className="w-full max-w-2xl bg-neutral-950 rounded-xl border border-neutral-800 p-6 sm:p-8 shadow-inner">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-800">
              <div>
                <div className="text-xs text-neutral-500">Broadcast Campaign</div>
                <div className="text-sm font-semibold text-white">Edition #42: The Sovereign Creator Playbook</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-neutral-500">Recipients</div>
                <div className="text-sm font-mono text-emerald-400 font-semibold tabular-nums">14,820 subscribers</div>
              </div>
            </div>

            {/* Email Header Mockup */}
            <div className="bg-neutral-900 rounded-lg p-4 border border-neutral-800 mb-6 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-neutral-500">From:</span>
                <span className="text-neutral-200 font-medium">Prince AR &lt;dispatch@nexvora.pub&gt;</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-500">Reply-to:</span>
                <span className="text-neutral-300">prince.ar.abdur.rahman2008@gmail.com</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-500">Subject:</span>
                <span className="text-white font-medium">Inside the mechanics of independent digital publishing</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-500">Audience:</span>
                <span className="text-emerald-400 font-medium">All Members (Free + Paid)</span>
              </div>
            </div>

            {/* Email Deliverability Stats */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 text-center">
                <div className="text-[11px] text-neutral-500">Deliverability</div>
                <div className="text-lg font-bold text-white font-mono tabular-nums">99.4%</div>
              </div>
              <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 text-center">
                <div className="text-[11px] text-neutral-500">Avg. Open Rate</div>
                <div className="text-lg font-bold text-emerald-400 font-mono tabular-nums">54.2%</div>
              </div>
              <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 text-center">
                <div className="text-[11px] text-neutral-500">Click-Through</div>
                <div className="text-lg font-bold text-blue-400 font-mono tabular-nums">18.7%</div>
              </div>
            </div>

            {/* Interactive Test Email Send */}
            <form onSubmit={handleSendTestEmail} className="bg-neutral-900/60 p-4 rounded-lg border border-neutral-800">
              <div className="text-xs font-medium text-neutral-300 mb-2">Send interactive test email to your inbox:</div>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  value={testEmail}
                  onChange={(e) => setTestEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="flex-1 px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-md text-white placeholder-neutral-600 focus:border-neutral-600 outline-none"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-neutral-100 hover:bg-white text-neutral-950 text-xs font-semibold rounded-md flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Test</span>
                </button>
              </div>
              {emailSent && (
                <div className="mt-2.5 text-xs text-emerald-400 flex items-center gap-1.5 animate-fade-in">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Simulated test dispatch sent successfully to {testEmail}!</span>
                </div>
              )}
            </form>
          </div>
        )}

        {/* TAB 3: Memberships & Paywalls */}
        {activeTab === 'memberships' && (
          <div className="w-full max-w-2xl bg-neutral-950 rounded-xl border border-neutral-800 p-6 sm:p-8 shadow-inner">
            <div className="text-center mb-6">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">Reader Membership Experience</span>
              <h3 className="text-xl font-bold text-white mt-1">Unlock full access to NexVora Intelligence</h3>
              <p className="text-xs text-neutral-400 mt-1 max-w-md mx-auto">
                Support independent journalism and receive weekly deep-dives directly in your inbox.
              </p>
            </div>

            {/* Tiers Preview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-neutral-900 rounded-xl border border-neutral-800 relative">
                <div className="text-sm font-semibold text-white">Free Subscriber</div>
                <div className="text-2xl font-bold text-white mt-2 font-mono tabular-nums">$0</div>
                <div className="text-xs text-neutral-500 mb-4">Forever free</div>
                <ul className="text-xs text-neutral-300 space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                    <span>Public articles & weekly recap</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                    <span>Community comments access</span>
                  </li>
                </ul>
                <button
                  onClick={() => triggerNotice('Signed up as Free Member!')}
                  className="w-full py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium rounded-lg transition-colors cursor-pointer"
                >
                  Join Free
                </button>
              </div>

              <div className="p-4 bg-purple-950/30 rounded-xl border border-purple-500/50 relative">
                <div className="absolute top-3 right-3 text-[10px] font-semibold bg-purple-500 text-white px-2 py-0.5 rounded-full">
                  MOST POPULAR
                </div>
                <div className="text-sm font-semibold text-white">Premium Patron</div>
                <div className="text-2xl font-bold text-white mt-2 font-mono tabular-nums">$9 <span className="text-xs font-normal text-neutral-400">/mo</span></div>
                <div className="text-xs text-purple-300 mb-4">Billed monthly or $90/year</div>
                <ul className="text-xs text-neutral-300 space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>All paywalled deep dives & archives</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>Exclusive podcast episodes & audio</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>Direct Q&A with Prince AR</span>
                  </li>
                </ul>
                <button
                  onClick={() => triggerNotice('Simulated Stripe Checkout opened!')}
                  className="w-full py-2 bg-purple-500 hover:bg-purple-400 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer shadow-md shadow-purple-500/20"
                >
                  Become a Patron
                </button>
              </div>
            </div>

            <div className="text-center text-xs text-neutral-500">
              ⚡ Powered by direct Stripe Connect integration with 0% platform fee.
            </div>
          </div>
        )}

        {/* TAB 4: Audience Analytics */}
        {activeTab === 'analytics' && (
          <div className="w-full max-w-3xl bg-neutral-950 rounded-xl border border-neutral-800 p-6 sm:p-8 shadow-inner">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-neutral-800">
              <div>
                <span className="text-xs text-neutral-500">Live Dashboard</span>
                <h4 className="text-base font-bold text-white">Audience Growth & MRR</h4>
              </div>
              <div className="flex items-center gap-1 bg-neutral-900 p-1 rounded-lg border border-neutral-800 text-xs">
                {(['30d', '90d', '1y'] as const).map((range) => (
                  <button
                    key={range}
                    onClick={() => setTimeRange(range)}
                    className={`px-2.5 py-1 rounded cursor-pointer ${
                      timeRange === range ? 'bg-neutral-800 text-white' : 'text-neutral-500 hover:text-neutral-300'
                    }`}
                  >
                    {range.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800">
                <div className="text-[11px] text-neutral-500">Total Members</div>
                <div className="text-xl font-bold text-white font-mono tabular-nums">24,310</div>
                <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>+18.4%</span>
                </div>
              </div>
              <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800">
                <div className="text-[11px] text-neutral-500">Paid Subscribers</div>
                <div className="text-xl font-bold text-purple-400 font-mono tabular-nums">2,840</div>
                <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>+12.1%</span>
                </div>
              </div>
              <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800">
                <div className="text-[11px] text-neutral-500">Monthly Revenue</div>
                <div className="text-xl font-bold text-emerald-400 font-mono tabular-nums">$25,560</div>
                <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>+14.8%</span>
                </div>
              </div>
              <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800">
                <div className="text-[11px] text-neutral-500">Platform Fee Paid</div>
                <div className="text-xl font-bold text-white font-mono tabular-nums">$0.00</div>
                <div className="text-[11px] text-neutral-400 mt-1">0% Take Rate</div>
              </div>
            </div>

            {/* Simulated Visual Growth Curve */}
            <div className="p-4 bg-neutral-900 rounded-lg border border-neutral-800 mb-4">
              <div className="flex items-center justify-between text-xs text-neutral-400 mb-3">
                <span>Member Acquisition Trend</span>
                <span className="font-mono text-emerald-400">+1,420 new this month</span>
              </div>
              {/* SVG interactive line chart */}
              <div className="h-28 w-full flex items-end gap-1.5 sm:gap-2 pt-4">
                {[30, 35, 42, 38, 45, 52, 48, 60, 68, 62, 74, 82, 80, 89, 95, 100].map((val, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1 group relative">
                    <div 
                      style={{ height: `${val}%` }} 
                      className="w-full bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-sm group-hover:from-emerald-400 group-hover:to-emerald-300 transition-all cursor-pointer"
                    />
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-7 bg-neutral-800 text-white text-[10px] px-1.5 py-0.5 rounded pointer-events-none transition-opacity whitespace-nowrap z-10 font-mono">
                      Day {idx * 2 + 1}: {Math.round(val * 24.3)}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono mt-2">
                <span>Day 1</span>
                <span>Day 15</span>
                <span>Day 30</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
