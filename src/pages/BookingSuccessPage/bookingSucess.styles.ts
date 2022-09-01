import styled from '@emotion/styled';
import { Typography } from '@tablecheck/tablekit-typography';

import { PageWrapper } from 'pages/pages.styles';

export const SuccessImage = styled.img`
  width: 50%;
  max-width: 400px;
`;

export const StyledPageWrapper = styled(PageWrapper)`
  justify-content: center;
  align-items: center;
`;

export const Title = styled.span<{ textAlign?: string }>`
  ${Typography.Heading2};
  text-align: ${({ textAlign }) => textAlign || 'unset'};
`;

export const Description = styled.span<{ textAlign?: string }>`
  ${Typography.Body1};
  text-align: ${({ textAlign }) => textAlign || 'unset'};
`;
