import { render, screen } from '@/test/customRender';
import { describe, it, expect } from 'vitest';

import { TodaysWeather } from '..';

import todaysWatherMock from '@/test/mocks/todaysWatherMock';

import { type TodaysWeatherType } from '@/hooks/useForecasts/types';

const renderComponent = (mock: TodaysWeatherType[]) => {
  return render(<TodaysWeather todaysWeather={mock} />);
};

describe('<TodaysWeather />', () => {
  it('should render when we have values ​​for todays climate', () => {
    renderComponent([todaysWatherMock]);

    const title = screen.getByRole('heading', {
      name: /temperatura durante o dia/i,
    });

    expect(title).toBeInTheDocument();
  });

  it('should render when noa we have values ​for todays climate', () => {
    renderComponent([]);

    const textError = screen.getByRole('heading', {
      name: /não temos previsoes das horas anteriores\./i,
    });

    expect(textError).toBeInTheDocument();
  });
});
