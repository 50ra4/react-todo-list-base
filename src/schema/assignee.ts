import { z } from 'zod';
import { createIdSchema, createBaseSchema } from './common';

export const createAssigneeBaseSchema = () =>
  z.object({
    name: z.string({ required_error: '' }).max(50, ''),
    userId: createIdSchema().or(z.null()),
  });

export const createAssigneeSchema = () =>
  z.intersection(createBaseSchema(), createAssigneeBaseSchema());

export type Assignee = z.infer<ReturnType<typeof createAssigneeSchema>>;
