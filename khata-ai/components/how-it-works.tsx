import { SectionHeading } from "@/components/section-heading";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";

const steps = [
  {
    number: "01",
    title: "Add the customer",
    description:
      "Save their name, age, CNIC, phone number and any note you want — all in under a minute.",
    tags: ["Name", "Age", "CNIC", "Phone"],
  },
  {
    number: "02",
    title: "Record the udhaar",
    description:
      "Enter the amount, what was taken, and the date the customer promised to pay you back.",
    tags: ["Amount", "Items", "Due date"],
  },
  {
    number: "03",
    title: "Reminders go out",
    description:
      "When the due date arrives, WhatsApp reminders begin and repeat every two hours — automatically.",
    tags: ["Automatic", "Every 2 hours"],
  },
  {
    number: "04",
    title: "Mark it paid",
    description:
      "Once the money is in, one tap records the payment and instantly stops every future reminder.",
    tags: ["One tap", "Stops instantly"],
  },
];

export function HowItWorks() {
  return (
    <section className="relative border-y border-border bg-surface-2/60 py-20 lg:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div
            id="how-it-works"
            className="scroll-mt-20 lg:sticky lg:top-20 lg:self-start"
          >
            <SectionHeading
              align="left"
              eyebrow="How it works"
              title={
                <>
                  From udhaar to paid,{" "}
                  <span className="text-accent">in four steps.</span>
                </>
              }
              description="Set up your first customer in minutes. Khata AI takes over the follow-ups from there."
            />
            <a
              href="#get-started"
              className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-accent-ink transition-colors hover:bg-accent-hover"
            >
              Start your khata
              <ArrowRightIcon className="size-4" />
            </a>
            <p className="mt-3 text-xs text-muted">
              No card required · Cancel anytime
            </p>
          </div>

          <div className="relative">
            <span className="absolute left-[27px] top-6 bottom-6 w-px bg-border sm:left-[31px]" />
            <ol className="relative space-y-3">
              {steps.map((step) => (
                <li
                  key={step.number}
                  className="relative flex gap-4 rounded-3xl border border-border bg-surface p-5 sm:gap-5"
                >
                  <span className="relative z-10 inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-border bg-bg font-mono text-xs font-semibold text-accent sm:size-11 sm:text-sm">
                    {step.number}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold tracking-tight text-ink sm:text-lg">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {step.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 rounded-full bg-surface-2 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted"
                        >
                          <CheckIcon className="size-2.5 text-accent" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
