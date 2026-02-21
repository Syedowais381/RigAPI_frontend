import type { ReactNode } from "react";
import { SiteChrome } from "@/app/components/site-chrome";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return <SiteChrome>{children}</SiteChrome>;
}
