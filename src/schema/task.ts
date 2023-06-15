import { z } from 'zod';
import {
  createBaseSchema,
  createDateStringSchema,
  createIdSchema,
} from './common';

export const createTaskBaseSchema = () =>
  z.object({
    title: z.string({ required_error: '' }).max(50, ''),
    description: z.string().max(200, ''),
    startDate: createDateStringSchema({ maxMessage: '', formatMessage: '' }).or(
      z.null(),
    ),
    endDate: createDateStringSchema({ maxMessage: '', formatMessage: '' }).or(
      z.null(),
    ),
    statusId: createIdSchema().or(z.null()),
    assigneeId: createIdSchema().or(z.null()),
    categoryId: createIdSchema().or(z.null()),
  });

export const createTaskSchema = () =>
  z.intersection(createBaseSchema(), createTaskBaseSchema());

export type Task = z.infer<ReturnType<typeof createTaskSchema>>;

export const createTaskStatusBaseSchema = () =>
  z.object({
    name: z.string({ required_error: '' }).max(20, ''),
  });

export const createTaskStatusSchema = () =>
  z.intersection(createBaseSchema(), createTaskStatusBaseSchema());

export type TaskStatus = z.infer<ReturnType<typeof createTaskStatusSchema>>;
