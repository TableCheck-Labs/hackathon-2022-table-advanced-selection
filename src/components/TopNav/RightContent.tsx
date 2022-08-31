import { Menu } from '@carbon/icons-react';
import * as React from 'react';

import {
  RightContentBoxContainer,
  TopNavItem
} from 'components/TopNav/topNav.styles';
import { useAppLayoutContext } from 'layouts/appLayoutContext';

export function RightContent(): JSX.Element {
  const { setIsSideNavOpen } = useAppLayoutContext();

  return (
    <RightContentBoxContainer>
      <TopNavItem
        elemBefore={<Menu size={24} />}
        onClick={() => {
          setIsSideNavOpen(true);
        }}
      />
    </RightContentBoxContainer>
  );
}
