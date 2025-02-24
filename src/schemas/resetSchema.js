import * as z from 'zod';

export const resetSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export default resetSchema;
