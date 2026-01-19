import { type CSSProperties, type ReactNode } from "react";
import {
  LineChart as LineChartComponent,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { Card, Select, type ISelectDefaultItem } from "@quen-ui/components";

interface ILineChartCardProps {
  data: Array<Record<string, number | string> & { name: string }>;
  color?: string[] | string;
  className?: string;
  style?: CSSProperties;
  title: ReactNode;
  classNameChart?: string;
  itemsSelect?: Array<ISelectDefaultItem>;
  onChangeSelect?: (value: any) => void;
}

const LineChartCard = ({
  data,
  color,
  className,
  style,
  title,
  classNameChart,
  itemsSelect,
  onChangeSelect
}: ILineChartCardProps) => {
  return (
    <Card
      shadow
      title={title}
      style={{ maxWidth: "100%" }}
      className={className}
      extra={
        itemsSelect ? (
          <Select
            onChangeReturnValue="value"
            items={itemsSelect}
            multi={false}
            size="s"
            onChange={onChangeSelect}
          />
        ) : undefined
      }>
      <LineChartComponent
        style={style}
        className={classNameChart}
        responsive
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis width="auto" />
        <Tooltip />
        <Legend />
        {Object.keys(data?.[0] ?? {})
          .filter((key) => key !== "name")
          .map((key, index) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke={
                Array.isArray(color) ? (color?.[index] ?? color[0]) : color
              }
              activeDot={{ r: 8 }}
            />
          ))}
      </LineChartComponent>
    </Card>
  );
};

export default LineChartCard;
