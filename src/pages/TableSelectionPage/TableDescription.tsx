import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import {
  Button,
  ButtonAppearance,
  ButtonColor,
  ButtonShape
} from '@tablecheck/tablekit-button';
import { Icon } from '@tablecheck/tablekit-icon';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { TableSchema } from 'features/FloorPlan/Tables/tables.types';
import {
  ButtonWrapper,
  CloseButton,
  PanelContent,
  SeatDescription,
  SeatPreview,
  SeatTitle
} from 'pages/TableSelectionPage/TableSelectionPage.styled';

export function TableDescription({
  table,
  onClose
}: {
  onClose: () => void;
  table: TableSchema;
}): JSX.Element {
  const [t] = useTranslation();
  const navigate = useNavigate();
  return (
    <PanelContent>
      <CloseButton
        onClick={onClose}
        appearance={ButtonAppearance.Subtle}
        color={ButtonColor.Ghost}
        shape={ButtonShape.Circular}
        iconBefore={<Icon icon={faTimes} />}
      />
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
