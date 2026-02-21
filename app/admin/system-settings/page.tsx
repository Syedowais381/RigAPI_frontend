import { EmptyState, GlassCard, SectionTitle } from "@/app/components/ui";

export default function AdminSystemSettingsPage() {
  return (
    <div className="space-y-6">
      <SectionTitle title="System Settings" />
      <GlassCard>
        <EmptyState
          title="No system settings configured."
          description="Platform configuration controls can be added here."
        />
      </GlassCard>
    </div>
  );
}
