import { faker } from "@faker-js/faker";

class NextDaysMock {
  date: string;
  temperature_max: number;
  temperature_min: number;
  sunrise: string;
  sunset: string;
  rain_sum: number;
  wind_speed_max: number;

  constructor() {
    this.date = faker.date.future().toString()
    this.temperature_max = faker.number.float()
    this.temperature_min = faker.number.float()
    this.sunrise = faker.string.numeric({ length: 2 })
    this.sunset = faker.string.numeric({ length: 2 })
    this.rain_sum = faker.number.float()
    this.wind_speed_max = faker.number.float()
  }
}

const nextDaysMock = new NextDaysMock()

export default nextDaysMock