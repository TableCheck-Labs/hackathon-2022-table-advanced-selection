import styled from '@emotion/styled';
import { FontWeight, Spacing } from '@tablecheck/tablekit-theme';
import { Typography } from '@tablecheck/tablekit-typography';

import { PageWrapper } from 'pages/pages.styles';

export const Row = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  justify-content: space-between;

  & > div {
    width: 45%;
  }

  & > * {
    margin-bottom: ${Spacing.L2};

    &:last-child {
      margin: 0;
    }
  }
`;

export const DetailWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  max-width: 400px;

  & > * {
    margin-bottom: ${Spacing.L2};

    &:last-child {
      margin: 0;
    }
  }
`;

export const Title = styled.span<{ textAlign?: string }>`
  ${Typography.Heading2};
  text-align: ${({ textAlign }) => textAlign || 'unset'};
`;

export const Divider = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid ${({ theme: { colors } }) => colors.border};
`;

export const ItemRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const ItemValue = styled.span<{ fontWeight?: FontWeight }>`
  ${Typography.Body1};
  font-weight: ${({ fontWeight }) => fontWeight || FontWeight.Regular};
`;

export const SubItemValue = styled.span<{ fontWeight?: FontWeight }>`
  ${Typography.Body2};
  color: ${({ theme: { colors } }) => colors.textSubtle};
`;

export const StyledPageWrapper = styled(PageWrapper)`
  justify-content: space-between;

  & > div {
    display: flex;
    width: 100%;
    max-width: 400px;
    align-items: center;
    flex-direction: column;

    & > * {
      margin-bottom: ${Spacing.L2};

      &:last-child {
        margin: 0;
      }
    }
  }
`;
