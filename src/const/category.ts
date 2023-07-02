import { nanoid } from 'nanoid';

export const CATEGORY_ITEMS = [
  '技術調査',
  '要件定義',
  '基本設計',
  '詳細設計',
  '実装',
  '単体テスト',
  '結合テスト',
  'システムテスト',
  '運用',
].map((text) => ({ id: nanoid(), text } as const));
