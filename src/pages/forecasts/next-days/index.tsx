import { format } from 'date-fns';

import { type InfoDays } from '@/hooks/useForecasts/types';
import { daysOfWeek } from '@/utils/daysOfWeek';
import { NextDaysContainer, NextDaysList, NextDaysCard } from './styles';

interface NextDaysProps {
  nextDays: InfoDays[];
}

export function NextDays({ nextDays }: NextDaysProps) {
  if (nextDays.length === 0) {
    return (
      <NextDaysContainer>
        <h3>Não temos previsões para os proximos dias.</h3>
      </NextDaysContainer>
    );
  }
  return (
    <NextDaysContainer>
      <h3>Próximos 6 dias</h3>
      <NextDaysList>
        {nextDays.map((nextDay) => {
          const numberDayWeek = new Date(nextDay.date).getDay();
          return (
            <NextDaysCard key={nextDay.date}>
              <div>
                <p>{daysOfWeek[numberDayWeek]}</p>
                <span>{format(nextDay.date, 'dd/MM')}</span>
              </div>
              <div>
                <p>{`${nextDay.temperature_min}°`}</p>
                <span>Min</span>
              </div>
              <div>
                <p>{`${nextDay.temperature_max}°`}</p>
                <span>Max</span>
              </div>
              <div>
                <p>{`${nextDay.wind_speed_max} km/h`}</p>
                <span>Vento</span>
              </div>
              <div>
                <p>{`${nextDay.rain_sum}%`}</p>
                <span>Chuva</span>
              </div>
            </NextDaysCard>
          );
        })}
      </NextDaysList>
    </NextDaysContainer>
  );
}
