import { useTheme } from '@emotion/react';
import styled from '@emotion/styled/dist/emotion-styled.cjs';
import { Spacing } from '@tablecheck/tablekit-theme';
import { useTranslation } from 'react-i18next';

import { getStatusColor } from 'features/FloorPlan/Tables/table.helpers';
import { TableStatus } from 'features/FloorPlan/Tables/tables.types';

const StatusBlockContainer = styled.div`
  flex: 0;
  padding: ${Spacing.L4} ${Spacing.L2};
`;

const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${Spacing.L2};
`;

const StatusName = styled.div`
  flex: 1;
`;

const ColoredCircle = styled.div<{ fill: string }>`
  border-radius: 4px;
  width: 16px;
  height: 16px;
  background-color: ${({ fill }) => fill};
`;

export function StatusBlock(): JSX.Element {
  const { isDark } = useTheme();
  const [t] = useTranslation();
  return (
    <StatusBlockContainer>
      {Object.values(TableStatus).map((status) => (
        <StatusContainer key={status}>
          <ColoredCircle fill={getStatusColor(status, isDark)} />
          <StatusName>{t(`tables:statuses.${status}`)}</StatusName>
        </StatusContainer>
      ))}
    </StatusBlockContainer>
  );
}
