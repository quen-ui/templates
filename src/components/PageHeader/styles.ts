import styled from "styled-components";
import { Layout } from "@quen-ui/components";

export const PagedHeaderStyled = styled(Layout.Header)`
  background: ${({ theme }) => theme.colors.grayViolet[5]};
  .quen-ui__layout-header__content {
    width: 100%;
    @media screen and (max-width: 768px) {
      width: calc(100% - 64px);
      gap: 16px;
    }
  }
  @media screen and (max-width: 458px) {
    height: 88px;
  }
`;
