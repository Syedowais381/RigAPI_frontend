import type { ReactNode } from "react";
import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

export function PanelLayout({
  title,
  description,
  navItems,
  children,
}: {
  title: string;
  description: string;
  navItems: NavItem[];
  children: ReactNode;
}) {
  return (
    <div className="container-shell py-8">
      <div className="mb-7">
        <Link
          href="/"
          className="inline-flex rounded-[var(--radius-sm)] px-2 py-1 text-sm text-muted hover:-translate-y-px hover:bg-[var(--bg-elevated)] hover:text-[var(--text)]"
        >
          ? Back to RigAPI
        </Link>
      </div>
      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        <aside className="surface h-fit p-3">
          <p className="px-2 pb-2 text-sm font-semibold">{title}</p>
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-[var(--radius-sm)] border border-transparent px-3 py-2 text-sm text-muted hover:-translate-y-px hover:border-[var(--card-border)] hover:bg-[var(--bg-elevated)] hover:text-[var(--text)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <section>
          <header className="mb-6">
            <h1 className="page-heading">{title}</h1>
            <p className="mt-2 text-sm text-muted">{description}</p>
          </header>
          {children}
        </section>
      </div>
    </div>
  );
}
