import { useTheme } from '@emotion/react';
import { LogoSymbol } from '@tablecheck/tablekit-logo';

import { LogoWrapper } from 'components/TopNav/Logo/logo.styled';

export function AppLogo(): JSX.Element {
  const { isDark } = useTheme();

  return (
    <LogoWrapper>
      <LogoSymbol
        size="24px"
        isDarkTheme={isDark}
      />
    </LogoWrapper>
  );
}
