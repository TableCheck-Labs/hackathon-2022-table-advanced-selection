import {
  Edit,
  Event,
  Events,
  RuleCancelled,
  Share,
  Time
} from '@carbon/icons-react';
import {
  Button,
  ButtonAppearance,
  ButtonShape
} from '@tablecheck/tablekit-button';
import { ItemGroupOrientation } from '@tablecheck/tablekit-item';
import { useNavigate } from 'react-router-dom';

import {
  DescriptionBlock,
  ItemRow,
  RestaurantId,
  RestaurantLogo,
  RestaurantName,
  StyledItemGroup,
  Text,
  Title,
  TwoColumnBlock
} from 'pages/BookingConfirmationPage/bookingConfirmation.styles';
import { ContentBlock, PageWrapper } from 'pages/pages.styles';

export function BookingConfirmationPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <RestaurantLogo
        src="/static/images/restaurant_logo.png"
        alt="Logo"
      />
      <RestaurantName>Teppan Baby Shinjuku</RestaurantName>
      <ContentBlock>
        <Title textAlign="center">
          We&apos;ve successfully booked your reservation
        </Title>
        <RestaurantId>Reservation ID: HDS890B</RestaurantId>
        <StyledItemGroup
          hasIndent
          orientation={ItemGroupOrientation.Horizontal}
        >
          <Button
            appearance={ButtonAppearance.Outline}
            shape={ButtonShape.Circular}
            /* eslint-disable-next-line react/no-unstable-nested-components */
            iconBefore={() => <Share size={24} />}
          />
          <Button
            appearance={ButtonAppearance.Outline}
            shape={ButtonShape.Circular}
            /* eslint-disable-next-line react/no-unstable-nested-components */
            iconBefore={() => <Edit size={24} />}
          />
          <Button
            appearance={ButtonAppearance.Outline}
            shape={ButtonShape.Circular}
            /* eslint-disable-next-line react/no-unstable-nested-components */
            iconBefore={() => <RuleCancelled size={24} />}
          />
        </StyledItemGroup>
      </ContentBlock>
      <ContentBlock>
        <Title>Reservations details</Title>
        <ItemRow>
          <Events size={24} />
          <span>2 Adults</span>
        </ItemRow>
        <ItemRow>
          <Event size={24} />
          <span>Sat 03 Sept</span>
        </ItemRow>
        <ItemRow>
          <Time size={24} />
          <span>7:00 PM</span>
        </ItemRow>
      </ContentBlock>
      <ContentBlock isFeature>
        <TwoColumnBlock>
          <DescriptionBlock>
            <Title>Table Advance Selection</Title>
            <Text>
              Enrich dining experience by selecting your table location upfront.
            </Text>
            <Button
              onClick={() => navigate('/table-selection')}
              shape={ButtonShape.Circular}
            >
              Select Table
            </Button>
          </DescriptionBlock>
          <img
            src="/static/images/dining-table.png"
            alt="Select tables"
          />
        </TwoColumnBlock>
      </ContentBlock>
    </PageWrapper>
  );
}
