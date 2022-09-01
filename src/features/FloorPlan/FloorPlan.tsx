import { SizeMeProps, withSize } from 'react-sizeme';

import { CanvasContainer } from 'features/FloorPlan/FloorPlan.styled';
import { Table } from 'features/FloorPlan/Tables/Table';
import {
  OnTableClick,
  TableSchema
} from 'features/FloorPlan/Tables/tables.types';

const GRID_COLUMNS = 8;
const GRID_ROWS = 9;

function FloorCanvas({
  width,
  height,
  onTableClick,
  selectedTable,
  tables
}: {
  onTableClick: OnTableClick;
  width: number;
  height: number;
  selectedTable: TableSchema | null;
  tables: TableSchema[];
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
          isSelected={!!selectedTable && selectedTable.id === table.id}
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
    selectedTable,
    onTableClick,
    tables
  }: {
    onTableClick: OnTableClick;
    selectedTable: TableSchema | null;
    tables: TableSchema[];
  } & SizeMeProps) => (
    <CanvasContainer>
      {width && height && (
        <FloorCanvas
          tables={tables}
          width={width}
          height={height}
          selectedTable={selectedTable}
          onTableClick={onTableClick}
        />
      )}
    </CanvasContainer>
  )
);
