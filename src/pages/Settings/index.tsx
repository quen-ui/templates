import { useState } from "react";
import {} from "@tanstack/react-router";
import { Flex, Tabs } from "@quen-ui/components";
import GeneralTab from "./GeneralTab";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("general")
  return (
    <Flex direction="column" gap="s">
      <Tabs defaultValue={activeTab} onChange={setActiveTab}>
        <Tabs.TabsList grow>
          <Tabs.Tab value="general">General</Tabs.Tab>
          <Tabs.Tab value="security">Security</Tabs.Tab>
          <Tabs.Tab value="notifications">Notifications</Tabs.Tab>
          <Tabs.Tab value="billing">Billing</Tabs.Tab>
        </Tabs.TabsList>
        <Tabs.TabPanel value="general"><GeneralTab /></Tabs.TabPanel>
        <Tabs.TabPanel value="security">Security</Tabs.TabPanel>
        <Tabs.TabPanel value="notifications">Notifications</Tabs.TabPanel>
        <Tabs.TabPanel value="billing">Billing</Tabs.TabPanel>
      </Tabs>
    </Flex>
  )
};

export default Settings;
