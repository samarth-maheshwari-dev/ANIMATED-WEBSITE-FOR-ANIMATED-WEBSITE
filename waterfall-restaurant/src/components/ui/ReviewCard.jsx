import StarRating from '@components/ui/StarRating'

export default function ReviewCard({ review }) {
  return (
    <div className="bg-teal-900 border border-teal-800 rounded-3xl p-8 shadow-2xl relative transition-all duration-500 hover:border-teal-600 group">
      {/* Quote Mark Decoration */}
      <span 
        className="absolute top-6 right-6 font-accent text-8xl text-teal-700/50 leading-none select-none pointer-events-none group-hover:text-teal-400/10 transition-colors"
        aria-hidden="true"
      >
        "
      </span>

      {/* Review Content */}
      <div className="relative z-10 flex flex-col h-full min-h-[160px]">
        <p className="font-body text-stone-200 text-base md:text-lg italic leading-relaxed mb-8 flex-grow">
          "{review.text}"
        </p>

        {/* Bottom Metadata */}
        <div className="flex justify-between items-center mt-auto">
          <div className="flex flex-col gap-1">
            <h4 className="font-display text-white text-base font-bold">
              {review.name}
            </h4>
            <div className="flex items-center gap-2">
              <span className="bg-teal-950 border border-teal-800 text-teal-400 text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full inline-block">
                Google Review
              </span>
              <span className="text-stone-500 text-[10px] uppercase tracking-widest">
                {review.date}
              </span>
            </div>
          </div>
          
          {/* Star Rating Right-Aligned */}
          <div className="flex flex-col items-end gap-1">
            <StarRating rating={review.rating} size="sm" />
            <span className="text-[10px] text-stone-400 font-medium">Verified Visit</span>
          </div>
        </div>
      </div>
    </div>
  )
}
