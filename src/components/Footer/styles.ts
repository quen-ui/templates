import styled from "styled-components";
import { Flex } from "@quen-ui/components";
import { rgba } from "polished";

export const FooterWrapper = styled(Flex)`
  background: ${({ theme }) => rgba(theme.colors.grayViolet[9], 0.5)};
  padding: 8px;
  width: 100%;
`;
