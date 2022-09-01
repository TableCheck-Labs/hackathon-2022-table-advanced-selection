export const TableStatus = {
  Available: 'available',
  Booked: 'booked',
  Selected: 'selected',
  Extra: 'extra'
} as const;

export interface TableSchema {
  id: string;
  shape: 'square' | 'round';
  status: typeof TableStatus[keyof typeof TableStatus];
  row: number;
  column: number;
  size: 's' | 'm' | 'l';
}

export type OnTableClick = (table: TableSchema) => void;
