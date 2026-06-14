export interface PropertyType {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  keywords: string[];
  buyerPersonas: string[];
  workflows: string[];
  complianceKeywords: string[];
  avgPortfolioSize: string;
  seasonality: string;
}

export interface PortfolioSize {
  id: string;
  label: string;
  slug: string;
  minUnits: number;
  maxUnits: number | null;
  buyerProfile: string;
  budgetRange: string;
  decisionMakers: string[];
  painPoints: string[];
  requiredFeatures: string[];
}

export interface Software {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  logo: string;
  website: string;
  affiliateUrl: string;
  commissionRate: string;
  commissionType: 'recurring' | 'one-time' | 'lifetime';
  pricing: {
    startingPrice: number;
    pricingModel: 'per-unit' | 'per-user' | 'flat' | 'tiered';
    freeTrial: boolean;
    freePlan: boolean;
  };
  bestFor: string[];
  propertyTypes: string[];
  portfolioSizeRange: { min: number; max: number | null };
  features: Record<string, boolean>;
  integrations: string[];
  pros: string[];
  cons: string[];
  reviews: { g2?: number; capterra?: number; softwareAdvice?: number };
  support: string[];
  onboarding: string;
  idealCustomer: string;
  notIdealFor: string[];
  yearFounded: number;
  companySize: string;
  funding?: string;
}

export interface State {
  code: string;
  name: string;
  slug: string;
  hoaLaws: string[];
  keyStatutes: string[];
  reserveRequirements: string;
  meetingRequirements: string;
  votingThresholds: string;
  managementLicenseRequired: boolean;
  popularSoftware: string[];
  avgHoaFees: string;
  litigationRisk: 'low' | 'medium' | 'high';
}

export interface ComparisonPage {
  software1: string;
  software2: string;
  title: string;
  description: string;
}

export interface StatePage {
  stateCode: string;
  propertyType: string;
  title: string;
  description: string;
}

export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
}