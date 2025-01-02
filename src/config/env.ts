import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_COINGECKO_API: z
    .string({ required_error: 'NEXT_PUBLIC_COINGECKO_API is required' })
    .url({
      message: 'NEXT_PUBLIC_COINGECKO_API must be a valid URL',
    }),
});

const parsedEnv = envSchema.safeParse({
  NEXT_PUBLIC_COINGECKO_API: process.env.NEXT_PUBLIC_COINGECKO_API,
});

if (!parsedEnv.success) {
  console.error('❌ Invalid environment variables:', parsedEnv.error.format());
  throw new Error('Invalid environment variables');
}

export const { NEXT_PUBLIC_COINGECKO_API } = parsedEnv.data;
