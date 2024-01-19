
import { vi, describe, it, expect } from 'vitest'
import { faker } from '@faker-js/faker'
import { render, screen, userEvent, waitFor } from '@/test/customRender'

import { AddForecast } from '..'

const navigate = vi.fn()

vi.mock('react-router-dom', async () => ({
  ...vi.importActual('react-router-dom'),
  useNavigate: () => navigate
}));

const renderComponent = () => {
  return render(<AddForecast />)
}

describe('<AddForecast />', () => {
  it('render corretly', () => {
    renderComponent()
    const logoName = screen.getByRole('heading', { name: /meteo/i })
    const subTitle = screen.getByRole('heading', { name: /adicione as cordenadas do local desejado\./i })
    const latField = screen.getByText(/latitude/i)
    const lonField = screen.getByText(/longitude/i)
    const buttonSearch = screen.getByRole('button', { name: /pesquisar/i })

    expect(logoName).toBeInTheDocument()
    expect(subTitle).toBeInTheDocument()
    expect(latField).toBeInTheDocument()
    expect(lonField).toBeInTheDocument()
    expect(buttonSearch).toBeInTheDocument()
  })

  it('should show the value entered in the fields', async () => {
    renderComponent()

    const latField = screen.getByText(/latitude/i) as HTMLInputElement
    const lonField = screen.getByText(/longitude/i) as HTMLInputElement

    const latText = faker.string.numeric({ length: 7 })
    await userEvent.type(latField, latText)
    
    const lonText = faker.string.numeric({ length: 7 })
    await userEvent.type(lonField, lonText)

    waitFor(() => {
      expect(latField.value).toEqual(latText)
      expect(lonField.value).toEqual(lonText)
    })
  })

  it('should redirect to the forecasts page', async () => {
    renderComponent()

    const latField = screen.getByText(/latitude/i) as HTMLInputElement
    const lonField = screen.getByText(/longitude/i) as HTMLInputElement
    const buttonSearch = screen.getByRole('button', { name: /pesquisar/i })

    const latText = faker.string.numeric({ length: 7 })
    await userEvent.type(latField, latText)
    
    const lonText = faker.string.numeric({ length: 7 })
    await userEvent.type(lonField, lonText)

    userEvent.click(buttonSearch)

    waitFor(() => expect(navigate).toHaveBeenCalledWith('/forecasts'))
  })

  it('should not call submit without values in the fields', () => {
    renderComponent()

    const buttonSearch = screen.getByRole('button', { name: /pesquisar/i })

    userEvent.click(buttonSearch)

    waitFor(() => expect(navigate).not.toHaveBeenCalledWith('/forecasts'))
  })
})