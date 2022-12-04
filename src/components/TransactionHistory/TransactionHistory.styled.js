import styled from "styled-components";

export const Table = styled.table`
  width: 300px;
  text-align: center;
  background-color: #ffffff;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  &:nth-child(2n + 1) {
    background-color: #f3d788;
  }
`;

export const TableHeaderCell = styled.th`
  background-color: #6f6fff;
`;

export const TableBodyCell = styled.td`
  text-transform: capitalize;
`;
