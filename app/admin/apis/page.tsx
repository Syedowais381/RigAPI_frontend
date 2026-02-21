import { Button, EmptyState, GlassCard, SectionTitle } from "@/app/components/ui";

export default function AdminApisPage() {
  return (
    <div className="space-y-6">
      <SectionTitle title="API Approval" />
      <GlassCard>
        <h3 className="text-sm font-semibold">Pending APIs</h3>
        <div className="mt-4">
          <EmptyState
            title="No pending APIs."
            description="Submitted APIs awaiting review will appear here."
          />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button>Approve</Button>
          <Button variant="danger">Reject</Button>
        </div>
      </GlassCard>
    </div>
  );
}
