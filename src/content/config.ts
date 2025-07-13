import { defineCollection, z } from "astro:content";

const products = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    price: z.string(),
    hot: z.boolean().optional(),
    createdAt: z.date(),
    image: z.string(),
  }),
});

export const collections = { products };
