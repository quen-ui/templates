import {
  Flex,
  Card,
  Title,
  Text,
  Switch,
  Divider,
  Checkbox,
  Button,
  Form
} from "@quen-ui/components";
import { IconMail, IconClockCog } from "@tabler/icons-react";
import { useTheme } from "@quen-ui/theme";

const NotificationsTab = () => {
  const theme = useTheme();
  const form = Form.useForm();
  const systemOn = Form.useWatch("systemOn", form);

  return (
    <Form
      form={form}
      direction="column"
      gap="l"
      onFinish={(values) => console.log(values)}>
      <Card
        style={{ width: "100%" }}
        title="E-mail notifications"
        leftContent={<IconMail color={theme.colors[theme.primaryColor][9]} />}>
        <Flex direction="column" gap="m" style={{ width: "100%" }}>
          <Text size="s" type="disabled">
            Select the kinds of notifications you want to receive on e-mail
          </Text>
          <Flex justify="space-between" align="center">
            <Flex direction="column" gap="s">
              <Title size="s">Updates</Title>
              <Text>Receive news and feature updates</Text>
            </Flex>
            <Form.Field name="email.updates" valuePropName="checked">
              <Switch size="s" />
            </Form.Field>
          </Flex>
          <Divider direction="horizontal" view="disabled" />
          <Flex justify="space-between" align="center">
            <Flex direction="column" gap="s">
              <Title size="s">Reminders</Title>
              <Text>Receive task and activity reminders</Text>
            </Flex>
            <Form.Field name="email.reminders" valuePropName="checked">
              <Switch size="s" />
            </Form.Field>
          </Flex>
          <Divider direction="horizontal" view="disabled" />
          <Flex justify="space-between" align="center">
            <Flex direction="column" gap="s">
              <Title size="s">Weekly reports</Title>
              <Text>Receive weekly summary reports</Text>
            </Flex>
            <Form.Field name="email.reports" valuePropName="checked">
              <Switch size="s" />
            </Form.Field>
          </Flex>
        </Flex>
      </Card>
      <Card
        style={{ width: "100%" }}
        title="System notifications"
        leftContent={
          <IconClockCog color={theme.colors[theme.primaryColor][9]} />
        }>
        <Flex direction="column" gap="m" style={{ width: "100%" }}>
          <Text size="s" type="disabled">
            Select your preferences for in-app notifications
          </Text>
          <Flex justify="space-between" align="center">
            <Flex direction="column" gap="s">
              <Title size="s">Show new notifications as a system popup</Title>
            </Flex>
            <Form.Field name="systemOn" valuePropName="checked">
              <Switch size="s" />
            </Form.Field>
          </Flex>
          <Divider direction="horizontal" view="disabled" />
          <Flex align="center" gap="m">
            <Form.Field name="system.mentioned" valuePropName="checked">
              <Checkbox disabled={!systemOn} />
            </Form.Field>
            <Flex direction="column" gap="s">
              <Title size="s">Mentioned</Title>
              <Text>Get notified when someone mentions you</Text>
            </Flex>
          </Flex>
          <Divider direction="horizontal" view="disabled" />
          <Flex align="center" gap="m">
            <Form.Field name="system.reminders" valuePropName="checked">
              <Checkbox disabled={!systemOn} />
            </Form.Field>
            <Flex direction="column" gap="s">
              <Title size="s">Reminders</Title>
              <Text>Receive task and activity reminders</Text>
            </Flex>
          </Flex>
          <Divider direction="horizontal" view="disabled" />
          <Flex align="center" gap="m">
            <Form.Field name="system.updates" valuePropName="checked">
              <Checkbox disabled={!systemOn} />
            </Form.Field>
            <Flex direction="column" gap="s">
              <Title size="s">Updates</Title>
              <Text>Receive news and feature updates</Text>
            </Flex>
          </Flex>
        </Flex>
      </Card>
      <Flex gap="m">
        <Button style={{ flex: 1 }} type="sumbit">
          Save changes
        </Button>
        <Button style={{ flex: 1 }} view="secondary">
          Cancel
        </Button>
      </Flex>
    </Form>
  );
};

export default NotificationsTab;
