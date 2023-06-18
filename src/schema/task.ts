import { z } from 'zod';
import { baseSchema, createDateStringSchema, createIdSchema } from './common';

export const TASK_VALIDATION_MESSAGES = {
  TITLE_REQUIRED: 'タイトルを入力してください',
  TITLE_OVER_MAX_LENGTH: 'タイトルは50文字以内で入力してください',
  DESCRIPTION_OVER_MAX_LENGTH: '説明は200文字以内で入力してください',
  START_DATE_OVER_MAX_LENGTH: '開始日を正しく入力してください',
  START_DATE_INVALID_FORMAT: '開始日を正しく入力してください',
  END_DATE_OVER_MAX_LENGTH: '期限を正しく入力してください',
  END_DATE_INVALID_FORMAT: '期限を正しく入力してください',
  STATUS_REQUIRED: 'タスクの状態を入力してください',
  STATUS_OVER_MAX_LENGTH: 'タスクの状態は20文字以内で入力してください',
} as const;

export const taskBaseSchema = z.object({
  title: z
    .string({ required_error: TASK_VALIDATION_MESSAGES.TITLE_REQUIRED })
    .max(50, TASK_VALIDATION_MESSAGES.TITLE_OVER_MAX_LENGTH),
  description: z
    .string()
    .max(200, TASK_VALIDATION_MESSAGES.DESCRIPTION_OVER_MAX_LENGTH),
  startDate: createDateStringSchema({
    maxMessage: TASK_VALIDATION_MESSAGES.START_DATE_OVER_MAX_LENGTH,
    formatMessage: TASK_VALIDATION_MESSAGES.START_DATE_INVALID_FORMAT,
  }).or(z.null()),
  // TODO: 複合バリデーション
  endDate: createDateStringSchema({
    maxMessage: TASK_VALIDATION_MESSAGES.END_DATE_INVALID_FORMAT,
    formatMessage: TASK_VALIDATION_MESSAGES.END_DATE_OVER_MAX_LENGTH,
  }).or(z.null()),
  statusId: createIdSchema().or(z.null()),
  assigneeId: createIdSchema().or(z.null()),
  categoryId: createIdSchema().or(z.null()),
});

export const taskSchema = baseSchema.merge(taskBaseSchema);

export type Task = z.infer<typeof taskSchema>;

export const taskStatusBaseSchema = () =>
  z.object({
    name: z
      .string({ required_error: TASK_VALIDATION_MESSAGES.STATUS_REQUIRED })
      .max(20, TASK_VALIDATION_MESSAGES.STATUS_OVER_MAX_LENGTH),
  });

export const taskStatusSchema = baseSchema.merge(taskStatusBaseSchema());

export type TaskStatus = z.infer<typeof taskStatusSchema>;
