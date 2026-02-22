import { EmptyState, GlassCard, SectionTitle } from "@/app/components/ui";

export default function UserUsagePage() {
  return (
    <div className="space-y-6">
      <SectionTitle
        title="Usage Dashboard"
        description="Monitor request volume and quota usage across active subscriptions."
      />
      <GlassCard>
        <EmptyState
          title="No usage data yet."
          description="Usage analytics appears after your subscribed APIs receive traffic."
        />
      </GlassCard>
    </div>
  );
}
