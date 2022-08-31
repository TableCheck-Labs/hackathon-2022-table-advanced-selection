export interface TableSchema {
  id: number;
  shape: 'square' | 'round';
  status: 'available' | 'booked';
  row: number;
  column: number;
  size: 's' | 'm' | 'l';
}

export type OnTableClick = (table: TableSchema) => void;
