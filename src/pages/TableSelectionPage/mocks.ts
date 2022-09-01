import img1 from 'assets/table_1.png';
import img2 from 'assets/table_2.png';
import img3 from 'assets/table_3.png';
import { TableSchema } from 'features/FloorPlan/Tables/tables.types';

export const tables: TableSchema[] = [
  {
    id: '07',
    size: 'm',
    price: 4000,
    shape: 'square',
    row: 1,
    column: 1,
    status: 'available',
    photo: img1,
    title: 'Two to Four Person Tables',
    description:
      'The round ones are available in 36-inch diameters and can comfortably accommodate two to four diners. You can opt for stainless steel, aluminum, or cast iron bases.'
  },
  {
    id: '08',
    price: 4000,
    size: 'm',
    shape: 'square',
    row: 3,
    column: 1,
    status: 'available',
    photo: img1,
    title: 'Two to Four Person Tables',
    description:
      'The round ones are available in 36-inch diameters and can comfortably accommodate two to four diners. You can opt for stainless steel, aluminum, or cast iron bases.'
  },
  {
    id: '09',
    size: 'm',
    price: 4000,
    shape: 'square',
    row: 5,
    column: 1,
    status: 'available',
    photo: img1,
    title: 'Two to Four Person Tables',
    description:
      'The round ones are available in 36-inch diameters and can comfortably accommodate two to four diners. You can opt for stainless steel, aluminum, or cast iron bases.'
  },
  {
    id: '10',
    price: 8000,
    size: 'l',
    shape: 'square',
    row: 7,
    column: 1,
    status: 'extra',
    photo: img2,
    title: 'Private Room',
    description:
      'Tucked away in the quiet corner area. This intimate table offers the chance to enjoy the food while also having a conversation.'
  },
  {
    id: '11',
    price: 6000,
    size: 'l',
    shape: 'round',
    row: 2,
    column: 4,
    status: 'booked',
    photo: img3,
    title: 'Family Dining Tables',
    description:
      'The large dining tables that can comfortably accommodate eight to ten people are installed in banquets and party halls.'
  },
  {
    id: '12',
    size: 'm',
    price: 6000,
    shape: 'round',
    row: 5,
    column: 4,
    status: 'booked',
    photo: img3,
    title: 'Family Dining Tables',
    description:
      'The large dining tables that can comfortably accommodate eight to ten people are installed in banquets and party halls.'
  },
  {
    id: '01',
    price: 1000,
    size: 's',
    shape: 'square',
    row: 1,
    column: 8,
    status: 'available',
    photo: img1,
    title: 'Bar Height Tables',
    description:
      'To create a high top table, the top is fitted to a 41-inch base. A footrest is often installed at the bottom. In most cases, bar stools are used for this kind of table.'
  },
  {
    id: '02',
    price: 1000,
    size: 's',
    shape: 'square',
    row: 2,
    column: 8,
    status: 'available',
    photo: img1,
    title: 'Bar Height Tables',
    description:
      'To create a high top table, the top is fitted to a 41-inch base. A footrest is often installed at the bottom. In most cases, bar stools are used for this kind of table.'
  },
  {
    id: '03',
    size: 's',
    price: 1000,
    shape: 'square',
    row: 4,
    column: 8,
    status: 'available',
    photo: img1,
    title: 'Bar Height Tables',
    description:
      'To create a high top table, the top is fitted to a 41-inch base. A footrest is often installed at the bottom. In most cases, bar stools are used for this kind of table.'
  },
  {
    id: '04',
    size: 's',
    price: 1000,
    shape: 'square',
    row: 5,
    column: 8,
    status: 'available',
    photo: img1,
    title: 'Bar Height Tables',
    description:
      'To create a high top table, the top is fitted to a 41-inch base. A footrest is often installed at the bottom. In most cases, bar stools are used for this kind of table.'
  },

  {
    id: '05',
    price: 1000,
    size: 's',
    shape: 'square',
    row: 7,
    column: 8,
    status: 'available',
    photo: img1,
    title: 'Bar Height Tables',
    description:
      'To create a high top table, the top is fitted to a 41-inch base. A footrest is often installed at the bottom. In most cases, bar stools are used for this kind of table.'
  },

  {
    id: '06',
    price: 1000,
    size: 's',
    shape: 'square',
    row: 8,
    column: 8,
    status: 'available',
    photo: img1,
    title: 'Bar Height Tables',
    description:
      'To create a high top table, the top is fitted to a 41-inch base. A footrest is often installed at the bottom. In most cases, bar stools are used for this kind of table.'
  }
];
