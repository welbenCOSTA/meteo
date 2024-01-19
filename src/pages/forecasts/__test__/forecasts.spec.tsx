import { render, screen } from '@/test/customRender'
import { describe, it, expect, afterEach } from 'vitest'
import nock from 'nock'

import { Forecasts } from '..'

import responseMock from '@/test/mocks/responseMock'
import { endpoints } from '@/services/Forecast'

const renderComponent = () => {
  return render(<Forecasts />)
}

describe('<Forecasts />', () => {
  it('should render page when success request', async () => { 
    nock('http:localhost:3000')
    .get(endpoints.forecasts())
    .query(true)
    .reply(200, responseMock)

    renderComponent()

    const titleTemp = await screen.findByRole('heading', { 
      name: /não temos informações sobre a previsão atual/i 
    })

    const titleNextDays = await screen.findByRole('heading', {
      name: /não temos previsoes par aos proximos dias\./i
    })

    expect(titleTemp).toBeInTheDocument()
    expect(titleNextDays).toBeInTheDocument()
  })

  it('should render error page when error request ', async () => {
    nock('https://api.open-meteo.com/v1')
    .get(endpoints.forecasts())
    .reply(400, {})

    renderComponent()

    const errorTitle = await screen.findByRole('heading', { 
      name: /ops!/i 
    })

    const errorSubTitle = await screen.findByRole('heading', {
      name: /ocorreu um erro inisperado, tente novamente mais tarde./i
    })

    expect(errorTitle).toBeInTheDocument()
    expect(errorSubTitle).toBeInTheDocument()
  })
})