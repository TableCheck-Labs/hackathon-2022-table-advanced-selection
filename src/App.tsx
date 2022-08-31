import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppThemeProvider } from 'shared/ui/AppThemeProvider/AppThemeProvider';

export function App(): JSX.Element | null{
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <div>Table Advanced Selection App</div>
      </BrowserRouter>
    </AppThemeProvider>
  );
}
