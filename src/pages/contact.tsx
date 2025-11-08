import { Button } from "@/components/ui/button";
import Background from "@/components/backgrounds/background";
function Contact() {
  return (
    <section className="w-full  bg-black">
        <div className="max-w-7xl mx-auto px-4 py-20 w-full justify-center items-center flex flex-col">
    <Background className="overflow-x-clip w-full rounded-3xl "> 
          <div className="mx-auto max-h-50 flex min-h-fit  rounded-3xl border border-transparent bg-slate-100/3 max-w-7xl flex-col items-center justify-start px-4 py-20 w-full ">
            <div className="border border-slate-200 mb-10  ">
              <h3 className="inline-flex items-center text-center border border-white/10  px-4 py-1   tracking-[0.1em] text-slate-300">
                CONTACT US
              </h3>
            </div>
            <h1 className="text-4xl text-white sm:text-5xl md:text-6xl md:leading-[1.1] text-center">
              404, Page Not Found
            </h1>
            

            <div className="flex flex-col items-center sm:flex-row gap-7 mt-8 sm:mt-10 ">
              <Button
                variant="default"
                className="mt-4 w-auto  flex justify-center items-center"
              >
                Back to Home
              </Button>
              
            </div>
          </div>
        </Background>
        </div>
    </section>
  );
}
export default Contact;