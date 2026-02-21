import { Button, EmptyState, GlassCard, SectionTitle } from "@/app/components/ui";

export default function SellerAiGeneratorPage() {
  return (
    <div className="space-y-6">
      <SectionTitle
        title="AI Generator"
        description="Define API behavior and generate deployable service code."
      />
      <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr]">
        <GlassCard>
          <div className="grid gap-3">
            <label className="text-sm text-muted">
              API Name
              <input className="mt-1 w-full rounded-[var(--radius-sm)] border border-[var(--card-border)] bg-[var(--bg-elevated)] px-3 py-2 text-sm outline-none" />
            </label>
            <label className="text-sm text-muted">
              Description
              <textarea className="mt-1 h-24 w-full rounded-[var(--radius-sm)] border border-[var(--card-border)] bg-[var(--bg-elevated)] px-3 py-2 text-sm outline-none" />
            </label>
            <label className="text-sm text-muted">
              Input Parameters
              <textarea className="mt-1 h-20 w-full rounded-[var(--radius-sm)] border border-[var(--card-border)] bg-[var(--bg-elevated)] px-3 py-2 text-sm outline-none" />
            </label>
            <label className="text-sm text-muted">
              Output Format
              <textarea className="mt-1 h-20 w-full rounded-[var(--radius-sm)] border border-[var(--card-border)] bg-[var(--bg-elevated)] px-3 py-2 text-sm outline-none" />
            </label>
            <Button className="mt-2 w-fit">Generate</Button>
          </div>
        </GlassCard>
        <GlassCard>
          <h3 className="text-sm font-semibold">Code Preview</h3>
          <div className="mt-3">
            <EmptyState
              title="No generated code yet."
              description="Generated API code preview will appear here."
            />
          </div>
          <Button disabled className="mt-4 w-full">
            Deploy
          </Button>
        </GlassCard>
      </div>
    </div>
  );
}
