import * as React from 'react';
import { Outlet } from 'react-router-dom';

import { AppLayoutContext, AppLayoutType } from 'layouts/appLayoutContext';
import { ScreenContainer, PageContentContainer } from 'layouts/layout.styles';
import { SideNav } from 'shared/ui/TopNav/SideNav/SideNav';
import { TopNav } from 'shared/ui/TopNav/TopNav';

export function AppLayout(): JSX.Element {
  const [isSideNavOpen, setIsSideNavOpen] = React.useState(false);

  const appLayoutContextValue = React.useMemo<AppLayoutType>(
    () => ({ isSideNavOpen, setIsSideNavOpen }),
    [isSideNavOpen]
  );

  return (
    <AppLayoutContext.Provider value={appLayoutContextValue}>
      <ScreenContainer>
        <TopNav />
        <SideNav />
        <PageContentContainer>
          <Outlet />
        </PageContentContainer>
      </ScreenContainer>
    </AppLayoutContext.Provider>
  );
}
