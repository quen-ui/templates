import styled from "styled-components";

export const TableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
  line-height: 1.55;
  margin-top: 16px;

  thead > tr > th {
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayViolet[9]};
    padding-bottom: ${({ theme }) => theme.space.s};
    padding-left: ${({ theme }) => theme.space.xs};
  }

  tbody > tr > td {
    padding-top: ${({ theme }) => theme.space.s};
    padding-bottom: ${({ theme }) => theme.space.s};
    padding-left: ${({ theme }) => theme.space.xs};
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayViolet[9]};
  }
`;
