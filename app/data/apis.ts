export type ApiPreview = {
  slug: string;
  name: string;
  description: string;
  category: string;
  rateLimit: string[];
  pricingModel: string;
  pricing: string[];
  startingPrice: string;
  sellerName: string;
  verified: boolean;
};

export const marketplaceApis: ApiPreview[] = [
  {
    slug: "ai-report-analysis-api",
    name: "AI Report Analysis API",
    description:
      "Extract insights, summaries, and action points from business reports and long-form documents.",
    category: "AI",
    rateLimit: ["Free: 100 requests/min", "Pro: 1000 requests/min"],
    pricingModel: "Tiered Subscription",
    pricing: ["Free Tier", "Pro - $19/month", "Enterprise - Custom"],
    startingPrice: "$0/month",
    sellerName: "DataNova Labs",
    verified: true,
  },
  {
    slug: "gst-validation-api",
    name: "GST Validation API",
    description:
      "Validate GST numbers in real time for invoicing, onboarding, and compliance workflows.",
    category: "Finance",
    rateLimit: ["Standard: 60 requests/min"],
    pricingModel: "Pay-per-use + Subscription",
    pricing: ["Pay-per-use - $0.002/request", "Pro - $29/month"],
    startingPrice: "$0.002/request",
    sellerName: "LedgerCore Systems",
    verified: true,
  },
  {
    slug: "email-verification-api",
    name: "Email Verification API",
    description:
      "Verify deliverability, detect disposable addresses, and reduce bounce rates at signup.",
    category: "DevTools",
    rateLimit: ["Free & Pro: 200 requests/min"],
    pricingModel: "Freemium",
    pricing: ["Free - 500 requests/month", "Pro - $15/month"],
    startingPrice: "$0/month",
    sellerName: "PulseOps Dev",
    verified: true,
  },
  {
    slug: "resume-parsing-api",
    name: "Resume Parsing API",
    description:
      "Parse resumes into structured fields for hiring pipelines and ATS integrations.",
    category: "HR Tech",
    rateLimit: ["Pro: 50 requests/min"],
    pricingModel: "Subscription",
    pricing: ["Pro - $25/month", "Enterprise - Custom"],
    startingPrice: "$25/month",
    sellerName: "TalentGrid AI",
    verified: true,
  },
];
