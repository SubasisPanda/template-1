import { Button } from "@/components/ui/button";
import HeroBackground from "@/components/backgrounds/herobackground";
import GraphPage from "@/reusablePages/graphPage";
import PricePage from "@/reusablePages/pricePage";
import { Box, Infinity ,ChevronRight } from "lucide-react";
import { FeaturesPage } from "@/reusablePages/featurePage";
import { FAQSection } from "@/reusablePages/faq";
import { LastSection } from "@/reusablePages/lastSection";
function landing() {
  const items = [
    {
      title: "AI-Powered Insights",
      desc: "Gain actionable intelligence with advanced AI algorithms.",
    },
    {
      title: "Real-Time Dashboards",
      desc: "Stay on top of vendor activities with interactive, real-time dashboards.",
    },
    {
      title: "Automated Reporting",
      desc: "Save time and ensure accuracy with automated report generation.",
    },
    {
      title: "Comprehensive Data",
      desc: "Access detailed historical data to track vendor performance over time.",
    },
    {
      title: "Customizable Dashboards",
      desc: "Tailor your dashboards to fit your business needs.",
    },
    {
      title: "AI-Powered Insights",
      desc: "Stay informed with real-time alerts and notifications about significant changes.",
    },
  ];

  const logos = [
  { src: "https://dhygzobemt712.cloudfront.net/Mark/Mark_Logo_Blue.svg", name: "Webflow" },
  { src: "https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/65ab316a98b1254dc17f79f1_relume%20logo%20symbol%20with%20shadow.png", name: "Relume" },
  { src: "https://dhygzobemt712.cloudfront.net/Mark/Mark_Logo_Blue.svg", name: "Webflow" },
  { src: "https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/65ab316a98b1254dc17f79f1_relume%20logo%20symbol%20with%20shadow.png", name: "Relume" },
  { src: "https://dhygzobemt712.cloudfront.net/Mark/Mark_Logo_Blue.svg", name: "Webflow" },
  { src: "https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/65ab316a98b1254dc17f79f1_relume%20logo%20symbol%20with%20shadow.png", name: "Relume" },
];
  return (
    <HeroBackground>
      <div className="mx-auto w-full flex min-h-screen max-w-7xl flex-col items-center justify-start px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="border bg-violet-400/10 backdrop-blur-md rounded-[5px] border-slate-100/10 mb-10 ">
          <h3 className="inline-flex items-center  text-center border border-white/10  px-4 py-1   tracking-[0.1em] text-slate-300">
            YOUR INTERNAL DEVELOPER PLATFORM
          </h3>
        </div>
        <h1 className="text-4xl text-white sm:text-5xl md:text-6xl md:leading-[1.1] text-center">
          Transform Data into Actionable
          <span className="block">Insights Instantly</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-slate-400 sm:mt-6 leading-relaxed">
          Leverage AI to generate real-time reports and make informed decisions
          faster than ever.
        </p>

        <div className="flex flex-col items-center sm:flex-row gap-6 mt-8 sm:mt-10">
          <Button
            variant="default"
            className="mt-4 w-auto  flex justify-center items-center"
          >
            Get Started
            <ChevronRight className="mt-auto" />
          </Button>
          <Button
            variant="default"
            className="mt-4 w-auto bg-background border-transparent flex justify-center items-center hover:bg-white/10 "
          >
            Request demo
          </Button>
        </div>
        <div className="border-1 bg-white/10 rounded-2xl border-transparent mb-35 flex flex-col mt-10 w-full max-w-7xl p-4 ">
          <img src="/dashboardImage.png" className="rounded-2xl" alt="" />
        </div>
        <section className="w-full py-8 sm:py-12 mb-30 bg-transparent">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 28s linear infinite;
        }
        .marquee:hover .marquee-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>

      <div className="mx-auto mb-15 max-w-7xl px-4 text-center">
        <p className="text-[10px] tracking-[0.22em] text-slate-400 uppercase">
          Used by the world's most average companies
        </p>
      </div>

      <div
        className="
          marquee relative mx-auto mt-6 max-w-7xl overflow-hidden px-4
          [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
        "
        aria-label="Trusted by logos"
      >
        <div className="marquee-track flex w-[200%] items-center justify-around gap-16 sm:gap-20">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex min-w-max items-center justify-center gap-2 sm:gap-2 opacity-50 hover:opacity-80 transition-opacity"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-6 w-auto sm:h-7 grayscale justify-center items-center brightness-125"
                loading="lazy"
              />
              <span className="text-sm sm:text-lg font-semibold justify-center items-center text-slate-400">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>

        

        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 lg:space-y-14">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:p-10 shadow-lg shadow-fuchsia-500/5">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <img
                  src="/Astra4.png" 
                  alt="AI analytics"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <span className="inline-flex items-center rounded-[4px] border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium tracking-[0.18em] text-slate-300">
                  AI
                </span>

                <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                  AI-Driven Analytics
                </h3>

                <p className="mt-3 max-w-prose text-sm text-slate-400 sm:text-sm mt-7">
                  Gain deep insights into vendor performance with our advanced
                  AI algorithms. Understand trends, predict outcomes, and
                  optimize your vendor relationships with precision.
                </p>

                <ul className="mt-10 space-y-4">
                  <li className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                    <div className="flex items-start gap-3">
                      <Box className="mt-0.5 h-4 w-4 shrink-0 text-slate-300" />
                      <div>
                        <p className="text-sm font-semibold text-slate-200">
                          Predictive Insights: 
                          <span className="text-sm text-slate-400"> Anticipate future vendor performance and potential
                          issues before they arise.</span>
                        </p>
                        
                      </div>
                    </div>
                  </li>

                  <li className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                    <div className="flex items-start gap-3">
                      <Box className="mt-0.5 h-4 w-4 shrink-0 text-slate-300" />
                      <div>
                        <p className="text-sm font-semibold text-slate-200">
                          Customizable Analytics:
                          <span className="text-sm text-slate-400"> Tailor the AI analytics to focus on the metrics that
                          matter most to your business.
                        </span>
                        </p>
                        
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:p-10 shadow-lg shadow-fuchsia-500/5">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <span className="inline-flex items-center rounded-[6px] border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium tracking-[0.18em] text-slate-300">
                  GRAPHS
                </span>

                <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                  Monthly Tracking Graphs
                </h3>

                <p className="mt-7 max-w-prose text-sm  text-slate-400 sm:text-sm">
                  Stay informed with intuitive monthly graphs that track vendor
                  activities. Easily monitor performance metrics and make
                  data-driven decisions to enhance efficiency and outcomes.
                </p>

                <ul className="mt-10 space-y-4">
                  <li className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                    <div className="flex items-start gap-3">
                      <Box className="mt-0.5 h-4 w-4 shrink-0 text-slate-300" />
                      <div>
                        <p className="text-sm font-semibold text-slate-200">
                          Interactive Dashboards: 
                           <span className="text-sm text-slate-400 "> Dive deeper into data with interactive and
                          user-friendly dashboards.
                        </span>
                        </p>
                       
                      </div>
                    </div>
                  </li>

                  <li className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                    <div className="flex items-start gap-3">
                      <Box className="mt-0.5 h-4 w-4 shrink-0 text-slate-300" />
                      <div>
                        <p className="text-sm font-semibold text-slate-200">
                          Historical Comparisons: 
                           <span className="text-sm text-slate-400 "> Compare current performance with historical data to
                          identify trends and make informed decisions.
                        </span>
                        </p>
                       
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <img
                  src="/Astra5.png"
                  alt="Tracking graphs"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <FeaturesPage />
        <GraphPage />

        <div className="border mt-20 bg-violet-400/10 backdrop-blur-md rounded-[5px] border-slate-100/10 mb-10 ">
          <h3 className="inline-flex items-center  text-center border border-white/10  px-4 py-1   tracking-[0.1em] text-slate-300">
            HOW IT WORKS
          </h3>
        </div>
        <h1 className="text-4xl text-white sm:text-5xl md:text-6xl md:leading-[1.1] text-center">
          Comprehensive tools for Optimal Vendor Management
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-slate-400 sm:mt-6 leading-relaxed">
          Explore the suite of powerful features designed to streamline your vendor management process,
enhance decision-making, and drive business success.
        </p>

        <div className="flex flex-col items-center sm:flex-row gap-7 mt-8 sm:mt-10">
          <Button
            variant="default"
            className="mt-4 w-30  flex justify-center items-center"
          >
            Get Started
            <ChevronRight />
          </Button>
          <Button
            variant="default"
            className="mt-4 w-auto bg-white/5 border border-slate-200/10 flex justify-center items-center hover:bg-white/10"
          >
            Learn More
            <ChevronRight />
          </Button>
        </div>
        <div className="mt-20 mb-30 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {items.map((it, i) => (
              <article
                key={i}
                className="
                rounded-2xl border border-transparent bg-white/5
                p-6 sm:p-7 md:p-8
                shadow-lg shadow-fuchsia-500/5
                transition-colors hover:border-slate-700
              "
              >
                <div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-md bg-transparent">
                  <Infinity className="h-4 w-4 text-violet-400" />
                </div>

                <h3 className="text-lg  text-white sm:text-xl">{it.title}</h3>

                <p className="mt-4 text-sm leading-relaxed text-slate-400 ">
                  {it.desc}
                </p>
              </article>
            ))}
          </div>
        </div>

        <PricePage />
        <FAQSection />
        <LastSection />
      </div>
    </HeroBackground>
  );
}

export default landing;
