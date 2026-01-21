import styled from "styled-components";
import { Layout } from "@quen-ui/components";

export const LayoutStyled = styled(Layout)`
  grid-template-areas:
        "slider header"
        "slider content"
        "slider footer";
`;

export const LayoutContentStyled = styled(Layout.Content)`
  height: calc(100vh - 112px)!important;
  background: ${({ theme }) => theme.colors.grayViolet[2]};
`;

export const PageWrapperStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 1.5rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  
  @media screen and (max-width: 1041px){
    .card-mobile {
      width: 100%;
    }
  }
`;
