// HeroBackground.tsx
export default function HeroBackground({
  children,
}: { children: React.ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden
      w-full min-h-screen flex items-center justify-start
      [background-image:url('/Vector.png'),url('/ellipsehero.png')]
      [background-repeat:no-repeat,no-repeat]
      [background-position:top,top]
      [background-size:100%_auto,100%_auto]
      bg-[#0e0a14]">

      
            <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-black/40 to-transparent" />

      {children}
    </section>
  )
}
