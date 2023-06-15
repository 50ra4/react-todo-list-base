import { z } from 'zod';
import { createBaseSchema } from './common';

export const USER_VALIDATION_MESSAGES = {
  EMAIL_REQUIRED: 'Emailを入力してください',
  EMAIL_INVALID_FORMAT: 'Emailの形式が正しくありません',
  PASSWORD_REQUIRED: 'パスワードを入力してください',
  PASSWORD_UNDER_MIN_LENGTH: 'パスワードは8文字以上で入力してください',
  PASSWORD_OVER_MAX_LENGTH: 'パスワードは24文字以内で入力してください',
  PASSWORD_INVALID_CHARACTER: 'パスワードは英数字で入力してください',
  PASSWORD_INVALID_FORMAT:
    'パスワードには大小英数字を最低でも1字ずつ含めてください',
} as const;

const createUserEmailSchema = () =>
  z
    .string({ required_error: USER_VALIDATION_MESSAGES.EMAIL_REQUIRED })
    .email(USER_VALIDATION_MESSAGES.EMAIL_INVALID_FORMAT);

// TODO:
const createUserPasswordSchema = () =>
  z
    .string({ required_error: USER_VALIDATION_MESSAGES.PASSWORD_REQUIRED })
    .min(8, USER_VALIDATION_MESSAGES.PASSWORD_UNDER_MIN_LENGTH)
    .max(24, USER_VALIDATION_MESSAGES.PASSWORD_OVER_MAX_LENGTH);

export const createUserBaseSchema = () =>
  z.object({
    email: createUserEmailSchema(),
    password: createUserPasswordSchema(),
  });

export const createUserSchema = () =>
  z.intersection(createBaseSchema(), createUserBaseSchema());

export type User = z.infer<ReturnType<typeof createUserSchema>>;
