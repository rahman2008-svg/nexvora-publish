import React, { useState } from 'react';
import { 
  X, Check, Eye, Settings, Send, Plus, Trash2, Image as ImageIcon,
  Lock, AlertCircle, Quote, Code, ArrowLeft, ExternalLink, Sparkles,
  Mail, Globe, Shield
} from 'lucide-react';
import { EditorCard } from '../types/index.ts';

interface EditorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EditorModal: React.FC<EditorModalProps> = ({ isOpen, onClose }) => {
  const [postTitle, setPostTitle] = useState('The Next Decade of Sovereign Publishing');
  const [cards, setCards] = useState<EditorCard[]>([
    {
      id: '1',
      type: 'text',
      content:
        'When you publish on closed social media, you are renting an audience that can be revoked at any time. True creative sovereignty begins with an independent domain, direct reader relationships, and owned email distribution.',
    },
    {
      id: '2',
      type: 'callout',
      content:
        'Key insight: 1,000 true fans paying $10/month generates $120,000 annually. On NexVora Publish with 0% platform fee, you keep every cent.',
    },
    {
      id: '3',
      type: 'paywall',
      content: 'Members-only content begins below this line',
    },
    {
      id: '4',
      type: 'text',
      content:
        'Here is the exact playbook we used to scale from 0 to $25,000 MRR in six months: start with a focused niche, establish consistent weekly cadence, and treat every subscriber like an investor.',
    },
  ]);

  const [viewMode, setViewMode] = useState<'edit' | 'preview' | 'email'>('edit');
  const [showSettings, setShowSettings] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  const [showPublishSuccess, setShowPublishSuccess] = useState(false);

  // Settings
  const [postAccess, setPostAccess] = useState<'public' | 'members' | 'paid'>('members');
  const [sendNewsletter, setSendNewsletter] = useState(true);
  const [postSlug, setPostSlug] = useState('the-next-decade-of-sovereign-publishing');

  if (!isOpen) return null;

  const handleAddCard = (type: EditorCard['type']) => {
    let content = 'New text block...';
    if (type === 'callout') content = 'Important editorial note or highlight.';
    if (type === 'paywall') content = 'Paid members only section';
    if (type === 'quote') content = 'Publishing independently gave us our voice back.';
    if (type === 'button') content = 'Subscribe to Read Full Article';

    const newCard: EditorCard = {
      id: Date.now().toString(),
      type,
      content,
    };
    setCards([...cards, newCard]);
  };

  const handleUpdateCard = (id: string, newContent: string) => {
    setCards(cards.map((c) => (c.id === id ? { ...c, content: newContent } : c)));
  };

  const handleDeleteCard = (id: string) => {
    setCards(cards.filter((c) => c.id !== id));
  };

