import { EmptyState, GlassCard, SectionTitle } from "@/app/components/ui";

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
      <SectionTitle title="Analytics" />
      <GlassCard>
        <EmptyState
          title="No platform analytics available."
          description="Traffic and moderation analytics will appear as data is collected."
        />
      </GlassCard>
    </div>
  );
}
