"use client";

import { useState } from "react";
import { Button, EmptyState, GlassCard } from "@/app/components/ui";
import { CopyIcon } from "@/app/components/icons";

type Tab = "overview" | "documentation" | "pricing" | "reviews";

const tabs: Array<{ id: Tab; label: string }> = [
  { id: "overview", label: "Overview" },
  { id: "documentation", label: "Documentation" },
  { id: "pricing", label: "Pricing" },
  { id: "reviews", label: "Reviews" },
];

export function ApiDetailsTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  return (
    <div>
      <div className="mb-5 flex flex-wrap gap-2 border-b border-[var(--card-border)] pb-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-[var(--radius-sm)] px-3 py-2 text-sm ${
              activeTab === tab.id
                ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                : "text-muted hover:bg-[var(--bg-elevated)] hover:text-[var(--text)]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "overview" ? (
        <GlassCard>
          <h3 className="text-sm font-semibold">API Overview</h3>
          <p className="mt-2 text-sm text-muted">
            This section provides the API summary, use case, and integration guidance.
          </p>
          <div className="mt-4">
            <EmptyState
              title="No additional overview content yet."
              description="Details will appear after the seller publishes complete metadata."
            />
          </div>
        </GlassCard>
      ) : null}

      {activeTab === "documentation" ? (
        <div className="space-y-4">
          <GlassCard>
            <h3 className="text-sm font-semibold">Endpoints</h3>
            <div className="mt-3 empty-state text-left">
              <p className="font-mono text-xs text-[var(--text)]">No endpoints published yet.</p>
            </div>
          </GlassCard>
          <GlassCard>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-sm font-semibold">API Key</h3>
              <Button variant="secondary">
                <span className="mr-2">
                  <CopyIcon className="h-4 w-4" />
                </span>
                Copy API Key
              </Button>
            </div>
            <div className="mt-3 empty-state font-mono text-xs text-left">
              API key will be available after subscription.
            </div>
          </GlassCard>
          <GlassCard>
            <h3 className="text-sm font-semibold">Request Example</h3>
            <pre className="mt-3 empty-state overflow-x-auto text-left font-mono text-xs">
              <code>No request example available.</code>
            </pre>
          </GlassCard>
          <GlassCard>
            <h3 className="text-sm font-semibold">Response</h3>
            <pre className="mt-3 empty-state overflow-x-auto text-left font-mono text-xs">
              <code>No response schema available.</code>
            </pre>
          </GlassCard>
        </div>
      ) : null}

      {activeTab === "pricing" ? (
        <div className="grid gap-4 md:grid-cols-2">
          <GlassCard>
            <h3 className="text-sm font-semibold">Usage-Based Plan</h3>
            <p className="mt-2 text-sm text-muted">
              Configure metered billing directly from seller settings.
            </p>
            <div className="mt-4">
              <Button className="w-full">Choose Plan</Button>
            </div>
          </GlassCard>
          <GlassCard>
            <h3 className="text-sm font-semibold">Subscription Plan</h3>
            <p className="mt-2 text-sm text-muted">
              Fixed recurring access for stable integration workloads.
            </p>
            <div className="mt-4">
              <Button className="w-full">Choose Plan</Button>
            </div>
          </GlassCard>
        </div>
      ) : null}

      {activeTab === "reviews" ? (
        <GlassCard>
          <EmptyState title="No reviews yet." description="Reviews will appear once buyers publish feedback." />
        </GlassCard>
      ) : null}
    </div>
  );
}
