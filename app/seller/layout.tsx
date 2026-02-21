import type { ReactNode } from "react";
import { PanelLayout } from "@/app/components/panel-layout";

const sellerNav = [
  { label: "Overview", href: "/seller" },
  { label: "My APIs", href: "/seller/my-apis" },
  { label: "Deployments", href: "/seller/deployments" },
  { label: "Analytics", href: "/seller/analytics" },
  { label: "Revenue", href: "/seller/revenue" },
  { label: "AI Generator", href: "/seller/ai-generator" },
  { label: "Settings", href: "/seller/settings" },
];

export default function SellerLayout({ children }: { children: ReactNode }) {
  return (
    <PanelLayout
      title="Seller Dashboard"
      description="Manage APIs, deployments, analytics, monetization, and AI generation."
      navItems={sellerNav}
    >
      {children}
    </PanelLayout>
  );
}
