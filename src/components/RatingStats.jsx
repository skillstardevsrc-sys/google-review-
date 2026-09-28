import React from 'react';
import { Star, CheckCircle, Sparkles, ExternalLink } from 'lucide-react';

export default function RatingStats({ reviews, onOpenGiveReview, googleReviewUrl }) {
  // Compute dynamic stats based on reviews
  const total = reviews.length;
  const ratingCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  
  reviews.forEach(r => {
    if (ratingCounts[r.rating] !== undefined) {
      ratingCounts[r.rating]++;
    }
  });

  const averageRating = (
    reviews.reduce((acc, r) => acc + r.rating, 0) / (total || 1)
  ).toFixed(1);

  return (
    <section id="ratings" className="py-12 bg-gradient-to-b from-[#08080a] via-[#0e0e12] to-[#08080a] border-y border-[#dfb76c]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-2 mb-10">
          <p className="text-xs font-semibold tracking-widest text-[#dfb76c] uppercase">
            Ratings & Feedback Summary
          </p>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
            Client Rating Overview
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Rating Score Card */}
          <div className="lg:col-span-4 gold-card rounded-2xl p-8 flex flex-col justify-between text-center relative overflow-hidden">
            <div className="space-y-4">
              <span className="text-xs tracking-wider text-zinc-400 uppercase font-medium">Overall Score</span>
              <div className="font-serif-luxury text-6xl sm:text-7xl font-bold gold-gradient-text tracking-tight">
                {averageRating}
              </div>
              
              <div className="flex justify-center items-center gap-1.5 text-[#dfb76c]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#dfb76c]" />
                ))}
              </div>
              
              <p className="text-sm text-zinc-300">
                Based on <strong className="text-white">250+</strong> authenticated reviews across Google & Direct Clients
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#dfb76c]/20">
              <a
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl gold-gradient-bg text-black font-semibold text-sm hover:brightness-110 transition cursor-pointer"
              >
                <span>Write a Google Review</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Star Distribution Bars */}
          <div className="lg:col-span-5 gold-card rounded-2xl p-8 flex flex-col justify-center space-y-4">
            <h3 className="text-sm font-semibold text-zinc-200 tracking-wide uppercase border-b border-zinc-800 pb-3">
              Rating Distribution
            </h3>

            {[5, 4, 3, 2, 1].map((stars) => {
              const count = ratingCounts[stars] || 0;
              const percentage = total > 0 ? Math.round((count / total) * 100) : 0;
              return (
                <div key={stars} className="flex items-center gap-3 text-sm">
                  <div className="flex items-center gap-1 w-16 text-zinc-300 font-medium">
                    <span>{stars}</span>
                    <Star className="w-3.5 h-3.5 fill-[#dfb76c] text-[#dfb76c]" />
                  </div>

                  <div className="flex-1 h-3 rounded-full bg-zinc-800/90 overflow-hidden border border-zinc-700/30">
                    <div
                      className="h-full rounded-full gold-gradient-bg transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>

                  <div className="w-12 text-right text-xs text-zinc-400 font-mono">
                    {percentage}%
                  </div>
                </div>
              );
            })}
          </div>

          {/* Brand Pillars & Experience Highlights */}
          <div className="lg:col-span-3 gold-card rounded-2xl p-8 flex flex-col justify-between space-y-6">
            <h3 className="text-sm font-semibold text-zinc-200 tracking-wide uppercase border-b border-zinc-800 pb-3">
              Experience Highlights
            </h3>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-medium mb-1">
                  <span className="text-zinc-300">Design & Elegance</span>
                  <span className="text-[#dfb76c] font-bold">5.0 / 5.0</span>
                </div>
                <div className="h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                  <div className="h-full bg-[#dfb76c] rounded-full w-[100%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium mb-1">
                  <span className="text-zinc-300">Couture Fabric Quality</span>
                  <span className="text-[#dfb76c] font-bold">4.9 / 5.0</span>
                </div>
                <div className="h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                  <div className="h-full bg-[#dfb76c] rounded-full w-[98%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium mb-1">
                  <span className="text-zinc-300">Custom Fitting & Tailoring</span>
                  <span className="text-[#dfb76c] font-bold">4.9 / 5.0</span>
                </div>
                <div className="h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                  <div className="h-full bg-[#dfb76c] rounded-full w-[97%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium mb-1">
                  <span className="text-zinc-300">Customer Concierge</span>
                  <span className="text-[#dfb76c] font-bold">4.8 / 5.0</span>
                </div>
                <div className="h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                  <div className="h-full bg-[#dfb76c] rounded-full w-[95%]"></div>
                </div>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-zinc-400 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#dfb76c]" />
              <span>Verified Client Satisfaction Rate: 99.4%</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
