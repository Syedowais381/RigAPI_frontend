import Link from "next/link";

export function RigApiLogo() {
  return (
    <Link
      href="/"
      className="brand-wrap inline-flex items-center gap-2.5 rounded-[var(--radius-sm)] px-1 py-1"
      aria-label="RigAPI home"
    >
      <span className="brand-mark">
        <svg
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-4 w-4 text-blue-100"
          aria-hidden
        >
          <circle cx="5" cy="6" r="1.2" />
          <circle cx="14.8" cy="5.2" r="1.2" />
          <circle cx="9.8" cy="14.5" r="1.25" />
          <path d="M6.1 6.4 13.6 5.5M6 6.8l3.2 6.3m5.1-7.2-4 7.1" />
        </svg>
      </span>
      <span className="text-base font-semibold tracking-tight">RigAPI</span>
    </Link>
  );
}
