import type { ReactNode } from "react";
import Link from "next/link";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  disabled?: boolean;
  className?: string;
};

const buttonClassByVariant = {
  primary:
    "bg-[var(--accent)] text-white border border-transparent shadow-[0_10px_20px_-16px_rgba(79,124,255,0.9)] hover:-translate-y-px hover:brightness-110 hover:shadow-[0_16px_30px_-16px_rgba(79,124,255,0.72)] active:translate-y-0 active:brightness-100",
  secondary:
    "bg-[var(--bg-elevated)] text-[var(--text)] border border-[var(--card-border)] hover:-translate-y-px hover:border-[var(--accent)] hover:bg-[color-mix(in_oklab,var(--bg-elevated)_88%,var(--accent)_12%)] active:translate-y-0",
  ghost:
    "bg-transparent text-[var(--text)] border border-transparent hover:-translate-y-px hover:border-[var(--card-border)] hover:bg-[var(--bg-elevated)] active:translate-y-0",
  danger:
    "bg-transparent text-[var(--danger)] border border-red-500/40 hover:-translate-y-px hover:bg-red-500/10 active:translate-y-0",
};

export function Button({
  children,
  href,
  variant = "primary",
  disabled,
  className,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-[var(--radius-sm)] px-4 py-2 text-sm font-medium ${buttonClassByVariant[variant]} ${disabled ? "pointer-events-none opacity-40" : ""} ${className ?? ""}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" disabled={disabled} className={classes}>
      {children}
    </button>
  );
}

export function SectionTitle({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-6">
      <h2 className="page-heading">{title}</h2>
      {description ? <p className="mt-2 text-sm text-muted">{description}</p> : null}
    </div>
  );
}

export function Badge({
  children,
  variant = "neutral",
}: {
  children: ReactNode;
  variant?: "neutral" | "accent" | "success" | "warning";
}) {
  const classes =
    variant === "accent"
      ? "bg-[var(--accent-soft)] text-[var(--accent)] border-blue-500/40"
      : variant === "success"
        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/40"
        : variant === "warning"
          ? "bg-amber-500/10 text-amber-400 border-amber-500/40"
          : "bg-[var(--bg-elevated)] text-[var(--text-muted)] border-[var(--card-border)]";
  return (
    <span className={`rounded-full border px-2.5 py-1 text-xs font-medium ${classes}`}>
      {children}
    </span>
  );
}

export function GlassCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`surface surface-card p-5 ${className ?? ""}`}>{children}</div>;
}

export function EmptyState({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="empty-state">
      <p className="text-sm font-medium text-[var(--text)]">{title}</p>
      {description ? <p className="mt-1 text-sm">{description}</p> : null}
    </div>
  );
}
