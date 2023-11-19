import { z } from 'zod'

export const schemaValidation = z.object({
  email: z.string().min(1, 'Email is required'),
  name: z.string().min(1, 'Nama is required'),
  phone: z.string().min(1, 'No. Telp is required'),
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
  password_confirm: z.string().min(1, 'Password confirm is required'),
})
.refine((field) => field.password === field.password_confirm, {
  message: "Konfirmasi password tidak sesuai dengan password",
  path: ['password_confirm'],
})
