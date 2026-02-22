import { EmptyState, GlassCard, SectionTitle } from "@/app/components/ui";

export default function UserSubscriptionsPage() {
  return (
    <div className="space-y-6">
      <SectionTitle
        title="Subscriptions"
        description="Manage subscribed APIs, plans, and renewal settings."
      />
      <GlassCard>
        <EmptyState
          title="No active subscriptions."
          description="Browse Marketplace to subscribe to production-ready APIs."
        />
      </GlassCard>
    </div>
  );
}
