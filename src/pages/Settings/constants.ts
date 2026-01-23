import type { ISelectDefaultItem } from "@quen-ui/components";

export const languageItems: ISelectDefaultItem[] = [
  {
    label: "English (USA)",
    value: "english-usa"
  },
  {
    label: "English (UK)",
    value: "english-uk"
  },
  {
    label: "German",
    value: "german"
  },
  {
    label: "Spanish",
    value: "spanish"
  },
  {
    label: "Italian",
    value: "italian"
  },
  {
    label: "Japanese",
    value: "japanese"
  }
];

export const timeZoneItems: ISelectDefaultItem[] = [
  {
    label: "(GMT-06:00) Central America",
    value: "America/Managua"
  },
  {
    label: "(GMT-04:00) Atlantic Time (Canada)",
    value: "Canada/Atlantic"
  },
  {
    label: "(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
    value: "Europe/Amsterdam"
  },
  {
    label: "(GMT+03:00) Moscow, St. Petersburg, Volgograd",
    value: "Europe/Moscow"
  },
  {
    label: "(GMT+09:00) Osaka, Sapporo, Tokyo",
    value: "Asia/Tokyo"
  }
];

export const dateFormatItems: ISelectDefaultItem[] = [
  {
    label: "dd/mm/yyyy",
    value: "dd/mm/yyyy"
  },
  {
    label: "dd.mm.yyyy",
    value: "dd.mm.yyyy"
  },
  {
    label: "yyyy/mm/dd",
    value: "yyyy/mm/dd"
  },
  {
    label: "dd-mm-yyyy",
    value: "dd-mm-yyyy"
  }
];

export const startWeekItems: ISelectDefaultItem[] = [
  {
    label: "Sunday",
    value: "sunday"
  },
  {
    label: "Monday",
    value: "monday"
  }
];

export const membersRoleItems: ISelectDefaultItem[] = [
  {
    label: "Member",
    value: "member"
  },
  {
    label: "Admin",
    value: "admin"
  },
  {
    label: "Owner",
    value: "owner"
  }
];

export const loginHistory = [
  {
    browser: "Chrome",
    device: "Android",
    ip: "127.0.0.1",
    time: "Today - 14:21",
    status: "actual",
  },
  {
    browser: "Chrome",
    device: "Windows",
    ip: "127.0.0.1",
    time: "Yesterday - 20:05",
    status: "closed",
  },
  {
    browser: "Firefox",
    device: "Windows",
    ip: "127.0.0.1",
    time: "Jun 20.2026 - 04:51",
    status: "actual",
  }
]
