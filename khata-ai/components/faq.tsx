import { SectionHeading } from "@/components/section-heading";
import { ArrowRightIcon } from "@/components/icons";

const faqs = [
  {
    q: "Does the customer need to install an app?",
    a: "No. Customers receive their reminders directly on WhatsApp — nothing to download, nothing to learn.",
  },
  {
    q: "How often are reminders sent?",
    a: "On the due date, reminders start and repeat every two hours until the shopkeeper marks the loan as paid.",
  },
  {
    q: "Can I stop the reminders early?",
    a: "Yes. Open the customer, update the status to paid, and every future reminder stops immediately.",
  },
  {
    q: "Is customer information safe?",
    a: "Customer details like CNIC and phone number are visible only to the shop admin and are used solely for reminders.",
  },
  {
    q: "Does it work in Urdu?",
    a: "Yes. The interface uses a Nastaliq-friendly Urdu font, and messages can be sent in Urdu or English.",
  },
];

export function Faq() {
  return (
    <section className="border-y border-border bg-surface-2/60 py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div
          id="faq"
          className="scroll-mt-20 lg:sticky lg:top-20 lg:self-start"
        >
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Questions, answered."
            description="Everything you need to know before starting your digital khata."
          />
          <p className="mt-5 font-urdu text-lg text-accent">
            آپ کے سوال، ہمارے جواب
          </p>
        </div>

        <div className="divide-y divide-border overflow-hidden rounded-3xl border border-border bg-surface">
          {faqs.map((faq) => (
            <details key={faq.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left text-[15px] font-semibold text-ink transition-colors hover:bg-surface-2 sm:px-6">
                {faq.q}
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-transform group-open:rotate-45">
                  <span className="text-lg leading-none">+</span>
                </span>
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="px-5 py-20 sm:px-6 lg:py-24">
      <div
        id="get-started"
        className="relative mx-auto w-full max-w-6xl scroll-mt-20 overflow-hidden rounded-[2rem] border border-accent/30 bg-accent px-6 py-14 text-accent-ink sm:px-12 lg:px-16"
      >
        <div className="pointer-events-none absolute inset-0 opacity-25">
          <div className="absolute -right-20 -top-24 size-72 rounded-full border border-white/40" />
          <div className="absolute -right-10 -top-10 size-72 rounded-full border border-white/30" />
          <div className="absolute -bottom-24 -left-16 size-72 rounded-full border border-white/20" />
        </div>

        <div className="relative mx-auto max-w-2xl text-center">
          <p className="font-urdu text-xl leading-loose opacity-90">
            آج ہی اپنا کھاتہ ڈیجیٹل کریں
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Let the reminders do the talking.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-accent-ink/80 sm:text-base">
            Create your first customer, record the udhaar, and let Khata AI
            handle the follow-ups — politely, on time, every time.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#top"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent-ink px-6 text-sm font-semibold text-accent transition-transform hover:-translate-y-0.5"
            >
              Create your first khata
              <ArrowRightIcon className="size-4" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex h-12 items-center justify-center rounded-full border border-accent-ink/30 px-6 text-sm font-semibold text-accent-ink transition-colors hover:bg-white/10"
            >
              See how it works
            </a>
          </div>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-accent-ink/60">
            no card required · set up in 5 minutes
          </p>
        </div>
      </div>
    </section>
  );
}
