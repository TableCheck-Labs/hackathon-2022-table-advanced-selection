import * as React from 'react';

import { SideNav } from 'components/TopNav/SideNav/SideNav';
import { TopNav } from 'components/TopNav/TopNav';
import { AppLayoutContext, AppLayoutType } from 'layouts/appLayoutContext';
import { ScreenContainer, PageContentContainer } from 'layouts/layout.styles';

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
        <PageContentContainer>Page</PageContentContainer>
      </ScreenContainer>
    </AppLayoutContext.Provider>
  );
}
