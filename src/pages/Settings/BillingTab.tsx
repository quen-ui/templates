import { useState } from "react";
import {
  Flex,
  Card,
  Button,
  Divider,
  Text,
  Title,
  notifications,
  Progress
} from "@quen-ui/components";
import {
  IconFileInvoice,
  IconCheck,
  IconListCheck,
  IconCreditCardPay,
  IconIdBadge2,
  IconBrandVisa,
  IconFileDollar
} from "@tabler/icons-react";
import { useTheme } from "@quen-ui/theme";
import PricingModal from "@/components/PricingModal";
import { Table } from "@/components/Table";
import { columnsInvoices, dataInvoices } from "./constants";

const BillingTab = () => {
  const theme = useTheme();
  const [openModalPricing, setOpenModalPricing] = useState(false);

  const onChangePlan = () => {
    notifications.show({
      message: "You have updated your plan",
      position: "top-right"
    });
    setOpenModalPricing(false);
  };

  return (
    <>
      <Flex direction="column" gap="l">
        <Card
          style={{ width: "100%" }}
          title="Current plan"
          leftContent={
            <IconFileInvoice color={theme.colors[theme.primaryColor][9]} />
          }
          actionContent={
            <Button onClick={() => setOpenModalPricing(true)}>
              Upgrade plan
            </Button>
          }>
          <Flex direction="column" gap="m" style={{ width: "100%" }}>
            <Flex justify="space-between">
              <Flex direction="column" gap="s">
                <Title size="s">PRO plan</Title>
                <Text type="disabled">
                  The Pro plan offers advanced features and priority support for
                  maximum efficiency and growth
                </Text>
              </Flex>
              <Flex gap="m">
                <Card shadow style={{ width: "max-content" }}>
                  <Flex gap="xs" align="center">
                    <Title size="s">$24</Title>
                    <Text>/ month</Text>
                  </Flex>
                </Card>
                <Card shadow style={{ width: "max-content" }}>
                  <Flex gap="xs" align="center">
                    <Title size="s">$240</Title>
                    <Text>/ year</Text>
                  </Flex>
                </Card>
              </Flex>
            </Flex>
            <Divider direction="horizontal" view="disabled" />
            <Flex justify="space-between" gap="m">
              <Flex align="center" gap="xs">
                <IconCheck color={theme.colors.green[9]} />
                <Text>5 Users</Text>
              </Flex>
              <Flex align="center" gap="xs">
                <IconCheck color={theme.colors.green[9]} />
                <Text>10 Workspaces</Text>
              </Flex>
              <Flex align="center" gap="xs">
                <IconCheck color={theme.colors.green[9]} />
                <Text>Priority support</Text>
              </Flex>
            </Flex>
          </Flex>
        </Card>
        <Card
          style={{ width: "100%" }}
          title="Usage & Limits"
          leftContent={
            <IconListCheck color={theme.colors[theme.primaryColor][9]} />
          }>
          <Flex direction="column" gap="m" style={{ width: "100%" }}>
            <Progress
              value={100}
              size="xs"
              color="red"
              label={
                <Flex gap="xs">
                  <Title type="danger" size="s">
                    10
                  </Title>
                  <Text type="danger">Users used</Text>
                </Flex>
              }
            />
            <Progress
              value={78}
              size="xs"
              color="orange"
              label={
                <Flex gap="xs">
                  <Title type="warning" size="s">
                    78 645 / 100 000
                  </Title>
                  <Text type="warning">API requests</Text>
                </Flex>
              }
            />
            <Progress
              value={11}
              size="xs"
              color="green"
              label={
                <Flex gap="xs">
                  <Title type="success" size="s">
                    11,5 GB / 100 GB
                  </Title>
                  <Text type="success">Storage</Text>
                </Flex>
              }
            />
          </Flex>
        </Card>
        <Flex gap="l">
          <Card
            style={{ width: "100%" }}
            title="Payment method"
            actionContent={<Button>Change</Button>}
            leftContent={
              <IconCreditCardPay color={theme.colors[theme.primaryColor][9]} />
            }>
            <Flex direction="column" gap="m">
              <Text size="s" type="disabled">
                Change how you pay for your plan
              </Text>
              <Flex gap="m" align="center">
                <IconBrandVisa width={48} height={48} />
                <Flex direction="column" gap="s">
                  <Title size="xs">**** **** **** 5478</Title>
                  <Text type="secondary">Expire 06/2027</Text>
                </Flex>
              </Flex>
            </Flex>
          </Card>
          <Card
            style={{ width: "100%" }}
            title="Billing information"
            leftContent={
              <IconIdBadge2 color={theme.colors[theme.primaryColor][9]} />
            }>
            <Flex direction="column" style={{ width: "100%" }} gap="m">
              <Flex align="center" justify="space-between" gap="m">
                <Title size="xs">Company name</Title>
                <Text size="s">QuenUI</Text>
              </Flex>
              <Divider direction="horizontal" view="disabled" />
              <Flex align="center" justify="space-between" gap="m">
                <Title size="xs">Billing email</Title>
                <Text size="s">billing@quenui.quenui</Text>
              </Flex>
              <Divider direction="horizontal" view="disabled" />
              <Flex align="center" justify="space-between" gap="m">
                <Title size="xs">Billing address</Title>
                <Text size="s">
                  123, Main St. Suite 455 Springfield, IL 62701
                </Text>
              </Flex>
            </Flex>
          </Card>
        </Flex>
        <Card
          style={{ width: "100%" }}
          title="Invoices"
          leftContent={<IconFileDollar color={theme.colors[theme.primaryColor][9]} />}
          actionContent={<Button view="link">View all invoices</Button>}>
          <Table columns={columnsInvoices} data={dataInvoices} />
        </Card>
      </Flex>
      <PricingModal
        open={openModalPricing}
        onClose={() => setOpenModalPricing(false)}
        onChange={onChangePlan}
      />
    </>
  );
};

export default BillingTab;
