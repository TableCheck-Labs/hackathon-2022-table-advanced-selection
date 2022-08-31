import { RoundTable } from 'features/FloorPlan/Tables/RoundTable';
import { SquareTable } from 'features/FloorPlan/Tables/SquareTable';
import {
  OnTableClick,
  TableSchema
} from 'features/FloorPlan/Tables/tables.types';
import { Cell } from 'features/FloorPlan/floor.types';

export function Table({
  table,
  cell,
  onClick
}: {
  table: TableSchema;
  cell: Cell;
  onClick: OnTableClick;
}): JSX.Element | null {
  if (table.shape === 'square') {
    return (
      <SquareTable
        table={table}
        cell={cell}
        onClick={onClick}
      />
    );
  }
  if (table.shape === 'round') {
    return (
      <RoundTable
        table={table}
        cell={cell}
        onClick={onClick}
      />
    );
  }
  return null;
}
