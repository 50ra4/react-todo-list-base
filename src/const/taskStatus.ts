import { nanoid } from 'nanoid';

export const TASK_STATUS_ITEMS = ['未着手', '着手中', 'レビュー中', '完了'].map(
  (text) => ({ id: nanoid(), text } as const),
);
