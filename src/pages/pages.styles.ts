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
  border: ${({ isFeature, theme: { colors } }) =>
    isFeature ? 'none;' : `1px solid ${colors.border};`};
  background: ${({ isFeature, theme: { isDark } }) =>
    // eslint-disable-next-line no-nested-ternary
    isFeature
      ? isDark
        ? 'linear-gradient(#9a4fff, #6c289a);'
        : 'linear-gradient(#e0ccfb, #c87bfd);'
      : 'none;'};
  filter: ${({ isFeature }) => (isFeature ? 'none;' : 'blur(2px);')};

  & > * {
    margin-bottom: ${Spacing.L2};

    &:last-child {
      margin: 0;
    }
  }
`;
