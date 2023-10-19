import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { QueryClient, QueryClientProvider } from 'react-query'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

import { RoutesConfig } from './router'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
    }
  }
})

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <RoutesConfig />
        <GlobalStyle />
      </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}