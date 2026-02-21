import { EmptyState, GlassCard, SectionTitle } from "@/app/components/ui";

export default function SellerAnalyticsPage() {
  return (
    <div className="space-y-6">
      <SectionTitle title="Analytics" />
      <GlassCard>
        <EmptyState
          title="No analytics data."
          description="Traffic, latency, and request trends will appear after API usage begins."
        />
      </GlassCard>
    </div>
  );
}
