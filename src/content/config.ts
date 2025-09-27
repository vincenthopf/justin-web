import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroImage: z.string().optional(),
    ctaLabel: z.string().optional(),
    ctaUrl: z.string().optional()
  })
});

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    order: z.number().optional()
  })
});

export const collections = { pages, posts };
