import { Modal, Flex, Card, Button, Title, Text } from "@quen-ui/components";
import { IconCheck } from "@tabler/icons-react";
import { useTheme } from "@quen-ui/theme";

interface IPricingModalProps {
  open: boolean;
  onClose: () => void;
  onChange: (plan: string) => void;
}

const PricingModal = ({ open, onClose, onChange }: IPricingModalProps) => {
  const theme = useTheme();
  return (
    <Modal
      open={open}
      closeButton
      onClickClose={onClose}
      title="Our pricing plans">
      <Flex gap="l" wrap="wrap">
        <Card
          shadow
          title="Free"
          actionContent={<Button style={{ width: "100%" }} onClick={() => onChange("free")}>Upgrade</Button>}>
          <Flex direction="column" gap="l">
            <Flex align="center" gap="s">
              <Title size="m">$0</Title>
              <Text> / per month</Text>
            </Flex>
            <Flex align="center" gap="xs">
              <IconCheck color={theme.colors.green[9]} />
              <Text>1 User</Text>
            </Flex>
            <Flex align="center" gap="xs">
              <IconCheck color={theme.colors.green[9]} />
              <Text>1 Workspace</Text>
            </Flex>
            <Flex align="center" gap="xs">
              <IconCheck color={theme.colors.green[9]} />
              <Text>Without support</Text>
            </Flex>
          </Flex>
        </Card>
        <Card
          title="Basic"
          actionContent={<Button style={{ width: "100%" }} onClick={() => onChange("basic")}>Upgrade</Button>}>
          <Flex direction="column" gap="l">
            <Flex align="center" gap="s">
              <Title size="m">$12</Title>
              <Text> / per month</Text>
            </Flex>
            <Flex align="center" gap="xs">
              <IconCheck color={theme.colors.green[9]} />
              <Text>2 User</Text>
            </Flex>
            <Flex align="center" gap="xs">
              <IconCheck color={theme.colors.green[9]} />
              <Text>5 Workspace</Text>
            </Flex>
            <Flex align="center" gap="xs">
              <IconCheck color={theme.colors.green[9]} />
              <Text>Basic support</Text>
            </Flex>
          </Flex>
        </Card>
        <Card
          title="Pro"
          actionContent={<Button style={{ width: "100%" }} onClick={() => onChange("pro")}>Upgrade</Button>}>
          <Flex direction="column" gap="l">
            <Flex align="center" gap="s">
              <Title size="m">$24</Title>
              <Text> / per month</Text>
            </Flex>
            <Flex align="center" gap="xs">
              <IconCheck color={theme.colors.green[9]} />
              <Text>5 User</Text>
            </Flex>
            <Flex align="center" gap="xs">
              <IconCheck color={theme.colors.green[9]} />
              <Text>10 Workspace</Text>
            </Flex>
            <Flex align="center" gap="xs">
              <IconCheck color={theme.colors.green[9]} />
              <Text>Priority support</Text>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </Modal>
  );
};

export default PricingModal;
