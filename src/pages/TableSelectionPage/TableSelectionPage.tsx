import styled from '@emotion/styled';
import { Button } from '@tablecheck/tablekit-button';
import { Panel, PanelPosition } from '@tablecheck/tablekit-panel';
import { Spacing } from '@tablecheck/tablekit-theme';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { FloorPlan } from 'features/FloorPlan/FloorPlan';
import { TableSchema } from 'features/FloorPlan/Tables/tables.types';
import { PageWrapper } from 'pages/pages.styles';

const PanelContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${Spacing.L2};
`;

export function TableSelectionPage(): JSX.Element {
  const navigate = useNavigate();
  const [selectedTable, setSelectedTable] = React.useState<TableSchema | null>(
    null
  );

  return (
    <PageWrapper>
      <FloorPlan onTableClick={(table) => setSelectedTable(table)} />
      <Panel
        onClickOutside={() => setSelectedTable(null)}
        height="50%"
        isOpen={!!selectedTable}
        position={PanelPosition.Bottom}
      >
        <PanelContent>{JSON.stringify(selectedTable)}</PanelContent>
      </Panel>
      <Button onClick={() => navigate('/payment-confirmation')}>
        Checkout
      </Button>
    </PageWrapper>
  );
}
