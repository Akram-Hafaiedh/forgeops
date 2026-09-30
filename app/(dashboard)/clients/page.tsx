"use client"

import { formatDistanceToNow } from "date-fns";
import { Plus, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/shared/page-header";
import { ClientStatusBadge } from "@/components/shared/status-badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { clients, employeeById } from "@/lib/data/demo";
import type { ClientStatus } from "@/lib/data/types";
import { formatCurrency } from "@/lib/utils";
import Link from "next/link";

const filters: Array<{ key: "all" | ClientStatus; label: string }> = [
  { key: "all", label: "All" },
  { key: "active", label: "Active" },
  { key: "onboarding", label: "Onboarding" },
  { key: "paused", label: "Paused" },
  { key: "archived", label: "Archived" },
];

export default function ClientsPage() {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<(typeof filters)[number]["key"]>("all");

  const rows = useMemo(() => {
    return clients.filter((c) => {
      const matchesQ =
        !q ||
        c.name.toLowerCase().includes(q.toLowerCase()) ||
        c.industry.toLowerCase().includes(q.toLowerCase());
      const matchesStatus = status === "all" || c.status === status;
      return matchesQ && matchesStatus;
    });
  }, [q, status]);

  return (
    <div>
      <PageHeader
        title="Clients"
        description="Accounts, retainers, and owners."
        actions={
          <Button asChild>
            <Link href="/clients/new">
              <Plus className="size-4" />
              New client
            </Link>
          </Button>
        }
      />
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search clients"
            className="pl-9"
          />
        </div>
        <div className="flex flex-wrap gap-1">
          {filters.map((f) => (
            <Button
              key={f.key}
              type="button"
              size="sm"
              variant={status === f.key ? "secondary" : "ghost"}
              onClick={() => setStatus(f.key)}
            >
              {f.label}
            </Button>
          ))}
        </div>
      </div>
      <div className="max-w-full overflow-x-auto rounded-xl bg-card shadow-(--shadow-border)">
        <table className="w-full min-w-180 text-left text-sm">
          <thead className="text-xs uppercase tracking-wide text-muted-foreground">
            <tr>
              <th className="px-5 py-3 font-medium">Client</th>
              <th className="px-5 py-3 font-medium">Owner</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Seats</th>
              <th className="px-5 py-3 text-right font-medium">MRR</th>
              <th className="px-5 py-3 text-right font-medium">Updated</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((c) => (
              <tr key={c.id} className="border-t border-border">
                <td className="px-5 py-3">
                  <Link
                    href={`/clients/${c.id}`}
                    className="font-medium hover:underline"
                  >
                    {c.name}
                  </Link>
                  <p className="text-xs text-muted-foreground">
                    {c.industry} · {c.city}
                  </p>
                </td>
                <td className="px-5 py-3 text-muted-foreground">
                  {employeeById(c.ownerId)?.name}
                </td>
                <td className="px-5 py-3">
                  <ClientStatusBadge status={c.status} />
                </td>
                <td className="px-5 py-3 tabular-nums">{c.seats}</td>
                <td className="px-5 py-3 text-right tabular-nums">
                  {c.mrr ? formatCurrency(c.mrr) : "—"}
                </td>
                <td className="px-5 py-3 text-right text-muted-foreground">
                  {formatDistanceToNow(new Date(c.lastActivity), { addSuffix: true })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {rows.length === 0 ? (
          <p className="px-5 py-10 text-center text-sm text-muted-foreground">
            No clients match those filters.
          </p>
        ) : null}
      </div>
    </div>
  );
}
