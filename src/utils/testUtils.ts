import { SafeParseReturnType } from 'zod';

const isSafeParseReturnType = (
  x: unknown,
): x is SafeParseReturnType<unknown, unknown> =>
  typeof x === 'object' &&
  x !== null &&
  'success' in x &&
  typeof x.success === 'boolean' &&
  ('data' in x || 'error' in x);

export type ToEqualValidationMessageParams = [key: string, message: string];

export const toEqualValidationMessage: jest.CustomMatcher = function (
  actual,
  ...args: ToEqualValidationMessageParams
): jest.CustomMatcherResult {
  const [key, message] = args;
  if (!isSafeParseReturnType(actual)) {
    throw new Error('actualがZod.SafeParseReturnTypeでない');
  }
  if (actual.success) {
    return {
      message: () => `
      actual has no error.
      ${this.utils.printReceived(actual)}
      `,
      pass: false,
    };
  }

  const errors = actual.error.flatten().fieldErrors as {
    [key: string]: string[];
  };
  if (!errors[key]?.includes(message)) {
    return {
      message: () =>
        `"${key}"に"${message}"のエラーメッセージが存在しない.
        expected ${this.utils.printReceived(actual)}`,
      pass: false,
    };
  }

  return {
    message: () => 'OK',
    pass: true,
  };
};
