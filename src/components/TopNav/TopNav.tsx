import styled from '@emotion/styled';
import { TopNav as TKTapNav } from '@tablecheck/tablekit-topnav';

import { AppLogo } from 'components/TopNav/Logo/AppLogo';
import { RightContent } from 'components/TopNav/RightContent';

const TopNavContainer = styled(TKTapNav)`
  grid-area: topnav;
`;

export function TopNav(): JSX.Element {
  return (
    <TopNavContainer
      leftContent={<AppLogo />}
      hasCenterContainer
      rightContent={<RightContent />}
    />
  );
}
