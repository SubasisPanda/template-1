import { Button } from "@/components/ui/button";
import { ChevronRight, Menu, X } from "lucide-react";
import  { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/blogs" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full  bg-[#130e1c]  ">
      <div className=" flex h-16 items-center justify-between px-10 py-6 ">
        <div className="flex items-center gap-10">
          <a
            href="/"
            className="text-2xl font-bold text-white hover:text-white/80 transition-colors"
          >
            SaaS
          </a>

          <nav className="hidden ml-15 md:flex items-center gap-8 text-slate-300">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium hover:text-violet-400 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden md:block ">
          <Button className="flex items-center w-fit">
            Get Started
            <ChevronRight className="h-4 w-4 mt-auto" />
          </Button>
        </div>

        {/* Hamburger toggle */}
        <button
          className="relative md:hidden flex items-center justify-center text-white transition-all duration-1000 ease-in-out hover:text-violet-400"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((s) => !s)}
        >
          <span
            className={`absolute transition-all duration-700 ease-in-out transform ${
              open
                ? "opacity-0 scale-50 rotate-90"
                : "opacity-100 scale-100 rotate-0"
            }`}
          >
            <Menu className="h-6 w-6" />
          </span>

          <span
            className={`absolute transition-all duration-700 ease-in-out transform ${
              open
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-50 -rotate-90"
            }`}
          >
            <X className="h-6 w-6" />
          </span>
        </button>
      </div>

      {/* Mobile dropdown  */}
      <div
        id="mobile-menu"
        className={[
          "md:hidden overflow-hidden border-t border-white/10",
          "transition-all duration-300 ease-out",
          open
            ? "max-h-[420px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2",
        ].join(" ")}
      >
        <div className="px-6 py-4">
          <nav className="flex flex-col items-center text-center gap-3 text-slate-200">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="w-full rounded-lg px-3 py-3 hover:bg-white/5 transition-colors transition-ease-in-out"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}

            <Button
              className="mt-2 w-auto sm:w-auto transition-colors transition-ease-in-out"
              onClick={() => setOpen(false)}
            >
              Get Started
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export { Navbar };