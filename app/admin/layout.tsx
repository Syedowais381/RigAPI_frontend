import type { ReactNode } from "react";
import { PanelLayout } from "@/app/components/panel-layout";

const adminNav = [
  { label: "Users", href: "/admin" },
  { label: "APIs", href: "/admin/apis" },
  { label: "Reports", href: "/admin/reports" },
  { label: "Analytics", href: "/admin/analytics" },
  { label: "System Settings", href: "/admin/system-settings" },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <PanelLayout
      title="Admin Panel"
      description="Moderate users, approve APIs, review reports, and manage platform settings."
      navItems={adminNav}
    >
      {children}
    </PanelLayout>
  );
}
