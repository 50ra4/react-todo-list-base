import { z } from 'zod';

/**
 * @see https://qiita.com/yamikoo@github/items/5dbcc77b267a549bdbae
 */
const toSingleByteAlphanumericCharacter = (str: string) =>
  str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
    return String.fromCharCode(s.charCodeAt(0) - 65248);
  });

const scoreSchema = z
  .number()
  .int('整数で入力してください')
  .max(100, '100以下で入力してください')
  .min(10, '10以上で入力してください')
  .superRefine((v, ctx) => {
    if (v % 10) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: '10点刻みで入力してください',
      });
    }
  });

/**
 * @see https://tech.buysell-technologies.com/entry/adventcalendar2022-12-24
 */
export const scoreInputSchema = z
  .string()
  .nonempty()
  .transform((str) => +toSingleByteAlphanumericCharacter(str))
  .pipe(scoreSchema);

export type ScoreInput = z.input<typeof scoreInputSchema>;
export type ScoreOutput = z.output<typeof scoreInputSchema>;
