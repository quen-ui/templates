import styled from "styled-components";
import { Flex, Card } from "@quen-ui/components";

export const MainPageStyled = styled(Flex)`
  background: ${({ theme }) => theme.colors.grayViolet[1]};
  color: ${({ theme }) => theme.colors.gray[9]};
  height: 100vh;
  gap: 40px;
  overflow: auto;
  
  .quen-ui__title {
    color: ${({ theme }) => theme.colors.violet[9]};
  }
  
  .quen-ui__text {
    color: ${({ theme }) => theme.colors.gray[9]};
  }

  .main-button {
    width: 200px;
  }
  
  
`;

export const MainPageFooterStyled = styled(Flex)`
  width: 100%;

  .quen-ui__title {
    color: ${({ theme }) => theme.colors.gray[9]};
  }
`;

export const CardTestimonialStyled = styled(Card)`
  max-width: 400px;
`;

export const MainPageFooterDescriptionStyled = styled(Flex)`
  padding: 2rem;
  background: ${({ theme }) => theme.colors.grayViolet[5]};
  .quen-ui__text {
    color: ${({ theme }) => theme.colors.violet[7]};
  }

  .quen-ui__title {
    color: ${({ theme }) => theme.colors.violet[9]};
  }
`;

export const MainPageFooterNavigationStyled = styled(Flex)`
  background: ${({ theme }) => theme.colors.violet[9]};
  padding: 2rem;

  .quen-ui__title, .quen-ui__text {
    color: white;
  }
  
  .footer__content {
    width: 100%;
  }
  
  a {
    color: white;
    padding-left: 0;
  }
`;
