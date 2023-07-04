type Func = (...args: any[]) => any;

/**
 * @see https://tech.mobilefactory.jp/entry/2021/12/02/000000
 */
export type Expand<T> = T extends object
  ? T extends infer O
    ? {
        [K in keyof O]: O[K] extends Func ? O[K] : Expand<O[K]>;
      }
    : never
  : T;
