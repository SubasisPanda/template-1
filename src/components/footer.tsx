import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative  bg-[#0e0a14] text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-semibold tracking-tight"
            >
              <span className="text-lg">SaaS</span>
            </Link>

            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
              Seamlessly transform your concepts into a fully operational,
              mobile-friendly, code-free SaaS web platform.
            </p>

            <div className="mt-4 flex items-center gap-4 text-slate-400">
              <a
                aria-label="LinkedIn"
                href="#"
                className="hover:text-violet-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                aria-label="X / Twitter"
                href="#"
                className="hover:text-violet-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                aria-label="Instagram"
                href="#"
                className="hover:text-violet-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                aria-label="Facebook"
                href="#"
                className="hover:text-violet-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-200">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>
                <Link
                  to="/pricing"
                  className="hover:text-violet-400 transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-violet-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/demo"
                  className="hover:text-violet-400 transition-colors"
                >
                  Demo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-200">Info</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-violet-400 transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-violet-400 transition-colors"
                >
                  Terms &amp; Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/404"
                  className="hover:text-violet-400 transition-colors"
                >
                  404
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-8 h-px bg-white/10" />

        <div className="flex flex-col items-start justify-between gap-3 text-xs text-slate-400 sm:flex-row">
          <p>
            SaaS Template. All right reserved. © {new Date().getFullYear()}
          </p>
          <a href="#" className="hover:text-fuchsia-400 transition-colors">
            Built With React, TypeScript, Tailwind CSS
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };