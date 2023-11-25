import { z } from 'zod'

export const schemaValidation = z.object({
    token: z.string(),
    pelaporan_id: z.string(),
    alasanbatal: z.string(),
    lampiran: z.string().min(1, 'Lampiran is required'),
    status: z.object({
        key: z.any(),
        value: z.string()
    }, {
        required_error: 'Status is required'
    })
})