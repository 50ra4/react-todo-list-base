import { z } from 'zod';

const KATAKANA = /[\u{30a1}-\u{30f6}]+/u;
const PHONE_NUMBER = /^[0-9]{10,11}$/;
export const contactSchema = z.object({
  name: z.string().max(20),
  kana: z.string().max(50).regex(KATAKANA, '全角カタカナで入力してください'),
  mail: z.string().email('メール形式で入力してください'),
  tel: z
    .string()
    .regex(PHONE_NUMBER, '半角数字で10、11桁以内で入力してください'),
});
export type Contact = z.infer<typeof contactSchema>;
export const CONTACT_DEFAULT_VALUE: Readonly<Contact> = {
  name: '',
  kana: '',
  mail: '',
  tel: '',
};
