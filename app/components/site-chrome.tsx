import type { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui";

const navLinks = [
  { label: "Marketplace", href: "/marketplace" },
  { label: "Generate API", href: "/generate-api" },
  { label: "Docs", href: "/docs" },
  { label: "Pricing", href: "/pricing" },
];

const footerColumns = [
  { title: "Product", links: ["Marketplace", "Generate API", "Gateway", "Pricing"] },
  { title: "Developers", links: ["Documentation", "SDKs", "Changelog", "Status"] },
  { title: "Resources", links: ["Guides", "Tutorials", "Support", "Community"] },
  { title: "Company", links: ["About", "Contact", "Careers", "Partners"] },
  { title: "Legal", links: ["Terms", "Privacy", "Security", "Cookies"] },
  { title: "Social", links: ["GitHub", "X", "LinkedIn", "Discord"] },
];

function SiteNavbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--card-border)] bg-[rgba(9,13,22,0.82)] backdrop-blur-md">
      <div className="container-shell flex h-16 items-center justify-between gap-4">
        <Link href="/" className="text-base font-semibold tracking-tight">
          RigAPI
        </Link>
        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[var(--radius-sm)] px-3 py-2 text-sm text-muted hover:text-[var(--text)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button href="/login" variant="ghost" className="hidden sm:inline-flex">
            Login
          </Button>
          <Button href="/signup" variant="primary">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[var(--card-border)] bg-[var(--bg-soft)] py-12">
      <div className="container-shell">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-medium text-[var(--text)]">{column.title}</h3>
              <ul className="mt-3 space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted hover:text-[var(--text)]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 border-t border-[var(--card-border)] pt-5 text-sm text-muted">
          © RigAPI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteNavbar />
      <main className="container-shell py-8">{children}</main>
      <SiteFooter />
    </>
  );
}
