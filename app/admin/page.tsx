import { EmptyState, GlassCard, SectionTitle } from "@/app/components/ui";

export default function AdminUsersPage() {
  return (
    <div className="space-y-6">
      <SectionTitle title="Users" />
      <GlassCard>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="text-muted">
              <tr className="border-b border-[var(--card-border)]">
                <th className="px-3 py-3 font-medium">Name</th>
                <th className="px-3 py-3 font-medium">Email</th>
                <th className="px-3 py-3 font-medium">Role</th>
                <th className="px-3 py-3 font-medium">Status</th>
                <th className="px-3 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody />
          </table>
        </div>
        <div className="mt-4">
          <EmptyState
            title="No users to display."
            description="User records appear after account creation events."
          />
        </div>
      </GlassCard>
    </div>
  );
}
