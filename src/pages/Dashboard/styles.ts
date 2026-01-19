import styled from "styled-components";
import {Layout, Flex, Card} from "@quen-ui/components";
import { LineChartCard, BarChartCard } from "@/components/charts";

export const DashboardPageStyled = styled.div`
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

export const DashboardContentContainerStyled = styled(Flex)`
  padding: 0 24px 24px;
`;

export const DashboardHeaderStyled = styled(Layout.Header)`
  background: ${({ theme }) => theme.colors.grayViolet[5]};
  .quen-ui__layout-header__content {
    width: 100%;
    @media screen and (max-width: 768px){
      width: calc(100% - 64px);
      gap: 16px;
    }
  }
  @media screen and (max-width: 458px){
    height: 88px;
  }
`;

export const BarChartCardStyled = styled(BarChartCard)`
  flex: 1;
`;

export const LineChartCardStyled = styled(LineChartCard)`
  flex: 1;
`;

export const CardTableStyled = styled(Card)`
  width: 100%;
`;
