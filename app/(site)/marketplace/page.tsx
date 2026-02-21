import { SearchIcon } from "@/app/components/icons";
import { Badge, Button, EmptyState, GlassCard, SectionTitle } from "@/app/components/ui";

function FilterSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="surface-subtle p-4">
      <h3 className="text-sm font-semibold">{title}</h3>
      <div className="mt-3 space-y-2">
        {items.map((item) => (
          <label key={item} className="flex items-center gap-2 text-sm text-muted">
            <input type="checkbox" className="h-4 w-4 accent-[var(--accent)]" />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
}

function ApiCardTemplate() {
  return (
    <GlassCard>
      <h3 className="text-base font-semibold">API Name</h3>
      <p className="mt-2 text-sm text-muted">API short description appears here when listed.</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Badge>Category</Badge>
        <Badge variant="accent">Pricing Type</Badge>
      </div>
      <p className="mt-4 text-sm text-muted">Seller Name</p>
      <div className="mt-4">
        <Button variant="secondary" className="w-full">
          View Details
        </Button>
      </div>
    </GlassCard>
  );
}

export default function MarketplacePage() {
  return (
    <div className="space-y-6">
      <SectionTitle
        title="Marketplace"
        description="Browse integration-ready APIs or publish and monetize your own endpoints."
      />
      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="space-y-3">
          <FilterSection title="Category" items={["Data", "Payments", "AI", "DevTools"]} />
          <FilterSection title="Pricing Type" items={["Free", "Paid", "Private"]} />
          <FilterSection title="Verified" items={["Verified Sellers Only"]} />
          <FilterSection title="Recently Added" items={["Last 7 Days", "Last 30 Days"]} />
        </aside>
        <section>
          <div className="surface mb-4 flex items-center gap-3 p-3">
            <SearchIcon className="h-5 w-5 text-muted" />
            <input
              aria-label="Search APIs"
              placeholder="Search APIs"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <ApiCardTemplate />
            <ApiCardTemplate />
          </div>
          <div className="mt-5">
            <EmptyState
              title="If no APIs match your filter"
              description="Try adjusting filter selections or clear active filters."
            />
          </div>
        </section>
      </div>
    </div>
  );
}
