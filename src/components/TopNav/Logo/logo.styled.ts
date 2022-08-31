import styled from '@emotion/styled';
import { Spacing } from '@tablecheck/tablekit-theme';

export const LogoWrapper = styled.div`
  display: grid;
  padding: ${Spacing.L2};
  grid-template-columns: auto auto;
  grid-column-gap: ${Spacing.L2};
  height: 100%;
  width: fit-content;
  align-content: center;
`;
