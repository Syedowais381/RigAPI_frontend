import { EmptyState, GlassCard, SectionTitle } from "@/app/components/ui";

export default function SellerSettingsPage() {
  return (
    <div className="space-y-6">
      <SectionTitle title="Settings" />
      <GlassCard>
        <EmptyState
          title="No settings configured yet."
          description="Workspace, payout, and API defaults will appear once connected."
        />
      </GlassCard>
    </div>
  );
}
