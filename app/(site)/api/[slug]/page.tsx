import { ApiDetailsTabs } from "@/app/components/api-details-tabs";
import { Badge, Button, GlassCard } from "@/app/components/ui";

export default function ApiDetailsPage() {
  return (
    <div className="space-y-6">
      <header className="surface flex flex-wrap items-start justify-between gap-4 p-6">
        <div>
          <h1 className="page-heading">API Name</h1>
          <p className="mt-2 text-sm text-muted">Seller Name</p>
          <div className="mt-3">
            <Badge>Category</Badge>
          </div>
        </div>
        <Button>Subscribe</Button>
      </header>

      <div className="grid gap-5 lg:grid-cols-[1fr_300px]">
        <section>
          <ApiDetailsTabs />
        </section>
        <aside>
          <GlassCard>
            <h2 className="text-sm font-semibold">API Metadata</h2>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-3">
                <span className="text-muted">Version</span>
                <span>Not available</span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-muted">Last Updated</span>
                <span>Not available</span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-muted">Status</span>
                <Badge variant="warning">Pending</Badge>
              </div>
            </div>
          </GlassCard>
        </aside>
      </div>
    </div>
  );
}
