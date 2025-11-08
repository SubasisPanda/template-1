import HeroBackground from "@/components/backgrounds/herobackground"
import * as React from "react"
import { Button } from "@/components/ui/button"
import { LastSection } from "@/reusablePages/lastSection"
export default function Demo() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    console.log(Object.fromEntries(data))
  }

  return (
    <HeroBackground>
      <section className="mx-auto mb-30 w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28 lg:px-8 text-white">
        <div className="text-center">
         <div className="border bg-white/6 border-slate-200/15 backdrop-blur-md rounded-[9px] mb-10 max-w-fit mx-auto ">
              <h3 className="inline-flex items-center text-center   px-4 py-1   text-slate-300">
                CONTACT US
              </h3>
            </div>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Schedule a Demo</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-400 sm:text-base">
            We’ll provision your infrastructure and deploy your apps to your own cloud in under 30 minutes.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="relative z-20 mx-auto mt-10 mb-30 w-full max-w-3xl
    rounded-3xl border border-white/2
    bg-white/1 backdrop-blur-2xl
    before:absolute before:inset-0 before:-z-10 before:rounded-3xl 
    before:bg-gradient-to-br before:from-black before:to-transparent
    shadow-lg shadow-violet-500/10
    p-6 sm:p-8 lg:p-10"
        >
          <label htmlFor="name" className="mb-2 block text-xs font-medium tracking-wide text-slate-300">
            Name
          </label>
          <input
            id="name"
            name="name"
            placeholder="Jane Smith"
            className="mb-5 w-full rounded-[7px] border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-slate-200 placeholder:text-slate-400/70 outline-none transition focus:border-fuchsia-500/30 focus:ring-2 focus:ring-fuchsia-500/35"
          />

          <label htmlFor="email" className="mb-2 block text-xs font-medium tracking-wide text-slate-300">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="jane@framer.com"
            className="mb-5 w-full rounded-[7px] border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-slate-200 placeholder:text-slate-400/70 outline-none transition focus:border-fuchsia-500/30 focus:ring-2 focus:ring-fuchsia-500/35"
          />

          <label htmlFor="message" className="mb-2 block text-xs font-medium tracking-wide text-slate-300">
            How we can help?
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="mb-6 w-full resize-y rounded-[7px] border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-slate-200 placeholder:text-slate-400/70 outline-none transition focus:border-fuchsia-500/30 focus:ring-2 focus:ring-fuchsia-500/35"
            placeholder="Tell us a bit about your needs…"
          />

          <Button
            type="submit"
            className="
              w-full rounded-md px-6 py-3 text-sm font-semibold
              bg-gradient-to-b from-violet-400 to-violet-500
              text-white shadow-lg shadow-fuchsia-500/20
              hover:from-violet-400 hover:to-fuchsia-400
              focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50
            "
          >
            Submit
          </Button>
        </form>
        <LastSection />
      </section>
    </HeroBackground>
  )
}

export {  Demo }
