
import Background from "@/components/backgrounds/background";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

function LastSection() {
  return (
      <Background className="overflow-x-clip w-full max-w-6xl rounded-3xl mb-30 "> 
          <div className="mx-auto max-h-50 flex min-h-fit  rounded-3xl border border-transparent bg-slate-100/3 max-w-6xl flex-col items-center justify-start px-4 py-20 w-full ">
            
            <h2 className="text-2xl text-white sm:text-3xl md:text-3xl md:leading-[1.1] text-center">
              Take the next step towards Optimization & 
              <span className="block">streamlined operations</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-slate-400 sm:mt-6 leading-relaxed">
              Discover how our platform can empower your business today.
            </p>

            <div className="flex flex-col items-center sm:flex-row gap-7 mt-8 sm:mt-10 ">
              <Button
            variant="default"
            className="mt-4 w-30  flex justify-center items-center"
          >
            Get Started
            <ChevronRight className="mt-auto" />
          </Button>
              <Button
                variant="default"
                className="mt-4 w-30 text-white bg-transparent border border-white/15 hover:bg-white/10 flex justify-center items-center"
              >
                Request demo
              </Button>
            </div>
          </div>
        </Background>
  );
}
export { LastSection };