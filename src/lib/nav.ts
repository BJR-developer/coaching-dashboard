import type { PortalTheme } from "@/lib/auth/service-type";
import { SERVICE_COPY } from "@/lib/auth/service-type";

export type NavItem = {
  id: string;
  label: string;
  href: string;
  icon: string;
};

/** Primary sidebar — binder sub-tabs live only under SustainBL */
export function getSidebarNav(theme: PortalTheme): NavItem[] {
  const copy = SERVICE_COPY[theme];

  return [
    { id: "setup", label: "Setup", href: "/setup", icon: "settings" },
    { id: "dashboard", label: "Dashboard", href: "/dashboard", icon: "home" },
    { id: "sustainbl", label: "SustainBL", href: "/sustainbl", icon: "book-open" },
    { id: "meetings", label: "Meetings", href: "/meetings", icon: "mic" },
    { id: "follow-up", label: "Follow-up", href: "/follow-up", icon: "mail" },
    { id: "reports", label: "PDF Export", href: "/reports", icon: "file-text" },
    { id: "ask-copilot", label: "Ask Copilot", href: "/ask-copilot", icon: "sparkles" },
    {
      id: "my-advocate",
      label: copy.coachNavLabel,
      href: "/advocate",
      icon: "user",
    },
  ];
}

/** @deprecated Prefer getSidebarNav(theme) */
export const SIDEBAR_NAV: NavItem[] = getSidebarNav("iep");

/** Tabs only shown inside SustainBL workspace */
export const SUSTAINBL_TABS: NavItem[] = [
  { id: "timeline", label: "Timeline", href: "/sustainbl/timeline", icon: "timeline" },
  { id: "documents", label: "Documents", href: "/sustainbl/documents", icon: "folder" },
  { id: "prep", label: "Prep", href: "/sustainbl/prep", icon: "list" },
];

export const CHILD_NAME = "Avery";
