import { LedgerIcon } from "@/components/icons";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="relative inline-flex size-9 items-center justify-center rounded-xl bg-accent text-accent-ink shadow-sm">
        <LedgerIcon className="size-[19px]" />
        <span className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full border-2 border-bg bg-gold" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[17px] font-semibold tracking-tight text-ink">
          Khata<span className="text-accent">AI</span>
        </span>
        {!compact && (
          <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.28em] text-muted">
            udhaar ledger
          </span>
        )}
      </span>
    </span>
  );
}
