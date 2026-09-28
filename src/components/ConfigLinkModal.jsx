import React, { useState } from 'react';
import { X, Link2, Check, ExternalLink, Info, RotateCcw } from 'lucide-react';
import { defaultGoogleReviewUrl } from '../data/initialReviews';

export default function ConfigLinkModal({ isOpen, onClose, currentUrl, onSaveUrl }) {
  const [url, setUrl] = useState(currentUrl);
  const [saved, setSaved] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e) => {
    e.preventDefault();
    onSaveUrl(url.trim() || defaultGoogleReviewUrl);
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 1200);
  };

  const handleReset = () => {
    setUrl(defaultGoogleReviewUrl);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#0e0e12] border border-[#dfb76c]/40 rounded-3xl p-6 sm:p-7 shadow-2xl text-white">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-900 border border-zinc-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#dfb76c] uppercase tracking-wider">
            <Link2 className="w-4 h-4" />
            <span>Google Review Link Configuration</span>
          </div>
          <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white">
            Set Your Google Review Link
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Paste your Google Business profile review URL below. Whenever a client clicks "Give Review", they will directly open your business page.
          </p>
        </div>

        <form onSubmit={handleSave} className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1.5">
              Google Business Review URL
            </label>
            <input
              type="url"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://g.page/r/.../review or https://search.google.com/local/writereview..."
              className="w-full px-3.5 py-2.5 bg-black border border-zinc-800 rounded-xl text-xs sm:text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-[#dfb76c]"
            />
          </div>

          <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-400 space-y-1">
            <div className="flex items-center gap-1.5 text-zinc-300 font-medium">
              <Info className="w-3.5 h-3.5 text-[#dfb76c]" />
              <span>How to get this link:</span>
            </div>
            <p>1. Open Google Business Profile Manager.</p>
            <p>2. Select "Ask for reviews" or "Get more reviews".</p>
            <p>3. Copy the short link and paste it here.</p>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-1 text-xs text-zinc-400 hover:text-[#dfb76c] transition"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Default</span>
            </button>

            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-[#dfb76c] hover:underline"
            >
              <span>Test Link</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="pt-2 flex gap-3">
            <button
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl gold-gradient-bg text-black font-bold text-sm hover:brightness-110 transition cursor-pointer"
            >
              {saved ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Saved Successfully!</span>
                </>
              ) : (
                <span>Save Link</span>
              )}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white text-sm"
            >
              Close
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
