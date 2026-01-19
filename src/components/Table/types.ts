
export interface IColumnTable {
  title: string;
  dataIndex: string;
}

export interface ITableProps {
  columns: IColumnTable[];
  data: Array<Record<string, any>>;
}
