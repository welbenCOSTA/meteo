import { type InfoDays } from '@/hooks/useForecasts/types';
import {
  TempContainer,
  CurrentTempContainer,
  Separator,
  HighAndLowContainer,
  HighTempContainer,
  LowTempContainer,
} from './styles';

interface TempInfosProps {
  currentInfos: InfoDays | null;
  currentTemp: number;
}

export function TempInfos({ currentInfos, currentTemp }: TempInfosProps) {
  if (currentInfos === null) {
    return (
      <TempContainer>
        <CurrentTempContainer>
          <h3>Não temos informações sobre a previsão atual</h3>
        </CurrentTempContainer>
      </TempContainer>
    );
  }

  const sunsetHours = new Date(currentInfos.sunset).getHours();
  const sunsetMinutes = new Date(currentInfos.sunset).getMinutes();

  const sunriswHours = new Date(currentInfos.sunrise).getHours();
  const sunriseMinutes = new Date(currentInfos.sunrise).getMinutes();

  return (
    <TempContainer>
      <CurrentTempContainer>
        <h2>{`${currentTemp}°`}</h2>
      </CurrentTempContainer>
      <Separator />
      <HighAndLowContainer>
        <HighTempContainer>
          <div>
            <p>{`${currentInfos.temperature_max}°`}</p>
            <span>Max</span>
          </div>
          <div>
            <p>{`${currentInfos.wind_speed_max} km/h`}</p>
            <span>Vento</span>
          </div>
          <div>
            <p>{`${sunriswHours}:${sunriseMinutes}`}</p>
            <span>Nascer do sol</span>
          </div>
        </HighTempContainer>
        <LowTempContainer>
          <div>
            <p>{`${currentInfos.temperature_min}°`}</p>
            <span>Min</span>
          </div>
          <div>
            <p>{`${currentInfos.rain_sum}%`}</p>
            <span>Chuva</span>
          </div>
          <div>
            <p>{`${sunsetHours}:${sunsetMinutes}`}</p>
            <span>Pôr do sol</span>
          </div>
        </LowTempContainer>
      </HighAndLowContainer>
    </TempContainer>
  );
}
