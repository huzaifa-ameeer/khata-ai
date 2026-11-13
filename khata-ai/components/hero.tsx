import { ArrowRightIcon, BellIcon, WhatsAppIcon } from "@/components/icons";

const entries = [
  {
    date: "10 Nov",
    name: "Ahmed Raza",
    amount: "3,500",
    status: "Due",
    badge: "bg-gold-soft text-gold",
  },
  {
    date: "08 Nov",
    name: "Bilal Traders",
    amount: "12,000",
    status: "Overdue",
    badge: "bg-gold-soft text-gold",
  },
  {
    date: "05 Nov",
    name: "Sana Kirana",
    amount: "1,200",
    status: "Paid",
    badge: "bg-accent-soft text-accent",
  },
  {
    date: "02 Nov",
    name: "Usman Pansar",
    amount: "800",
    status: "Paid",
    badge: "bg-accent-soft text-accent",
  },
];

const stats = [
  { value: "2 hrs", label: "reminder cadence" },
  { value: "1 tap", label: "to mark paid" },
  { value: "5 min", label: "to set up" },
];

function LedgerArtifact() {
  return (
    <div className="relative">
      <div className="absolute inset-0 translate-x-2.5 -translate-y-2.5 rotate-[2.2deg] rounded-2xl border border-border bg-surface-2" />

      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_28px_60px_-38px_rgba(9,36,27,0.55)]">
        <span className="absolute left-1/2 top-0 z-20 h-5 w-24 -translate-x-1/2 -translate-y-1/2 -rotate-2 bg-gold/30" />

        <div className="absolute inset-y-0 left-3 flex flex-col justify-evenly py-7">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className="size-2 rounded-full border border-border-strong bg-bg"
            />
          ))}
        </div>

        <div className="py-5 pl-11 pr-5">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-semibold tracking-tight text-ink">
                  Khata
                </span>
                <span className="font-urdu text-lg text-accent" style={{ lineHeight: 1 }}>
                  کھاتہ
                </span>
              </div>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                Udhaar register · Shop 12
              </p>
            </div>
            <p className="text-right font-mono text-[9px] uppercase leading-relaxed tracking-[0.16em] text-muted">
              Lahore
              <br />
              Nov 2026
            </p>
          </div>

          <div className="mt-5 flex items-center gap-3 border-b border-border pb-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
            <span className="w-11">Date</span>
            <span className="flex-1">Customer</span>
            <span className="text-right">Amount</span>
            <span className="w-14 text-center">Status</span>
          </div>

          <ul className="divide-y divide-dashed divide-border">
            {entries.map((entry) => (
              <li key={entry.name} className="flex items-center gap-3 py-2.5">
                <span className="w-11 font-mono text-[10px] text-muted">
                  {entry.date}
                </span>
                <span className="flex-1 truncate text-[13px] font-medium text-ink">
                  {entry.name}
                </span>
                <span className="font-mono text-[13px] font-semibold tabular-nums text-ink">
                  <span className="mr-0.5 text-[9px] font-normal text-muted">
                    Rs
                  </span>
                  {entry.amount}
                </span>
                <span
                  className={`w-14 rounded-full py-0.5 text-center font-mono text-[8px] font-semibold uppercase tracking-wider ${entry.badge}`}
                >
                  {entry.status}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-end justify-between border-t border-border pt-3">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                Outstanding
              </p>
              <p className="mt-0.5 font-mono text-xl font-semibold tabular-nums text-ink">
                Rs 16,100
              </p>
            </div>
            <div className="-rotate-6 rounded-md border-2 border-accent/60 px-2.5 py-1 text-center">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                Paid
              </p>
              <p className="font-mono text-[7px] uppercase tracking-wider text-accent/80">
                05 Nov 2026
              </p>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-2 rounded-lg bg-accent-soft px-2.5 py-2">
            <WhatsAppIcon className="size-3.5 shrink-0 text-accent" />
            <span className="font-mono text-[9px] uppercase tracking-wider text-accent">
              Reminder sent · 6:00 pm
            </span>
            <span className="ml-auto inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-muted">
              <BellIcon className="size-3" />
              Next in 2h
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative scroll-mt-16 overflow-hidden border-b border-border"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-4 top-6 select-none font-urdu text-[34vw] text-ink/[0.04] sm:text-[27vw] lg:top-0"
        style={{ lineHeight: 0.9 }}
      >
        کھاتہ
      </span>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div className="grid items-center gap-14 py-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-8 lg:py-16">
          <div>
            <h1 className="text-[clamp(2.6rem,7vw,5.4rem)] font-semibold leading-[0.96] tracking-[-0.03em] text-ink">
              Never ask for
              <br />
              <span className="text-accent">udhaar</span> twice.
            </h1>

            <p className="mt-6 text-left font-urdu text-[2rem] text-ink sm:text-[2.6rem]">
              اب کھاتہ خود یاد دلاتا ہے
            </p>

            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
              Khata AI keeps the ledger, stores every customer&apos;s details,
              and sends a polite WhatsApp reminder every two hours until the
              payment is settled. Then it stops. On its own.
            </p>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href="#get-started"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-accent-ink transition-colors hover:bg-accent-hover"
              >
                Open your khata
                <ArrowRightIcon className="size-4" />
              </a>
              <a
                href="#how-it-works"
                className="group inline-flex h-12 items-center gap-2 text-sm font-semibold text-ink"
              >
                See how it works
                <ArrowRightIcon className="size-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
              </a>
            </div>

            <p className="mt-7 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              No customer app · Works on any phone · Urdu + English
            </p>

            <div className="mt-9 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-mono text-2xl font-semibold tracking-tight text-ink">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[11px] uppercase tracking-[0.14em] text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[430px] px-2 pb-4 pt-4">
            <LedgerArtifact />
          </div>
        </div>
      </div>
    </section>
  );
}
