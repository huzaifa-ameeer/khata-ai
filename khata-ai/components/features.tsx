import { SectionHeading } from "@/components/section-heading";
import {
  BellIcon,
  CheckCircleIcon,
  LanguageIcon,
  PhoneIcon,
  SearchIcon,
  UserIcon,
  WhatsAppIcon,
} from "@/components/icons";

const features = [
  {
    icon: BellIcon,
    title: "Automatic WhatsApp reminders",
    description:
      "On the due date, a polite nudge goes out every two hours until the balance is cleared. No manual follow-ups, no forgotten promises.",
    highlight: true,
  },
  {
    icon: UserIcon,
    title: "Complete customer profiles",
    description:
      "Name, age, CNIC, phone number and extra notes — saved once, easy to find whenever you need them.",
    highlight: false,
  },
  {
    icon: CheckCircleIcon,
    title: "Mark paid in one tap",
    description:
      "When the customer pays, update the status. The reminder schedule stops immediately and the ledger stays accurate.",
    highlight: false,
  },
  {
    icon: LanguageIcon,
    title: "Urdu and English",
    description:
      "A proper Nastaliq-friendly interface, so the shopkeeper and the customer both understand every message.",
    highlight: false,
  },
  {
    icon: PhoneIcon,
    title: "Built for the counter",
    description:
      "Fast entry, large touch targets and a layout that works on any phone or tablet — even during a busy rush.",
    highlight: false,
  },
  {
    icon: SearchIcon,
    title: "Your ledger, sorted",
    description:
      "Search any customer, filter pending dues and see daily collections at a glance. Your khata, finally organised.",
    highlight: false,
  },
];

export function Features() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div id="features" className="scroll-mt-20">
          <SectionHeading
            eyebrow="Everything in one place"
            title={
              <>
                A khata that works{" "}
                <span className="text-accent">while you sell.</span>
              </>
            }
            description="From the first loan to the final payment, Khata AI handles the remembering — so you can focus on the shop."
          />
          <p className="mx-auto mt-4 max-w-2xl text-center font-urdu text-lg text-accent sm:text-xl">
            ہر گاہک، ہر ادھار — ایک ہی کھاتے میں
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className={
                  feature.highlight
                    ? "group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-accent/20 bg-accent p-6 text-accent-ink"
                    : "group flex flex-col rounded-3xl border border-border bg-surface p-6 transition-colors hover:border-border-strong"
                }
              >
                {feature.highlight && (
                  <div
                    className="pointer-events-none absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 85% 0%, rgba(255,255,255,0.9), transparent 45%)",
                    }}
                  />
                )}

                <div className="relative">
                  <span
                    className={
                      feature.highlight
                        ? "inline-flex size-11 items-center justify-center rounded-2xl bg-white/15 text-accent-ink"
                        : "inline-flex size-11 items-center justify-center rounded-2xl bg-accent-soft text-accent"
                    }
                  >
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">
                    {feature.title}
                  </h3>
                  <p
                    className={
                      feature.highlight
                        ? "mt-2 text-sm leading-relaxed text-accent-ink/80"
                        : "mt-2 text-sm leading-relaxed text-muted"
                    }
                  >
                    {feature.description}
                  </p>
                </div>

                {feature.highlight && (
                  <div className="relative mt-6 space-y-2">
                    {[
                      { time: "6:00 pm", label: "Due today — first reminder" },
                      { time: "8:00 pm", label: "Second reminder sent" },
                      { time: "10:00 pm", label: "Third reminder sent" },
                    ].map((row, index) => (
                      <div
                        key={row.time}
                        className="flex items-center gap-2.5 rounded-xl bg-white/10 px-3 py-2"
                      >
                        <WhatsAppIcon className="size-3.5 shrink-0" />
                        <span className="font-mono text-[10px] uppercase tracking-wider opacity-80">
                          {row.time}
                        </span>
                        <span className="ml-auto text-[11px] font-medium">
                          {row.label}
                        </span>
                        <span
                          className={`size-1.5 rounded-full ${
                            index === 2 ? "bg-white/40" : "bg-accent-ink"
                          }`}
                        />
                      </div>
                    ))}
                    <p className="pt-1 font-mono text-[10px] uppercase tracking-[0.18em] opacity-70">
                      repeats every 2 hours · stops when paid
                    </p>
                    <p className="text-right font-urdu text-sm opacity-80">
                      ہر دو گھنٹے بعد یاد دہانی · ادائیگی پر بند
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
