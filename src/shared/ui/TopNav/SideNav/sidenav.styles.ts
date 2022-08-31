import styled from '@emotion/styled';
import { ItemGroup } from '@tablecheck/tablekit-item';
import { Panel } from '@tablecheck/tablekit-panel';
import { FontWeight, Spacing } from '@tablecheck/tablekit-theme';
import { Typography } from '@tablecheck/tablekit-typography';

export const SideNavPanel = styled(Panel)`
  top: 52px;
  height: calc(100% - 52px);
`;

const avatarSize = 128;

export const SideNavContent = styled(ItemGroup)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${Spacing.L3};
`;

export const AvatarWrapper = styled.div`
  position: relative;
  width: ${avatarSize}px;
  height: ${avatarSize}px;
  margin: 0 auto ${Spacing.L3} auto;
`;

export const UserDetails = styled.div`
  margin-bottom: ${Spacing.L6};
`;

export const UserDetailsHeader = styled.h2`
  ${Typography.Heading4};
  text-align: center;
  font-weight: ${FontWeight.Bold};
  color: ${({ theme }) => theme.colors.text};
`;
