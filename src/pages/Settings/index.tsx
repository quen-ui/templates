import { useState } from "react";
import { Flex, message, Tabs } from "@quen-ui/components";
import GeneralTab from "./GeneralTab";
import SecurityTab from "./SecurityTab";
import BillingTab from "./BillingTab";
import NotificationsTab from "./NotificationsTab";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [messageInstance, MessageProvider] = message.useMessage();
  return (
    <Flex direction="column" gap="s">
      {MessageProvider}
      <Tabs defaultValue={activeTab} onChange={setActiveTab}>
        <Tabs.TabsList grow>
          <Tabs.Tab value="general">General</Tabs.Tab>
          <Tabs.Tab value="security">Security</Tabs.Tab>
          <Tabs.Tab value="notifications">Notifications</Tabs.Tab>
          <Tabs.Tab value="billing">Billing</Tabs.Tab>
        </Tabs.TabsList>
        <Tabs.TabPanel value="general">
          <GeneralTab messageInstance={messageInstance} />
        </Tabs.TabPanel>
        <Tabs.TabPanel value="security">
          <SecurityTab />
        </Tabs.TabPanel>
        <Tabs.TabPanel value="notifications">
          <NotificationsTab />
        </Tabs.TabPanel>
        <Tabs.TabPanel value="billing">
          <BillingTab />
        </Tabs.TabPanel>
      </Tabs>
    </Flex>
  );
};

export default Settings;
