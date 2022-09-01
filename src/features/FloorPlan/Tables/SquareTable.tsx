import {
  Seat,
  SquareShape,
  TableLabel
} from 'features/FloorPlan/Tables/Tables.styled';
import { getSquareSideDimensions } from 'features/FloorPlan/Tables/table.helpers';
import {
  OnTableClick,
  TableSchema
} from 'features/FloorPlan/Tables/tables.types';
import { Cell } from 'features/FloorPlan/floor.types';

export function SquareTable({
  table,
  cell,
  onClick,
  isSelected
}: {
  table: TableSchema;
  cell: Cell;
  onClick: OnTableClick;
  isSelected: boolean;
}): JSX.Element {
  const dimensions = getSquareSideDimensions(table, cell);
  const seatSize = dimensions.width / 5;
  return (
    <>
      <Seat
        x={dimensions.x + dimensions.width / 2 - seatSize}
        y={dimensions.y - seatSize / 3}
        width={seatSize * 2}
        height={seatSize}
        ry={seatSize * 0.2}
        status={isSelected ? 'selected' : table.status}
      />
      <Seat
        x={dimensions.x + dimensions.width / 2 - seatSize}
        y={dimensions.y + dimensions.height - (seatSize / 3) * 2}
        width={seatSize * 2}
        height={seatSize}
        ry={seatSize * 0.2}
        status={isSelected ? 'selected' : table.status}
      />
      <Seat
        x={dimensions.x - seatSize / 3}
        y={dimensions.y + dimensions.height / 2 - seatSize}
        width={seatSize}
        height={seatSize * 2}
        ry={seatSize * 0.2}
        status={isSelected ? 'selected' : table.status}
      />
      <Seat
        x={dimensions.x + dimensions.width - (seatSize / 3) * 2}
        y={dimensions.y + dimensions.height / 2 - seatSize}
        width={seatSize}
        height={seatSize * 2}
        ry={seatSize * 0.2}
        status={isSelected ? 'selected' : table.status}
      />
      <SquareShape
        {...dimensions}
        status={isSelected ? 'selected' : table.status}
        onClick={() => onClick(table)}
      />
      <TableLabel
        x={dimensions.x + dimensions.width / 2}
        y={dimensions.y + dimensions.height / 2}
        status={isSelected ? 'selected' : table.status}
      >
        {table.id}
      </TableLabel>
    </>
  );
}
