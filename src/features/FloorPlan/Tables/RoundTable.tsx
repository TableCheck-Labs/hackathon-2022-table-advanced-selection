import {
  RoundShape,
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
  onClick
}: {
  table: TableSchema;
  cell: Cell;
  onClick: OnTableClick;
}): JSX.Element {
  const dimensions = getRoundSideDimensions(table, cell);

  return (
    <>
      <RoundShape
        {...dimensions}
        status={table.status}
        onClick={() => onClick(table)}
        fill="black"
      />
      <TableLabel
        x={dimensions.cx}
        y={dimensions.cy}
      >
        {table.id}
      </TableLabel>
    </>
  );
}
