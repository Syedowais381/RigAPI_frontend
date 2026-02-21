import { Button, EmptyState, GlassCard, SectionTitle } from "@/app/components/ui";

export default function GenerateApiPage() {
  return (
    <div className="space-y-6">
      <SectionTitle
        title="Generate API"
        description="Create API contracts and service logic with AI-assisted scaffolding."
      />
      <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr]">
        <GlassCard>
          <h3 className="text-base font-semibold">Generator Input</h3>
          <div className="mt-4 grid gap-3">
            <label className="text-sm text-muted">
              API Name
              <input className="mt-1 w-full rounded-[var(--radius-sm)] border border-[var(--card-border)] bg-[var(--bg-elevated)] px-3 py-2 text-sm outline-none" />
            </label>
            <label className="text-sm text-muted">
              Description
              <textarea className="mt-1 h-28 w-full rounded-[var(--radius-sm)] border border-[var(--card-border)] bg-[var(--bg-elevated)] px-3 py-2 text-sm outline-none" />
            </label>
            <div className="pt-2">
              <Button>Generate API</Button>
            </div>
          </div>
        </GlassCard>
        <GlassCard>
          <h3 className="text-base font-semibold">Output Preview</h3>
          <div className="mt-4">
            <EmptyState
              title="No generated API yet."
              description="Submit generator input to view endpoint structure and code output."
            />
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
