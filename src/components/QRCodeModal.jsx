import React, { useState, useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { X, Download, Printer, QrCode, Sparkles, Check, Star, ExternalLink } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function QRCodeModal({ isOpen, onClose, googleReviewUrl }) {
  const [copied, setCopied] = useState(false);
  const [targetType, setTargetType] = useState('GOOGLE'); // GOOGLE or WEBSITE
  const qrRef = useRef(null);

  if (!isOpen) return null;

  const currentSiteUrl = typeof window !== 'undefined' ? window.location.href : 'http://localhost:5173';
  const activeUrl = targetType === 'GOOGLE' ? googleReviewUrl : currentSiteUrl;

  const handleDownload = () => {
    // Download the generated high-res QR code
    const link = document.createElement('a');
    link.href = '/rokea-review-qr.png';
    link.download = 'ROKEA_BY_RK_Review_QR.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(activeUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-md bg-[#241710] border-2 border-[#dfb76c] rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(223,183,108,0.35)] text-[#f8f3ed] text-center space-y-6 animate-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#c9b7a5] hover:text-white rounded-full bg-[#180f0a] border border-[#3d291d] hover:border-[#dfb76c]/50 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dfb76c]/15 text-[#dfb76c] text-[11px] font-bold tracking-wider uppercase border border-[#dfb76c]/40 mb-1">
            <QrCode className="w-3.5 h-3.5" />
            <span>Store Standee & Review QR</span>
          </div>
          <h3 className="font-serif-luxury text-2xl font-extrabold gold-gradient-text uppercase">
            ROKEA Review QR
          </h3>
          <p className="text-xs text-[#d6c4b2] font-light">
            Scan with any phone camera to open & give instant review
          </p>
        </div>

        {/* Royal QR Standee Frame */}
        <div 
          ref={qrRef}
          className="relative p-6 rounded-3xl bg-gradient-to-b from-[#180f0a] via-[#1f130c] to-[#120a06] border-2 border-[#dfb76c]/60 shadow-[0_10px_35px_rgba(0,0,0,0.6)] flex flex-col items-center space-y-4"
        >
          {/* Logo & Brand Header */}
          <div className="flex items-center gap-2.5">
            <img
              src={logoImg}
              alt="ROKEA BY RK"
              className="w-8 h-8 rounded-full border border-[#dfb76c]/50 p-0.5 bg-black object-contain"
            />
            <div className="text-left">
              <h4 className="font-serif-luxury text-xs font-bold tracking-widest gold-gradient-text uppercase">
                ROKEA BY RK
              </h4>
              <p className="text-[9px] text-[#c9b7a5] tracking-wider uppercase">
                Haute Couture Atelier
              </p>
            </div>
          </div>

          {/* QR Code with Gold styling and Logo Center */}
          <div className="relative p-3 rounded-2xl bg-[#170f0a] border border-[#dfb76c]/40 shadow-inner flex items-center justify-center">
            <QRCodeSVG
              value={activeUrl}
              size={190}
              level="H"
              fgColor="#dfb76c"
              bgColor="#170f0a"
              imageSettings={{
                src: logoImg,
                x: undefined,
                y: undefined,
                height: 38,
                width: 38,
                excavate: true,
              }}
            />
          </div>

          {/* Stars & Prompt */}
          <div className="space-y-1">
            <div className="flex items-center justify-center gap-1 text-[#dfb76c]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#dfb76c]" />
              ))}
            </div>
            <p className="text-xs font-bold text-white tracking-wide">
              ⭐ Scan to Leave a 5-Star Review ⭐
            </p>
            <p className="text-[10px] text-[#dfb76c] font-mono truncate max-w-[240px]">
              {activeUrl}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-1">
          <div className="flex gap-2.5">
            <button
              onClick={handleDownload}
              className="flex-1 py-3 px-4 rounded-xl gold-gradient-bg text-[#150d08] font-bold text-xs flex items-center justify-center gap-2 shadow-lg hover:brightness-110 active:scale-95 transition cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download High-Res QR</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="py-3 px-4 rounded-xl bg-[#180f0a] border border-[#3d291d] text-[#c9b7a5] hover:text-white text-xs font-medium hover:border-[#dfb76c]/40 transition cursor-pointer flex items-center gap-1.5"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <ExternalLink className="w-4 h-4" />}
              <span>{copied ? 'Copied!' : 'Copy Link'}</span>
            </button>
          </div>

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
