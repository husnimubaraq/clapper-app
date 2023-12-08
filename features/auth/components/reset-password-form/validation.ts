import { z } from 'zod'

export const schemaValidation = z.object({
  email: z.string().min(1, 'Email is required'),
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
  password_confirmation: z.string().min(1, 'Password Confirmation is required'),
}).refine((field) => field.password === field.password_confirmation, {
  message: "Konfirmasi password tidak sesuai dengan password",
  path: ['password_confirmation'],
})

