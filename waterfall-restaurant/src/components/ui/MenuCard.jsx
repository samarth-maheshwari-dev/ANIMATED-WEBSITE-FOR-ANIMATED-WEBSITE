import VegDot from '@components/ui/VegDot'

export default function MenuCard({ item }) {
  return (
    <div className="bg-stone-900 border border-primary/5 rounded-2xl overflow-hidden cursor-default group hover:border-primary/40 hover:scale-[1.03] hover:shadow-premium transition-all duration-500 ease-out">
      <div 
        className="w-full h-48 relative flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #161616 0%, #0A0A0A 100%)' }}
      >
        <span className="font-accent text-8xl text-primary/10 select-none font-bold leading-none transform group-hover:scale-125 transition-transform duration-700">
          {item.name.charAt(0)}
        </span>
        <div className="absolute top-3 right-3 z-10">
          <VegDot isVeg={item.isVeg} />
        </div>
        
        {/* Animated Golden Shine */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="font-display text-white text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          <span className="text-primary font-bold text-sm whitespace-nowrap">
            {item.price ? `₹${item.price}` : '₹—'}
          </span>
        </div>
        <p className="font-body text-stone-500 text-xs leading-relaxed line-clamp-2">
          {item.description}
        </p>
      </div>
    </div>
  )
}
