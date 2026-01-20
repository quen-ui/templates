import styled from "styled-components";
import { Flex, Card } from "@quen-ui/components";
import { LineChartCard, BarChartCard } from "@/components/charts";

export const DashboardContentContainerStyled = styled(Flex)`
  padding: 0 24px 24px;
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
