import { EmptyState, GlassCard, SectionTitle } from "@/app/components/ui";

export default function SellerDeploymentsPage() {
  return (
    <div className="space-y-6">
      <SectionTitle title="Deployments" />
      <GlassCard>
        <EmptyState
          title="No deployments yet."
          description="Deployment history and rollout states will appear once APIs are deployed."
        />
      </GlassCard>
    </div>
  );
}
