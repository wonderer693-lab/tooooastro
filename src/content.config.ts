import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const review = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/review' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(165),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    rating: z.number().min(1).max(5),
    priceRange: z.string(),
    bestFor: z.string(),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    integrations: z.array(z.string()),
    keyFeatures: z.array(z.string()),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const comparison = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/comparison' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(165),
    pubDate: z.date(),
    tools: z.array(z.string()),
    winner: z.string(),
    winnerReason: z.string(),
    category: z.string(),
    featured: z.boolean().default(false),
  }),
});

const guide = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guide' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(165),
    pubDate: z.date(),
    category: z.string(),
    readingTime: z.string(),
    featured: z.boolean().default(false),
  }),
});

const feature = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/feature' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(165),
    pubDate: z.date(),
    category: z.string(),
    featured: z.boolean().default(false),
  }),
});

const resource = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resource' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(165),
    pubDate: z.date(),
    type: z.enum(['glossary', 'faq', 'template', 'case-study', 'checklist', 'statistics']),
    featured: z.boolean().default(false),
  }),
});

const category = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/category' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(165),
    icon: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { review, comparison, guide, feature, resource, category };
