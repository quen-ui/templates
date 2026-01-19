import styled from "styled-components";
import { Layout } from "@quen-ui/components";

export const LayoutSidebarStyled = styled(Layout.Sidebar)`
  height: 100vh;
  svg {
    color: ${({ theme }) => theme.colors.violet[5]};
    * {
      color: ${({ theme }) => theme.colors.violet[5]};
    }
  }
`;
