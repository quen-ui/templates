import {
  Title,
  Card,
  Flex,
  Tag,
  Avatar,
  Button,
  Badge,
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
  IconStar,
  IconBell
} from "@tabler/icons-react";
import {
  DashboardPageStyled,
  DashboardContentContainerStyled,
  DashboardHeaderStyled,
  BarChartCardStyled,
  LineChartCardStyled, CardTableStyled
} from "./styles";
import SearchHeader from "@/components/SearchHeader";
import { Table } from "@/components/Table";

const overviewDataYear = [
  {
    name: "Jan",
    users: 20002,
    signups: 5670
  },
  {
    name: "Feb",
    users: 56780,
    signups: 7893
  },
  {
    name: "Mar",
    users: 35679,
    signups: 18910
  },
  {
    name: "Apr",
    users: 78001,
    signups: 23674
  },
  {
    name: "May",
    users: 86400,
    signups: 30789
  },
  { name: "Jun", users: 87400, signups: 25436 },
  { name: "Jul", users: 98456, signups: 56978 },
  { name: "Aug", users: 8456, signups: 6787 },
  { name: "Sep", users: 84561, signups: 8674 },
  { name: "Oct", users: 152000, signups: 98761 },
  { name: "Nov", users: 78463, signups: 14578 },
  { name: "Dec", users: 91547, signups: 5236 }
];

const data = [
  {
    name: "0 - 10 minutes",
    pageviews: 8541
  },
  {
    name: "10 - 20 minutes",
    pageviews: 25479
  },
  {
    name: "20 - 30 minutes",
    pageviews: 49620
  }
];

const users = [
  {
    "name": "Elise Moen",
    "email": "Paul.Bosco43@yahoo.com",
    "signupDate": "Dec 23 2025",
    "role": "Consultant"
  },
  {
    "name": "Janice Erdman",
    "email": "Jade.Murray@hotmail.com",
    "signupDate": "Oct 09 2025",
    "role": "Executive"
  },
  {
    "name": "Easton Kutch DVM",
    "email": "Savanna_Hills38@hotmail.com",
    "signupDate": "Jul 19 2025",
    "role": "Designer"
  },
  {
    "name": "Tod Hills",
    "email": "Wilhelmine.Ryan@yahoo.com",
    "signupDate": "Apr 13 2025",
    "role": "Director"
  },
  {
    "name": "Kaya McDermott",
    "email": "Era.OKeefe71@yahoo.com",
    "signupDate": "Jul 04 2025",
    "role": "Developer"
  }
];

const Dashboard = () => {
  const theme = useTheme();
  return (
    <DashboardPageStyled>
      <DashboardHeaderStyled height="64px">
        <Title size="m">Dashboard</Title>
        <Flex gap="m" align="center">
          <SearchHeader />
          <Badge text={2} size="xs">
            <Button view="icon" size="s">
              <IconBell width={24} height={24} color={theme.colors.violet[9]} />
            </Button>
          </Badge>
          <Avatar name="Martin Jonson" />
        </Flex>
      </DashboardHeaderStyled>
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
            data={data}
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
    </DashboardPageStyled>
  );
};

export default Dashboard;