  const handlePublish = () => {
    setIsPublished(true);
    setShowPublishSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-neutral-950/90 backdrop-blur-xl flex flex-col">
      {/* Top Bar */}
      <div className="h-16 px-4 sm:px-8 border-b border-neutral-800 flex items-center justify-between bg-neutral-950">
        <div className="flex items-center gap-4">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Overview</span>
          </button>
          <div className="h-4 w-px bg-neutral-800 hidden sm:block" />
          <span className="text-xs font-mono text-neutral-400">
            {isPublished ? (
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Published Live
              </span>
            ) : (
              'Draft · Auto-saved'
            )}
          </span>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-1 bg-neutral-900 border border-neutral-800 rounded-lg p-1 text-xs">
          <button
            onClick={() => setViewMode('edit')}
            className={`px-3 py-1 rounded transition-colors cursor-pointer ${
              viewMode === 'edit' ? 'bg-neutral-800 text-white font-medium' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Edit
          </button>
          <button
            onClick={() => setViewMode('preview')}
            className={`px-3 py-1 rounded transition-colors cursor-pointer flex items-center gap-1 ${
              viewMode === 'preview' ? 'bg-neutral-800 text-white font-medium' : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Eye className="w-3 h-3" />
            <span>Web Preview</span>
          </button>
          <button
            onClick={() => setViewMode('email')}
            className={`px-3 py-1 rounded transition-colors cursor-pointer flex items-center gap-1 ${
              viewMode === 'email' ? 'bg-neutral-800 text-white font-medium' : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Mail className="w-3 h-3" />
            <span>Newsletter</span>
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowSettings(!showSettings)}
            className={`p-2 rounded-lg border text-xs cursor-pointer transition-colors ${
              showSettings
                ? 'bg-neutral-800 text-white border-neutral-700'
                : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white'
            }`}
            title="Post Settings"
          >
            <Settings className="w-4 h-4" />
          </button>
          <button
            onClick={handlePublish}
            className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-md shadow-emerald-500/10"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{isPublished ? 'Update Post' : 'Publish & Send'}</span>
          </button>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Body */}
      <div className="flex-1 flex overflow-hidden">
        {/* Editor or Preview Pane */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-12 py-10 flex justify-center">
          <div className="w-full max-w-3xl">
            {/* VIEW MODE: EDIT */}
            {viewMode === 'edit' && (
              <div className="space-y-6">
                <input
                  type="text"
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                  className="w-full text-3xl sm:text-5xl font-extrabold text-white bg-transparent outline-none tracking-tight font-['Outfit',sans-serif] placeholder-neutral-700"
                  placeholder="Post title..."
                />

                <div className="flex items-center gap-2 text-xs text-neutral-400 pb-4 border-b border-neutral-800">
                  <span>Author: Prince AR Abdur Rahman</span>
                  <span>·</span>
                  <span>Access: {postAccess.toUpperCase()}</span>
                  <span>·</span>
                  <span className="text-emerald-400">NexVora Publish Engine</span>
                </div>

                {/* Cards List */}
                <div className="space-y-4">
                  {cards.map((card) => (
                    <div key={card.id} className="group relative">
                      {card.type === 'text' && (
                        <div className="relative">
                          <textarea
                            value={card.content}
                            onChange={(e) => handleUpdateCard(card.id, e.target.value)}
                            rows={3}
                            className="w-full bg-transparent text-neutral-200 text-base leading-relaxed outline-none resize-none p-2 rounded hover:bg-neutral-900/40 focus:bg-neutral-900/60 transition-colors"
                          />
                          <button
                            onClick={() => handleDeleteCard(card.id)}
                            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1 text-neutral-500 hover:text-red-400 transition-opacity cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}

                      {card.type === 'callout' && (
                        <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-xl flex items-start gap-3 relative">
                          <Sparkles className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                          <input
                            type="text"
                            value={card.content}
                            onChange={(e) => handleUpdateCard(card.id, e.target.value)}
                            className="w-full bg-transparent text-sm text-neutral-200 outline-none"
                          />
                          <button
                            onClick={() => handleDeleteCard(card.id)}
                            className="text-neutral-500 hover:text-red-400 cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}

                      {card.type === 'paywall' && (
                        <div className="py-4 my-2 border-y-2 border-dashed border-purple-500/50 flex items-center justify-between text-xs text-purple-400 px-4 bg-purple-950/20 rounded">
                          <div className="flex items-center gap-2">
                            <Lock className="w-4 h-4" />
                            <span className="font-semibold">{card.content}</span>
                          </div>
                          <button
                            onClick={() => handleDeleteCard(card.id)}
                            className="text-neutral-500 hover:text-red-400 cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}

                      {card.type === 'quote' && (
                        <div className="p-4 border-l-2 border-neutral-600 bg-neutral-900/40 italic text-neutral-300 text-sm flex items-center justify-between">
                          <input
                            type="text"
                            value={card.content}
                            onChange={(e) => handleUpdateCard(card.id, e.target.value)}
                            className="w-full bg-transparent outline-none italic"
                          />
                          <button
                            onClick={() => handleDeleteCard(card.id)}
                            className="text-neutral-500 hover:text-red-400 cursor-pointer ml-2"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}

                      {card.type === 'button' && (
                        <div className="p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg flex items-center justify-between">
                          <div className="px-4 py-2 bg-emerald-500 text-neutral-950 text-xs font-semibold rounded">
                            {card.content}
                          </div>
                          <button
                            onClick={() => handleDeleteCard(card.id)}
                            className="text-neutral-500 hover:text-red-400 cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Add Card Floating Bar */}
                <div className="p-3 bg-neutral-900/80 border border-neutral-800 rounded-xl flex flex-wrap items-center gap-2 text-xs">
                  <span className="text-neutral-500 mr-2 flex items-center gap-1">
                    <Plus className="w-3.5 h-3.5" /> Insert:
                  </span>
                  <button
                    onClick={() => handleAddCard('text')}
                    className="px-2.5 py-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded cursor-pointer"
                  >
                    Paragraph
                  </button>
                  <button
                    onClick={() => handleAddCard('callout')}
                    className="px-2.5 py-1 bg-neutral-800 hover:bg-neutral-700 text-emerald-400 rounded cursor-pointer"
                  >
                    Callout Card
                  </button>
                  <button
                    onClick={() => handleAddCard('paywall')}
                    className="px-2.5 py-1 bg-neutral-800 hover:bg-neutral-700 text-purple-400 rounded cursor-pointer"
                  >
                    Paywall Divider
                  </button>
                  <button
                    onClick={() => handleAddCard('quote')}
                    className="px-2.5 py-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded cursor-pointer"
                  >
                    Quote Card
                  </button>
                  <button
                    onClick={() => handleAddCard('button')}
                    className="px-2.5 py-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded cursor-pointer"
                  >
                    CTA Button
                  </button>
                </div>
              </div>
            )}

            {/* VIEW MODE: WEB PREVIEW */}
            {viewMode === 'preview' && (
              <div className="bg-neutral-900/60 rounded-2xl border border-neutral-800 p-8 shadow-2xl">
                <div className="text-xs text-emerald-400 font-mono uppercase tracking-widest mb-2">
                  Published Reader View
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 font-['Outfit',sans-serif]">
                  {postTitle}
                </h1>
                <div className="flex items-center gap-3 text-xs text-neutral-400 pb-6 mb-6 border-b border-neutral-800">
                  <span className="text-white font-medium">Prince AR Abdur Rahman</span>
                  <span>·</span>
                  <span>Published today</span>
                  <span>·</span>
                  <span>3 min read</span>
                </div>
                <div className="space-y-5 text-sm sm:text-base text-neutral-300 leading-relaxed">
                  {cards.map((c) => {
                    if (c.type === 'text') return <p key={c.id}>{c.content}</p>;
                    if (c.type === 'callout') {
                      return (
                        <div key={c.id} className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 rounded-lg text-sm">
                          {c.content}
                        </div>
                      );
                    }
                    if (c.type === 'paywall') {
                      return (
                        <div key={c.id} className="p-6 my-6 bg-gradient-to-br from-purple-950/40 to-neutral-900 border border-purple-500/40 rounded-xl text-center space-y-3">
                          <Lock className="w-6 h-6 text-purple-400 mx-auto" />
                          <h4 className="text-base font-bold text-white">This section is for paid members only</h4>
                          <p className="text-xs text-neutral-400 max-w-sm mx-auto">
                            Support independent journalism and unlock this complete investigation.
                          </p>
                          <button className="px-5 py-2 bg-purple-500 text-white text-xs font-semibold rounded-lg shadow-md cursor-pointer">
                            Upgrade to Premium ($8/mo)
                          </button>
                        </div>
                      );
                    }
                    if (c.type === 'quote') {
                      return (
                        <blockquote key={c.id} className="p-4 border-l-2 border-emerald-400 italic text-white text-base">
                          &ldquo;{c.content}&rdquo;
                        </blockquote>
                      );
                    }
                    if (c.type === 'button') {
                      return (
                        <div key={c.id} className="text-center py-2">
                          <button className="px-6 py-2.5 bg-emerald-500 text-neutral-950 text-xs font-bold rounded-lg shadow">
                            {c.content}
                          </button>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            )}

            {/* VIEW MODE: EMAIL PREVIEW */}
            {viewMode === 'email' && (
              <div className="bg-neutral-900 rounded-2xl border border-neutral-800 p-6 sm:p-8 max-w-2xl mx-auto shadow-2xl">
                <div className="bg-neutral-950 rounded-xl border border-neutral-800 p-4 mb-6 space-y-1.5 text-xs">
                  <div className="text-neutral-500">Inbox Notification Preview</div>
                  <div className="font-semibold text-white">Subject: {postTitle}</div>
                  <div className="text-neutral-400">From: NexVora Daily &lt;dispatch@nexvora.pub&gt;</div>
                </div>

                <div className="bg-neutral-950 p-6 rounded-xl border border-neutral-800 space-y-4">
                  <div className="text-center border-b border-neutral-800 pb-4">
                    <span className="text-xs font-mono text-emerald-400">NexVora Intelligence Edition</span>
                    <h2 className="text-2xl font-bold text-white mt-1 font-['Outfit',sans-serif]">{postTitle}</h2>
                  </div>
                  <div className="text-xs text-neutral-300 leading-relaxed space-y-3">
                    <p>Dear Reader,</p>
                    <p>{cards[0]?.content}</p>
                    <div className="p-3 bg-neutral-900 border border-neutral-800 rounded text-center my-4">
                      <a href="#" className="text-xs font-semibold text-emerald-400">
                        Read full edition in your web browser →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Post Settings Drawer */}
        {showSettings && (
          <div className="w-80 border-l border-neutral-800 bg-neutral-950 p-6 overflow-y-auto space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <span className="text-sm font-bold text-white font-['Outfit',sans-serif]">Post Settings</span>
              <button
                onClick={() => setShowSettings(false)}
                className="text-neutral-500 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Post Access */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-neutral-300">Audience Access</label>
              <select
                value={postAccess}
                onChange={(e) => setPostAccess(e.target.value as any)}
                className="w-full px-3 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-xs text-white outline-none focus:border-neutral-600"
              >
                <option value="public">Public (Everyone)</option>
                <option value="members">Members Only (Free &amp; Paid)</option>
                <option value="paid">Paid Members Only</option>
              </select>
            </div>

            {/* Newsletter Dispatch */}
            <div className="flex items-center justify-between p-3 bg-neutral-900 rounded-lg border border-neutral-800">
              <div>
                <div className="text-xs font-medium text-white">Send as Newsletter</div>
                <div className="text-[11px] text-neutral-500">Deliver to email subscribers</div>
              </div>
              <input
                type="checkbox"
                checked={sendNewsletter}
                onChange={(e) => setSendNewsletter(e.target.checked)}
                className="accent-emerald-400 w-4 h-4 cursor-pointer"
              />
            </div>

            {/* URL Slug */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-neutral-300">Post URL Slug</label>
              <div className="flex items-center px-3 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-xs text-neutral-400">
                <span className="text-neutral-600 mr-1">/</span>
                <input
                  type="text"
                  value={postSlug}
                  onChange={(e) => setPostSlug(e.target.value)}
                  className="bg-transparent text-white outline-none flex-1 font-mono"
                />
              </div>
            </div>

            {/* Developer Credit Info */}
            <div className="p-3.5 bg-neutral-900/60 rounded-lg border border-neutral-800/80 text-[11px] text-neutral-400 space-y-1">
              <div className="text-white font-semibold">NexVora Publish System</div>
              <div>Published by NexVora Lab&apos;s Ofc</div>
              <div>Crafted by Prince AR Abdur Rahman</div>
              <div className="font-mono text-neutral-500">v1.0.0</div>
            </div>
          </div>
        )}
      </div>

      {/* Publish Confirmation Modal Popup */}
      {showPublishSuccess && (
        <div className="fixed inset-0 z-60 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-7 max-w-md w-full shadow-2xl text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-['Outfit',sans-serif]">Post Successfully Published!</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Your article &ldquo;{postTitle}&rdquo; is now live on your NexVora publication and dispatched to active newsletter subscribers.
            </p>
            <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 text-xs font-mono text-emerald-400 break-all">
              https://nexvora.pub/posts/{postSlug}
            </div>
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => {
                  setShowPublishSuccess(false);
                  setViewMode('preview');
                }}
                className="flex-1 py-2.5 bg-white text-neutral-950 font-semibold text-xs rounded-lg hover:bg-neutral-100 cursor-pointer"
              >
                View Live Article
              </button>
              <button
                onClick={() => setShowPublishSuccess(false)}
                className="px-4 py-2.5 bg-neutral-800 text-white font-medium text-xs rounded-lg hover:bg-neutral-700 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
