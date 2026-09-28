import React from 'react';
import logoImg from '../assets/logo.png';
import { Star, Heart, Mail, Phone, MapPin, Sparkles, MessageCircle, Globe } from 'lucide-react';

export default function Footer({ onOpenGiveReview, onOpenConfig, googleReviewUrl }) {
  return (
    <footer className="bg-[#050507] border-t border-[#dfb76c]/20 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="ROKEA BY RK"
                className="h-12 w-12 object-contain rounded-full border border-[#dfb76c]/40 bg-black p-0.5"
              />
              <div>
                <span className="font-serif-luxury text-xl font-bold tracking-widest gold-gradient-text uppercase">
                  ROKEA BY RK
                </span>
                <p className="text-[11px] text-zinc-500 tracking-wider uppercase">
                  Haute Couture & Bespoke Luxury
                </p>
              </div>
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Curating ethereal bridal masterpieces, festive heirlooms, and bespoke fashion. Celebrating individual grace and timeless grandeur.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="#" 
                title="Instagram"
                className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-[#dfb76c] hover:border-[#dfb76c]/40 transition"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="#" 
                title="Facebook"
                className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-[#dfb76c] hover:border-[#dfb76c]/40 transition"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <a 
                href="mailto:contact@rokeabyrk.com" 
                title="Contact Mail"
                className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-[#dfb76c] hover:border-[#dfb76c]/40 transition"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                title="WhatsApp Concierge"
                className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-[#dfb76c] hover:border-[#dfb76c]/40 transition"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase border-b border-zinc-800 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#overview" className="hover:text-[#dfb76c] transition">Overview</a>
              </li>
              <li>
                <a href="#ratings" className="hover:text-[#dfb76c] transition">Rating Analysis</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#dfb76c] transition">Client Stories</a>
              </li>
              <li>
                <button onClick={onOpenGiveReview} className="hover:text-[#dfb76c] transition">
                  Give a Review
                </button>
              </li>
              <li>
                <button onClick={onOpenConfig} className="hover:text-[#dfb76c] transition">
                  Update Google Review Link
                </button>
              </li>
            </ul>
          </div>

          {/* Google Review Fast Action */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase border-b border-zinc-800 pb-2">
              Google Business
            </h4>
            <p className="text-xs text-zinc-400">
              Your feedback shapes our legacy. Click below to write a review directly on Google.
            </p>
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-2.5 px-4 rounded-xl gold-gradient-bg text-black font-semibold text-xs hover:brightness-110 transition shadow-md cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Give Review on Google</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} ROKEA BY RK. All Rights Reserved.</p>
          <div className="flex items-center gap-1 text-zinc-400">
            <span>Official Atelier Review Portal —</span>
            <span className="text-[#dfb76c] font-semibold">ROKEA BY RK</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
