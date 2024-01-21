import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { keys, forecastsService } from '@/services/Forecast';
import { useStore } from '@/zustand/store';

export function useForecasts() {
  const currentDay = new Date().getDay();
  const { latitude, longitude } = useStore();

  const { data, isLoading, isError } = useQuery({
    queryKey: [keys.forecasts],
    queryFn: async () =>
      await forecastsService.searchLocation(latitude, longitude),
  });

  const hasData = data !== undefined;

  const currentInfos = useMemo(() => {
    return hasData
      ? data.daily.time.map((date, index) => ({
          date,
          temperature_max: data.daily.temperature_2m_max[index],
          temperature_min: data.daily.temperature_2m_min[index],
          sunrise: data.daily.sunrise[index],
          sunset: data.daily.sunset[index],
          rain_sum: data.daily.rain_sum[index],
          wind_speed_max: data.daily.wind_speed_10m_max[index],
        }))
      : [];
  }, [data, hasData]);

  const currentTemp = useMemo(() => {
    return hasData ? data.current.temperature_2m : 0;
  }, [data, hasData]);

  const todaysWeather = useMemo(() => {
    if (hasData) {
      const todayDateString = new Date().toDateString();
      return data.hourly.time
        .map((time, index) => ({
          time,
          temperature_2m: data.hourly.temperature_2m[index],
        }))
        .filter(
          (todaysWeather) =>
            new Date(todaysWeather.time).toDateString() === todayDateString,
        );
    }
    return [];
  }, [data, hasData]);

  const nextDays = useMemo(() => {
    return currentInfos.filter(
      (day) => new Date(day.date).getDay() < currentDay,
    );
  }, [currentInfos, currentDay]);

  return {
    currentInfos: currentInfos.length > 0 ? currentInfos[0] : null,
    currentTemp,
    todaysWeather,
    nextDays,
    isLoading,
    isError,
  };
}
