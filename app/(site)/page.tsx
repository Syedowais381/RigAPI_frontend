import {
  BoltIcon,
  CloudIcon,
  CoinIcon,
  GaugeIcon,
  ShieldIcon,
} from "@/app/components/icons";
import { Button, GlassCard, SectionTitle } from "@/app/components/ui";

const features = [
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
    title: "Secure Gateway Proxy",
    description: "Route and protect all API traffic through centralized access control.",
    icon: ShieldIcon,
  },
  {
    title: "One-Click Deployment",
    description: "Publish APIs quickly with managed infrastructure and release workflows.",
    icon: CloudIcon,
  },
  {
    title: "High-Performance Infrastructure",
    description: "Designed for low-latency API delivery with developer-first reliability.",
    icon: GaugeIcon,
  },
];

const steps = [
  "Generate or Upload API",
  "Deploy Through RigAPI",
  "Share & Monetize",
  "Track Usage & Revenue",
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
            Build. Deploy. Monetize APIs.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            RigAPI helps developers create APIs with AI, deploy through a secure centralized
            gateway, and launch monetization-ready products for startups and students.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/signup">Get Started</Button>
            <Button href="/marketplace" variant="secondary">
              Explore APIs
            </Button>
          </div>
        </div>
      </section>

      <section>
        <SectionTitle
          title="Platform Capabilities"
          description="Core infrastructure to ship, secure, and commercialize APIs."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <GlassCard key={feature.title} className="hover:border-[var(--accent)]">
              <feature.icon className="h-6 w-6 text-[var(--accent)]" />
              <h3 className="mt-4 text-base font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted">{feature.description}</p>
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
          title="Launch your first API product on RigAPI"
          description="Create an account to access generation, deployment, gateway security, and billing controls."
        />
        <div className="flex flex-wrap gap-3">
          <Button href="/signup">Create Account</Button>
          <Button href="/docs" variant="secondary">
            Read Documentation
          </Button>
        </div>
      </section>
    </div>
  );
}
