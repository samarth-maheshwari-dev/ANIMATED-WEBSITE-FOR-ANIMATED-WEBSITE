// FSSAI-standard indicator: green square with green circle = veg;
// red square with red circle = non-veg
export default function VegDot({ isVeg }) {
  const color = isVeg ? 'border-green-500' : 'border-red-500'
  const fill  = isVeg ? 'bg-green-500'     : 'bg-red-500'
  return (
    <div className={`w-5 h-5 rounded-[3px] border-2 ${color} bg-white
                     flex items-center justify-center`}
         aria-label={isVeg ? 'Vegetarian' : 'Non-vegetarian'}
         role="img">
      <div className={`w-2.5 h-2.5 rounded-full ${fill}`} />
    </div>
  )
}
