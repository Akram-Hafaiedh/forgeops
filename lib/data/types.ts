export type ClientStatus = "active" | "onboarding" | "paused" | "archived";
export type ProjectStatus = "on_track" | "at_risk" | "blocked" | "done";
export type RoleKey = "owner" | "admin" | "manager" | "member" | "viewer";
export type ActivityKind =
  | "client"
  | "project"
  | "file"
  | "team"
  | "permission";

export type Client = {
  id: string;
  name: string;
  industry: string;
  ownerId: string;
  status: ClientStatus;
  seats: number;
  mrr: number;
  city: string;
  email: string;
  lastActivity: string;
  notes: string;
};

export type Employee = {
  id: string;
  name: string;
  title: string;
  email: string;
  role: RoleKey;
  department: string;
  location: string;
  status: "active" | "leave";
  initials: string;
};

export type Project = {
  id: string;
  name: string;
  clientId: string;
  leadId: string;
  status: ProjectStatus;
  progress: number;
  due: string;
  budget: number;
};

export type FileItem = {
  id: string;
  name: string;
  kind: "folder" | "pdf" | "sheet" | "image" | "doc";
  ownerId: string;
  updated: string;
  size: string;
};

export type Activity = {
  id: string;
  kind: ActivityKind;
  actorId: string;
  summary: string;
  at: string;
};

export type Role = {
  key: RoleKey;
  name: string;
  description: string;
  members: number;
  permissions: string[];
};
