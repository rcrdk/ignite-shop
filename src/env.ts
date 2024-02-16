import { z } from 'zod'

const envSchema = z.object({
	NEXT_URL: z.string(),
	STRIPE_PUBLIC_KEY: z.string(),
	STRIPE_SECRET_KEY: z.string(),
})

export const env = envSchema.parse(process.env)
