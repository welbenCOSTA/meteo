import { ResponseForecasts } from '@/services/Forecast/types'
import { faker } from '@faker-js/faker'

class ResponseMock {
  data: ResponseForecasts

  constructor() {
    this.data = {
      daily: {
        rain_sum: Array.from(Array(7).keys()),
        sunrise: [
          `${faker.date.future()}`,
          `${faker.date.future()}`,
          `${faker.date.future()}`,
          `${faker.date.future()}`,
          `${faker.date.future()}`,
          `${faker.date.future()}`,
          `${faker.date.future()}`
        ],
        sunset: [
          `${faker.date.future()}`,
          `${faker.date.future()}`,
          `${faker.date.future()}`,
          `${faker.date.future()}`,
          `${faker.date.future()}`,
          `${faker.date.future()}`,
          `${faker.date.future()}`
        ],
        temperature_2m_min: Array.from(Array(7).keys()),
        temperature_2m_max: Array.from(Array(7).keys()),
        time: [
          `${faker.date.future()}`,
          `${faker.date.future()}`,
          `${faker.date.future()}`,
          `${faker.date.future()}`,
          `${faker.date.future()}`,
          `${faker.date.future()}`,
          `${faker.date.future()}`
        ],
        wind_speed_10m_max: Array.from(Array(7).keys()),
      },
      current: {
        interval: faker.number.float(),
        temperature_2m: faker.number.float(),
        time: `${faker.date.future()}`
      },
      hourly: {
        time: [
          `${faker.date.future()}`,
          `${faker.date.future()}`,
          `${faker.date.future()}`,
          `${faker.date.future()}`,
          `${faker.date.future()}`,
          `${faker.date.future()}`,
          `${faker.date.future()}`
        ],
        temperature_2m: Array.from(Array(7).keys()),
      }
    }
  }
}

const responseMock = new ResponseMock()

export default responseMock
