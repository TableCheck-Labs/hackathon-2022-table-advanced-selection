import * as React from 'react';
import { useTranslation } from 'react-i18next';

import competedBooking from 'assets/images/completed_booking.svg';
import {
  Description,
  StyledPageWrapper,
  SuccessImage,
  Title
} from 'pages/BookingSuccessPage/bookingSucess.styles';

export function BookingSuccessPage(): JSX.Element {
  const [t] = useTranslation();

  return (
    <StyledPageWrapper>
      <SuccessImage
        src={competedBooking}
        alt="Success"
      />
      <Title>{t('pages:booking_success.title')}</Title>
      <Description>{t('pages:booking_success.description')}</Description>
    </StyledPageWrapper>
  );
}
