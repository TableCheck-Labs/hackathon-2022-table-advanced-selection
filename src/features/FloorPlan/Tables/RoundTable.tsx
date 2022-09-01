import {
  RoundShape,
  Seat,
  TableLabel
} from 'features/FloorPlan/Tables/Tables.styled';
import { getRoundSideDimensions } from 'features/FloorPlan/Tables/table.helpers';
import {
  OnTableClick,
  TableSchema
} from 'features/FloorPlan/Tables/tables.types';
import { Cell } from 'features/FloorPlan/floor.types';

export function RoundTable({
  table,
  cell,
  isSelected,
  onClick
}: {
  table: TableSchema;
  isSelected: boolean;
  cell: Cell;
  onClick: OnTableClick;
}): JSX.Element {
  const dimensions = getRoundSideDimensions(table, cell);
  const seatSize = (dimensions.r * 2) / 5;

  return (
    <>
      <Seat
        x={dimensions.cx - dimensions.r - seatSize / 3}
        y={dimensions.cy - seatSize / 2}
        width={seatSize}
        height={seatSize}
        ry={seatSize * 0.2}
        status={isSelected ? 'selected' : table.status}
      />
      <Seat
        x={dimensions.cx + dimensions.r - (seatSize / 3) * 2}
        y={dimensions.cy - seatSize / 2}
        width={seatSize}
        height={seatSize}
        ry={seatSize * 0.2}
        status={isSelected ? 'selected' : table.status}
      />
      <Seat
        x={dimensions.cx - seatSize / 2}
        y={dimensions.cy - dimensions.r - seatSize / 3}
        width={seatSize}
        height={seatSize}
        ry={seatSize * 0.2}
        status={isSelected ? 'selected' : table.status}
      />
      <Seat
        x={dimensions.cx - seatSize / 2}
        y={dimensions.cy + dimensions.r - (seatSize / 3) * 2}
        width={seatSize}
        height={seatSize}
        ry={seatSize * 0.2}
        status={isSelected ? 'selected' : table.status}
      />
      <RoundShape
        {...dimensions}
        status={isSelected ? 'selected' : table.status}
        onClick={() => onClick(table)}
        fill="black"
      />
      <TableLabel
        status={isSelected ? 'selected' : table.status}
        x={dimensions.cx}
        y={dimensions.cy}
      >
        {table.id}
      </TableLabel>
    </>
  );
}
