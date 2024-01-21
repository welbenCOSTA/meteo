import { render, screen } from '@/test/customRender';
import { describe, it, expect } from 'vitest';

import { NextDays } from '..';

import nextDaysMock from '@/test/mocks/nextDaysMock';

import { type InfoDays } from '@/hooks/useForecasts/types';

const renderComponent = (mock: InfoDays[]) => {
  return render(<NextDays nextDays={mock} />);
};

describe('<NextDays />', () => {
  it('should render with values in next days', () => {
    renderComponent([nextDaysMock]);

    const titleNextDays = screen.getByRole('heading', {
      name: /próximos 6 dias/i,
    });

    expect(titleNextDays).toBeInTheDocument();
  });

  it('should render without values in next days', () => {
    renderComponent([]);

    const textError = screen.getByRole('heading', {
      name: /não temos previsoes par aos proximos dias\./i,
    });

    expect(textError).toBeInTheDocument();
  });
});
