import styled from '@emotion/styled';
import { Item } from '@tablecheck/tablekit-item';

export const RightContentBoxContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
`;

export const TopNavItem = styled(Item.withComponent('button'))`
  height: 100%;
  width: fit-content;
  box-shadow: none;
  &,
  > * {
    line-height: 0.8;
  }
`;
