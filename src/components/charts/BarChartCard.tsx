import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { Card, type ISelectDefaultItem, Select } from "@quen-ui/components";
import type { CSSProperties, ReactNode } from "react";

interface IBarChartCardProps {
  data: Array<Record<string, number | string> & { name: string }>;
  color?: string[] | string;
  className?: string;
  style?: CSSProperties;
  title: ReactNode;
  classNameChart?: string;
  itemsSelect?: Array<ISelectDefaultItem>;
  onChangeSelect?: (value: any) => void;
}

const BarChartCard = ({
  data,
  color,
  title,
  classNameChart,
  className,
  itemsSelect,
  onChangeSelect
}: IBarChartCardProps) => {
  return (
    <Card
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
      <BarChart
        style={{
          width: "100%",
          maxWidth: "700px",
          maxHeight: "70vh",
          aspectRatio: 1.618
        }}
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
        {Object.keys(data?.[0] ?? {})
          .filter((key) => key !== "name")
          .map((key, index) => (
            <Bar
              key={key}
              dataKey={key}
              fill={Array.isArray(color) ? (color?.[index] ?? color[0]) : color}
            />
          ))}
      </BarChart>
    </Card>
  );
};

export default BarChartCard;
