import { SectionHeading } from "@/components/section-heading";
import { CheckIcon, CloseIcon, WhatsAppIcon } from "@/components/icons";

const oldWay = [
  "Dues written in a notebook, easy to forget",
  "Awkward phone calls and repeated requests",
  "No record of who was reminded, or when",
  "Payments crossed out with no clear history",
];

const newWay = [
  "Every customer and loan in one organised ledger",
  "Polite WhatsApp reminders every two hours",
  "A clear log of every message sent",
  "Paid status recorded, reminders stop instantly",
];

export function WhyKhata() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div id="why" className="scroll-mt-20">
          <SectionHeading
            eyebrow="Why Khata AI"
            title={
              <>
                Stop remembering.{" "}
                <span className="text-accent">Start collecting.</span>
              </>
            }
            description="Chasing udhaar costs time and strains relationships. Khata AI makes the follow-up consistent, polite and automatic."
          />
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-10 items-center justify-center rounded-2xl bg-surface-2 text-muted">
                <CloseIcon className="size-5" />
              </span>
              <h3 className="text-lg font-semibold text-ink">The old way</h3>
            </div>
            <ul className="mt-6 space-y-3.5">
              {oldWay.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted">
                  <CloseIcon className="mt-0.5 size-4 shrink-0 text-muted/70" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-accent/25 bg-accent-soft/50 p-6 sm:p-8">
            <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-accent/10 blur-2xl" />
            <div className="relative flex items-center gap-3">
              <span className="inline-flex size-10 items-center justify-center rounded-2xl bg-accent text-accent-ink">
                <CheckIcon className="size-5" />
              </span>
              <h3 className="text-lg font-semibold text-ink">With Khata AI</h3>
            </div>
            <ul className="relative mt-6 space-y-3.5">
              {newWay.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink">
                  <CheckIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <figure className="mt-4 overflow-hidden rounded-3xl border border-border bg-surface">
          <div className="grid md:grid-cols-[1.15fr_0.85fr]">
            <blockquote className="p-6 sm:p-8">
              <p className="text-pretty text-lg leading-relaxed text-ink sm:text-xl">
                &ldquo;Pehle har shaam yaad karna padta tha kis se paise lene
                hain. Ab reminders khud chale jaate hain, aur jab paisa aa jaye
                main bas &lsquo;paid&rsquo; dabata hoon.&rdquo;
              </p>
              <figcaption className="mt-4 flex items-center gap-3">
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-accent-soft font-mono text-[11px] font-semibold text-accent">
                  MR
                </span>
                <span className="text-sm">
                  <span className="block font-semibold text-ink">
                    Muhammad Rizwan
                  </span>
                  <span className="text-muted">Kirana store · Lahore</span>
                </span>
              </figcaption>
            </blockquote>
            <div className="flex flex-col justify-center gap-3 border-t border-border bg-surface-2 p-6 md:border-l md:border-t-0 sm:p-8">
              <p className="font-urdu text-right text-2xl leading-loose text-accent">
                کھاتہ صاف، دل صاف
              </p>
              <p className="text-sm leading-relaxed text-muted">
                A clean ledger keeps the business healthy — and the
                relationships respectful.
              </p>
              <div className="mt-2 inline-flex items-center gap-2 self-start rounded-full bg-surface px-3 py-1.5 text-xs text-muted">
                <WhatsAppIcon className="size-4 text-accent" />
                Delivered on WhatsApp
              </div>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
