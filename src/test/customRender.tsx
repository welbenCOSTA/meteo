import { type ReactElement, type ReactNode } from 'react';
import { afterEach } from 'vitest';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { type RenderOptions, render, cleanup } from '@testing-library/react';

import { defaultTheme } from '../styles/theme';

afterEach(() => {
  cleanup();
});

interface ProvidersType {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersType) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};

function customRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(ui, { wrapper: Providers, ...options });
}

export * from '@testing-library/react';

export { default as userEvent } from '@testing-library/user-event';

export { customRender as render };
