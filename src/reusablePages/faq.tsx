import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 bg-transparent">
      <div className="mx-auto max-w-3xl text-center">
        {/* Label */}
        <div className="inline-flex items-center bg-white/5 rounded-[6px] border border-white/10  px-3 py-0.5 text-[10px] font-medium tracking-[0.18em] text-slate-300">
          FAQS
        </div>

        {/* Title */}
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          Frequently asked questions
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-sm text-slate-400 ">
          Everything you need to know about the product and billing.
        </p>
      </div>

      {/* Accordion */}
      <div className="mx-auto mt-10 max-w-2xl bg-transparent space-y-4">
        <Accordion type="single" collapsible className="w-full space-y-2">
          <AccordionItem
            value="item-1"
            className="rounded-[6px] border border-white/15 bg-white/5 px-4 sm:px-6"
          >
            <AccordionTrigger className="text-left text-sm bg-black font-medium text-slate-200 hover:no-underline">
              Is there a free trial available?
            </AccordionTrigger>
            <AccordionContent className="text-sm text-slate-400">
              Yes, we offer a free 14-day trial so you can explore all our features before
              committing to a plan. You can cancel anytime during the trial.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="rounded-[6px] border border-white/15 bg-white/5 px-4 sm:px-6"
          >
            <AccordionTrigger className="text-left text-sm font-medium text-slate-200 hover:no-underline">
              What payment methods do you accept?
            </AccordionTrigger>
            <AccordionContent className="text-sm text-slate-400">
              We accept all major credit cards, PayPal, and wire transfers for enterprise plans.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="rounded-[6px] border border-white/15 bg-white/5 px-4 sm:px-6"
          >
            <AccordionTrigger className="text-left text-sm font-medium text-slate-200 hover:no-underline">
              What is your refund policy?
            </AccordionTrigger>
            <AccordionContent className="text-sm text-slate-400">
              If you’re not satisfied, contact us within 30 days of purchase for a full refund — no
              questions asked.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-4"
            className="rounded-[6px] border bg-white/5 border-white/15  px-4 sm:px-6"
          >
            <AccordionTrigger className="text-left  text-sm font-medium text-slate-200 hover:no-underline">
              What kind of support do you provide?
            </AccordionTrigger>
            <AccordionContent className="text-sm text-slate-400">
              We offer 24/7 chat and email support, plus dedicated customer success managers for
              enterprise customers.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export { FAQSection };