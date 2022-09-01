import { Moon, Sun } from '@carbon/icons-react';
import { useTheme } from '@emotion/react';
import { Avatar } from '@tablecheck/tablekit-avatar';
import {
  Button,
  ButtonAppearance,
  ButtonShape
} from '@tablecheck/tablekit-button';
import { ItemGroupOrientation } from '@tablecheck/tablekit-item';
import { Size } from '@tablecheck/tablekit-theme';
import { useTranslation } from 'react-i18next';

import { useAppLayoutContext } from 'layouts/appLayoutContext';
import { UITheme } from 'shared/ui/AppThemeProvider/appTheme.types';
import { useThemeControllerContext } from 'shared/ui/AppThemeProvider/appThemeControllerContext';
import { LanguageSelector } from 'shared/ui/TopNav/LanguageSelector';
import {
  AvatarWrapper,
  SideNavContent,
  SideNavPanel,
  UserDetails,
  UserDetailsHeader
} from 'shared/ui/TopNav/SideNav/sidenav.styles';

function ThemeIcon({ themeType }: { themeType: UITheme }): JSX.Element {
  return themeType === UITheme.Classic ? <Sun size={16} /> : <Moon size={16} />;
}

export function SideNav(): JSX.Element {
  const [t] = useTranslation();
  const { toggleUITheme, themeType } = useThemeControllerContext();
  const { isSideNavOpen, setIsSideNavOpen } = useAppLayoutContext();
  const theme = useTheme();

  return (
    <SideNavPanel
      isOpen={isSideNavOpen}
      togglePanel={() => {
        setIsSideNavOpen(!isSideNavOpen);
      }}
      width="300px"
      onClickOutside={() => setIsSideNavOpen(false)}
    >
      <SideNavContent
        hasIndent
        orientation={ItemGroupOrientation.Vertical}
      >
        <AvatarWrapper className="ph-no-capture">
          <Avatar
            size={Size.XLarge}
            name="Tablecheck"
            initials="TC"
          />
        </AvatarWrapper>
        <UserDetails className="ph-no-capture">
          <UserDetailsHeader>{t('user_details:name')}</UserDetailsHeader>
        </UserDetails>

        <Button
          appearance={ButtonAppearance.Outline}
          shape={ButtonShape.Circular}
          iconBefore={<ThemeIcon themeType={themeType} />}
          onClick={toggleUITheme}
        >
          {theme.isDark ? t('themes:classic_theme') : t('themes:dark_theme')}
        </Button>
        <LanguageSelector />
      </SideNavContent>
    </SideNavPanel>
  );
}
