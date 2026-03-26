import { defineCollection, z } from "astro:content";

const services = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    keywords: z.array(z.string()).default([]),
  }),
});

export const collections = { services };