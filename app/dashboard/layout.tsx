import type { ReactNode } from "react";
import { PanelLayout } from "@/app/components/panel-layout";

const userNav = [
  { label: "Overview", href: "/dashboard" },
  { label: "Browse APIs", href: "/marketplace" },
  { label: "Subscriptions", href: "/dashboard/subscriptions" },
  { label: "API Keys", href: "/dashboard/keys" },
  { label: "Usage", href: "/dashboard/usage" },
];

export default function UserDashboardLayout({ children }: { children: ReactNode }) {
  return (
    <PanelLayout
      title="User Dashboard"
      description="Browse APIs, manage subscriptions, generate keys, and monitor usage."
      navItems={userNav}
    >
      {children}
    </PanelLayout>
  );
}
