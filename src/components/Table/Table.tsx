import { Title } from "@quen-ui/components";
import type { ITableProps } from "./types";
import { TableStyled } from "./styles";

const Table = ({ columns, data }: ITableProps) => {
  return (
    <TableStyled>
      <thead>
        <tr>
          {columns.map((col) => (
            <Title size="xs" as="th" key={col.dataIndex}>
              {col.title}
            </Title>
          ))}
        </tr>
      </thead>
      <tbody>
      {data.map((v) => (
        <tr key={Object.values(v).toString()}>
          {columns.map((col) => (
            <td key={v[col.dataIndex]}>{v[col.dataIndex]}</td>
          ))}
        </tr>
      ))}
      </tbody>
    </TableStyled>
  );
};

export default Table;
