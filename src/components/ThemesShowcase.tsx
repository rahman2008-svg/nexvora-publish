import React, { useState } from 'react';
import { Eye, ExternalLink, Sparkles, Layout, Palette, ArrowRight } from 'lucide-react';
import { ShowcaseTheme } from '../types/index.ts';

const SAMPLE_THEMES: ShowcaseTheme[] = [
  {
    id: 'edition',
    name: 'Edition',
    category: 'Newsletter',
    description: 'Clean newsletter-focused publication theme with high-contrast typography and subtle borders.',
    accentColor: '#10b981',
    author: 'NexVora Official',
    stats: '14,200 active sites',
    coverImage: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'journal',
    name: 'The Chronicle',
    category: 'Magazine',
    description: 'Multi-column editorial magazine design for newsrooms, independent journalists, and essays.',
    accentColor: '#3b82f6',
    author: 'NexVora Studio',
    stats: '8,400 active sites',
    coverImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'minimal',
    name: 'Aura Minimal',
    category: 'Minimalist',
    description: 'Distraction-free personal essays, developer logs, and longform thoughts with pure monochrome beauty.',
    accentColor: '#a855f7',
    author: 'Design Works',
    stats: '19,100 active sites',
    coverImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'dispatch',
    name: 'Daily Dispatch',
    category: 'Newsletter',
    description: 'Bite-sized morning digest layout optimized for high email click-through rates and reader retention.',
    accentColor: '#f59e0b',
    author: 'NexVora Official',
    stats: '11,300 active sites',
    coverImage: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'broadsheet',
    name: 'Broadsheet Global',
    category: 'Journal',
    description: 'Investigative reporting framework with featured lead stories, audio embed players, and archives.',
    accentColor: '#06b6d4',
    author: 'NexVora Studio',
    stats: '6,200 active sites',
    coverImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'wavecast',
    name: 'Wavecast Media',
    category: 'Podcast',
    description: 'Designed specifically for audio creators, podcast episode notes, transcripts, and member-only feeds.',
    accentColor: '#ec4899',
    author: 'Audio Labs',
    stats: '4,800 active sites',
    coverImage: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&auto=format&fit=crop&q=80',
  },
];

interface ThemesShowcaseProps {
  onSelectTheme: (theme: ShowcaseTheme) => void;
  onOpenTrial: () => void;
}

export const ThemesShowcase: React.FC<ThemesShowcaseProps> = ({
  onSelectTheme,
  onOpenTrial,
}) => {
  const [filter, setFilter] = useState<string>('All');

  const filteredThemes = filter === 'All' 
    ? SAMPLE_THEMES 
    : SAMPLE_THEMES.filter(t => t.category === filter);

  return (
    <section id="themes" className="py-24 bg-neutral-900/40 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
              Design &amp; Customization
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mt-2 mb-3 font-['Outfit',sans-serif]">
              Beautiful themes for every publication style.
            </h2>
            <p className="text-sm text-neutral-400">
              Choose from a curated collection of fully responsive, ultra-fast themes. Customize typography, color palettes, and layouts with 0 lines of code.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-lg text-xs font-medium">
            {['All', 'Newsletter', 'Magazine', 'Minimalist', 'Journal', 'Podcast'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  filter === category
                    ? 'bg-neutral-800 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredThemes.map((theme) => (
            <div
              key={theme.id}
              className="group bg-neutral-950 rounded-xl border border-neutral-800 overflow-hidden hover:border-neutral-700 transition-all duration-200 flex flex-col shadow-lg"
            >
              {/* Theme Mockup Header */}
              <div className="relative aspect-[16/10] bg-neutral-900 overflow-hidden">
                <img
                  src={theme.coverImage}
                  alt={theme.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-900/90 text-neutral-300 border border-neutral-700 backdrop-blur-md">
                    {theme.category}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => onSelectTheme(theme)}
                    className="px-3 py-1.5 bg-white text-neutral-950 text-xs font-semibold rounded-md shadow flex items-center gap-1.5 cursor-pointer hover:bg-neutral-100"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Live Preview</span>
                  </button>
                </div>
              </div>

              {/* Theme Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {theme.name}
                    </h3>
                    <span className="text-[11px] font-mono text-neutral-500">
                      {theme.stats}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-4">
                    {theme.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-900 flex items-center justify-between text-xs text-neutral-500">
                  <span>By {theme.author}</span>
                  <button
                    onClick={() => onSelectTheme(theme)}
                    className="text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inspect details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-neutral-900/80 rounded-2xl border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-white">Need a fully bespoke design?</h4>
            <p className="text-xs text-neutral-400">
              NexVora Publish supports custom Handlebars templates, Tailwind CSS, or any headless frontend with our JavaScript Content SDK.
            </p>
          </div>
          <button
            onClick={onOpenTrial}
            className="px-5 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold rounded-lg border border-neutral-700 transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            Explore Developer Docs
          </button>
        </div>
      </div>
    </section>
  );
};
