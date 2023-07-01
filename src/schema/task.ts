import isAfter from 'date-fns/isAfter';
import { z } from 'zod';
import { baseSchema, createDateStringSchema, createIdSchema } from './common';
import { dateStringToDate } from 'src/utils/date';

export const TASK_VALIDATION_MESSAGES = {
  TITLE_REQUIRED: 'タイトルを入力してください',
  TITLE_OVER_MAX_LENGTH: 'タイトルは50文字以内で入力してください',
  DESCRIPTION_OVER_MAX_LENGTH: '説明は200文字以内で入力してください',
  START_DATE_OVER_MAX_LENGTH: '開始日を正しく入力してください',
  START_DATE_INVALID_FORMAT: '開始日を正しく入力してください',
  START_DATE_AFTER_END_DATE: '開始日を期限より前の日付を入力してください',
  END_DATE_OVER_MAX_LENGTH: '期限を正しく入力してください',
  END_DATE_INVALID_FORMAT: '期限を正しく入力してください',
  STATUS_REQUIRED: 'タスクの状態を入力してください',
  STATUS_OVER_MAX_LENGTH: 'タスクの状態は20文字以内で入力してください',
} as const;

const taskBaseSchema = z.object({
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
  endDate: createDateStringSchema({
    maxMessage: TASK_VALIDATION_MESSAGES.END_DATE_INVALID_FORMAT,
    formatMessage: TASK_VALIDATION_MESSAGES.END_DATE_OVER_MAX_LENGTH,
  }),
  statusId: createIdSchema().or(z.null()),
  assigneeId: createIdSchema().or(z.null()),
  categoryId: createIdSchema().or(z.null()),
});

const isStartDateAfterEndDate = (start: string, end: string) => {
  const startDate = dateStringToDate(start, 'yyyy-MM-dd');
  const endDate = dateStringToDate(end, 'yyyy-MM-dd');
  return isAfter(startDate, endDate);
};

const createRefinementIssues = <T extends z.infer<typeof taskBaseSchema>>(
  { startDate, endDate }: T,
  ctx: z.RefinementCtx,
): void => {
  if (!!startDate && isStartDateAfterEndDate(startDate, endDate)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: TASK_VALIDATION_MESSAGES.START_DATE_AFTER_END_DATE,
      path: ['startDate'],
    });
  }
};

export const taskInputSchema = taskBaseSchema.superRefine(
  createRefinementIssues,
);

export type TaskInput = z.infer<typeof taskInputSchema>;

export const taskSchema = baseSchema
  .merge(taskBaseSchema)
  .superRefine(createRefinementIssues);

export type Task = z.infer<typeof taskSchema>;

export const taskStatusBaseSchema = () =>
  z.object({
    name: z
      .string({ required_error: TASK_VALIDATION_MESSAGES.STATUS_REQUIRED })
      .max(20, TASK_VALIDATION_MESSAGES.STATUS_OVER_MAX_LENGTH),
  });

export const taskStatusSchema = baseSchema.merge(taskStatusBaseSchema());

export type TaskStatus = z.infer<typeof taskStatusSchema>;
