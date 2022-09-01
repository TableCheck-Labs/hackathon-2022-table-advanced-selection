import { CLASSIC_COLORS, DARK_COLORS } from '@tablecheck/tablekit-theme';

import { TableSchema } from 'features/FloorPlan/Tables/tables.types';
import { Cell } from 'features/FloorPlan/floor.types';

const getSideMultiplier = (size: TableSchema['size']): number => {
  switch (size) {
    case 'l':
      return 3;
    case 'm':
      return 2;
    default:
      return 1;
  }
};

export const getSquareSideDimensions = (
  table: TableSchema,
  cell: Cell
): {
  height: number;
  width: number;
  rx: number;
  ry: number;
  x: number;
  y: number;
} => {
  const multiplier = getSideMultiplier(table.size);
  const maxSide =
    (cell.width > cell.height ? cell.height : cell.width) * multiplier;
  const side = maxSide * 0.8;

  return {
    height: side,
    width: side,
    rx: side * 0.05,
    ry: side * 0.05,
    x: (table.column - 1) * cell.width + (cell.width * multiplier - side) / 2,
    y: (table.row - 1) * cell.height + (cell.height * multiplier - side) / 2
  };
};

export const getRoundSideDimensions = (
  table: TableSchema,
  cell: Cell
): {
  r: number;
  cx: number;
  cy: number;
} => {
  const multiplier = getSideMultiplier(table.size);
  const radius =
    ((cell.width > cell.height ? cell.height : cell.width) * multiplier) / 2 -
    10;

  return {
    r: radius,
    cx:
      (table.column - 1) * cell.width +
      radius / 2 +
      (cell.width * multiplier - radius) / 2,
    cy:
      (table.row - 1) * cell.height +
      radius / 2 +
      (cell.height * multiplier - radius) / 2
  };
};

export const getStatusColor = (
  status: TableSchema['status'],
  isDark: boolean
): string => {
  switch (status) {
    case 'available':
      return isDark ? '#DDD' : '#999';
    case 'booked':
      return isDark ? '#E4E4E4' : '#E4E4E4';
    case 'extra':
      return isDark ? '#3C3C3C' : '#3C3C3C';
    default:
      return isDark ? DARK_COLORS.primary : CLASSIC_COLORS.primary;
  }
};
