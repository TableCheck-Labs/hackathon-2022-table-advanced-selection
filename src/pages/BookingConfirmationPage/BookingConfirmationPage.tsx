import { Button } from '@tablecheck/tablekit-button';
import { useNavigate } from 'react-router-dom';

import { PageWrapper } from 'pages/pages.styles';

export function BookingConfirmationPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <h2>Booking Confirmation Page</h2>
      <Button onClick={() => navigate('/booking-review')}>
        Review booking
      </Button>
    </PageWrapper>
  );
}
