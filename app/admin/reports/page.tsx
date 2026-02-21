import { EmptyState, GlassCard, SectionTitle } from "@/app/components/ui";

export default function AdminReportsPage() {
  return (
    <div className="space-y-6">
      <SectionTitle title="Reports" />
      <GlassCard>
        <EmptyState
          title="No reports available."
          description="Policy and abuse reports will appear when filed."
        />
      </GlassCard>
    </div>
  );
}
