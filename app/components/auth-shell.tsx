import type { ReactNode } from "react";
import Link from "next/link";

export function AuthShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <Link
          href="/"
          className="mb-8 inline-flex rounded-[var(--radius-sm)] px-2 py-1 text-sm text-muted hover:-translate-y-px hover:bg-[var(--bg-elevated)] hover:text-[var(--text)]"
        >
          {"<"} RigAPI
        </Link>
        <div className="surface p-6 sm:p-7">
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-2 text-sm text-muted">{subtitle}</p>
          <div className="mt-6">{children}</div>
        </div>
      </div>
    </main>
  );
}
