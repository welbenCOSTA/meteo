import { faker } from "@faker-js/faker";

class TodaysWatherMock {
  time: string 
  temperature_2m: number

  constructor() {
    this.time = faker.string.numeric({ length: 2 })
    this.temperature_2m = faker.number.float()
  }
}

const todaysWatherMock = new TodaysWatherMock()

export default todaysWatherMock