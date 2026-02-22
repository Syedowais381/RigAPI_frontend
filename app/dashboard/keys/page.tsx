import { EmptyState, GlassCard, SectionTitle } from "@/app/components/ui";

export default function UserKeysPage() {
  return (
    <div className="space-y-6">
      <SectionTitle title="API Keys" description="Generate and manage keys for subscribed APIs." />
      <GlassCard>
        <EmptyState
          title="No API keys generated yet."
          description="Subscribe to an API from Marketplace to create and manage keys."
        />
      </GlassCard>
    </div>
  );
}
