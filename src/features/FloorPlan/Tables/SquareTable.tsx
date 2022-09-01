import {
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
  return (
    <>
      <SquareShape
        {...dimensions}
        status={isSelected ? 'selected' : table.status}
        onClick={() => onClick(table)}
      />
      <TableLabel
        x={dimensions.x + dimensions.width / 2}
        y={dimensions.y + dimensions.height / 2}
      >
        {table.id}
      </TableLabel>
    </>
  );
}
