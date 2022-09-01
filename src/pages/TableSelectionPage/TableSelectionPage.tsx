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

const FloorContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;

const TableLegend = styled.div`
  min-height: 40%;
  flex: 0;
`;

export function TableSelectionPage(): JSX.Element {
  const navigate = useNavigate();
  const [selectedTable, setSelectedTable] = React.useState<TableSchema | null>(
    null
  );

  return (
    <PageWrapper>
      <FloorContainer>
        <h3>Select your table</h3>
        <FloorPlan onTableClick={(table) => setSelectedTable(table)} />
        <TableLegend />
      </FloorContainer>
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
