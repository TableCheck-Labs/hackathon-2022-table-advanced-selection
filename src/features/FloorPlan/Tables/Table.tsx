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
  onClick,
  isSelected
}: {
  table: TableSchema;
  cell: Cell;
  onClick: OnTableClick;
  isSelected: boolean;
}): JSX.Element | null {
  if (table.shape === 'square') {
    return (
      <SquareTable
        isSelected={isSelected}
        table={table}
        cell={cell}
        onClick={onClick}
      />
    );
  }
  if (table.shape === 'round') {
    return (
      <RoundTable
        isSelected={isSelected}
        table={table}
        cell={cell}
        onClick={onClick}
      />
    );
  }
  return null;
}
