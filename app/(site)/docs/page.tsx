import { EmptyState, GlassCard, SectionTitle } from "@/app/components/ui";

export default function DocsPage() {
  return (
    <div className="space-y-6">
      <SectionTitle
        title="Documentation"
        description="Learn how to publish, secure, and consume APIs through RigAPI."
      />
      <div className="grid gap-4 md:grid-cols-2">
        <GlassCard>
          <h3 className="text-sm font-semibold">Getting Started</h3>
          <p className="mt-2 text-sm text-muted">
            Account setup, API publishing, gateway configuration, and key management.
          </p>
        </GlassCard>
        <GlassCard>
          <h3 className="text-sm font-semibold">Integration Guides</h3>
          <p className="mt-2 text-sm text-muted">
            Client SDK usage, authentication flows, and request routing behavior.
          </p>
        </GlassCard>
      </div>
      <EmptyState
        title="Detailed docs content will appear here."
        description="Connect your documentation source to render full developer docs."
      />
    </div>
  );
}
