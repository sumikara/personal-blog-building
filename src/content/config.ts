import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['mind_archive', 'econ_lab', 'lit_notes', 'travel_logs']),
    description: z.string(),
    filetype: z.string(),
    featured: z.boolean().default(false),
    cover: z.string().optional().default('')
  })
});

export const collections = { blog };
