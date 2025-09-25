import styled from "styled-components";
import { Flex } from "@quen-ui/components";
import { rgba } from "polished";

export const FooterWrapper = styled(Flex)`
  position: absolute;
  bottom: 0;
  background: ${({ theme }) => rgba(theme.colors.grayViolet[9], 0.5)};
  padding: 8px;
  width: calc(100% - 16px);
`;
