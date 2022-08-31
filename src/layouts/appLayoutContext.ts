import * as React from 'react';

import { createCustomContext } from 'shared/helpers/createCustomContext';

export interface AppLayoutType {
  setIsSideNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSideNavOpen: boolean;
}

export const { AppLayoutContext, useAppLayoutContext } = createCustomContext<
  AppLayoutType,
  'AppLayout'
>('AppLayout');
