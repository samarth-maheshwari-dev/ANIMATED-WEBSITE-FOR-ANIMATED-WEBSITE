export default function StarRating({ rating = 5, size = 'md' }) {
  const sizeClass = size === 'sm' ? 'text-sm' : 'text-xl'
  return (
    <div className={`flex gap-0.5 ${sizeClass}`} aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map(star => (
        <span
          key={star}
          style={{ color: star <= rating ? '#D4AF37' : '#134E4A' }}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  )
}
