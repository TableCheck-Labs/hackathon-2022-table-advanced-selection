import { TableSchema } from 'features/FloorPlan/Tables/tables.types';

export const tables: TableSchema[] = [
  {
    id: '07',
    size: 'm',
    shape: 'square',
    row: 1,
    column: 1,
    status: 'available'
  },
  {
    id: '08',
    size: 'm',
    shape: 'square',
    row: 3,
    column: 1,
    status: 'available'
  },
  {
    id: '09',
    size: 'm',
    shape: 'square',
    row: 5,
    column: 1,
    status: 'available'
  },
  {
    id: '10',
    size: 'l',
    shape: 'square',
    row: 7,
    column: 1,
    status: 'extra'
  },
  {
    id: '11',
    size: 'm',
    shape: 'round',
    row: 2,
    column: 4,
    status: 'booked'
  },
  {
    id: '12',
    size: 'm',
    shape: 'round',
    row: 5,
    column: 4,
    status: 'booked'
  },
  {
    id: '01',
    size: 's',
    shape: 'square',
    row: 1,
    column: 8,
    status: 'available'
  },
  {
    id: '02',
    size: 's',
    shape: 'square',
    row: 2,
    column: 8,
    status: 'available'
  },
  {
    id: '03',
    size: 's',
    shape: 'square',
    row: 4,
    column: 8,
    status: 'available'
  },
  {
    id: '04',
    size: 's',
    shape: 'square',
    row: 5,
    column: 8,
    status: 'available'
  },
  {
    id: '05',
    size: 's',
    shape: 'square',
    row: 7,
    column: 8,
    status: 'selected'
  },
  {
    id: '06',
    size: 's',
    shape: 'square',
    row: 8,
    column: 8,
    status: 'available'
  }
];
