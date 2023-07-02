import { z } from 'zod';

export const createIdSchema = () => z.string().nonempty();

export const createDateStringSchema = <T extends string>({
  maxMessage,
  formatMessage,
}: {
  maxMessage: T;
  formatMessage: T;
}) =>
  z
    .string()
    .max(11, maxMessage)
    .regex(/\d{4}-\d{2}-\d{2}/, formatMessage);

export const baseSchema = z.object({
  id: createIdSchema(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});
