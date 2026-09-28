import React, { useState } from 'react';
import { X, Star, Sparkles, ExternalLink, Copy, Check, ShieldCheck, Heart } from 'lucide-react';

export default function GiveReviewModal({ isOpen, onClose, onAddReview, googleReviewUrl }) {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [author, setAuthor] = useState('');
  const [tag, setTag] = useState('Bridal Couture');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const quickTemplates = [
    "Amazing fabric quality and royal design! 5 stars for ROKEA BY RK.",
    "Exquisite craftsmanship and perfect fitting for my special day.",
    "The unboxing experience and attention to detail were top-notch!"
  ];

  const handleApplyTemplate = (text) => {
    setContent(text);
    if (!title) setTitle("Exceptional luxury & royal finishing");
  };

  const handleOpenGoogle = () => {
    window.open(googleReviewUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSubmitLocal = (e) => {
    e.preventDefault();
    if (!author.trim() || !content.trim()) return;

    onAddReview({
      id: Date.now(),
      author: author.trim(),
      rating,
      date: 'Just now',
      verified: true,
      platform: 'Google Review',
      tag: tag || 'Verified Client',
      title: title.trim() || 'Royal Experience',
      content: content.trim(),
      helpfulCount: 0,
      images: []
    });

    // Also open Google Review so user gets both on-site + Google Review flow!
    window.open(googleReviewUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleCopyReview = () => {
    if (content) {
      navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      
      <div 
        className="relative w-full max-w-xl bg-[#0e0e12] border border-[#dfb76c]/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(223,183,108,0.2)] text-white animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dfb76c]/10 text-[#dfb76c] text-xs font-semibold uppercase tracking-wider border border-[#dfb76c]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Share Your Experience</span>
          </div>
          <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold gold-gradient-text uppercase">
            Give Review for ROKEA
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400">
            Your review will be posted to our official Google Business page.
          </p>
        </div>

        {/* 1-Click Instant Google Button Banner */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-[#1f1a10] to-[#141418] border border-[#dfb76c]/30 mb-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/10 border border-white/10">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Direct Google Review</p>
              <p className="text-xs text-zinc-400">Open Google Reviews page directly</p>
            </div>
          </div>

          <button
            onClick={handleOpenGoogle}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl gold-gradient-bg text-black font-bold text-xs tracking-wide shadow-md hover:brightness-110 transition cursor-pointer"
          >
            <span>Open Google Now</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Review Composer Form */}
        <form onSubmit={handleSubmitLocal} className="space-y-4 text-left">
          
          {/* Star Rating Picker */}
          <div>
            <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
              Select Your Rating
            </label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="p-1.5 focus:outline-none transition-transform hover:scale-125 cursor-pointer"
                >
                  <Star
                    className={`w-7 h-7 transition-colors ${
                      star <= (hoverRating || rating)
                        ? 'fill-[#dfb76c] text-[#dfb76c]'
                        : 'text-zinc-700'
                    }`}
                  />
                </button>
              ))}
              <span className="text-sm font-semibold text-[#dfb76c] ml-2">
                {rating === 5 ? '5.0 - Royal Experience ⭐' : `${rating}.0 Stars`}
              </span>
            </div>
          </div>

          {/* Quick Idea Templates */}
          <div>
            <p className="text-xs text-zinc-400 mb-1.5">Quick review ideas (click to use):</p>
            <div className="flex flex-wrap gap-1.5">
              {quickTemplates.map((tmpl, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => handleApplyTemplate(tmpl)}
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-[#dfb76c]/40 hover:text-white transition"
                >
                  + {tmpl.slice(0, 35)}...
                </button>
              ))}
            </div>
          </div>

          {/* Name & Outfit Tag */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Anitha Sharma"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-black/60 border border-zinc-800 rounded-xl text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-[#dfb76c]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1">
                Collection / Outfit
              </label>
              <input
                type="text"
                placeholder="e.g. Bridal Lehanga / Silk Saree"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-black/60 border border-zinc-800 rounded-xl text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-[#dfb76c]"
              />
            </div>
          </div>

          {/* Review Title */}
          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1">
              Headline
            </label>
            <input
              type="text"
              placeholder="e.g. Exceptional quality and exquisite royal finish!"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-black/60 border border-zinc-800 rounded-xl text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-[#dfb76c]"
            />
          </div>

          {/* Review Body */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-medium text-zinc-400">
                Your Review *
              </label>
              {content && (
                <button
                  type="button"
                  onClick={handleCopyReview}
                  className="text-[11px] text-[#dfb76c] flex items-center gap-1 hover:underline"
                >
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied text!' : 'Copy for Google'}</span>
                </button>
              )}
            </div>
            <textarea
              required
              rows={3}
              placeholder="Tell us what you loved about your experience, fitting, and designs..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-black/60 border border-zinc-800 rounded-xl text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-[#dfb76c]"
            ></textarea>
          </div>

          {/* Modal Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl gold-gradient-bg text-black font-bold text-sm shadow-xl hover:brightness-110 transition cursor-pointer"
            >
              <span>Submit & Open Google Review</span>
              <ExternalLink className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white text-sm transition"
            >
              Cancel
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
