/* eslint-disable @typescript-eslint/no-empty-interface */
import { ToEqualValidationMessageParams } from './utils/testUtils';

interface CustomMatchers<R = unknown> {
  toEqualValidationMessage: (...args: ToEqualValidationMessageParams) => void;
}

declare global {
  namespace jest {
    interface Expect extends CustomMatchers {}
    interface Matchers<R> extends CustomMatchers<R> {}
    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export {};
