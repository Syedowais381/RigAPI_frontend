import { ApiDetailsTabs } from "@/app/components/api-details-tabs";
import { Badge, Button, GlassCard } from "@/app/components/ui";
import { marketplaceApis } from "@/app/data/apis";

export default async function ApiDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const api = marketplaceApis.find((item) => item.slug === slug);

  if (!api) {
    return (
      <div className="space-y-6">
        <header className="surface p-6">
          <h1 className="page-heading">API not found</h1>
          <p className="mt-2 text-sm text-muted">
            The requested API listing is unavailable.
          </p>
        </header>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <header className="surface flex flex-wrap items-start justify-between gap-4 p-6">
        <div>
          <h1 className="page-heading">{api.name}</h1>
          <p className="mt-2 text-sm text-muted">{api.sellerName}</p>
          <div className="mt-3">
            <Badge>{api.category}</Badge>
          </div>
        </div>
        <Button>Subscribe</Button>
      </header>

      <div className="grid gap-5 lg:grid-cols-[1fr_300px]">
        <section>
          <ApiDetailsTabs />
        </section>
        <aside>
          <GlassCard>
            <h2 className="text-sm font-semibold">API Metadata</h2>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-3">
                <span className="text-muted">Rate Limit</span>
                <span>{api.rateLimit[0]}</span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-muted">Starting Price</span>
                <span>{api.startingPrice}</span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-muted">Status</span>
                <Badge variant="success">Verified</Badge>
              </div>
            </div>
          </GlassCard>
        </aside>
      </div>
    </div>
  );
}
