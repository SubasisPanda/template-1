import HeroBackground from "@/components/backgrounds/herobackground";
import { SignUp } from "@/reusablePages/signUp";

export default function Terms() {
  const updated = "23 April 2024";

  return (
      <main className="min-h-screen bg-[#0b0713]  text-white">
        <HeroBackground>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 flex flex-col w-full ">
        <header className="text-center">
          <h1 className="text-3xl font-semibold sm:text-4xl">Terms &amp; Conditions</h1>
          <p className="mt-2 text-xs text-slate-400">
            Last updated on <span className="text-slate-300">{updated}</span>.
          </p>
        </header>

        <article className="mt-8 max-w-3xl mx-auto mb-20 p-6 sm:p-8 md:p-10 shadow-sm shadow-slate-500/5">
          <ol className="space-y-6 [counter-reset:sec] ">
            <li className="space-y-2">
              <h2 className="text-sm font-semibold tracking-wide text-slate-200">
                1. Acceptance of Terms
              </h2>
              <p className="text-sm leading-relaxed text-slate-400">
                By accessing and using the Mint website (the “Site”), you agree to comply with and be
                bound by these Terms and Conditions.
              </p>
            </li>

            <li className="space-y-2">
              <h2 className="text-sm font-semibold tracking-wide text-slate-200">2. User Eligibility</h2>
              <p className="text-sm leading-relaxed text-slate-400">
                You must be at least 18 years of age or have the legal capacity to enter into a
                contract to use this Site.
              </p>
            </li>

            <li className="space-y-2">
              <h2 className="text-sm font-semibold tracking-wide text-slate-200">3. Privacy Policy</h2>
              <p className="text-sm leading-relaxed text-slate-400">
                Your use of the Site is also governed by our Privacy Policy. Please review it to
                understand our practices.
              </p>
            </li>

            <li className="space-y-2">
              <h2 className="text-sm font-semibold tracking-wide text-slate-200">4. Account Registration</h2>
              <p className="text-sm leading-relaxed text-slate-400">
                To access certain features you may need to register for an account. You are
                responsible for maintaining the confidentiality of your account credentials and for
                all activities under your account.
              </p>
            </li>

            <li className="space-y-2">
              <h2 className="text-sm font-semibold tracking-wide text-slate-200">5. Intellectual Property</h2>
              <p className="text-sm leading-relaxed text-slate-400">
                All content on the Site is protected by intellectual property laws. You may not use,
                reproduce, or distribute the content without our express permission.
              </p>
            </li>

            <li className="space-y-2">
              <h2 className="text-sm font-semibold tracking-wide text-slate-200">6. Prohibited Conduct</h2>
              <p className="text-sm leading-relaxed text-slate-400">
                You agree not to engage in conduct that disrupts the Site, harms other users, or
                violates any law, including but not limited to unauthorized access or distribution of
                malware.
              </p>
            </li>

            <li className="space-y-2">
              <h2 className="text-sm font-semibold tracking-wide text-slate-200">7. Disclaimers</h2>
              <p className="text-sm leading-relaxed text-slate-400">
                The Site is provided for general informational purposes only. We make no warranties
                regarding accuracy, completeness, or reliability. Use is at your own risk.
              </p>
            </li>

            <li className="space-y-2">
              <h2 className="text-sm font-semibold tracking-wide text-slate-200">
                8. Limitation of Liability
              </h2>
              <p className="text-sm leading-relaxed text-slate-400">
                We and our affiliates shall not be liable for any indirect, incidental, or
                consequential damages arising out of your use of the Site.
              </p>
            </li>

            <li className="space-y-2">
              <h2 className="text-sm font-semibold tracking-wide text-slate-200">9. Termination</h2>
              <p className="text-sm leading-relaxed text-slate-400">
                We reserve the right to suspend or terminate access to the Site for any reason,
                including violation of these Terms.
              </p>
            </li>

            <li className="space-y-2">
              <h2 className="text-sm font-semibold tracking-wide text-slate-200">10. Changes to Terms</h2>
              <p className="text-sm leading-relaxed text-slate-400">
                We may modify these Terms at any time. Continued use of the Site after changes
                constitutes acceptance of the modified Terms.
              </p>
            </li>

            <li className="space-y-2">
              <h2 className="text-sm font-semibold tracking-wide text-slate-200">11. Governing Law</h2>
              <p className="text-sm leading-relaxed text-slate-400">
                These Terms are governed by and construed in accordance with the laws of your
                jurisdiction, without regard to conflict of law principles.
              </p>
            </li>

            <li className="space-y-2">
              <h2 className="text-sm font-semibold tracking-wide text-slate-200">12. Contact</h2>
              <p className="text-sm leading-relaxed text-slate-400">
                For questions about these Terms, contact us at{" "}
                <a href="mailto:office@email.com" className="text-slate-300 underline decoration-slate-500/50 underline-offset-4 hover:text-white">
                  office@email.com
                </a>.
              </p>
            </li>
          </ol>
        </article>

          <SignUp />
      </div>
        
    </HeroBackground>
    </main>
  );
}

export { Terms };