import {
  Title,
  Card,
  Flex,
  Tag,
  Button,
  Tabs
} from "@quen-ui/components";
import { useTheme } from "@quen-ui/theme";
import {
  IconEye,
  IconDots,
  IconTrendingUp,
  IconUserFilled,
  IconTrendingDown,
  IconPlus,
  IconStar
} from "@tabler/icons-react";
import {
  DashboardContentContainerStyled,
  BarChartCardStyled,
  LineChartCardStyled, CardTableStyled
} from "./styles";
import { Table } from "@/components/Table";
import { overviewDataYear, users, pageViewsData} from "./data";

const Dashboard = () => {
  const theme = useTheme();
  return (
    <>
      <DashboardContentContainerStyled direction="column" gap="l">
        <Flex wrap="wrap" justify="space-between" align="center">
          <Flex>
            <Tabs defaultValue="currentDay">
              <Tabs.Tab value="currentDay">Current Day</Tabs.Tab>
              <Tabs.Tab value="3day">Last: 3 Days</Tabs.Tab>
            </Tabs>
          </Flex>
          <Button view="secondary">View analytics</Button>
        </Flex>
        <Flex wrap="wrap" justify="space-between" gap="l">
          <Card
            className="card-mobile"
            shadow
            leftContent={<IconEye />}
            title="Pageviews"
            size="s"
            extra={<IconDots />}>
            <Title size="s">50.8K</Title>
            <Tag color="green">
              25.5%
              <IconTrendingUp color={theme.colors.green[9]} />
            </Tag>
          </Card>
          <Card
            className="card-mobile"
            shadow
            leftContent={<IconUserFilled />}
            title="Monthly users"
            size="s"
            extra={<IconDots />}>
            <Title size="s">15.2K</Title>
            <Tag color="red">
              13.7%
              <IconTrendingDown color={theme.colors.red[9]} />
            </Tag>
          </Card>
          <Card
            className="card-mobile"
            shadow
            leftContent={<IconPlus />}
            title="New sign ups"
            size="s"
            extra={<IconDots />}>
            <Title size="s">520</Title>
            <Tag color="green">
              5.1%
              <IconTrendingUp color={theme.colors.green[9]} />
            </Tag>
          </Card>
          <Card
            className="card-mobile"
            shadow
            leftContent={<IconStar />}
            title="Subscriptions"
            size="s"
            extra={<IconDots />}>
            <Title size="s">1.5K</Title>
            <Tag color="green">
              69%
              <IconTrendingUp color={theme.colors.green[9]} />
            </Tag>
          </Card>
        </Flex>
        <Flex wrap="wrap" justify="space-between" gap="l">
          <LineChartCardStyled
            title="Overview"
            style={{
              width: "100%",
              maxHeight: "70vh",
              aspectRatio: 1.618
            }}
            itemsSelect={[
              { value: "12", label: "Last 12 Months" },
              { value: "6", label: "Last 6 Months" },
              { value: "1", label: "Last 1 Month" }
            ]}
            data={overviewDataYear}
            color={[theme.colors.violet[9], theme.colors.green[9]]}
          />
          <BarChartCardStyled
            data={pageViewsData}
            title="Live pageviews"
            color={theme.colors.grayViolet[9]}
            itemsSelect={[
              { value: "30", label: "Last 30 minutes" },
              { value: "hour", label: "Last 1 hour" },
              { value: "day", label: "Last 1 day" }
            ]}
          />
        </Flex>
        <CardTableStyled title="Recent users" shadow>
          <Table
            columns={[
              { title: "Name", dataIndex: "name" },
              { title: "Email", dataIndex: "email" },
              { title: "Signup date", dataIndex: "signupDate" },
              { title: "Role", dataIndex: "role" }
            ]}
            data={users}
          />
        </CardTableStyled>
      </DashboardContentContainerStyled>
    </>
  );
};

export default Dashboard;
