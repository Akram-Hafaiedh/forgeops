import {
  Activity,
  Building2,
  Files,
  FolderKanban,
  LayoutDashboard,
  Settings,
  Shield,
  Users,
} from "lucide-react";

export const navItems = [
  { to: "/", label: "Overview", icon: LayoutDashboard, end: true },
  { to: "/clients", label: "Clients", icon: Building2 },
  { to: "/team", label: "Team", icon: Users },
  { to: "/projects", label: "Projects", icon: FolderKanban },
  { to: "/files", label: "Files", icon: Files },
  { to: "/activity", label: "Activity", icon: Activity },
  { to: "/roles", label: "Roles", icon: Shield },
] as const;

export const settingsItem = {
  to: "/settings",
  label: "Settings",
  icon: Settings,
} as const;
