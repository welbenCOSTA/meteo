type Daily = {
  time: string[],
  temperature_2m_max: number[],
  temperature_2m_min: number[],
  sunrise: string[],
  sunset: string[],
  rain_sum: number[],
  wind_speed_10m_max: number[]
}

type Hourly = {
  time: string[],
  temperature_2m: number[]
}

type Current = {
  interval: number
  temperature_2m : number
  time: string
}

export type ResponseForecasts = {
  daily: Daily
  hourly: Hourly
  current: Current
}