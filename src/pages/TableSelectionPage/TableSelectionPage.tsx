import styled from '@emotion/styled';
import { Panel, PanelPosition } from '@tablecheck/tablekit-panel';
import { Spacing } from '@tablecheck/tablekit-theme';
import { Typography } from '@tablecheck/tablekit-typography';
import * as React from 'react';

import { FloorPlan } from 'features/FloorPlan/FloorPlan';
import { StatusBlock } from 'features/FloorPlan/StatusBlock';
import { TableSchema } from 'features/FloorPlan/Tables/tables.types';
import { TableDescription } from 'pages/TableSelectionPage/TableDescription';
import { tables } from 'pages/TableSelectionPage/mocks';
import { PageWrapper } from 'pages/pages.styles';

const FloorTitle = styled.h3`
  ${Typography.Heading2};
  padding: ${Spacing.L4} ${Spacing.L2};
`;

const FloorContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  width: 100%;
`;

export function TableSelectionPage(): JSX.Element {
  const [selectedTable, setSelectedTable] = React.useState<TableSchema | null>(
    null
  );

  return (
    <PageWrapper>
      <FloorContainer>
        <FloorTitle>Select your table</FloorTitle>
        <FloorPlan
          tables={tables}
          selectedTable={selectedTable}
          onTableClick={(table) => setSelectedTable(table)}
        />
        <StatusBlock />
      </FloorContainer>
      <Panel
        onClickOutside={() => setSelectedTable(null)}
        height="60%"
        isOpen={!!selectedTable}
        position={PanelPosition.Bottom}
      >
        {selectedTable && <TableDescription table={selectedTable} />}
      </Panel>
    </PageWrapper>
  );
}
