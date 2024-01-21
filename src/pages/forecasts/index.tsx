import { useForecasts } from '@/hooks/useForecasts';

import { TempInfos } from './temp-infos';
import { TodaysWeather } from './todays-weather';
import { NextDays } from './next-days';
import { ErrorPageForecasts } from './errorPage';
import { Content } from './styles';

export function Forecasts() {
  const {
    isLoading,
    isError,
    currentInfos,
    currentTemp,
    todaysWeather,
    nextDays,
  } = useForecasts();

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (isError) {
    return <ErrorPageForecasts />;
  }

  return (
    <Content>
      <TempInfos currentInfos={currentInfos} currentTemp={currentTemp} />
      <TodaysWeather todaysWeather={todaysWeather} />
      <NextDays nextDays={nextDays} />
    </Content>
  );
}

export default Forecasts;
