import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { AddForecasts } from '..'

const renderComponent = () => {
  return render(<AddForecasts />)
}

describe('AddForecasts', () => {
  it('should render correctly', () => {
    renderComponent()
    const title = screen.getByRole('heading', { name: /add localization/i })
    const inputLongitude = screen.getByRole('textbox', { name: /latitude/i })
    const inputLatitude = screen.getByRole('textbox', { name: /longitude/i })
    const button = screen.getByRole('button', { name: /enviar/i })

    expect(title).toBeInTheDocument()
    expect(inputLongitude).toBeInTheDocument()
    expect(inputLatitude).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('should show the mandatory fields message when entering submit a form with several fields', async () => {
    renderComponent()

    const button = screen.getByRole('button', { name: /enviar/i })
    userEvent.click(button)

    const messageErrorLatitude = await screen.findByText(/latitude is required/i)
    const messageErrorLongitude = await screen.findByText(/longitude is required/i)

    expect(messageErrorLatitude).toBeInTheDocument()
    expect(messageErrorLongitude).toBeInTheDocument()
  })
})