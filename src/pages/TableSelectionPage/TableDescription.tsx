import styled from '@emotion/styled/dist/emotion-styled.cjs';
import { Button } from '@tablecheck/tablekit-button';
import { Spacing } from '@tablecheck/tablekit-theme';
import { Typography } from '@tablecheck/tablekit-typography';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { TableSchema } from 'features/FloorPlan/Tables/tables.types';

const PanelContent = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  gap: ${Spacing.L2};
  overflow-y: auto;
  height: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const SeatPreview = styled.div<{ image: string }>`
  min-height: 230px;
  width: 100%;
  background-size: cover;
  background: url('${({ image }) => image}') no-repeat center center;
`;

const SeatTitle = styled.h3`
  text-align: center;
  ${Typography.Body1};
  padding: ${Spacing.L2};
`;

const SeatDescription = styled.div`
  ${Typography.Body2};
  padding: ${Spacing.L2};
`;

const ButtonWrapper = styled.div`
  padding: 0 ${Spacing.L2} ${Spacing.L2};
  width: 100%;
`;

export function TableDescription({
  table
}: {
  table: TableSchema;
}): JSX.Element {
  const [t] = useTranslation();
  const navigate = useNavigate();
  return (
    <PanelContent>
      <div>
        <SeatPreview image={table.photo} />
        <SeatTitle>{table.title}</SeatTitle>
        <SeatDescription>{table.description}</SeatDescription>
      </div>
      <ButtonWrapper>
        <Button
          shouldFitContainer
          isDisabled={table.status === 'booked'}
          onClick={() => navigate(`/payment-confirmation/${table.id}`)}
        >
          {t('actions:select_table_and_pay', { sum: table.price })}
        </Button>
      </ButtonWrapper>
    </PanelContent>
  );
}
