import { Route, Routes } from 'react-router-dom'

import { Forecasts } from './pages/Forecasts'
import { AddForecasts } from './pages/AddForecasts'

export const RoutesConfig = () => {
  return (
    <Routes>
      <Route path='/' element={<Forecasts />} />
      <Route path='/add' element={<AddForecasts />} />
    </Routes>
  )
}