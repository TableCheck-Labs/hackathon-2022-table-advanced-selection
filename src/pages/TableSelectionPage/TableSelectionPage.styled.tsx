import styled from '@emotion/styled/dist/emotion-styled.cjs';
import { Button } from '@tablecheck/tablekit-button';
import { Spacing } from '@tablecheck/tablekit-theme';
import { Typography } from '@tablecheck/tablekit-typography';

export const PanelContent = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  gap: ${Spacing.L2};
  overflow-y: auto;
  height: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

export const SeatPreview = styled.div<{ image: string }>`
  min-height: 230px;
  width: 100%;
  background-size: cover;
  background: url('${({ image }) => image}') no-repeat center center;
`;

export const SeatTitle = styled.h3`
  text-align: center;
  ${Typography.Body1};
  padding: ${Spacing.L2};
`;

export const SeatDescription = styled.div`
  ${Typography.Body2};
  padding: ${Spacing.L2};
`;

export const CloseButton = styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const ButtonWrapper = styled.div`
  padding: 0 ${Spacing.L2} ${Spacing.L2};
  width: 100%;
`;
