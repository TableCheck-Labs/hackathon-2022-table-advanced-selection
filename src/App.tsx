import styled from '@emotion/styled';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { FloorPlan } from 'features/FloorPlan/FloorPlan';
import { AppThemeProvider } from 'shared/ui/AppThemeProvider/AppThemeProvider';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export function App(): JSX.Element | null {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <PageContainer>
          <FloorPlan
            onTableClick={(table) => console.error(JSON.stringify(table))}
          />
        </PageContainer>
      </BrowserRouter>
    </AppThemeProvider>
  );
}
