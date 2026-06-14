import type { Software, PropertyType, PortfolioSize, State } from '../lib/types';

export function generateSlug(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function getNumericRating(rating: number | undefined | null): number {
  if (!rating) return 0;
  return Math.round(rating * 10) / 10;
}

export function getStars(rating: number): string {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - (half ? 1 : 0));
}

export function getSoftwareByPropertyType(software: Software[], typeId: string): Software[] {
  return software.filter(s => s.propertyTypes.includes(typeId));
}

export function getSoftwareByPortfolioSize(software: Software[], units: number): Software[] {
  return software.filter(s => units >= s.portfolioSizeRange.min && (s.portfolioSizeRange.max === null || units <= s.portfolioSizeRange.max));
}

export function getStateByCode(states: State[], code: string): State | undefined {
  return states.find(s => s.code === code.toUpperCase());
}

export function getSoftwareById(software: Software[], id: string): Software | undefined {
  return software.find(s => s.id === id);
}

export function getCategoryMeta(propertyType: PropertyType, portfolioSize: PortfolioSize) {
  const title = `Best ${propertyType.name} Software for ${portfolioSize.label} in 2026`;
  const description = `Compare the best ${propertyType.name.toLowerCase()} management software for portfolios ${portfolioSize.label.toLowerCase()}. Read expert reviews, compare features & pricing, and find the perfect solution for your needs.`;
  return { title, description };
}

export function getPageTitleH1(propertyType: PropertyType, portfolioSize: PortfolioSize): string {
  return `Best ${propertyType.name} Management Software for ${portfolioSize.label} (${portfolioSize.minUnits}-${portfolioSize.maxUnits ?? '10000+'} Units)`;
}

export function getCanonicalUrl(category: string, portfolio: string): string {
  return `https://www.propertymanagepro.com/category/${category}/${portfolio}/`;
}

export function getCompareUrl(software1: string, software2: string): string {
  return `/compare/${software1}-vs-${software2}/`;
}

export function generateBreadcrumb(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": `https://www.propertymanagepro.com${item.url}`
    }))
  };
}

export function generateProductSchema(software: Software) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": software.name,
    "applicationCategory": "PropertyManagementApplication",
    "operatingSystem": "Web, iOS, Android",
    "description": software.tagline,
    "offers": {
      "@type": "Offer",
      "price": software.pricing.startingPrice,
      "priceCurrency": "USD",
      "priceValidUntil": "2027-12-31"
    },
    "aggregateRating": software.reviews.g2 ? {
      "@type": "AggregateRating",
      "ratingValue": software.reviews.g2,
      "bestRating": 5,
      "ratingCount": 100
    } : undefined
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer }
    }))
  };
}

export function generateComparisonTableSchema(software: Software[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Table",
    "about": "Software comparison matrix"
  };
}

export function generateSoftwareListSchema(items: { name: string; url: string; description: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": item.name,
        "url": item.url,
        "description": item.description
      }
    }))
  };
}

export function getEffectiveCommission(software: Software): string {
  if (software.commissionType === 'lifetime') return `${software.commissionRate} (lifetime)`;
  return software.commissionRate;
}