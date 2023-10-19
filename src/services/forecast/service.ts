import api from '../../configs/axios/api'

import { endpoints } from './endpoints'

export class ForeCastService {
  async addForecast(latitude: string, longitude: string) {
    const res = await api.get(endpoints.forecast, {
      params: {
        latitude,
        longitude
      }
    })

    return res
  }
}