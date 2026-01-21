import { Link } from "@tanstack/react-router";
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
    leftContent: <IconHome />,
    as: Link,
    to: "/dashboard"
  },
  {
    label: "Users",
    key: "users",
    leftContent: <IconUsers />,
    as: Link,
    to: "/users"
  },
  {
    label: "Settings",
    key: "settings",
    leftContent: <IconSettings />,
    as: Link,
    to: "/settings"
  },
  {
    label: "Support",
    key: "support",
    leftContent: <IconLayoutBottombarInactive />,
    as: Link,
    to: "/support"
  },
  {
    label: "Logout",
    key: "logout",
    leftContent: <IconLogout />
  }
];
