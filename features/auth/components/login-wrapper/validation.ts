import { z } from 'zod'

export const schemaValidation = z.object({
  password: z.string().min(1, 'Password is required'),
  username: z.string().min(1, 'Username is required'),
  fcm_token: z.string(),
})
