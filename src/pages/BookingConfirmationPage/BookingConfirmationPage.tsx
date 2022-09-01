import {
  Edit,
  Event,
  Events,
  RuleCancelled,
  Share,
  Time
} from '@carbon/icons-react';
import { useTheme } from '@emotion/react';
import {
  Button,
  ButtonAppearance,
  ButtonShape
} from '@tablecheck/tablekit-button';
import { ItemGroupOrientation } from '@tablecheck/tablekit-item';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import diningTableDarkMode from 'assets/images/dining-table-dark-mode.svg';
import diningTableLightMode from 'assets/images/dining-table-light-mode.svg';
import restaurantLogo from 'assets/images/restaurant_logo.png';
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
  const [t] = useTranslation();
  const { isDark } = useTheme();
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <RestaurantLogo
        src={restaurantLogo}
        alt="Logo"
      />
      <RestaurantName>
        {t('pages:booking_confirmation.restaurant_name')}
      </RestaurantName>
      <ContentBlock>
        <Title textAlign="center">
          {t('pages:booking_confirmation.reservation_success')}
        </Title>
        <RestaurantId>
          {t('pages:booking_confirmation.reservation_id')}
        </RestaurantId>
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
        <Title>{t('pages:booking_confirmation.reservation_details')}</Title>
        <ItemRow>
          <Events size={24} />
          <span>{t('pages:booking_confirmation.reservation_party_size')}</span>
        </ItemRow>
        <ItemRow>
          <Event size={24} />
          <span>{t('pages:booking_confirmation.reservation_date')}</span>
        </ItemRow>
        <ItemRow>
          <Time size={24} />
          <span>{t('pages:booking_confirmation.reservation_time')}</span>
        </ItemRow>
      </ContentBlock>
      <ContentBlock isFeature>
        <TwoColumnBlock>
          <DescriptionBlock>
            <Title>
              {t('pages:booking_confirmation.reservation_selection_title')}
            </Title>
            <Text>
              {t(
                'pages:booking_confirmation.reservation_selection_description'
              )}
            </Text>
            <Button
              onClick={() => navigate('/table-selection')}
              shape={ButtonShape.Circular}
            >
              {t('actions:select_table')}
            </Button>
          </DescriptionBlock>
          <img
            src={isDark ? diningTableDarkMode : diningTableLightMode}
            alt="Select tables"
          />
        </TwoColumnBlock>
      </ContentBlock>
    </PageWrapper>
  );
}
