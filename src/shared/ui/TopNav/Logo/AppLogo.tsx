import { useTheme } from '@emotion/react';
import { LogoSymbol } from '@tablecheck/tablekit-logo';
import { useTranslation } from 'react-i18next';

import { LogoWrapper } from 'shared/ui/TopNav/Logo/logo.styled';

export function AppLogo(): JSX.Element {
  const [t] = useTranslation();
  const { isDark } = useTheme();

  return (
    <LogoWrapper>
      <LogoSymbol
        size="24px"
        isDarkTheme={isDark}
      />
      {t('application:name')}
    </LogoWrapper>
  );
}
