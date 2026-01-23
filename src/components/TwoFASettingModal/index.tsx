import {
  Flex,
  Modal,
  Text,
  Badge,
  Title,
  Card,
  Tag,
  TextField,
  Button
} from "@quen-ui/components";
import QRCodeImage from "@/assets/qrCode.png";

interface ITwoFASettingModalProps {
  open: boolean;
  onClose: () => void;
  onSave: () => void;
}

const TwoFASettingModal = ({
  open,
  onClose,
  onSave
}: ITwoFASettingModalProps) => {
  return (
    <Modal
      open={open}
      title="Setup authenticator app"
      closeButton
      onClickClose={onClose}
      footer={
        <>
          <Button view="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              onSave();
              onClose();
            }}>
            Confirm
          </Button>
        </>
      }>
      <Flex direction="column" gap="m">
        <Text size="xs" type="secondary">
          Each time you log in, in additional to your password, you&#39;ll use
          an authenticator app to generate a one-time code
        </Text>
        <Flex gap="xs" align="center">
          <Badge text="Step 1" />
          <Title size="xs">Scan QR code</Title>
        </Flex>
        <Text type="secondary" size="xs">
          Scan the QR code below or manually enter the secret key into your
          authenticator app
        </Text>
        <Card
          style={{ width: 230 }}
          cover={<img src={QRCodeImage} alt="qr" width="230" />}>
          <Flex direction="column" gap="xs">
            <Title size="xs">Can&#39;t scan QR code?</Title>
            <Text size="xs" type="secondary">
              Enter this secret instead
            </Text>
            <Tag>ZP12FGP874DLR7012NBCX</Tag>
          </Flex>
        </Card>
        <Flex gap="xs" align="center">
          <Badge text="Step 2" />
          <Title size="xs">Get verification code</Title>
        </Flex>
        <Text type="secondary" size="xs">
          Enter the 6-digit code you see in authenticator app
        </Text>
        <TextField maxLength={6} label="Enter verification code" />
      </Flex>
    </Modal>
  );
};

export default TwoFASettingModal;
