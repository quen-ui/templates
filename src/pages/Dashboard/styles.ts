import styled from "styled-components";

export const DashboardPageStyled = styled.div`
  background: ${({ theme }) => theme.colors.grayViolet[2]};
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const DashboardContentContainerStyled = styled.div`
  padding: 24px;
`
