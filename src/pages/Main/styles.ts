import styled from "styled-components";
import { Flex } from "@quen-ui/components";

export const MainPageStyled = styled(Flex)`
  background: ${({ theme }) => theme.colors.grayViolet[2]};
  color: ${({ theme }) => theme.colors.violet[7]};
  height: calc(100vh - 88px);
  gap: 40px;
  overflow-y: auto;
  overflow-x: hidden;
  
  padding: 2rem;
  
  .quen-ui__title, .quen-ui__text {
    color: ${({ theme }) => theme.colors.violet[7]};
  }
  
  .main-button {
    width: 25%;
    min-height: 3rem;
  }
`;

export const MainPageFooterStyled = styled(Flex)`
  background: ${({ theme }) => theme.colors.grayViolet[9]};
  padding: 2rem;
  width: 100%;

  .quen-ui__title {
    color: ${({ theme }) => theme.colors.gray[9]};
  }
`;
