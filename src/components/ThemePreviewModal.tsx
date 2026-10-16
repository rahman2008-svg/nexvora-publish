import React, { useState } from 'react';
import { X, Check, Laptop, Tablet, Smartphone, ExternalLink, ArrowRight, Palette } from 'lucide-react';
import { ShowcaseTheme } from '../types/index.ts';

interface ThemePreviewModalProps {
  theme: ShowcaseTheme | null;
  onClose: () => void;
  onUseTheme: (theme: ShowcaseTheme) => void;
}

export const ThemePreviewModal: React.FC<ThemePreviewModalProps> = ({
  theme,
  onClose,
  onUseTheme,
}) => {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activatedNotice, setActivatedNotice] = useState(false);

  if (!theme) return null;

  const handleApply = () => {
    setActivatedNotice(true);
    setTimeout(() => {
      setActivatedNotice(false);
      onUseTheme(theme);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex flex-col p-2 sm:p-6">
      {/* Top Bar */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-t-2xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-3.5 h-3.5 rounded-full"
            style={{ backgroundColor: theme.accentColor }}
          />
          <div>
            <h3 className="text-base font-bold text-white font-['Outfit',sans-serif]">
              {theme.name}
            </h3>
            <span className="text-xs text-neutral-400">
              {theme.category} · By {theme.author}
            </span>
          </div>
        </div>

        {/* Viewport switch */}
        <div className="hidden md:flex items-center gap-1 bg-neutral-950 p-1 rounded-lg border border-neutral-800 text-xs">
          <button
            onClick={() => setDevice('desktop')}
            className={`p-1.5 rounded cursor-pointer ${
              device === 'desktop' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'
            }`}
            title="Desktop"
          >
            <Laptop className="w-4 h-4" />
          </button>
          <button
            onClick={() => setDevice('tablet')}
            className={`p-1.5 rounded cursor-pointer ${
              device === 'tablet' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'
            }`}
            title="Tablet"
          >
            <Tablet className="w-4 h-4" />
          </button>
          <button
            onClick={() => setDevice('mobile')}
            className={`p-1.5 rounded cursor-pointer ${
              device === 'mobile' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'
            }`}
            title="Mobile"
          >
            <Smartphone className="w-4 h-4" />
          </button>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleApply}
            className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
          >
            {activatedNotice ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Theme Selected!</span>
              </>
            ) : (
              <>
                <span>Use &ldquo;{theme.name}&rdquo;</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Viewport Stage */}
      <div className="flex-1 bg-neutral-950 border-x border-b border-neutral-800 rounded-b-2xl overflow-y-auto flex items-center justify-center p-4 sm:p-8">
        <div
          className={`bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 flex flex-col ${
            device === 'desktop'
              ? 'w-full max-w-5xl h-[560px]'
              : device === 'tablet'
              ? 'w-[680px] h-[560px]'
              : 'w-[360px] h-[560px]'
          }`}
        >
          {/* Simulated Publication Page Header */}
          <div className="p-4 sm:p-6 border-b border-neutral-800 flex items-center justify-between bg-neutral-950">
            <span className="font-bold text-white text-lg tracking-tight font-['Outfit',sans-serif]">
              THE OBSERVER
            </span>
            <div className="flex items-center gap-3 text-xs text-neutral-400">
              <span className="hidden sm:inline">Dispatches</span>
              <span className="hidden sm:inline">Archive</span>
              <span className="px-3 py-1 bg-white text-neutral-950 font-semibold rounded">Subscribe</span>
            </div>
          </div>

          {/* Simulated Content Hero */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-neutral-800">
              <img
                src={theme.coverImage}
                alt={theme.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest">
                  Featured Lead Investigation
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white mt-1 font-['Outfit',sans-serif]">
                  Navigating the Sovereign Web: Tools, Economics &amp; Independence
                </h4>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl">
              <p>
                An in-depth study of high-earning independent publications powered by NexVora Publish. Readers are moving away from noisy feeds in search of high-signal writing delivered straight to their personal inbox.
              </p>
              <p className="text-neutral-500">
                Published by Prince AR Abdur Rahman · 6 min read · 0% Platform Commission
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
