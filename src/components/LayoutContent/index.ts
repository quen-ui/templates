import styled from "styled-components";
import { Layout } from "@quen-ui/components";

export const LayoutContentStyled = styled(Layout.Content)`
  height: calc(100vh - 56px)!important;
`;

export const PageWrapperStyled = styled.div`
  background: ${({ theme }) => theme.colors.grayViolet[2]};
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow: auto;
  
  @media screen and (max-width: 1041px){
    .card-mobile {
      width: 100%;
    }
  }
`;
