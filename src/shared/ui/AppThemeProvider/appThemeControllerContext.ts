import '@tablecheck/tablekit-free-icon-config';

import { createCustomContext } from 'shared/helpers/createCustomContext';
import { UITheme } from 'shared/ui/AppThemeProvider/appTheme.types';

export interface ThemeController {
  setUITheme: (themeType: UITheme) => void;
  toggleUITheme: () => void;
  themeType: UITheme;
}

export const { ThemeControllerContext, useThemeControllerContext } =
  createCustomContext<ThemeController, 'ThemeController'>('ThemeController');
