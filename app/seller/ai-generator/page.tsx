"use client";

import { useMemo, useState } from "react";
import { Badge, Button, EmptyState, GlassCard, SectionTitle } from "@/app/components/ui";

const baseInputClass =
  "mt-1 w-full rounded-[var(--radius-sm)] border border-[var(--card-border)] bg-[var(--bg-elevated)] px-3 py-2 text-sm outline-none";

export default function SellerAiGeneratorPage() {
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  const [githubConnected, setGithubConnected] = useState(false);
  const [cloudConnected, setCloudConnected] = useState(false);
  const [sellerProActive, setSellerProActive] = useState(false);

  const canAccessGenerator = useMemo(
    () => onboardingComplete && githubConnected && cloudConnected && sellerProActive,
    [cloudConnected, githubConnected, onboardingComplete, sellerProActive],
  );

  return (
    <div className="space-y-6">
      <SectionTitle
        title="AI Generator"
        description="Define API behavior and generate deployable service code after seller onboarding is complete."
      />

      <GlassCard>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-sm font-semibold">Access Requirements</h3>
          <Badge variant={canAccessGenerator ? "success" : "warning"}>
            {canAccessGenerator ? "Enabled" : "Locked"}
          </Badge>
        </div>
        <p className="mt-2 text-sm text-muted">
          AI API Generation is available with Seller Pro Plan.
        </p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          <label className="flex items-center gap-2 rounded-[var(--radius-sm)] border border-[var(--card-border)] bg-[var(--bg-elevated)] px-3 py-2 text-sm text-muted">
            <input
              type="checkbox"
              className="h-4 w-4 accent-[var(--accent)]"
              checked={onboardingComplete}
              onChange={(event) => setOnboardingComplete(event.target.checked)}
            />
            Seller onboarding completed
          </label>
          <label className="flex items-center gap-2 rounded-[var(--radius-sm)] border border-[var(--card-border)] bg-[var(--bg-elevated)] px-3 py-2 text-sm text-muted">
            <input
              type="checkbox"
              className="h-4 w-4 accent-[var(--accent)]"
              checked={githubConnected}
              onChange={(event) => setGithubConnected(event.target.checked)}
            />
            GitHub connected
          </label>
          <label className="flex items-center gap-2 rounded-[var(--radius-sm)] border border-[var(--card-border)] bg-[var(--bg-elevated)] px-3 py-2 text-sm text-muted">
            <input
              type="checkbox"
              className="h-4 w-4 accent-[var(--accent)]"
              checked={cloudConnected}
              onChange={(event) => setCloudConnected(event.target.checked)}
            />
            Cloud provider connected
          </label>
          <label className="flex items-center gap-2 rounded-[var(--radius-sm)] border border-[var(--card-border)] bg-[var(--bg-elevated)] px-3 py-2 text-sm text-muted">
            <input
              type="checkbox"
              className="h-4 w-4 accent-[var(--accent)]"
              checked={sellerProActive}
              onChange={(event) => setSellerProActive(event.target.checked)}
            />
            Seller Pro plan activated
          </label>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button href="/seller/settings" variant="secondary">
            Complete Onboarding
          </Button>
          <Button>Upgrade Plan</Button>
        </div>
      </GlassCard>

      {canAccessGenerator ? (
        <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr]">
          <GlassCard>
            <div className="grid gap-3">
              <label className="text-sm text-muted">
                API Name
                <input className={baseInputClass} />
              </label>
              <label className="text-sm text-muted">
                Description
                <textarea className={`${baseInputClass} h-24`} />
              </label>
              <label className="text-sm text-muted">
                Input Parameters
                <textarea className={`${baseInputClass} h-20`} />
              </label>
              <label className="text-sm text-muted">
                Output Format
                <textarea className={`${baseInputClass} h-20`} />
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
      ) : (
        <GlassCard>
          <EmptyState
            title="AI API Generator is currently locked."
            description="Complete onboarding, GitHub and cloud integrations, and activate Seller Pro to continue."
          />
        </GlassCard>
      )}
    </div>
  );
}
