import { nanoid } from 'nanoid';

export const ASSIGNEE_ITEMS = [
  '鈴木一郎',
  '佐藤次郎',
  '北山三郎',
  '伊藤四郎',
].map((text) => ({ id: nanoid(), text } as const));
