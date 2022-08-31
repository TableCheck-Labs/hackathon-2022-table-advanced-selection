import { Button } from '@tablecheck/tablekit-button';
import { useNavigate } from 'react-router-dom';

import { PageWrapper } from 'pages/pages.styles';

export function BookingReviewPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <h2>Booking Review Page</h2>
      <Button onClick={() => navigate('/table-selection')}>
        Select tables
      </Button>
    </PageWrapper>
  );
}
