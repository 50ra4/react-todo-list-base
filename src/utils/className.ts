export const joinClassNames = <T extends string>(
  ...args: (T | false | undefined)[]
): string => args.filter((v) => !!v).join(' ');
