import React, { useState, useEffect } from 'react';
import logoImg from './assets/logo.png';
import { Star, ExternalLink, Settings, CheckCircle2, MessageCircle, Mail, Sparkles, X, Check, RotateCcw, Heart, QrCode, Download } from 'lucide-react';
import { initialReviews, defaultGoogleReviewUrl } from './data/initialReviews';
import ThankYouModal from './components/ThankYouModal';
import QRCodeModal from './components/QRCodeModal';

function App() {
  const [reviews, setReviews] = useState(() => {
    try {
      const saved = localStorage.getItem('rokea_reviews');
      return saved ? JSON.parse(saved) : initialReviews;
    } catch {
      return initialReviews;
    }
  });

  const [googleReviewUrl, setGoogleReviewUrl] = useState(() => {
    try {
      const saved = localStorage.getItem('rokea_google_url');
      if (!saved || saved.includes('ChIJN1t_tDeuEmsRUsoyG83frY4')) {
        localStorage.setItem('rokea_google_url', defaultGoogleReviewUrl);
        return defaultGoogleReviewUrl;
      }
      return saved;
    } catch {
      return defaultGoogleReviewUrl;
    }
  });

  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const [isQrOpen, setIsQrOpen] = useState(false);
  const [tempUrl, setTempUrl] = useState(googleReviewUrl);
  const [urlSaved, setUrlSaved] = useState(false);
  const [likedReviews, setLikedReviews] = useState({});

  // Toggle helpful like on review
  const toggleLike = (id, e) => {
    e.stopPropagation();
    setLikedReviews((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Sync Google URL with localStorage
  const handleSaveUrl = (e) => {
    e.preventDefault();
    const finalUrl = tempUrl.trim() || defaultGoogleReviewUrl;
    setGoogleReviewUrl(finalUrl);
    localStorage.setItem('rokea_google_url', finalUrl);
    setUrlSaved(true);
    setTimeout(() => {
      setUrlSaved(false);
      setIsConfigOpen(false);
    }, 1000);
  };

  // Click handler to open Google Review
  const handleGiveReview = () => {
    sessionStorage.setItem('pending_review_thanks', 'true');
    window.open(googleReviewUrl, '_blank', 'noopener,noreferrer');
  };

  // Detect when user returns to this tab after giving review
  useEffect(() => {
    const handleVisibilityOrFocus = () => {
      if (document.visibilityState === 'visible') {
        const isPending = sessionStorage.getItem('pending_review_thanks');
        if (isPending === 'true') {
          sessionStorage.removeItem('pending_review_thanks');
          setTimeout(() => {
            setIsThankYouOpen(true);
          }, 300);
        }
      }
    };

    window.addEventListener('focus', handleVisibilityOrFocus);
    document.addEventListener('visibilitychange', handleVisibilityOrFocus);

    return () => {
      window.removeEventListener('focus', handleVisibilityOrFocus);
      document.removeEventListener('visibilitychange', handleVisibilityOrFocus);
    };
  }, []);

  // Duplicate reviews array for seamless infinite marquee loop
  const marqueeReviews = [...reviews, ...reviews];

  return (
    <div className="min-h-screen bg-[#170f0a] text-[#f8f3ed] flex flex-col items-center justify-between selection:bg-[#dfb76c]/40 selection:text-[#fae8b6] px-4 py-8 sm:py-12 overflow-x-hidden relative">
      
      {/* Dynamic Animated Ambient Background Orbs (Warm Brown & Gold Tones) */}
      <div className="fixed top-10 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-[#dfb76c]/12 rounded-full blur-[140px] pointer-events-none animate-aura"></div>
      <div className="fixed bottom-10 left-10 w-80 h-80 bg-[#7c4a24]/20 rounded-full blur-[110px] pointer-events-none"></div>
      <div className="fixed top-1/2 right-5 w-80 h-80 bg-[#dfb76c]/8 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center space-y-7 relative z-10">
        
        {/* 1. LOGO WITH FLOATING & WARM GOLD GLOW ANIMATION */}
        <div className="space-y-3 flex flex-col items-center animate-float">
          <div className="relative group cursor-pointer">
            {/* Animated Pulsing Gold Halo Ring */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#dfb76c] via-[#fae8b6] to-[#8c5828] rounded-full blur-lg opacity-60 group-hover:opacity-90 transition duration-700 animate-pulse"></div>
            
            <img
              src={logoImg}
              alt="ROKEA BY RK"
              className="relative w-28 h-28 sm:w-36 sm:h-36 object-contain rounded-full border-2 border-[#dfb76c] bg-[#120a06] p-1 shadow-[0_0_35px_rgba(223,183,108,0.45)] group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="space-y-1">
            <h1 className="font-serif-luxury text-3xl sm:text-4xl font-extrabold tracking-widest gold-gradient-text uppercase">
              ROKEA
            </h1>
            <div className="flex items-center justify-center gap-2">
              <span className="h-[1px] w-6 bg-gradient-to-r from-transparent to-[#dfb76c]"></span>
              <p className="text-[11px] sm:text-xs tracking-[0.3em] text-[#dfb76c] uppercase font-semibold">
                BY RK • LUXURY ATELIER
              </p>
              <span className="h-[1px] w-6 bg-gradient-to-l from-transparent to-[#dfb76c]"></span>
            </div>
          </div>
        </div>

        {/* 2. ANIMATED GIVE REVIEW BUTTON & SCAN QR BUTTON */}
        <div className="w-full max-w-md space-y-3">
          {/* Main Google Review Button */}
          <button
            onClick={handleGiveReview}
            className="w-full shimmer-btn gold-gradient-bg text-[#150d08] font-extrabold text-base sm:text-lg py-4 px-8 rounded-2xl shadow-[0_6px_30px_rgba(223,183,108,0.35)] hover:shadow-[0_10px_45px_rgba(223,183,108,0.6)] hover:scale-[1.03] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer border border-[#fae8b6]/50"
          >
            {/* Google Icon */}
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
              <path fill="#150d08" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#150d08" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#150d08" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#150d08" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            <span className="tracking-wide">Give Review on Google</span>
            <ExternalLink className="w-4 h-4 opacity-80 animate-bounce" />
          </button>

          {/* Secondary Scan/Download QR Button */}
          <button
            onClick={() => setIsQrOpen(true)}
            className="w-full py-3 px-6 rounded-2xl bg-[#241710] border border-[#dfb76c]/40 text-[#dfb76c] hover:bg-[#dfb76c]/15 hover:border-[#dfb76c] font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <QrCode className="w-4 h-4 text-[#dfb76c]" />
            <span>Show / Download Standee QR Code</span>
          </button>
          
          <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs text-[#d6c4b2]/70">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#dfb76c]" /> 1-Click direct review submission
            </span>
            <span>•</span>
            <button
              onClick={() => {
                setTempUrl(googleReviewUrl);
                setIsConfigOpen(true);
              }}
              className="text-[#dfb76c] hover:underline flex items-center gap-1 cursor-pointer transition"
            >
              <Settings className="w-3 h-3" />
              <span>Edit Link</span>
            </button>
          </div>
        </div>

        {/* 3. CURRENT RATINGS STATS BOX IN RICH BROWN & GOLD */}
        <div className="w-full max-w-md brown-gold-card rounded-2xl p-4 sm:p-5 shadow-2xl flex items-center justify-between gap-4 border border-[#dfb76c]/30">
          <div className="flex items-center gap-3.5">
            <div className="font-serif-luxury text-4xl sm:text-5xl font-extrabold gold-gradient-text">
              4.9
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1 text-[#dfb76c]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#dfb76c] transition-transform hover:scale-125" />
                ))}
              </div>
              <p className="text-[11px] text-[#c9b7a5] mt-0.5">
                Overall Google Rating
              </p>
            </div>
          </div>

          <div className="h-10 w-[1px] bg-[#dfb76c]/30"></div>

          <div className="text-right">
            <p className="text-[#fbf7f2] font-bold text-sm sm:text-base">250+ Reviews</p>
            <p className="text-emerald-400 text-xs font-semibold flex items-center justify-end gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              99.4% Positive
            </p>
          </div>
        </div>

        {/* 4. RECENT REVIEWS — CONTINUOUS SMOOTH MARQUEE BOX IN BROWN & GOLD */}
        <div className="w-full space-y-3.5 pt-2 text-left">
          
          <div className="flex items-center justify-between px-2">
            <h2 className="font-serif-luxury text-sm sm:text-base font-bold text-[#fbf7f2] uppercase tracking-wider flex items-center gap-2">
              <span className="gold-gradient-text">Recent Client Reviews</span>
              <span className="text-[10px] font-medium text-[#dfb76c] px-2 py-0.5 rounded-full bg-[#dfb76c]/15 border border-[#dfb76c]/30">
                Live Feed
              </span>
            </h2>
            <span className="text-[11px] text-[#b8a492] italic hidden sm:inline">
              Hover to pause scroll
            </span>
          </div>

          {/* Marquee Container with smooth left & right gradient fade mask */}
          <div className="w-full overflow-hidden marquee-mask py-3">
            <div className="animate-marquee gap-4 flex items-stretch">
              {marqueeReviews.map((review, idx) => {
                const isLiked = likedReviews[`${review.id}-${idx}`];
                return (
                  <div
                    key={`${review.id}-${idx}`}
                    className="w-[300px] sm:w-[350px] flex-shrink-0 brown-gold-card rounded-2xl p-5 flex flex-col justify-between space-y-3 cursor-grab active:cursor-grabbing border border-[#dfb76c]/25 shadow-xl"
                  >
                    {/* Author & Header */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#dfb76c]/35 to-[#1c110a] border border-[#dfb76c]/60 flex items-center justify-center font-bold text-xs text-[#dfb76c] shadow-inner">
                          {review.author.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-semibold text-[#fbf7f2] text-xs sm:text-sm truncate max-w-[130px]">
                              {review.author}
                            </h4>
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#dfb76c] flex-shrink-0" />
                          </div>
                          <p className="text-[10px] text-[#c9b7a5] truncate max-w-[140px]">
                            {review.tag || 'Couture Client'} • {review.date}
                          </p>
                        </div>
                      </div>

                      {/* Mini Stars */}
                      <div className="flex items-center gap-0.5 text-[#dfb76c]">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < review.rating ? 'fill-[#dfb76c]' : 'text-zinc-700'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Review Content */}
                    <p className="text-[#ebe1d7] text-xs sm:text-[13px] leading-relaxed font-light line-clamp-3">
                      "{review.content}"
                    </p>

                    {/* Footer / Interaction in Marquee */}
                    <div className="pt-2 border-t border-[#dfb76c]/15 flex items-center justify-between text-[10px] text-[#b8a492]">
                      <span className="flex items-center gap-1 text-[#d6c4b2]">
                        <svg className="w-3 h-3" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                        </svg>
                        <span>Google Verified</span>
                      </span>

                      <button
                        onClick={(e) => toggleLike(`${review.id}-${idx}`, e)}
                        className={`flex items-center gap-1 px-2 py-0.5 rounded-md transition ${
                          isLiked ? 'text-[#dfb76c] font-bold bg-[#dfb76c]/15' : 'hover:text-[#f8f3ed]'
                        }`}
                      >
                        <Heart className={`w-3 h-3 ${isLiked ? 'fill-[#dfb76c]' : ''}`} />
                        <span>{isLiked ? (review.helpfulCount || 10) + 1 : (review.helpfulCount || 10)}</span>
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* 5. SOCIAL ICONS WITH FLOATING HOVER & FOOTER */}
        <div className="w-full pt-4 border-t border-[#3d291d] flex flex-col items-center space-y-4">
          <div className="flex items-center gap-4">
            
            {/* Instagram: rokeabyrk */}
            <a
              href="https://instagram.com/rokeabyrk"
              target="_blank"
              rel="noopener noreferrer"
              title="@rokeabyrk on Instagram"
              className="p-3 rounded-full bg-[#241710] border border-[#dfb76c]/25 text-[#d6c4b2] hover:text-[#dfb76c] hover:border-[#dfb76c] hover:scale-125 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(223,183,108,0.35)]"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* WhatsApp: 7010394051 */}
            <a
              href="https://wa.me/917010394051"
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp: 7010394051"
              className="p-3 rounded-full bg-[#241710] border border-[#dfb76c]/25 text-[#d6c4b2] hover:text-emerald-400 hover:border-emerald-500/50 hover:scale-125 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(52,211,153,0.35)]"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Facebook: rokeabyrk */}
            <a
              href="https://facebook.com/rokeabyrk"
              target="_blank"
              rel="noopener noreferrer"
              title="rokeabyrk on Facebook"
              className="p-3 rounded-full bg-[#241710] border border-[#dfb76c]/25 text-[#d6c4b2] hover:text-[#dfb76c] hover:border-[#dfb76c] hover:scale-125 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(223,183,108,0.35)]"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z"/>
              </svg>
            </a>

            {/* Email: rokeabyrk@gmail.com */}
            <a
              href="mailto:rokeabyrk@gmail.com"
              title="Email: rokeabyrk@gmail.com"
              className="p-3 rounded-full bg-[#241710] border border-[#dfb76c]/25 text-[#d6c4b2] hover:text-[#dfb76c] hover:border-[#dfb76c] hover:scale-125 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(223,183,108,0.35)]"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-col items-center gap-1.5 text-[11px] text-[#9c8675]">
            <p>📧 rokeabyrk@gmail.com • 📞 +91 7010394051</p>
            <p>© {new Date().getFullYear()} ROKEA BY RK • All Rights Reserved</p>
            
            {/* Powered by Skillstar Digital Solutions */}
            <div className="pt-2 flex items-center gap-1.5 text-xs">
              <span>Powered by</span>
              <a
                href="https://www.skillstardigitalsolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dfb76c] hover:text-[#fae8b6] font-semibold hover:underline transition inline-flex items-center gap-1"
              >
                <span>Skillstar Digital Solutions</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Celebration Thank You Pop-up with Party Poppers */}
      <ThankYouModal
        isOpen={isThankYouOpen}
        onClose={() => setIsThankYouOpen(false)}
      />

      {/* QR Code Standee & Download Modal */}
      <QRCodeModal
        isOpen={isQrOpen}
        onClose={() => setIsQrOpen(false)}
        googleReviewUrl={googleReviewUrl}
      />

      {/* Edit Google URL Modal in Brown & Gold */}
      {isConfigOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-[#241710] border border-[#dfb76c]/50 rounded-3xl p-6 shadow-2xl text-[#f8f3ed] text-left space-y-4">
            <button
              onClick={() => setIsConfigOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-[#d6c4b2] hover:text-white rounded-full bg-[#180f0a] border border-[#3d291d]"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-1">
              <h3 className="font-serif-luxury text-lg font-bold text-white">
                Set Google Review URL
              </h3>
              <p className="text-xs text-[#c9b7a5]">
                Paste your business Google Review link below:
              </p>
            </div>

            <form onSubmit={handleSaveUrl} className="space-y-3">
              <input
                type="url"
                required
                value={tempUrl}
                onChange={(e) => setTempUrl(e.target.value)}
                placeholder="https://search.google.com/local/writereview?..."
                className="w-full px-3.5 py-2.5 bg-[#170f0a] border border-[#3d291d] rounded-xl text-xs text-[#f8f3ed] placeholder-zinc-500 focus:outline-none focus:border-[#dfb76c]"
              />

              <div className="flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={() => setTempUrl(defaultGoogleReviewUrl)}
                  className="text-[#b8a492] hover:text-[#dfb76c] flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" /> Reset default
                </button>
              </div>

              <div className="pt-2 flex gap-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl gold-gradient-bg text-[#150d08] font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer hover:brightness-110 transition"
                >
                  {urlSaved ? <><Check className="w-4 h-4" /> Saved Successfully!</> : 'Save URL'}
                </button>
                <button
                  type="button"
                  onClick={() => setIsConfigOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-[#170f0a] border border-[#3d291d] text-[#c9b7a5] text-xs hover:text-white transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
