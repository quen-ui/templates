import styled from "styled-components";
import { Flex } from "@quen-ui/components";

export const SignUpPageStyled = styled.div`
  display: flex;
  flex-flow: row wrap;
  min-height: 100vh;
  overflow: hidden;
  
  .center-text {
    text-align: center;
  }
  
  .field {
    width: 100%;
  }
`;

export const LogoContainer = styled(Flex)`
  background: ${({ theme }) => theme.colors.violet[9]};
  flex: 0 0 50%;
  max-width: calc(50% - 32px);
  padding: 16px;
  
  @media (max-width: 800px) {
    flex: 0 0 100%;
    max-width: calc(100% - 32px);
  }
  
  * {
    color: white;
  }
`;

export const SignUpFormStyled = styled(Flex)`
  flex: 0 0 50%;
  max-width: calc(50% - 32px);
  padding: 16px;

  @media (max-width: 800px) {
    flex: 0 0 100%;
    max-width: calc(100% - 32px);
  
`;
