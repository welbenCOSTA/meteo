import { type types } from '.';
import { api } from '../api';
import { endpoints } from './endpoint';

export class ForecastsService {
  async searchLocation(
    latitude: string,
    longitude: string,
  ): Promise<types.ResponseForecasts> {
    try {
      const res = await api.get(endpoints.forecasts(), {
        params: {
          latitude,
          longitude,
          hourly: 'temperature_2m',
          daily:
            'temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum,wind_speed_10m_max',
          current: 'temperature_2m',
        },
      });

      return res.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Propague o erro para que o React Query possa lidar com isso.
    }
  }
}
