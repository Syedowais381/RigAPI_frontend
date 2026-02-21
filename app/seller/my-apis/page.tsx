import { Button, EmptyState, GlassCard, SectionTitle } from "@/app/components/ui";

export default function SellerMyApisPage() {
  return (
    <div className="space-y-6">
      <SectionTitle title="My APIs" />
      <GlassCard>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] text-left text-sm">
            <thead className="text-muted">
              <tr className="border-b border-[var(--card-border)]">
                <th className="px-3 py-3 font-medium">API Name</th>
                <th className="px-3 py-3 font-medium">Status</th>
                <th className="px-3 py-3 font-medium">Visibility</th>
                <th className="px-3 py-3 font-medium">Created Date</th>
                <th className="px-3 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody />
          </table>
        </div>
        <div className="mt-4">
          <EmptyState
            title="No APIs created yet."
            description="Use AI Generator to create and publish your first API."
          />
        </div>
        <div className="mt-4">
          <Button href="/seller/ai-generator">Create API</Button>
        </div>
      </GlassCard>
    </div>
  );
}
