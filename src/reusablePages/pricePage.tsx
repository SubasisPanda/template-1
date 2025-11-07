
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";


const plans = [
  {
    name: "Starter",
    description:
      "Perfect for businesses just beginning to optimize vendor management.",
    price: "$24",
    per: "/month",
    features: [
      "100 credits",
      "Data Input: Limited",
      "AI Analysis: Basic",
      "Blockchain Integration: Standard",
      "Support: Email",
    ],
    highlight: false,
  },
  {
    name: "Professional",
    description: "Ideal for teams needing more control and insights.",
    price: "$99",
    per: "/month",
    features: [
      "1000 credits",
      "Data Input: Unlimited",
      "AI Analysis: Advanced",
      "Blockchain Integration: Enhanced",
      "Support: Email and Phone",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    description: "Best for large organizations with complex needs.",
    price: "$599",
    per: "/month",
    features: [
      "Unlimited credits",
      "Advanced customization options",
      "Tailored to your business needs",
      "24/7 Email & Chat Support",
      "Dedicated account manager",
    ],
    highlight: false,
  },
];

export default function PricePage() {
  return (
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-white sm:text-4xl md:text-5xl">
            Pricing That Fits Your Needs
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm text-slate-400 sm:mt-6   leading-relaxed">
            Leverage AI to generate real-time reports and make informed
            decisions faster than ever.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-transform hover:scale-[1.02] hover:border-fuchsia-500/30 ${
                plan.highlight
                  ? "bg-gradient-to-b from-violet-600/30 to-fuchsia-600/20 border-fuchsia-500/40 shadow-[0_0_25px_rgba(168,85,247,0.25)]"
                  : ""
              }`}
            >
              <h3 className="text-md font-semibold tracking-wide text-slate-300">
                {plan.name.toUpperCase()}
              </h3>
              <p className="mt-2 text-sm text-slate-400">{plan.description}</p>
              <div className="mt-6 flex items-baseline">
                <span className="text-4xl font-semibold text-white sm:text-5xl">
                  {plan.price}
                </span>
                <span className="ml-1 text-slate-400">{plan.per}</span>
              </div>

              <Button
                className={`mt-8 w-full rounded-md  ${
                  plan.highlight
                    ? "bg-gradient-to-r from-violet-400 to-fuchsia-400 text-black hover:from-violet-600 hover:to-fuchsia-600"
                    : "bg-white/10 text-black hover:bg-white/20"
                }`}
              >
                Get Started
              </Button>

              <ul className="mt-8 space-y-3 text-sm text-slate-300">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-fuchsia-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
       
      </div>
  );
}

export { PricePage };