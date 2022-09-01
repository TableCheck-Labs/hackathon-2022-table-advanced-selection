import styled from '@emotion/styled';
import { Spacing } from '@tablecheck/tablekit-theme';

export const PageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  & > * {
    margin-bottom: ${Spacing.L2};

    &:last-child {
      margin: 0;
    }
  }
`;

export const ContentBlock = styled.div<{ isFeature?: boolean }>`
  display: flex;
  width: 100%;
  max-width: 400px;
  padding: ${Spacing.L4} ${Spacing.L6};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme: { colors } }) => colors.border};
  filter: ${({ isFeature }) => (isFeature ? 'none;' : 'blur(2px);')};

  & > * {
    margin-bottom: ${Spacing.L2};

    &:last-child {
      margin: 0;
    }
  }
`;
