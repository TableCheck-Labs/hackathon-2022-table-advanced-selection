import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useAsync } from 'react-use';

import { initI18n } from 'i18n';
import { AppRouter } from 'router/AppRouter';
import { AppThemeProvider } from 'shared/ui/AppThemeProvider/AppThemeProvider';

export function App(): JSX.Element | null {
  const i18nState = useAsync(() => initI18n());

  if (i18nState.error) {
    return <div>i18n loading error: {i18nState.error.message}</div>;
  }

  if (i18nState.loading) {
    return null;
  }

  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AppThemeProvider>
  );
}
