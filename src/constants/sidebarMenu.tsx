import type { IMenuDefaultItem } from "@quen-ui/components";
import {
  IconHome,
  IconSettings,
  IconUsers,
  IconLayoutBottombarInactive,
  IconLogout
} from "@tabler/icons-react";

export const SIDEBAR_MENU_ITEMS: IMenuDefaultItem[] = [
  {
    label: "Dashboard",
    key: "dashboard",
    leftContent: <IconHome />
  },
  {
    label: "Users",
    key: "users",
    leftContent: <IconUsers />
  },
  {
    label: "Settings",
    key: "settings",
    leftContent: <IconSettings />
  },
  {
    label: "Support",
    key: "support",
    leftContent: <IconLayoutBottombarInactive />
  },
  {
    label: "Logout",
    key: "logout",
    leftContent: <IconLogout />
  }
];
