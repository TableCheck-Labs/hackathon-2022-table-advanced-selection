import styled from '@emotion/styled';
import { ItemGroup, ItemGroupContent } from '@tablecheck/tablekit-item';
import { Spacing } from '@tablecheck/tablekit-theme';
import { Typography } from '@tablecheck/tablekit-typography';

export const RestaurantLogo = styled.img`
  height: 90px;
  width: 90px;
`;

export const RestaurantName = styled.h4`
  ${Typography.Heading2};
  text-align: center;
`;

export const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: ${Spacing.L2};

    &:last-child {
      margin: 0;
    }
  }
`;

export const Title = styled.span<{ textAlign?: string }>`
  ${Typography.Label1};
  text-align: ${({ textAlign }) => textAlign || 'unset'};
`;

export const Text = styled.p`
  ${Typography.Body2}
`;

export const RestaurantId = styled.span`
  ${Typography.Body2};
  text-align: center;
  color: ${({ theme: { colors } }) => colors.textSubtle};
`;

export const ItemRow = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;

  & > span {
    margin-left: ${Spacing.L2};
    ${Typography.Body1};
  }
`;

export const StyledItemGroup = styled(ItemGroup)`
  ${ItemGroupContent} > * {
    margin-right: ${Spacing.L6} !important;

    &:last-child {
      margin: 0 !important;
    }
  }
`;

export const TwoColumnBlock = styled.div`
  display: flex;

  & > div {
    margin-right: ${Spacing.L4};
  }

  & > img {
    width: 40%;
  }
`;
