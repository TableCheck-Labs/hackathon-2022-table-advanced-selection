import { SizeMeProps, withSize } from 'react-sizeme';

import { CanvasContainer } from 'features/FloorPlan/FloorPlan.styled';
import { Table } from 'features/FloorPlan/Tables/Table';
import { OnTableClick } from 'features/FloorPlan/Tables/tables.types';
import { tables } from 'features/FloorPlan/mocks';

const GRID_COLUMNS = 8;
const GRID_ROWS = 9;

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
