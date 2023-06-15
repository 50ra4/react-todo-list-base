import { z } from 'zod';
import { createBaseSchema } from './common';

const createUserEmailSchema = () => z.string({ required_error: '' }).email();
const createUserPasswordSchema = () =>
  z.string({ required_error: '' }).min(8, '').max(24, '');

export const createUserBaseSchema = () =>
  z.object({
    email: createUserEmailSchema(),
    password: createUserPasswordSchema(),
  });

export const createUserSchema = () =>
  z.intersection(createBaseSchema(), createUserBaseSchema());

export type User = z.infer<ReturnType<typeof createUserSchema>>;
