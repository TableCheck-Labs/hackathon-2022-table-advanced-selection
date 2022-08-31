import { Button } from '@tablecheck/tablekit-button';
import { useNavigate } from 'react-router-dom';

import { FloorPlan } from 'features/FloorPlan/FloorPlan';
import { PageWrapper } from 'pages/pages.styles';

export function TableSelectionPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <FloorPlan
        onTableClick={(table) => console.error(JSON.stringify(table))}
      />
      <Button onClick={() => navigate('/payment-confirmation')}>
        Checkout
      </Button>
    </PageWrapper>
  );
}
