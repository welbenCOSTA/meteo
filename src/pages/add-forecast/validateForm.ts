import { zodResolver } from '@hookform/resolvers/zod';

import * as zod from 'zod';

const searchLocationValidationSchema = zod.object({
  latitude: zod.string().min(1, 'Campo obrigatório'),
  longitude: zod.string().min(1, 'Campo obrigatório'),
});

export const resolverForm = zodResolver(searchLocationValidationSchema);

export type SearchLocationData = zod.infer<
  typeof searchLocationValidationSchema
>;
