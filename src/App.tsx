import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from 'router/AppRouter';
import { AppThemeProvider } from 'shared/ui/AppThemeProvider/AppThemeProvider';

export function App(): JSX.Element | null {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AppThemeProvider>
  );
}
