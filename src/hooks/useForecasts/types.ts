export interface InfoDays {
  date: string;
  temperature_max: number;
  temperature_min: number;
  sunrise: string;
  sunset: string;
  rain_sum: number;
  wind_speed_max: number;
}

export interface TodaysWeatherType {
  time: string;
  temperature_2m: number;
}
