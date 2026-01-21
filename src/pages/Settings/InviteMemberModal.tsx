import {
  Button,
  Flex,
  Modal,
  TextField,
  Select,
  Form,
  notifications
} from "@quen-ui/components";
import { useTheme } from "@quen-ui/theme";
import { IconUsers } from "@tabler/icons-react";
import { membersRoleItems } from "./constants";

interface InviteMemberModalProps {
  open: boolean;
  onClose: () => void;
}

interface IData {
  email: string;
  role: string;
  fullName: string;
}

const InviteMemberModal = ({ open, onClose }: InviteMemberModalProps) => {
  const theme = useTheme();
  const form = Form.useForm<IData>();

  const handleInviteMembers = () => {
    form.submit();
  };

  const handleFinish = (values: IData) => {
    notifications.show({ message: `The invitation has been sent by email: ${values.email}` });
    onClose();
  };

  return (
    <Modal
      onClickClose={onClose}
      closeButton
      open={open}
      title={
        <Flex gap="m" align="center">
          <IconUsers color={theme.colors[theme.primaryColor][9]} /> Invite new
          member
        </Flex>
      }
      footer={<Button onClick={handleInviteMembers}>Invite now</Button>}>
      <Form form={form} onFinish={handleFinish} direction="row" gap="m">
        <Form.Field
          name="email"
          rules={[{ required: true, message: "Email is required" }, { type: "email" }]}>
          <TextField size="s" label="Email" type="email" />
        </Form.Field>
        <Form.Field name="fullName">
          <TextField size="s" label="Full name (optional)" name="fullName" />
        </Form.Field>
        <Form.Field name="role" rules={[{ required: true }]}>
          <Select
            zIndex={1000}
            size="s"
            items={membersRoleItems}
            label="Role"
          />
        </Form.Field>
      </Form>
    </Modal>
  );
};

export default InviteMemberModal;
