import { Logo } from "@/components/logo";
import { ArrowRightIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Why Khata", href: "#why" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Shop",
    links: [
      { label: "Dashboard", href: "#" },
      { label: "Customers", href: "#" },
      { label: "Reminders", href: "#" },
      { label: "Collections", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface-2/60">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1.7fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              The digital khata for Pakistani shopkeepers. Record udhaar,
              save customer details, and let WhatsApp reminders bring the
              money back.
            </p>
            <p className="mt-4 font-urdu text-right text-xl leading-loose text-accent">
              کھاتہ صاف، کاروبار مضبوط
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <a
                href="#get-started"
                className="inline-flex h-10 items-center gap-2 rounded-full bg-accent px-4 text-xs font-semibold text-accent-ink transition-colors hover:bg-accent-hover"
              >
                <WhatsAppIcon className="size-4" />
                Start on WhatsApp
                <ArrowRightIcon className="size-3.5" />
              </a>
              <a
                href="#"
                className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-surface px-4 text-xs font-semibold text-ink transition-colors hover:border-border-strong"
              >
                <PhoneIcon className="size-4 text-muted" />
                +92 300 0000000
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted transition-colors hover:text-ink"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © 2026 Khata AI. Made in Pakistan.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted">
            <span className="inline-flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-accent" />
              All reminders running
            </span>
            <span className="font-mono uppercase tracking-[0.16em]">
              Light / Dark
            </span>
            <a href="#top" className="transition-colors hover:text-ink">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
