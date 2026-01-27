import { useMemo, useRef, useState } from "react";
import {
  Flex,
  Card,
  Button,
  Progress,
  Form,
  Text,
  type TFormFieldValidate,
  Dropdown,
  Title,
  Tag,
  Accordion,
  Divider
} from "@quen-ui/components";
import { useTheme } from "@quen-ui/theme";
import {
  IconLockFilled,
  IconProgressHelp,
  IconAuth2fa,
  IconHistory,
  IconBrandChrome,
  IconBrandFirefox
} from "@tabler/icons-react";
import { TextFieldStyled } from "@/pages/Settings/styles";
import { evaluatePasswordStrength } from "@/utils";
import TwoFASettingModal from "@/components/TwoFASettingModal";
import { loginHistory } from "./constants";
import type {IMessageInstance} from "@quen-ui/components/dist/message/types";

interface IPasswordData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface ISecurityTabProps {
  messageInstance: IMessageInstance;
}

const SecurityTab = ({ messageInstance }: ISecurityTabProps) => {
  const refButtonQuestionPassword = useRef<HTMLButtonElement>(null);
  const [openDropdownPassword, setOpenDropdownPassword] =
    useState<boolean>(false);
  const [status2FA, setStatus2FA] = useState("disable");
  const theme = useTheme();
  const formPassword = Form.useForm();
  const newPassword = Form.useWatch("newPassword", formPassword);
  const [backupCodes, setBackupCodes] = useState<string[]>([]);
  const [generateBackupCodes, setGenerateBackupCodes] =
    useState<boolean>(false);
  const [open2FAModal, setOpen2FAModal] = useState(false);

  const strengthPassword = useMemo(() => {
    return evaluatePasswordStrength(newPassword);
  }, [newPassword]);

  const colorProgressPassword = useMemo(() => {
    if (strengthPassword.score === 0) {
      return "violet";
    }
    if (strengthPassword.score >= 60 && strengthPassword.score < 80) {
      return "orange";
    }
    if (strengthPassword.score >= 80) {
      return "green";
    }
    return "red";
  }, [strengthPassword]);

  const getIconBrowser = (browser: string) => {
    if (browser === "Chrome") {
      return <IconBrandChrome />;
    }
    return <IconBrandFirefox />;
  };

  const validateNewPassword: TFormFieldValidate<IPasswordData> = (
    value,
    values
  ) => {
    if (value !== values.confirmPassword) {
      return "Your passwords don't match";
    }
    return undefined;
  };

  const validateConfirmPassword: TFormFieldValidate<IPasswordData> = (
    value,
    values
  ) => {
    if (value !== values.newPassword) {
      return "Your passwords don't match";
    }
    return undefined;
  };

  const handleClickSaveChanges = () => {
    messageInstance.success("Changes saved successfully!");
  };

  const handleClick2FA = () => {
    if (status2FA === "enabled") {
      setStatus2FA("disabled");
    } else {
      setOpen2FAModal(true);
    }
  };

  const handleClickGenerateBackupCode = () => {
    setGenerateBackupCodes(true);
    setTimeout(() => {
      setGenerateBackupCodes(false);
      setBackupCodes([
        "587A8EF7",
        "AY78AD43",
        "OP134LD7",
        "69AG7L4D",
        "B0F7O7EF",
        "KL89132D",
        "M3SF76J3",
        "ADF654NB"
      ]);
    }, 2000);
  };

  return (
    <>
      <Flex direction="column" gap="l">
        <Card
          style={{ width: "100%" }}
          leftContent={
            <IconLockFilled color={theme.colors[theme.primaryColor][9]} />
          }
          actionContent={
            <Button
              disabled={strengthPassword.score < 60}
              onClick={formPassword.submit}>
              Update password
            </Button>
          }
          title="Password & Authentication">
          <Flex direction="column" gap="m" style={{ width: "100%" }}>
            <Form
              onFinish={handleClickSaveChanges}
              direction="row"
              gap="m"
              form={formPassword}
              style={{ width: "100%" }}>
              <Form.Field name="currentPassword" rules={[{ required: true }]}>
                <TextFieldStyled label="Current password" type="password" />
              </Form.Field>
              <Form.Field
                name="newPassword"
                rules={[{ required: true }]}
                dependencies={["confirmPassword"]}
                validate={validateNewPassword}>
                <TextFieldStyled label="New password" type="password" />
              </Form.Field>
              <Form.Field
                name="confirmPassword"
                rules={[{ required: true }]}
                dependencies={["newPassword"]}
                validate={validateConfirmPassword}>
                <TextFieldStyled label="Confirm new password" type="password" />
              </Form.Field>
            </Form>
            <Flex gap="xs" align="center">
              <Progress
                size="xs"
                value={strengthPassword.score}
                color={colorProgressPassword}
              />
              <Button
                view="icon"
                size="s"
                ref={refButtonQuestionPassword}
                onClick={() => setOpenDropdownPassword(true)}>
                <IconProgressHelp color={theme.colors[theme.primaryColor][9]} />
              </Button>
              <Dropdown
                direction="bottomRight"
                onClickOutside={() => setOpenDropdownPassword(false)}
                onClickClose={() => setOpenDropdownPassword(false)}
                open={openDropdownPassword}
                anchorRef={refButtonQuestionPassword}
                content={
                  <Flex direction="column">
                    {strengthPassword.feedback?.map((feedback) => (
                      <Text size="xs" key={feedback}>
                        {feedback}
                      </Text>
                    ))}
                  </Flex>
                }
              />
            </Flex>
            <Text size="xs">{strengthPassword.feedbackResult}</Text>
          </Flex>
        </Card>
        <Card
          extra={
            <Button view="secondary" onClick={handleClick2FA}>
              {status2FA === "enabled" ? "Disabled 2FA" : "Enabled 2FA"}
            </Button>
          }
          title={
            <Flex align="center" gap="s">
              <Title size="m">Two-factor authentication</Title>
              <Tag color={status2FA === "enabled" ? "green" : "orange"}>
                {status2FA === "enabled" ? "Enabled" : "Disabled"}
              </Tag>
            </Flex>
          }
          style={{ width: "100%" }}
          leftContent={
            <IconAuth2fa color={theme.colors[theme.primaryColor][9]} />
          }>
          <Flex direction="column" gap="s" style={{ width: "100%" }}>
            <Text size="s" type="secondary">
              Keep your account more secure by added another layer of security
            </Text>
            <Card
              style={{ width: "100%" }}
              shadow
              title="Authenticator App"
              size="s">
              <Flex gap="m" justify="space-beetween" style={{ width: "100%" }}>
                <Flex align="center" style={{ width: "100%" }}>
                  <IconLockFilled />
                  Auth App
                </Flex>
                <Button view="link">Remove</Button>
              </Flex>
            </Card>
            <Accordion
              size="xs"
              onChange={() => setBackupCodes([])}
              items={[
                {
                  key: "codes",
                  label: "Backup codes",
                  children: (
                    <Flex gap="xs">
                      {!backupCodes.length ? (
                        <Button
                          size="s"
                          loading={generateBackupCodes}
                          onClick={handleClickGenerateBackupCode}>
                          Regenerate code
                        </Button>
                      ) : (
                        <Flex direction="column" gap="m">
                          <Text size="s">
                            If you lose access to your auth app, you can login
                            to App using your recovery codes. Each code can only
                            be used once!
                          </Text>
                          <Flex gap="xs">
                            {backupCodes.map((code) => (
                              <Title size="xs" key={code}>
                                {code}
                              </Title>
                            ))}
                          </Flex>
                        </Flex>
                      )}
                    </Flex>
                  )
                }
              ]}
            />
          </Flex>
        </Card>
        <Card
          style={{ width: "100%" }}
          leftContent={
            <IconHistory color={theme.colors[theme.primaryColor][9]} />
          }
          actionContent={
            <Button
              view="secondary"
              onClick={() =>
                messageInstance.success("All sessions closed successfully!")
              }>
              Close all sessions
            </Button>
          }
          title="Login history">
          <Flex direction="column" gap="s">
            {loginHistory.map((history) => (
              <>
                <Flex align="center" justify="space-between">
                  <Flex direction="column" gap="xs" key={history.time}>
                    <Flex>
                      {getIconBrowser(history.browser)}
                      <Text>{`${history.browser} on ${history.device}`}</Text>
                    </Flex>
                    <Text size="xs" type="secondary">
                      {history.ip}
                    </Text>
                  </Flex>
                  <Flex gap="xs" align="center">
                    <Text>{history.time}</Text>
                    {history.status === "actual" && (
                      <Button
                        view="link"
                        onClick={() =>
                          messageInstance.success(
                            "Session closed successfully!"
                          )
                        }>
                        Close session
                      </Button>
                    )}
                  </Flex>
                </Flex>
                <Divider direction="horizontal" view="disabled" />
              </>
            ))}
          </Flex>
        </Card>
      </Flex>
      <TwoFASettingModal
        open={open2FAModal}
        onClose={() => setOpen2FAModal(false)}
        onSave={() => setStatus2FA("enabled")}
      />
    </>
  );
};

export default SecurityTab;
