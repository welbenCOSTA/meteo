import { endpoints } from '@/services/Forecast';

export const TEST_URL = `${import.meta.env.VITE_BASE_URL}${endpoints.forecasts()}`;

export enum METHODS {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT',
  PATCH = 'PATCH',
}
