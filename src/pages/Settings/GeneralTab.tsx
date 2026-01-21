import { useState } from "react";
import {
  Flex,
  Card,
  Avatar,
  Button,
  Select,
  RadioButton,
  message
} from "@quen-ui/components";
import { useTheme } from "@quen-ui/theme";
import {
  IconUserFilled,
  IconSitemapFilled,
  IconSettingsStar,
  IconDeviceDesktop
} from "@tabler/icons-react";
import { TextFieldStyled, Card50Styled } from "./styles";
import {
  languageItems,
  timeZoneItems,
  dateFormatItems,
  startWeekItems
} from "./constants";
import { THEME_KEY, LIGHT_THEME_NAME } from "@/constants";
import InviteMemberModal from "./InviteMemberModal";

const GeneralTab = () => {
  const theme = useTheme();
  const [messageInstance, MessageProvider] = message.useMessage();
  const [openInviteModal, setOpenInviteModal] = useState(false);
  const [themeName, setThemeName] = useState(
    localStorage.getItem(THEME_KEY) || "light"
  );

  const handleChangeAppearance = () => {
    localStorage.setItem(THEME_KEY, themeName);
    window.location.reload();
  };

  const handleClickSaveChanges = () => {
    messageInstance.success("Changes saved successfully!");
  };

  return (
    <>
      {MessageProvider}
      <Flex direction="column" gap="l">
        <Card
          style={{ width: "100%" }}
          leftContent={
            <IconUserFilled color={theme.colors[theme.primaryColor][9]} />
          }
          actionContent={
            <Button onClick={handleClickSaveChanges}>Save changes</Button>
          }
          title="Profile">
          <Flex gap="m" align="end" style={{ width: "100%" }}>
            <Avatar />
            <TextFieldStyled label="Full name" value="Mark Jonhson" />
            <TextFieldStyled label="Email" value="email@email.com" />
          </Flex>
        </Card>
        <Card
          style={{ width: "100%" }}
          leftContent={
            <IconSitemapFilled color={theme.colors[theme.primaryColor][9]} />
          }
          actionContent={
            <Button onClick={handleClickSaveChanges}>Save changes</Button>
          }
          title="Organization">
          <Flex direction="column" style={{ width: "100%" }}>
            <Flex gap="m" style={{ width: "100%" }}>
              <TextFieldStyled label="Organization Name" value="QuenUI" />
              <TextFieldStyled label="WorkspaceURL" value="worspace-name" />
            </Flex>
            <Button view="link" onClick={() => setOpenInviteModal(true)}>
              Invite members
            </Button>
          </Flex>
        </Card>
        <Flex gap="l" wrap="wrap">
          <Card50Styled
            leftContent={
              <IconSettingsStar color={theme.colors[theme.primaryColor][9]} />
            }
            actionContent={
              <>
                <Button onClick={handleClickSaveChanges}>Save changes</Button>
                <Button view="secondary">Cancel</Button>
              </>
            }
            title="Preferences">
            <Flex direction="column" gap="m" style={{ width: "100%" }}>
              <Select
                items={languageItems}
                value="english-usa"
                label="Language"
              />
              <Select
                items={timeZoneItems}
                value={timeZoneItems[0].value}
                label="Timezone"
              />
              <Select
                items={dateFormatItems}
                value={dateFormatItems[0].value}
                label="Date format"
              />
              <Select
                items={startWeekItems}
                value={startWeekItems[0].value}
                label="Start week on"
              />
            </Flex>
          </Card50Styled>
          <Card50Styled
            leftContent={
              <IconDeviceDesktop color={theme.colors[theme.primaryColor][9]} />
            }
            actionContent={
              <Button onClick={handleChangeAppearance}>Save changes</Button>
            }
            title="Appearance">
            <Flex gap="m" direction="column">
              <RadioButton.Group
                direction="horizontal"
                onChange={(value) => setThemeName(String(value))}
                label="Theme"
                value={themeName}
                options={[
                  { label: "Light", value: LIGHT_THEME_NAME },
                  { label: "Dark", value: "dark" }
                ]}
              />
              <RadioButton.Group
                direction="horizontal"
                label="Sidebar"
                options={[
                  { label: "Expended", value: "expended" },
                  { label: "Collapsed", value: "collapsed" }
                ]}
              />
            </Flex>
          </Card50Styled>
        </Flex>
      </Flex>
      <InviteMemberModal
        open={openInviteModal}
        onClose={() => setOpenInviteModal(false)}
      />
    </>
  );
};

export default GeneralTab;
