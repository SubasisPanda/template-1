import HeroBackground from "@/components/backgrounds/herobackground";
import { LastSection } from "@/reusablePages/lastSection";
import {
  
  Github,
  Slack,
  Zap,
} from "lucide-react";
import { FeaturesPage } from "@/reusablePages/featurePage";
import TonyStark from "@/reusablePages/tonyStark";
import GraphPage from "@/reusablePages/graphPage";
function Features() {

  return (
    <HeroBackground>
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-start px-4  sm:px-6  lg:px-8">
        


            <FeaturesPage />




        

        <GraphPage />

        <div className="mt-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-start px-4 py-20 sm:px-6 md:py-28 lg:px-8">
            <div className="border bg-violet-400/10 backdrop-blur-md border-white/10 rounded-[4px] mb-10  ">
              <h4 className="inline-flex items-center text-center  px-4 py-1   tracking-[0.1em] text-slate-300">
                INTEGRATIONS
              </h4>
            </div>
          <h4 className="text-2xl mt-5 text-white sm:text-5xl md:text-5xl text-center">
            Integrated with Your Favorite Tools
          </h4>
          <p className="mx-auto mt-7 max-w-2xl text-center text-sm text-slate-400 sm:mt-6 leading-relaxed">
            Discover the simplicity of seamless integration with AI blockchain platform.From data input to actionable insights, here's how it all comes together
          </p>

          <div className="max-w-6xl mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group bg-violet-400/8 flex flex-col items-center justify-center rounded-2xl border border-transparent p-8 text-center transition-all duration-300 hover:border-slate-200/30 hover:bg-violet-400/10">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full   transition-colors">
                <Github className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-white">Github</h3>
              <p className="mt-2 text-sm text-slate-400">
                Connect with thousands of apps for automated workflows.
              </p>
            </div>
            <div className="group bg-violet-400/8 flex flex-col items-center justify-center rounded-2xl border border-transparent p-8 text-center transition-all duration-300 hover:border-fuchsia-200/30 hover:bg-violet-400/10">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full transition-colors">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-white">Zapier</h3>
              <p className="mt-2 text-sm text-slate-400">
                Connect with thousands of apps for automated workflows.
              </p>
            </div>
            <div className="group bg-violet-400/8 flex flex-col items-center justify-center rounded-2xl border border-transparent p-8 text-center transition-all duration-300 hover:border-fuchsia-200/30 hover:bg-violet-400/10">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full  transition-colors">
                <Slack className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-white">Slack</h3>
              <p className="mt-2 text-sm text-slate-400">
                Connect with thousands of apps for automated workflows.
              </p>
            </div>
          </div>
        </div>

        
        <TonyStark />
            <div className="w-30 h-40"></div>
            <LastSection />
        
      </div>
    </HeroBackground>
  );
}

export default Features;
