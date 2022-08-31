import { css, Global } from '@emotion/react';
import { ThemeProvider as TablekitThemeProvider } from '@tablecheck/tablekit-theme';
import {
  commonTypographyStyles,
  desktopTypographyStyles
} from '@tablecheck/tablekit-typography';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import {
  getScrollbarCssVariables,
  getScrollbarStyles
} from 'shared/helpers/scrollbar';
import {
  appThemeTypes,
  UITheme
} from 'shared/ui/AppThemeProvider/appTheme.types';
import {
  ThemeController,
  ThemeControllerContext
} from 'shared/ui/AppThemeProvider/appThemeControllerContext';

export function AppThemeProvider({
  children
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [themeType, setUITheme] = React.useState(UITheme.Classic);
  const [, { language }] = useTranslation();
  const theme = appThemeTypes[themeType];

  const themeControllerValue = React.useMemo<ThemeController>(
    () => ({
      setUITheme,
      themeType,
      toggleUITheme: () =>
        setUITheme((prevTheme) =>
          prevTheme === UITheme.Classic ? UITheme.Dark : UITheme.Classic
        )
    }),
    [themeType]
  );

  return (
    <ThemeControllerContext.Provider value={themeControllerValue}>
      <TablekitThemeProvider
        theme={theme}
        locale={language}
        isDark={theme.isDark}
      >
        <Global
          styles={css`
            ${commonTypographyStyles};
            ${desktopTypographyStyles};

            ${getScrollbarCssVariables(theme.isDark)}
            html, body {
              ${getScrollbarStyles()}
            }
          `}
        />
        {children}
      </TablekitThemeProvider>
    </ThemeControllerContext.Provider>
  );
}
