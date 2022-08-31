import styled from '@emotion/styled';
import { Spacing } from '@tablecheck/tablekit-theme';

export const ScreenContainer = styled.div`
  display: grid;
  grid-template-areas: 'topnav topnav' 'content content';
  grid-template-rows: auto 1fr;
  grid-template-columns: auto 1fr;
  height: 100vh;
`;

export const PageContentContainer = styled.div`
  grid-area: content;
  overflow-y: auto;
  padding: ${Spacing.L2};
`;
