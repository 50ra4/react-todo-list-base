import { z } from 'zod';
import { createBaseSchema } from './common';

export const createCategoryBaseSchema = () =>
  z.object({
    name: z.string({ required_error: '' }).max(20, ''),
  });

export const createCategorySchema = () =>
  z.intersection(createBaseSchema(), createCategoryBaseSchema());

export type Category = z.infer<ReturnType<typeof createCategorySchema>>;
