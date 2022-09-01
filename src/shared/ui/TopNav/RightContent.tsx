import { Menu } from '@carbon/icons-react';
import * as React from 'react';

import { useAppLayoutContext } from 'layouts/appLayoutContext';
import {
  RightContentBoxContainer,
  TopNavItem
} from 'shared/ui/TopNav/topNav.styles';

export function RightContent(): JSX.Element {
  const { isSideNavOpen, setIsSideNavOpen } = useAppLayoutContext();

  return (
    <RightContentBoxContainer>
      <TopNavItem
        elemBefore={<Menu size={24} />}
        onClick={() => {
          setIsSideNavOpen(!isSideNavOpen);
        }}
      />
    </RightContentBoxContainer>
  );
}
