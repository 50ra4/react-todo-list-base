import { z } from 'zod';
import { createIdSchema, baseSchema } from './common';

export const ASSIGNEE_VALIDATION_MESSAGES = {
  NAME_REQUIRED: '担当者名を入力してください',
  NAME_OVER_MAX_LENGTH: '担当者名は20文字以内で入力してください',
} as const;

export const assigneeBaseSchema = z.object({
  name: z
    .string()
    .min(1, ASSIGNEE_VALIDATION_MESSAGES.NAME_REQUIRED)
    .max(20, ASSIGNEE_VALIDATION_MESSAGES.NAME_OVER_MAX_LENGTH),
  userId: createIdSchema().or(z.null()),
});

export const assigneeSchema = baseSchema.merge(assigneeBaseSchema);
export type Assignee = z.infer<typeof assigneeSchema>;
