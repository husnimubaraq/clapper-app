import { z } from 'zod'

export const schemaValidation = z.object({
  berita_id: z.string().min(1, 'Berita ID 4 is required'),
  token: z.string().min(1, 'Token is required'),
  message: z.string().min(1, 'Komentar is required')
})