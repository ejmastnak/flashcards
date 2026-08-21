import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const CardSchema = z.object({
  type: z.string(),
  question: z.string(),
  answer: z.string(),
});

const hashcards = defineCollection({
  loader: glob({
    pattern: '**/*.json',
    base: './src/content/hashcards',
  }),
  schema: z.object({
    cards: z.array(CardSchema),
  }),
});

export const collections = { hashcards };
