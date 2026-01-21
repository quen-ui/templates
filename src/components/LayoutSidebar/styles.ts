import styled from "styled-components";
import { Layout } from "@quen-ui/components";

export const LayoutSidebarStyled = styled(Layout.Sidebar)`
  height: calc(100vh - 18px);
  svg {
    color: ${({ theme }) => theme.colors.violet[5]};
    * {
      color: ${({ theme }) => theme.colors.violet[5]};
    }
  }
`;
