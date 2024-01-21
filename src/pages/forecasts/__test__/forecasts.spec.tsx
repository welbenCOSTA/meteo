// @vitest-environment jsdom

import { render, screen } from '@/test/customRender';
import { describe, it, expect } from 'vitest';

import { Forecasts } from '..';

import mockRequest from '@/test/mockRequest';
import { METHODS, TEST_URL } from '@/test/msw/const';

const renderComponent = () => {
  return render(<Forecasts />);
};

describe('<Forecasts />', () => {
  it('should render page when success request', async () => {
    renderComponent();

    const titleTemp = await screen.findByRole('heading', {
      name: /não temos previsões das horas anteriores\./i,
    });

    const titleNextDays = await screen.findByRole('heading', {
      name: /não temos previsões para os proximos dias\./i,
    });

    expect(titleTemp).toBeInTheDocument();
    expect(titleNextDays).toBeInTheDocument();
  });

  it('should render error page when error request ', async () => {
    mockRequest.mockrequest(TEST_URL, METHODS.GET, 404, {});

    renderComponent();

    const errorTitle = await screen.findByRole('heading', {
      name: /ops!/i,
    });

    const errorSubTitle = await screen.findByRole('heading', {
      name: /ocorreu um erro inisperado, tente novamente mais tarde./i,
    });

    expect(errorTitle).toBeInTheDocument();
    expect(errorSubTitle).toBeInTheDocument();
  });
});
