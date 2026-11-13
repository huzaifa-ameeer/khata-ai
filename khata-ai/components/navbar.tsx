"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  ArrowRightIcon,
  CloseIcon,
  MenuIcon,
  WhatsAppIcon,
} from "@/components/icons";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#why", label: "Why Khata" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6">
        <a href="#top" className="shrink-0" aria-label="Khata AI home">
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface-2 hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a
            href="#get-started"
            className="hidden h-9 items-center gap-1.5 rounded-full bg-accent px-4 text-sm font-semibold text-accent-ink transition-colors hover:bg-accent-hover sm:inline-flex"
          >
            Get started
            <ArrowRightIcon className="size-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-surface text-ink md:hidden"
          >
            {open ? (
              <CloseIcon className="size-5" />
            ) : (
              <MenuIcon className="size-5" />
            )}
          </button>
        </div>
      </nav>

      {open && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="fixed inset-x-0 bottom-0 top-16 z-40 bg-black/20 backdrop-blur-md motion-reduce:animate-none animate-[menu-fade-in_180ms_ease-out] md:hidden"
          />
          <div className="absolute inset-x-0 top-full z-50 border-b border-border bg-surface/70 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.45)] backdrop-blur-2xl motion-reduce:animate-none animate-[menu-slide-down_220ms_ease-out] md:hidden">
            <p className="mx-auto max-w-6xl px-5 pt-4 text-right font-urdu text-sm text-muted sm:px-6">
              دکان کا کھاتہ، اب خودکار
            </p>
            <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-6">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-surface/70"
                  >
                    {link.label}
                    <ArrowRightIcon className="size-4 text-muted" />
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="#get-started"
                  onClick={() => setOpen(false)}
                  className="flex h-11 items-center justify-center gap-2 rounded-xl bg-accent px-4 text-sm font-semibold text-accent-ink"
                >
                  <WhatsAppIcon className="size-4" />
                  Get started
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  );
}
