import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Star, X, MessageCircle, Mail } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function ThankYouModal({ isOpen, onClose }) {
  const triggerCelebration = () => {
    // 1. Center Gold & Champagne Burst
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.55 },
      colors: ['#dfb76c', '#fae8b6', '#ffffff', '#c59b46', '#ffd700', '#f59e0b']
    });

    // 2. Left Cannon
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: ['#dfb76c', '#fae8b6', '#ffffff', '#38bdf8', '#f43f5e']
      });
    }, 200);

    // 3. Right Cannon
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: ['#dfb76c', '#fae8b6', '#ffffff', '#34d399', '#fbbf24']
      });
    }, 400);
  };

  useEffect(() => {
    if (isOpen) {
      triggerCelebration();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      
      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-gradient-to-b from-[#2a1a12] via-[#20130c] to-[#140b07] border-2 border-[#dfb76c] rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(223,183,108,0.4)] text-[#f8f3ed] text-center space-y-5 animate-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#c9b7a5] hover:text-white rounded-full bg-[#180f0a] border border-[#3d291d] hover:border-[#dfb76c]/50 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Floating Badge & Poppers */}
        <div className="flex flex-col items-center space-y-2.5">
          <div className="relative">
            {/* Pulsing Gold Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#dfb76c] to-[#fae8b6] rounded-full blur-md opacity-70 animate-pulse"></div>
            
            <div className="relative p-1 bg-black rounded-full border-2 border-[#dfb76c]">
              <img
                src={logoImg}
                alt="ROKEA BY RK"
                className="w-14 h-14 object-contain rounded-full"
              />
            </div>

            {/* Party Popper Floating Badge */}
            <div className="absolute -top-1 -right-2 bg-[#dfb76c] text-black p-1.5 rounded-full shadow-lg border border-black animate-bounce">
              <Sparkles className="w-3.5 h-3.5 fill-black" />
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dfb76c]/15 text-[#dfb76c] text-[11px] font-bold tracking-wider uppercase border border-[#dfb76c]/40">
            <span>🎉 Thank You So Much! 🎉</span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-1.5">
          <h3 className="font-serif-luxury text-2xl font-extrabold gold-gradient-text uppercase leading-tight">
            Review Submitted!
          </h3>
          <p className="text-xs text-[#d6c4b2] leading-relaxed font-light">
            Your valuable feedback on Google inspires our couture atelier. Thank you for choosing <strong className="text-white font-semibold">ROKEA BY RK</strong>.
          </p>
        </div>

        {/* 5-Star Experience Box */}
        <div className="p-3 rounded-2xl bg-[#170e08]/90 border border-[#dfb76c]/30 flex items-center justify-center gap-2">
          <div className="flex items-center gap-1 text-[#dfb76c]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#dfb76c] animate-pulse" style={{ animationDelay: `${i * 150}ms` }} />
            ))}
          </div>
          <span className="text-xs font-bold text-white ml-1">Royal Experience</span>
        </div>

        {/* Action Button */}
        <div className="flex gap-2 pt-1">
          <button
            onClick={triggerCelebration}
            className="flex-1 py-2.5 px-3 rounded-xl gold-gradient-bg text-[#150d08] font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg hover:brightness-110 active:scale-95 transition cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Celebrate Again 🎉</span>
          </button>
          
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl bg-[#180f0a] border border-[#3d291d] text-[#c9b7a5] hover:text-white text-xs font-medium hover:border-[#dfb76c]/40 transition cursor-pointer"
          >
            Done
          </button>
        </div>

        {/* Social Icons & Powered By in Popup */}
        <div className="pt-3 border-t border-[#3d291d] space-y-3">
          <p className="text-[11px] text-[#c9b7a5] font-medium tracking-wide">
            Connect with our Atelier:
          </p>
          
          <div className="flex items-center justify-center gap-3">
            {/* Instagram */}
            <a
              href="https://instagram.com/rokeabyrk"
              target="_blank"
              rel="noopener noreferrer"
              title="@rokeabyrk on Instagram"
              className="p-2.5 rounded-full bg-[#1c110a] border border-[#dfb76c]/30 text-[#dfb76c] hover:bg-[#dfb76c] hover:text-black hover:scale-115 transition duration-300 shadow-md"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917010394051"
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp: 7010394051"
              className="p-2.5 rounded-full bg-[#1c110a] border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-black hover:scale-115 transition duration-300 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1DbybhW7pm/"
              target="_blank"
              rel="noopener noreferrer"
              title="ROKEA BY RK on Facebook"
              className="p-2.5 rounded-full bg-[#1c110a] border border-[#dfb76c]/30 text-[#dfb76c] hover:bg-[#dfb76c] hover:text-black hover:scale-115 transition duration-300 shadow-md"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z"/>
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:rokeabyrk@gmail.com"
              title="Email: rokeabyrk@gmail.com"
              className="p-2.5 rounded-full bg-[#1c110a] border border-[#dfb76c]/30 text-[#dfb76c] hover:bg-[#dfb76c] hover:text-black hover:scale-115 transition duration-300 shadow-md"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Powered by Skillstar Digital Solutions */}
          <div className="pt-2 border-t border-[#3d291d]/60 text-[10px] text-[#9c8675]">
            <span>Powered by </span>
            <a
              href="https://www.skillstardigitalsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#dfb76c] hover:underline font-semibold transition"
            >
              Skillstar Digital Solutions
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
