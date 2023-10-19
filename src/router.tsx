import { Route, Routes } from 'react-router-dom'

import { Forecasts } from './pages/Forecasts'
import { AddForecasts } from './pages/AddForecasts'

export const RoutesConfig = () => {
  return (
    <Routes>
      <Route path='/add-forecast' element={<AddForecasts />} />
      <Route path='/forecasts' element={<Forecasts />} />
    </Routes>
  )
}