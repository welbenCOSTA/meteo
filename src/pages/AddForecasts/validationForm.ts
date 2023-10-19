import { zodResolver } from '@hookform/resolvers/zod'

import * as zod from 'zod'

const formValidationSchema = zod.object({
  latitude: zod.string().nonempty("Latitude is required"),
  longitude: zod.string().nonempty("Longitude is required"),
})

export const resolverForm = zodResolver(formValidationSchema)

export type FormData = zod.infer<typeof formValidationSchema>