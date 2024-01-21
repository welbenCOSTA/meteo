import { vi, describe, it, expect } from 'vitest';
import { faker } from '@faker-js/faker';
import { render, screen, userEvent } from '@/test/customRender';

import { AddForecast } from '..';

const navigate = vi.fn();

vi.mock('react-router-dom', () => ({
  useNavigate: () => navigate,
}));

const renderComponent = () => {
  return render(<AddForecast />);
};

describe('<AddForecast />', () => {
  it('render corretly', () => {
    renderComponent();
    const logoName = screen.getByRole('heading', { name: /meteo/i });
    const subTitle = screen.getByRole('heading', {
      name: /adicione as cordenadas do local desejado\./i,
    });
    const latField = screen.getByText(/latitude/i);
    const lonField = screen.getByText(/longitude/i);
    const buttonSearch = screen.getByRole('button', { name: /pesquisar/i });

    expect(logoName).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
    expect(latField).toBeInTheDocument();
    expect(lonField).toBeInTheDocument();
    expect(buttonSearch).toBeInTheDocument();
  });

  it('should show the value entered in the fields', async () => {
    renderComponent();

    const latField =
      screen.getByPlaceholderText<HTMLInputElement>(/insira a latitude/i);
    const lonField =
      screen.getByPlaceholderText<HTMLInputElement>(/Insira a longitude/i);

    const latText = faker.string.numeric({ length: 7 });
    await userEvent.type(latField, latText);

    const lonText = faker.string.numeric({ length: 7 });
    await userEvent.type(lonField, lonText);

    expect(latField.value).toEqual(latText);
    expect(lonField.value).toEqual(lonText);
  });

  it('should redirect to the forecasts page', async () => {
    renderComponent();

    const latField =
      screen.getByPlaceholderText<HTMLInputElement>(/insira a latitude/i);
    const lonField =
      screen.getByPlaceholderText<HTMLInputElement>(/Insira a longitude/i);

    const latText = faker.string.numeric({ length: 7 });
    await userEvent.type(latField, latText);

    const lonText = faker.string.numeric({ length: 7 });
    await userEvent.type(lonField, lonText);

    const buttonSearch = screen.getByRole('button', { name: /pesquisar/i });
    await userEvent.click(buttonSearch);

    expect(navigate).toHaveBeenCalledWith('/forecasts');
  });

  it('should not call submit without values in the fields', async () => {
    renderComponent();

    const buttonSearch = screen.getByRole('button', { name: /pesquisar/i });
    await userEvent.click(buttonSearch);

    const latError = await screen.findByTestId(/latitude-error/i);
    const lonError = await screen.findByTestId(/longitude-error/i);

    expect(latError).toBeInTheDocument();
    expect(lonError).toBeInTheDocument();
  });
});
