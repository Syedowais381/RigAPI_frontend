import {
  BoltIcon,
  CoinIcon,
  CloudIcon,
  GaugeIcon,
  ShieldIcon,
} from "@/app/components/icons";
import { Badge, Button, GlassCard, SectionTitle } from "@/app/components/ui";
import { marketplaceApis } from "@/app/data/apis";

const marketplaceFeatures = [
  {
    title: "Secure Gateway Proxy",
    description: "Route and protect subscribed API traffic through centralized access policies.",
    icon: ShieldIcon,
  },
  {
    title: "Integration-Ready APIs",
    description: "Discover production-ready APIs with clear pricing, limits, and documentation.",
    icon: GaugeIcon,
  },
  {
    title: "Usage & Key Management",
    description: "Generate API keys, monitor usage, and govern subscriptions across teams.",
    icon: CloudIcon,
  },
];

const sellerTools = [
  {
    title: "AI API Generator",
    description: "Define inputs and outputs, then generate production-ready API logic.",
    icon: BoltIcon,
  },
  {
    title: "Monetization Engine",
    description: "Configure pricing models and subscription access for every API product.",
    icon: CoinIcon,
  },
  {
    title: "One-Click Deployment",
    description: "Publish APIs quickly with managed infrastructure and release workflows.",
    icon: CloudIcon,
  },
];

const steps = [
  "Discover APIs in Marketplace",
  "Subscribe and Generate API Keys",
  "Integrate Through RigAPI Gateway",
  "Scale with Seller Tools",
];

export default function LandingPage() {
  return (
    <div className="space-y-14 pb-4">
      <section className="surface relative overflow-hidden p-8 md:p-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(79,124,255,0.15),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(99,102,241,0.12),transparent_50%)]" />
        <div className="relative max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-[var(--card-border)] bg-[var(--bg-elevated)] px-3 py-1 text-xs text-muted">
            AI-powered API marketplace and gateway
          </p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Discover Production-Ready APIs.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Start by discovering integration-ready APIs in RigAPI Marketplace, subscribe with
            transparent pricing, and ship faster. Then expand into AI API generation and publishing
            when you are ready to sell.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/marketplace">Explore Marketplace</Button>
            <Button href="/signup" variant="secondary">
              Become a Seller
            </Button>
          </div>
        </div>
      </section>

      <section>
        <SectionTitle
          title="Trending APIs on RigAPI"
          description="High-demand APIs with clear limits, pricing, and verified sellers."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {marketplaceApis.map((api) => (
            <GlassCard key={api.slug}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-base font-semibold">{api.name}</h3>
                <Badge variant="success">Verified</Badge>
              </div>
              <p className="mt-2 text-sm text-muted">{api.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge>{api.category}</Badge>
                <Badge variant="accent">{api.pricingModel}</Badge>
              </div>
              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <p className="font-medium">Rate Limit</p>
                  <ul className="mt-1 space-y-1 text-muted">
                    {api.rateLimit.map((limit) => (
                      <li key={limit}>{limit}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Pricing</p>
                  <ul className="mt-1 space-y-1 text-muted">
                    {api.pricing.map((plan) => (
                      <li key={plan}>{plan}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-sm">
                <p className="text-muted">
                  Seller: <span className="text-[var(--text)]">{api.sellerName}</span>
                </p>
                <p>
                  Starting at <span className="font-semibold">{api.startingPrice}</span>
                </p>
              </div>
              <Button href={`/api/${api.slug}`} variant="secondary" className="mt-4 w-full">
                View Details
              </Button>
            </GlassCard>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          title="Marketplace Capabilities"
          description="Core platform capabilities for API discovery, subscriptions, and integration."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {marketplaceFeatures.map((feature) => (
            <GlassCard key={feature.title} className="hover:border-[var(--accent)]">
              <feature.icon className="h-6 w-6 text-[var(--accent)]" />
              <h3 className="mt-4 text-base font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted">{feature.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          title="Seller Growth Tools"
          description="Advanced publishing and monetization tools for API providers."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {sellerTools.map((tool) => (
            <GlassCard key={tool.title} className="hover:border-[var(--accent)]">
              <tool.icon className="h-6 w-6 text-[var(--accent)]" />
              <h3 className="mt-4 text-base font-semibold">{tool.title}</h3>
              <p className="mt-2 text-sm text-muted">{tool.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle title="How It Works" />
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step} className="surface-subtle p-4">
              <p className="text-xs font-medium text-[var(--accent)]">Step {index + 1}</p>
              <p className="mt-2 text-sm">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="surface p-7 md:p-10">
        <SectionTitle
          title="Start with Marketplace, scale with seller tooling"
          description="Create an account to browse APIs first, then unlock AI generation, deployment, and monetization workflows."
        />
        <div className="flex flex-wrap gap-3">
          <Button href="/marketplace">Browse APIs</Button>
          <Button href="/signup" variant="secondary">
            Create Account
          </Button>
        </div>
      </section>
    </div>
  );
}
