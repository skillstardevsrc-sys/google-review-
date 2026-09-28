import React from 'react';
import logoImg from '../assets/logo.png';
import { Star, ExternalLink, Settings, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenGiveReview, onOpenConfig, googleReviewUrl }) {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#08080a]/90 border-b border-[#dfb76c]/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#dfb76c] to-[#a98038] rounded-full blur-sm opacity-40 group-hover:opacity-75 transition duration-300"></div>
              <img 
                src={logoImg} 
                alt="ROKEA BY RK Logo" 
                className="relative h-12 w-12 object-contain rounded-full border border-[#dfb76c]/50 bg-black p-0.5"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-widest gold-gradient-text uppercase">
                  ROKEA
                </span>
                <span className="text-[10px] tracking-widest text-[#dfb76c] uppercase border border-[#dfb76c]/30 px-1.5 py-0.5 rounded">
                  BY RK
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 font-light tracking-wider">
                LUXURY COUTURE & ATELIER
              </p>
            </div>
          </div>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            <a href="#overview" className="hover:text-[#dfb76c] transition-colors flex items-center gap-1.5">
              <span>Overview</span>
            </a>
            <a href="#ratings" className="hover:text-[#dfb76c] transition-colors flex items-center gap-1.5">
              <span>Ratings</span>
            </a>
            <a href="#reviews" className="hover:text-[#dfb76c] transition-colors flex items-center gap-1.5">
              <span>Client Reviews</span>
            </a>
            <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#dfb76c]/10 border border-[#dfb76c]/30 text-[#dfb76c] text-xs">
              <Star className="w-3.5 h-3.5 fill-[#dfb76c] text-[#dfb76c]" />
              <span className="font-bold">4.9 / 5.0</span>
              <span className="text-zinc-400 ml-1">(250+ Google Reviews)</span>
            </div>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Quick config for Google Link */}
            <button
              onClick={onOpenConfig}
              title="Configure Google Review URL"
              className="p-2.5 text-zinc-400 hover:text-[#dfb76c] hover:bg-[#dfb76c]/10 rounded-xl transition border border-transparent hover:border-[#dfb76c]/20"
            >
              <Settings className="w-4 h-4" />
            </button>

            {/* Main "Give Review" Button */}
            <button
              onClick={onOpenGiveReview}
              className="relative group overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-[#dfb76c]/50 active:scale-95 transition"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#dfb76c] via-[#f7e6be] to-[#b3893a] transition-all duration-300 group-hover:opacity-100 opacity-90 animate-pulse"></span>
              <span className="relative flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-[11px] bg-black text-[#dfb76c] group-hover:bg-[#121214] font-semibold text-sm transition duration-200">
                <Sparkles className="w-4 h-4 text-[#dfb76c] group-hover:rotate-12 transition-transform" />
                <span>Give Review</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
