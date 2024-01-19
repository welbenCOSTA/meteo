import { Route, Routes as RoutesSwitch } from 'react-router-dom'

import { Forecasts } from '@/pages/forecasts'
import { AddForecast } from '@/pages/add-forecast'
import { DefaultLayout } from '@/layout/default'

export function Routes() {
  return (
    <DefaultLayout>
      <RoutesSwitch>
        <Route index element={<AddForecast />} path='/add-forecast' />
        <Route element={<Forecasts />} path='/forecasts' />
      </RoutesSwitch>
    </DefaultLayout>
  )
}
