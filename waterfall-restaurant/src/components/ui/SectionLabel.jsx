// Renders the small label above every section heading
// e.g., "OUR STORY", "EXPLORE THE MENU", "VISIT US"
export default function SectionLabel({ children }) {
  return (
    <p className="font-accent text-primary text-sm tracking-[0.25em] uppercase mb-4 text-center lg:text-left">
      {children}
    </p>
  )
}
