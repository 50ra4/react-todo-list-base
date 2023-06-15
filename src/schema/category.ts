import { z } from 'zod';
import { createBaseSchema } from './common';

export const CATEGORY_VALIDATION_MESSAGES = {
  NAME_REQUIRED: 'カテゴリを入力してください',
  NAME_OVER_MAX_LENGTH: 'カテゴリは20文字以内で入力してください',
} as const;

export const createCategoryBaseSchema = () =>
  z.object({
    name: z
      .string({ required_error: CATEGORY_VALIDATION_MESSAGES.NAME_REQUIRED })
      .max(20, CATEGORY_VALIDATION_MESSAGES.NAME_OVER_MAX_LENGTH),
  });

export const createCategorySchema = () =>
  z.intersection(createBaseSchema(), createCategoryBaseSchema());

export type Category = z.infer<ReturnType<typeof createCategorySchema>>;
