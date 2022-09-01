export interface TableSchema {
  id: string;
  shape: 'square' | 'round';
  status: 'available' | 'booked' | 'selected' | 'extra';
  row: number;
  column: number;
  size: 's' | 'm' | 'l';
}

export type OnTableClick = (table: TableSchema) => void;
