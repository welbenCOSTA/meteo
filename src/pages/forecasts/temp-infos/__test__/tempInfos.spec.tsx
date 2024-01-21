import { render, screen } from '@/test/customRender';
import { describe, it, expect } from 'vitest';

import { TempInfos } from '..';

import nextDaysMock from '@/test/mocks/nextDaysMock';

import { type InfoDays } from '@/hooks/useForecasts/types';

const renderComponent = (mock: InfoDays | null) => {
  return render(<TempInfos currentInfos={mock} currentTemp={22} />);
};

describe('<TempInfos />', () => {
  it('should render when we have values ​​for current temp', () => {
    renderComponent(nextDaysMock);

    const title = screen.queryByRole('heading', {
      name: /não temos informações sobre a previsão atual/i,
    });

    expect(title).not.toBeInTheDocument();
  });

  it('should render when not we have values ​for current temp', () => {
    renderComponent(null);

    const title = screen.getByRole('heading', {
      name: /não temos informações sobre a previsão atual/i,
    });

    expect(title).toBeInTheDocument();
  });
});
