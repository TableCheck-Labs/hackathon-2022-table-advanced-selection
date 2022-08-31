import { Theme } from '@emotion/react';
import {
  avatarClassicTheme,
  avatarDarkTheme,
  avatarThemeNamespace
} from '@tablecheck/tablekit-avatar';
import {
  buttonClassicTheme,
  buttonDarkTheme,
  buttonThemeNamespace
} from '@tablecheck/tablekit-button';
import {
  inputClassicTheme,
  inputDarkTheme,
  inputThemeNamespace
} from '@tablecheck/tablekit-input';
import {
  itemClassicTheme,
  itemDarkTheme,
  itemThemeNamespace
} from '@tablecheck/tablekit-item';
import {
  languageSelectorClassicTheme,
  languageSelectorDarkTheme,
  languageSelectorThemeNamespace
} from '@tablecheck/tablekit-language-selector';
import {
  panelClassicTheme,
  panelDarkTheme,
  panelThemeNamespace
} from '@tablecheck/tablekit-panel';
import {
  sidenavClassicTheme,
  sidenavDarkTheme,
  sidenavThemeNamespace
} from '@tablecheck/tablekit-sidenav';
import { CLASSIC_COLORS, DARK_COLORS } from '@tablecheck/tablekit-theme';
import {
  tooltipClassicTheme,
  tooltipDarkTheme,
  tooltipThemeNamespace
} from '@tablecheck/tablekit-tooltip';
import {
  topnavClassicTheme,
  topnavDarkTheme,
  topnavThemeNamespace
} from '@tablecheck/tablekit-topnav';

export enum UITheme {
  Classic,
  Dark
}

export const classicTheme = {
  isDark: false,
  colors: CLASSIC_COLORS,
  [avatarThemeNamespace]: avatarClassicTheme,
  [buttonThemeNamespace]: buttonClassicTheme,
  [inputThemeNamespace]: inputClassicTheme,
  [itemThemeNamespace]: itemClassicTheme,
  [languageSelectorThemeNamespace]: languageSelectorClassicTheme,
  [panelThemeNamespace]: panelClassicTheme,
  [sidenavThemeNamespace]: sidenavClassicTheme,
  [tooltipThemeNamespace]: tooltipClassicTheme,
  [topnavThemeNamespace]: topnavClassicTheme
};

export const darkTheme = {
  isDark: true,
  colors: DARK_COLORS,
  [avatarThemeNamespace]: avatarDarkTheme,
  [buttonThemeNamespace]: buttonDarkTheme,
  [inputThemeNamespace]: inputDarkTheme,
  [itemThemeNamespace]: itemDarkTheme,
  [languageSelectorThemeNamespace]: languageSelectorDarkTheme,
  [panelThemeNamespace]: panelDarkTheme,
  [sidenavThemeNamespace]: sidenavDarkTheme,
  [tooltipThemeNamespace]: tooltipDarkTheme,
  [topnavThemeNamespace]: topnavDarkTheme
};

export const appThemeTypes: {
  [key in UITheme]: Partial<Theme> & Pick<Theme, 'isDark' | 'colors'>;
} = {
  [UITheme.Classic]: classicTheme,
  [UITheme.Dark]: darkTheme
};
