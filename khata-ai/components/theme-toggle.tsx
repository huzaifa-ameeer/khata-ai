"use client";

import { MoonIcon, SunIcon } from "@/components/icons";

export function ThemeToggle() {
  function toggle() {
    const isDark = document.documentElement.classList.toggle("dark");
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      title="Toggle theme"
      className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-border-strong hover:text-ink"
    >
      <SunIcon className="size-[18px] hidden dark:block" />
      <MoonIcon className="size-[18px] block dark:hidden" />
    </button>
  );
}
