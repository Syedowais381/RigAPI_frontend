import { EmptyState, GlassCard, SectionTitle } from "@/app/components/ui";

export default function SellerOverviewPage() {
  return (
    <div className="space-y-6">
      <SectionTitle title="Overview" />
      <div className="grid gap-4 md:grid-cols-2">
        <GlassCard>
          <h3 className="text-sm font-semibold">Revenue</h3>
          <div className="mt-3">
            <EmptyState
              title="No revenue data yet."
              description="Revenue summary appears after active subscriptions or usage billing."
            />
          </div>
        </GlassCard>
        <GlassCard>
          <h3 className="text-sm font-semibold">API Usage</h3>
          <div className="mt-3">
            <EmptyState
              title="No usage graph available."
              description="Usage chart appears when your API receives traffic."
            />
          </div>
        </GlassCard>
      </div>
      <GlassCard>
        <h3 className="text-sm font-semibold">Active APIs</h3>
        <div className="mt-3">
          <EmptyState
            title="No active APIs."
            description="Publish your first API to see active listings."
          />
        </div>
      </GlassCard>
    </div>
  );
}
