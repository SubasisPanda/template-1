
import Background from "@/components/backgrounds/background";
import { Button } from "@/components/ui/button";


function SignUp() {
    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log(Object.fromEntries(data)); // TODO: hook up to your email service
  }
  return (
      <Background className="overflow-x-clip w-full rounded-3xl "> 
          <div className="mx-auto max-h-50 flex min-h-fit  rounded-3xl border border-transparent bg-slate-100/3 max-w-6xl flex-col items-center justify-start px-4 py-20 w-full ">
            
            <h1 className="text-4xl text-white sm:text-5xl md:text-6xl md:leading-[1.1] text-center">
              Sign up to Get Started
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-slate-400 sm:mt-6 leading-relaxed">
              Subscribe to get the latest updates and features.
            </p>

            <form
        onSubmit={onSubmit}
        className="mx-auto mt-8 w-full max-w-sm"
        aria-labelledby="newsletter-title"
      >
        <div
          className="
            flex flex-col gap-3 sm:flex-row sm:items-center
            rounded-2xl border border-white/10 bg-white/[0.04] p-2 backdrop-blur
            shadow-sm shadow-fuchsia-500/10
            focus-within:border-fuchsia-500/30 focus-within:ring-2 focus-within:ring-fuchsia-500/20
          "
        >
          <label htmlFor="email" className="sr-only">
            Your Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Your Email"
            className="
              w-full flex-1 rounded-xl bg-transparent px-4 py-3
              text-sm text-slate-200 placeholder:text-slate-400/70
              outline-none
            "
          />

          {/* shadcn Button */}
          <Button
            type="submit"
            className="
              w-full sm:w-auto rounded-[8px] px-6 py-3 text-black bg-white/90
            "
          >
            Sign Up
          </Button>
        </div>
      </form>
          </div>
        </Background>
  );
}
export { SignUp };