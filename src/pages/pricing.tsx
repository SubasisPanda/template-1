import { Globe2, Link2, GitBranch, Plug, Share2, CircleDashed } from "lucide-react";

import HeroBackground from "@/components/backgrounds/herobackground";
import PricePage from "@/reusablePages/pricePage";
import TonyStark from "@/reusablePages/tonyStark";
import FAQSection from "@/reusablePages/faq";
import { LastSection } from "@/reusablePages/lastSection";

export default function PricingSection() {

    const items = [
    {
      icon: <Globe2 className="h-4 w-4 text-slate-400" />,
      company: "Acme Corp",
      quote:
        "AI's intuitive interface and powerful analytics have streamlined our vendor management process. We couldn't be happier with the results.",
      author: "Emily Davis",
      role: "MARKETING MANAGER",
    },
    {
      icon: <Share2 className="h-4 w-4 text-slate-400" />,
      company: "Acme Corp",
      quote:
        "AI's intuitive interface and powerful analytics have streamlined our vendor management process. We couldn't be happier with the results.",
      author: "Emily Davis",
      role: "MARKETING MANAGER",
    },
    {
      icon: <Plug className="h-4 w-4 text-slate-400" />,
      company: "Acme Corp",
      quote:
        "AI's intuitive interface and powerful analytics have streamlined our vendor management process. We couldn't be happier with the results.",
      author: "Emily Davis",
      role: "MARKETING MANAGER",
    },
    {
      icon: <GitBranch className="h-4 w-4 text-slate-400" />,
      company: "Acme Corp",
      quote:
        "AI's intuitive interface and powerful analytics have streamlined our vendor management process. We couldn't be happier with the results.",
      author: "Emily Davis",
      role: "MARKETING MANAGER",
    },
    {
      icon: <Link2 className="h-4 w-4 text-slate-400" />,
      company: "Acme Corp",
      quote:
        "AI's intuitive interface and powerful analytics have streamlined our vendor management process. We couldn't be happier with the results.",
      author: "Emily Davis",
      role: "MARKETING MANAGER",
    },
    {
      icon: <CircleDashed className="h-4 w-4 text-slate-400" />,
      company: "Acme Corp",
      quote:
        "AI's intuitive interface and powerful analytics have streamlined our vendor management process. We couldn't be happier with the results.",
      author: "Emily Davis",
      role: "MARKETING MANAGER",
    },
  ];

  return (
    <HeroBackground>
      <div className="mx-auto max-w-6xl px-4  sm:px-6 lg:px-8">
        <PricePage />

        <div className="mx-auto flex min-h-fit max-w-7xl flex-col items-center justify-start px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          
          <h1 className="text-4xl text-white sm:text-5xl md:text-6xl md:leading-[1.1] text-center">
            Testimonials from Clients
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-slate-400 sm:mt-6 leading-relaxed">
            Everything you need to know about our platform and product offerings.
          </p>
        </div>
        <TonyStark />







        



        <section className=" py-16 ">
      <div className=" max-w-6xl mx-auto ">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {items.map((t, i) => (
            <article
              key={i}
              className="
                rounded-3xl border border-white/1 bg-violet-400/10 backdrop-blur
                p-6 sm:p-7 md:p-8
                shadow-lg shadow-violet-500/5
                hover:border-white/10 transition-transform
              "
            >
              <div className="flex items-center gap-1 text-md font-medium text-slate-200">
                <div className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-transparent">
                  {t.icon}
                </div>
                <span>{t.company}</span>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-slate-200">
                {t.quote}
              </p>

              <div className="mt-8">
                <p className="text-sm text-slate-300">{t.author}</p>
                <p className="mt-1 text-[11px] tracking-[0.1em] text-slate-500">
                  {t.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>


    <FAQSection />
        <div className="w-20 h-20"></div>
        <LastSection />
      </div>
    </HeroBackground>
  );
}
