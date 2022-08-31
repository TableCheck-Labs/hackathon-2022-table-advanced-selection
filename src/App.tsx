import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppLayout } from 'layouts/AppLayout';
import { AppThemeProvider } from 'shared/ui/AppThemeProvider/AppThemeProvider';


export function App(): JSX.Element | null {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </AppThemeProvider>
  );
}
