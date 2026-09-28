import React, { useState } from 'react';
import { Star, CheckCircle2, ThumbsUp, Share2, Sparkles } from 'lucide-react';

export default function ReviewCard({ review }) {
  const [helpful, setHelpful] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(review.helpfulCount || 0);
  const [copied, setCopied] = useState(false);

  const handleHelpful = () => {
    if (!helpful) {
      setHelpful(true);
      setHelpfulCount(c => c + 1);
    } else {
      setHelpful(false);
      setHelpfulCount(c => c - 1);
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`"${review.content}" — ${review.author} on ROKEA BY RK`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="gold-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-4 transition-all duration-300">
      
      {/* Header: Author Info, Rating & Platform */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3.5">
          {/* Avatar */}
          <div className="relative">
            {review.avatar ? (
              <img
                src={review.avatar}
                alt={review.author}
                className="w-12 h-12 rounded-full object-cover border border-[#dfb76c]/50 p-0.5 bg-black"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#dfb76c]/20 to-black border border-[#dfb76c]/40 flex items-center justify-center font-bold text-[#dfb76c]">
                {review.author.charAt(0)}
              </div>
            )}
            <div className="absolute -bottom-1 -right-1 bg-black rounded-full p-0.5 border border-[#dfb76c]/40">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#dfb76c]" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-semibold text-white text-base">{review.author}</h4>
            </div>
            
            <div className="flex items-center gap-2 text-xs text-zinc-400 mt-0.5">
              <span className="text-[#dfb76c] font-medium">{review.tag || 'Couture Client'}</span>
              <span>•</span>
              <span>{review.date}</span>
            </div>
          </div>
        </div>

        {/* Google Review Badge */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#18181b] border border-zinc-700/60 text-[11px] text-zinc-300">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
          </svg>
          <span className="hidden sm:inline">Google Verified</span>
        </div>
      </div>

      {/* Star Rating */}
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < review.rating ? 'fill-[#dfb76c] text-[#dfb76c]' : 'text-zinc-700'
            }`}
          />
        ))}
      </div>

      {/* Review Content */}
      <div className="space-y-2">
        {review.title && (
          <h5 className="font-semibold text-zinc-100 text-sm sm:text-base leading-snug">
            "{review.title}"
          </h5>
        )}
        <p className="text-zinc-300 text-sm leading-relaxed font-light">
          {review.content}
        </p>
      </div>

      {/* Images if available */}
      {review.images && review.images.length > 0 && (
        <div className="flex items-center gap-2 pt-1 overflow-x-auto">
          {review.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="Client review photo"
              className="h-20 w-20 object-cover rounded-xl border border-[#dfb76c]/30 hover:scale-105 transition cursor-pointer"
            />
          ))}
        </div>
      )}

      {/* Card Footer: Helpful button & Share */}
      <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
        <button
          onClick={handleHelpful}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition ${
            helpful
              ? 'bg-[#dfb76c]/20 border-[#dfb76c] text-[#dfb76c]'
              : 'border-zinc-800 hover:border-zinc-700 hover:text-zinc-200'
          }`}
        >
          <ThumbsUp className={`w-3.5 h-3.5 ${helpful ? 'fill-[#dfb76c]' : ''}`} />
          <span>Helpful ({helpfulCount})</span>
        </button>

        <button
          onClick={handleShare}
          className="flex items-center gap-1.5 hover:text-[#dfb76c] transition p-1.5 rounded-lg"
          title="Share review"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>{copied ? 'Copied!' : 'Share'}</span>
        </button>
      </div>

    </div>
  );
}
