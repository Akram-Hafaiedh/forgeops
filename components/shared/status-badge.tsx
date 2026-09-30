import { Badge } from "@/components/ui/badge";
import type { ClientStatus, ProjectStatus } from "@/lib/data/types";

const clientMap: Record<
  ClientStatus,
  { label: string; variant: "success" | "warning" | "default" | "danger" }
> = {
  active: { label: "Active", variant: "success" },
  onboarding: { label: "Onboarding", variant: "warning" },
  paused: { label: "Paused", variant: "default" },
  archived: { label: "Archived", variant: "default" },
};

const projectMap: Record<
  ProjectStatus,
  { label: string; variant: "success" | "warning" | "danger" | "default" }
> = {
  on_track: { label: "On track", variant: "success" },
  at_risk: { label: "At risk", variant: "warning" },
  blocked: { label: "Blocked", variant: "danger" },
  done: { label: "Done", variant: "default" },
};

export function ClientStatusBadge({ status }: { status: ClientStatus }) {
  const item = clientMap[status];
  return <Badge variant={item.variant}>{item.label}</Badge>;
}

export function ProjectStatusBadge({ status }: { status: ProjectStatus }) {
  const item = projectMap[status];
  return <Badge variant={item.variant}>{item.label}</Badge>;
}
