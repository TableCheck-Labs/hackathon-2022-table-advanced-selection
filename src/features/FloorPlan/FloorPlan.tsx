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

const GRID_COLUMNS = 8;
const GRID_ROWS = 9;

const tables: TableSchema[] = [
  {
    id: '07',
    size: 'm',
    shape: 'square',
    row: 1,
    column: 1,
    status: 'available'
  },
  {
    id: '08',
    size: 'm',
    shape: 'square',
    row: 3,
    column: 1,
    status: 'available'
  },
  {
    id: '09',
    size: 'm',
    shape: 'square',
    row: 5,
    column: 1,
    status: 'available'
  },
  {
    id: '10',
    size: 'l',
    shape: 'square',
    row: 7,
    column: 1,
    status: 'available'
  },
  {
    id: '11',
    size: 'm',
    shape: 'round',
    row: 2,
    column: 4,
    status: 'available'
  },
  {
    id: '12',
    size: 'm',
    shape: 'round',
    row: 5,
    column: 4,
    status: 'available'
  },
  {
    id: '01',
    size: 's',
    shape: 'square',
    row: 1,
    column: 8,
    status: 'available'
  },
  {
    id: '02',
    size: 's',
    shape: 'square',
    row: 2,
    column: 8,
    status: 'available'
  },
  {
    id: '03',
    size: 's',
    shape: 'square',
    row: 4,
    column: 8,
    status: 'available'
  },
  {
    id: '04',
    size: 's',
    shape: 'square',
    row: 5,
    column: 8,
    status: 'available'
  },
  {
    id: '05',
    size: 's',
    shape: 'square',
    row: 7,
    column: 8,
    status: 'available'
  },
  {
    id: '06',
    size: 's',
    shape: 'square',
    row: 8,
    column: 8,
    status: 'available'
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
