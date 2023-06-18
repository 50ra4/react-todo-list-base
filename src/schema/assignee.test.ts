import { z } from 'zod';
import {
  ASSIGNEE_VALIDATION_MESSAGES,
  createAssigneeBaseSchema,
} from './assignee';

describe('assignee schema', () => {
  const assigneeSchema = createAssigneeBaseSchema();
  const validAssigneeSchema: z.infer<typeof assigneeSchema> = {
    name: '鈴木一郎',
    userId: null,
  };

  describe('assignee.name', () => {
    const key = 'name';
    it('担当者が入力されていない場合、エラーを返却する', () => {
      const result = assigneeSchema.safeParse({
        ...validAssigneeSchema,
        name: '',
      });
      expect(result).toEqualValidationMessage(
        key,
        ASSIGNEE_VALIDATION_MESSAGES.NAME_REQUIRED,
      );
    });
    it('担当者が20文字より多い場合、エラーを返却する', () => {
      const result = assigneeSchema.safeParse({
        ...validAssigneeSchema,
        name: '薔薇'.repeat(11).slice(0, -1),
      });
      expect(result).toEqualValidationMessage(
        key,
        ASSIGNEE_VALIDATION_MESSAGES.NAME_OVER_MAX_LENGTH,
      );
    });
    it('上記以外の場合、エラーを返却しない', () => {
      const result = assigneeSchema.safeParse(validAssigneeSchema);
      expect(result.success).toBeTruthy();
    });
  });
});
