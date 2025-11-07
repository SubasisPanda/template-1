
import HeroBackground from "@/components/backgrounds/herobackground";
import PricePage from "@/reusablePages/pricePage";


export default function PricingSection() {
  return (
    <HeroBackground>
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <PricePage />

        <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-start px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="border border-slate-100 mb-10 ">
            <h3 className="inline-flex items-center text-center border border-white/10  px-4 py-1   tracking-[0.1em] text-slate-300">
              YOUR INTERNAL DEVELOPER PLATFORM
            </h3>
          </div>
          <h1 className="text-4xl text-white sm:text-5xl md:text-6xl md:leading-[1.1] text-center">
            Transform Data into Actionable
            <span className="block">Insights Instantly</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-slate-400 sm:mt-6 leading-relaxed">
            Leverage AI to generate real-time reports and make informed
            decisions faster than ever.
          </p>
        </div>
      </div>
    </HeroBackground>
  );
}
