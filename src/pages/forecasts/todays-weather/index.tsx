import { type TodaysWeatherType } from '@/hooks/useForecasts/types';
import { TodaysWeatherContainer, WeatherList, WeatherCard } from './styles';

interface TodaysWeatherProps {
  todaysWeather: TodaysWeatherType[];
}

export function TodaysWeather({ todaysWeather }: TodaysWeatherProps) {
  if (todaysWeather.length === 0) {
    return (
      <TodaysWeatherContainer>
        <h3>Não temos previsoes das horas anteriores.</h3>
      </TodaysWeatherContainer>
    );
  }

  return (
    <TodaysWeatherContainer>
      <h3>Temperatura durante o dia</h3>
      <WeatherList>
        {todaysWeather.map((weather) => {
          const hours = new Date(weather.time).getHours();
          const minutes = new Date(weather.time).getMinutes();

          return (
            <WeatherCard key={weather.time}>
              <p>{`${hours}h:${minutes}0`}</p>
              <span>{`${weather.temperature_2m}°`}</span>
            </WeatherCard>
          );
        })}
      </WeatherList>
    </TodaysWeatherContainer>
  );
}
