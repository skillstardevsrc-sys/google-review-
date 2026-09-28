import React, { useState, useMemo } from 'react';
import ReviewCard from './ReviewCard';
import { Search, Filter, Star, Sparkles, SlidersHorizontal, Image } from 'lucide-react';

export default function ReviewList({ reviews, onOpenGiveReview, googleReviewUrl }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [starFilter, setStarFilter] = useState('ALL');
  const [sortBy, setSortBy] = useState('NEWEST');
  const [onlyPhotos, setOnlyPhotos] = useState(false);

  const filteredReviews = useMemo(() => {
    return reviews.filter(r => {
      // Search term filter
      const matchesSearch = 
        r.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (r.title && r.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (r.tag && r.tag.toLowerCase().includes(searchTerm.toLowerCase()));

      // Star filter
      const matchesStar = starFilter === 'ALL' || r.rating === Number(starFilter);

      // Photos only filter
      const matchesPhotos = !onlyPhotos || (r.images && r.images.length > 0);

      return matchesSearch && matchesStar && matchesPhotos;
    }).sort((a, b) => {
      if (sortBy === 'HIGHEST') return b.rating - a.rating;
      if (sortBy === 'HELPFUL') return (b.helpfulCount || 0) - (a.helpfulCount || 0);
      return b.id - a.id; // Newest
    });
  }, [reviews, searchTerm, starFilter, sortBy, onlyPhotos]);

  return (
    <section id="reviews" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header and Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#dfb76c] uppercase mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Community Feedback</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white">
            Client Testimonials ({reviews.length})
          </h2>
        </div>

        {/* Action Button */}
        <button
          onClick={onOpenGiveReview}
          className="self-start md:self-auto flex items-center gap-2 px-5 py-2.5 rounded-xl gold-gradient-bg text-black font-semibold text-sm hover:brightness-110 transition shadow-lg"
        >
          <Sparkles className="w-4 h-4" />
          <span>Write a Review</span>
        </button>
      </div>

      {/* Filter and Search Bar Container */}
      <div className="bg-[#101014] border border-[#dfb76c]/20 rounded-2xl p-4 sm:p-5 mb-8 shadow-xl space-y-4">
        
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search by keywords (e.g. bridal, fabric, fitting, couture)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-black/60 border border-zinc-800 rounded-xl text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-[#dfb76c] transition"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-black/60 border border-zinc-800 text-zinc-300 text-sm rounded-xl px-4 py-2.5 pr-8 focus:outline-none focus:border-[#dfb76c] transition cursor-pointer"
              >
                <option value="NEWEST">Most Recent</option>
                <option value="HIGHEST">Highest Rated</option>
                <option value="HELPFUL">Most Helpful</option>
              </select>
              <SlidersHorizontal className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-zinc-800/80">
          <span className="text-xs text-zinc-400 font-medium mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Filter by:
          </span>

          <button
            onClick={() => setStarFilter('ALL')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              starFilter === 'ALL'
                ? 'bg-[#dfb76c] text-black font-semibold shadow-md'
                : 'bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-[#dfb76c]/40'
            }`}
          >
            All Stars
          </button>

          {[5, 4, 3].map((star) => (
            <button
              key={star}
              onClick={() => setStarFilter(star.toString())}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                starFilter === star.toString()
                  ? 'bg-[#dfb76c] text-black font-semibold shadow-md'
                  : 'bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-[#dfb76c]/40'
              }`}
            >
              <span>{star}</span>
              <Star className="w-3 h-3 fill-current" />
            </button>
          ))}

          <button
            onClick={() => setOnlyPhotos(!onlyPhotos)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              onlyPhotos
                ? 'bg-[#dfb76c] text-black font-semibold shadow-md'
                : 'bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-[#dfb76c]/40'
            }`}
          >
            <Image className="w-3 h-3" />
            <span>With Photos</span>
          </button>

          {(searchTerm || starFilter !== 'ALL' || onlyPhotos) && (
            <button
              onClick={() => {
                setSearchTerm('');
                setStarFilter('ALL');
                setOnlyPhotos(false);
              }}
              className="text-xs text-zinc-400 hover:text-[#dfb76c] underline ml-auto transition"
            >
              Reset Filters
            </button>
          )}
        </div>

      </div>

      {/* Reviews Grid */}
      {filteredReviews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 bg-[#101014] border border-zinc-800 rounded-2xl">
          <p className="text-zinc-400 text-base mb-4">No reviews matched your filter criteria.</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setStarFilter('ALL');
              setOnlyPhotos(false);
            }}
            className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold transition"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Bottom CTA Banner */}
      <div className="mt-16 p-8 sm:p-10 rounded-3xl relative overflow-hidden bg-gradient-to-r from-[#181611] via-[#241f15] to-[#121216] border border-[#dfb76c]/30 text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-3">
          <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold gold-gradient-text uppercase">
            Have You Worn ROKEA BY RK?
          </h3>
          <p className="text-zinc-300 text-sm sm:text-base font-light">
            Your reviews help discerning clients around the globe experience our luxury couture. Share your story on Google today.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-3 rounded-xl gold-gradient-bg text-black font-bold text-sm shadow-xl hover:brightness-110 transition cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Leave Google Review Now</span>
          </a>
        </div>
      </div>

    </section>
  );
}
