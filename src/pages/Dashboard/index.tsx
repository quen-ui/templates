import { Layout, Title, Card, Flex, Tag } from "@quen-ui/components";
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
import { DashboardPageStyled, DashboardContentContainerStyled } from "./styles";
import LineChart  from "@/components/charts/LineChart";

const Dashboard = () => {
  const theme = useTheme();
  return (
    <DashboardPageStyled>
      <Layout.Header>
        <Title size="m">Welcome, John</Title>
      </Layout.Header>
      <DashboardContentContainerStyled>
        <Flex wrap="wrap" justify="space-between">
          <Card
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
        <LineChart />
      </DashboardContentContainerStyled>
    </DashboardPageStyled>
  );
};

export default Dashboard;
