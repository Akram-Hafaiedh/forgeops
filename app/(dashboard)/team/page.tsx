"use client"
import Link from "next/link";
import { PageHeader } from "@/components/shared/page-header";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { team } from "@/lib/data/demo";

export default function TeamPage() {
  return (
    <div>
      <PageHeader title="Team" description="People, roles, and departments." />
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {team.map((person) => (
          <Link
            key={person.id}
            href={`/team/${person.id}`}
            className="flex items-center gap-3 rounded-xl bg-card p-4 shadow-(--shadow-border) transition-colors hover:bg-muted/40"
          >
            <Avatar className="size-11">
              <AvatarFallback>{person.initials}</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <p className="truncate font-medium">{person.name}</p>
                {person.status === "leave" ? <Badge variant="warning">Leave</Badge> : null}
              </div>
              <p className="truncate text-sm text-muted-foreground">{person.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
