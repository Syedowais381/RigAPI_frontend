import { EmptyState, GlassCard, SectionTitle } from "@/app/components/ui";

export default function SellerRevenuePage() {
  return (
    <div className="space-y-6">
      <SectionTitle title="Revenue" />
      <GlassCard>
        <EmptyState
          title="No revenue records available."
          description="Payout and billing records will appear after monetized usage."
        />
      </GlassCard>
    </div>
  );
}
