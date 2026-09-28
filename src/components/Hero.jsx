import React from 'react';
import logoImg from '../assets/logo.png';
import { Star, ShieldCheck, Sparkles, ExternalLink, HeartHandshake, Award } from 'lucide-react';

export default function Hero({ onOpenGiveReview, googleReviewUrl }) {
  const handleDirectGoogle = () => {
    window.open(googleReviewUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="overview" className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
      {/* Background Decorative Gold Light Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#dfb76c]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-10 left-10 w-48 h-48 bg-[#c59b46]/5 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute top-40 right-10 w-64 h-64 bg-[#f4e1a4]/5 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          
          {/* Royal Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e1c17] border border-[#dfb76c]/30 text-[#dfb76c] text-xs font-semibold tracking-wider uppercase shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-[#dfb76c]" />
            <span>Official Client Experience & Google Reviews</span>
          </div>

          {/* Logo Showcase with Royal Halo */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#dfb76c]/30 via-[#f6e6be]/20 to-[#a98038]/30 rounded-3xl blur-xl group-hover:blur-2xl transition duration-500"></div>
            <div className="relative p-3 bg-gradient-to-b from-[#1c1a14] to-[#0c0c0e] rounded-3xl border border-[#dfb76c]/40 shadow-2xl">
              <img 
                src={logoImg} 
                alt="ROKEA BY RK" 
                className="w-28 h-28 sm:w-36 sm:h-36 object-contain rounded-2xl mx-auto drop-shadow-[0_10px_20px_rgba(223,183,108,0.25)]" 
              />
            </div>
          </div>

          {/* Headline & Subtitle */}
          <div className="space-y-4">
            <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight gold-gradient-text leading-tight uppercase">
              ROKEA BY RK
            </h1>
            <p className="text-zinc-300 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              Experience the pinnacle of royal craftsmanship and couture fashion. Your thoughts inspire our masterpieces.
            </p>
          </div>

          {/* Google Review Score Pill */}
          <div className="inline-flex flex-wrap items-center justify-center gap-4 p-3 sm:px-6 sm:py-3 rounded-2xl bg-[#141418]/90 border border-[#dfb76c]/30 shadow-xl backdrop-blur-md">
            {/* Google G Icon */}
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span className="font-semibold text-white text-sm">Google Rating</span>
            </div>

            <div className="h-5 w-[1px] bg-zinc-700 hidden sm:block"></div>

            {/* Stars */}
            <div className="flex items-center gap-1 text-[#dfb76c]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#dfb76c]" />
              ))}
            </div>

            <div className="flex items-center gap-1.5 text-sm">
              <span className="font-bold text-white text-base">4.9</span>
              <span className="text-zinc-400">/ 5.0</span>
              <span className="text-[#dfb76c] font-medium ml-1">(250+ Verified Reviews)</span>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
            {/* Primary "Give Review" button */}
            <button
              onClick={handleDirectGoogle}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl gold-gradient-bg text-black font-bold text-base shadow-[0_4px_25px_rgba(223,183,108,0.35)] hover:shadow-[0_6px_35px_rgba(223,183,108,0.5)] transition duration-300 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#000000" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#000000" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#000000" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#000000" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>Give Review on Google</span>
              <ExternalLink className="w-4 h-4" />
            </button>

            {/* Secondary Option: Share Feedback / Form */}
            <button
              onClick={onOpenGiveReview}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#121216] text-[#dfb76c] border border-[#dfb76c]/40 font-semibold text-base hover:bg-[#dfb76c]/10 hover:border-[#dfb76c] transition duration-300"
            >
              <Sparkles className="w-4 h-4 text-[#dfb76c]" />
              <span>Write Feedback & Rate</span>
            </button>
          </div>

          {/* Trust Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 w-full border-t border-zinc-800/80">
            <div className="flex items-center justify-center gap-2.5 text-zinc-300">
              <ShieldCheck className="w-5 h-5 text-[#dfb76c]" />
              <span className="text-xs sm:text-sm font-medium">100% Genuine Reviews</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 text-zinc-300">
              <Award className="w-5 h-5 text-[#dfb76c]" />
              <span className="text-xs sm:text-sm font-medium">Haute Couture Atelier</span>
            </div>
            <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2.5 text-zinc-300">
              <HeartHandshake className="w-5 h-5 text-[#dfb76c]" />
              <span className="text-xs sm:text-sm font-medium">99.4% Client Satisfaction</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
