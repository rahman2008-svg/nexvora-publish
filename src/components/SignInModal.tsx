import React, { useState } from 'react';
import { X, ArrowRight, Mail, CheckCircle2, Feather, Key } from 'lucide-react';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [magicSent, setMagicSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setMagicSent(true);
    setTimeout(() => {
      onSuccess();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl max-w-md w-full shadow-2xl p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-10 h-10 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center mx-auto mb-3">
            <Feather className="w-5 h-5 text-emerald-400" />
          </div>
          <h3 className="text-2xl font-bold text-white font-['Outfit',sans-serif]">
            Sign in to NexVora
          </h3>
          <p className="text-xs text-neutral-400 mt-1">
            Access your publication dashboard and subscriber analytics.
          </p>
        </div>

        {magicSent ? (
          <div className="p-6 bg-neutral-950 rounded-xl border border-neutral-800 text-center space-y-3">
            <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
            <h4 className="text-sm font-semibold text-white">Sign-in Link Dispatched!</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              We dispatched a secure magic login link to <span className="text-white font-mono">{email}</span>. Signing you into the demo console...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                Work or Creator Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="creator@publication.com"
                className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white placeholder-neutral-600 focus:border-emerald-500 outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-white hover:bg-neutral-100 text-neutral-950 font-semibold text-xs rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
            >
              <span>Continue with Magic Link</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <div className="text-center pt-2">
              <span className="text-[11px] text-neutral-500">
                Don&apos;t have a publication yet? <button type="button" onClick={onClose} className="text-emerald-400 underline cursor-pointer">Start free trial</button>
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
