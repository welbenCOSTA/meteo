interface Daily {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  sunrise: string[];
  sunset: string[];
  rain_sum: number[];
  wind_speed_10m_max: number[];
}

interface Hourly {
  time: string[];
  temperature_2m: number[];
}

interface Current {
  interval: number;
  temperature_2m: number;
  time: string;
}

export interface ResponseForecasts {
  daily: Daily;
  hourly: Hourly;
  current: Current;
}
