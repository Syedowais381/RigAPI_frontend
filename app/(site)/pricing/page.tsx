import { Button, GlassCard, SectionTitle } from "@/app/components/ui";

export default function PricingPage() {
  return (
    <div className="space-y-6">
      <SectionTitle
        title="Pricing"
        description="Choose a plan structure for consuming or monetizing APIs."
      />
      <div className="grid gap-4 md:grid-cols-3">
        <GlassCard>
          <h3 className="text-base font-semibold">Free</h3>
          <p className="mt-2 text-sm text-muted">For initial experimentation and testing.</p>
          <Button className="mt-4 w-full">Select</Button>
        </GlassCard>
        <GlassCard>
          <h3 className="text-base font-semibold">Pro</h3>
          <p className="mt-2 text-sm text-muted">
            For production-grade API integration and deployment workflows.
          </p>
          <Button className="mt-4 w-full">Select</Button>
        </GlassCard>
        <GlassCard>
          <h3 className="text-base font-semibold">Enterprise</h3>
          <p className="mt-2 text-sm text-muted">
            For advanced governance, support, and organization controls.
          </p>
          <Button className="mt-4 w-full">Contact Sales</Button>
        </GlassCard>
      </div>
    </div>
  );
}
