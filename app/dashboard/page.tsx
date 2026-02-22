import { Badge, Button, GlassCard, SectionTitle } from "@/app/components/ui";

export default function UserDashboardPage() {
  return (
    <div className="space-y-6">
      <SectionTitle
        title="Marketplace Consumer Workspace"
        description="Your API subscriptions, keys, and usage are managed here."
      />
      <div className="grid gap-4 md:grid-cols-2">
        <GlassCard>
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm font-semibold">Browse APIs</h3>
            <Badge variant="accent">Marketplace</Badge>
          </div>
          <p className="mt-2 text-sm text-muted">
            Discover production-ready APIs and subscribe with transparent pricing plans.
          </p>
          <Button href="/marketplace" className="mt-4">
            Explore Marketplace
          </Button>
        </GlassCard>
        <GlassCard>
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm font-semibold">Usage Dashboard</h3>
            <Badge>Consumer Analytics</Badge>
          </div>
          <p className="mt-2 text-sm text-muted">
            Track request volume, quota utilization, and active API key activity.
          </p>
          <Button href="/dashboard/usage" variant="secondary" className="mt-4">
            View Usage
          </Button>
        </GlassCard>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <GlassCard>
          <h3 className="text-sm font-semibold">API Key Management</h3>
          <p className="mt-2 text-sm text-muted">
            Generate and rotate API keys for subscribed endpoints.
          </p>
          <Button href="/dashboard/keys" variant="secondary" className="mt-4">
            Manage Keys
          </Button>
        </GlassCard>
        <GlassCard>
          <h3 className="text-sm font-semibold">Subscriptions</h3>
          <p className="mt-2 text-sm text-muted">
            View active API plans and update billing preferences.
          </p>
          <Button href="/dashboard/subscriptions" variant="secondary" className="mt-4">
            Manage Subscriptions
          </Button>
        </GlassCard>
      </div>
    </div>
  );
}
