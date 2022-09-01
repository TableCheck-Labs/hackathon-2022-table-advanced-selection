import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { CLASSIC_COLORS, DARK_COLORS } from '@tablecheck/tablekit-theme';

import { getStatusColor } from 'features/FloorPlan/Tables/table.helpers';
import { TableSchema } from 'features/FloorPlan/Tables/tables.types';
import { getContrastingColor } from 'shared/helpers/colors';

export const TableLabel = styled.text<{ status: TableSchema['status'] }>`
  user-select: none;
  fill: ${({ theme: { isDark }, status }) =>
    getContrastingColor(
      getStatusColor(status, isDark),
      CLASSIC_COLORS.text,
      DARK_COLORS.text
    )};
  pointer-events: none;
`;

TableLabel.defaultProps = {
  alignmentBaseline: 'central',
  textAnchor: 'middle'
};

const getShapeColors = ({
  theme: { isDark, colors },
  status
}: {
  theme: Theme;
  status: TableSchema['status'];
}) => css`
  fill: ${getStatusColor(status, isDark)};
  stroke-width: 6;

  ${status !== 'booked'
    ? css`
        cursor: pointer;

        &:hover {
          fill: ${colors.primaryHover};
          stroke: ${colors.focusOutline};
        }
      `
    : ''}
`;

export const RoundShape = styled.circle<{ status: TableSchema['status'] }>`
  ${getShapeColors}
`;

export const SquareShape = styled.rect<{ status: TableSchema['status'] }>`
  ${getShapeColors}
`;

export const Seat = styled.rect<{ status: TableSchema['status'] }>`
  fill: ${({ theme: { isDark }, status }) => getStatusColor(status, isDark)};
  opacity: 0.8;
`;
