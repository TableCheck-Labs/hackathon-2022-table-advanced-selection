import styled from '@emotion/styled';
import { SizeMeProps, withSize } from 'react-sizeme';

import { Table } from 'features/FloorPlan/Tables/Table';
import {
  OnTableClick,
  TableSchema
} from 'features/FloorPlan/Tables/tables.types';

const CanvasContainer = styled.div`
  flex-grow: 1;
  min-height: 0;
`;

const GRID_COLUMNS = 9;
const GRID_ROWS = 9;

const tables: TableSchema[] = [
  {
    id: 1,
    shape: 'round',
    status: 'booked',
    row: 5,
    column: 5,
    size: 's'
  },
  {
    id: 2,
    shape: 'square',
    status: 'available',
    row: 2,
    column: 1,
    size: 's'
  },
  {
    id: 3,
    shape: 'round',
    status: 'available',
    row: 6,
    column: 2,
    size: 's'
  }
];

function FloorCanvas({
  width,
  height,
  onTableClick
}: {
  onTableClick: OnTableClick;
  width: number;
  height: number;
}) {
  const cell = {
    height: height / GRID_ROWS,
    width: width / GRID_COLUMNS
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
    >
      {tables.map((table) => (
        <Table
          key={table.id}
          table={table}
          cell={cell}
          onClick={onTableClick}
        />
      ))}
    </svg>
  );
}

export const FloorPlan = withSize({
  monitorHeight: true,
  monitorWidth: true,
  refreshRate: 300,
  refreshMode: 'debounce',
  noPlaceholder: true
})(
  ({
    size: { width, height },
    onTableClick
  }: { onTableClick: OnTableClick } & SizeMeProps) => (
    <CanvasContainer>
      {width && height && (
        <FloorCanvas
          width={width}
          height={height}
          onTableClick={onTableClick}
        />
      )}
    </CanvasContainer>
  )
);
