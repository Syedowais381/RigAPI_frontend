import { SearchIcon } from "@/app/components/icons";
import { Badge, Button, GlassCard, SectionTitle } from "@/app/components/ui";
import { marketplaceApis } from "@/app/data/apis";

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

function ApiCard({
  name,
  description,
  category,
  rateLimit,
  pricingModel,
  pricing,
  startingPrice,
  sellerName,
  verified,
  slug,
}: (typeof marketplaceApis)[number]) {
  return (
    <GlassCard>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-base font-semibold">{name}</h3>
        {verified ? <Badge variant="success">Verified</Badge> : null}
      </div>
      <p className="mt-2 text-sm text-muted">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <Badge>{category}</Badge>
        <Badge variant="accent">{pricingModel}</Badge>
      </div>
      <div className="mt-4 grid gap-3 text-sm">
        <div>
          <p className="font-medium">Rate Limit</p>
          <ul className="mt-1 space-y-1 text-muted">
            {rateLimit.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-medium">Pricing</p>
          <ul className="mt-1 space-y-1 text-muted">
            {pricing.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-sm">
        <p className="text-muted">
          Seller: <span className="text-[var(--text)]">{sellerName}</span>
        </p>
        <p>
          Starting at <span className="font-semibold">{startingPrice}</span>
        </p>
      </div>
      <div className="mt-4">
        <Button href={`/api/${slug}`} variant="secondary" className="w-full">
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
        description="Browse production-ready APIs with transparent rate limits, pricing, and verified publishers."
      />
      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="space-y-3">
          <FilterSection
            title="Category"
            items={["AI", "Finance", "DevTools", "HR Tech"]}
          />
          <FilterSection
            title="Pricing Type"
            items={["Free Tier", "Pay-per-use", "Subscription", "Enterprise"]}
          />
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
            {marketplaceApis.map((api) => (
              <ApiCard key={api.slug} {...api} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
