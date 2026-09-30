import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { ClientStatusBadge, ProjectStatusBadge } from "@/components/shared/status-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  activity,
  clients,
  employeeById,
  projects,
  team,
} from "@/lib/data/demo";
import { formatCurrency } from "@/lib/utils";

export default function OverviewPage() {
  const activeClients = clients.filter((c) => c.status === "active").length;
  const mrr = clients.reduce((sum, c) => sum + c.mrr, 0);
  const atRisk = projects.filter((p) => p.status === "at_risk" || p.status === "blocked").length;

  const stats = [
    { label: "Active clients", value: String(activeClients) },
    { label: "Monthly retainers", value: formatCurrency(mrr) },
    { label: "Open projects", value: String(projects.filter((p) => p.status !== "done").length) },
    { label: "Needs attention", value: String(atRisk) },
  ];

  return (
    <div>
      <PageHeader
        title="Overview"
        description="Northline operations desk for 29 September 2026."
      />
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label}>
            <CardHeader className="pb-2">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                {s.label}
              </p>
              <p className="text-2xl font-medium tabular-nums tracking-tight">{s.value}</p>
            </CardHeader>
          </Card>
        ))}
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
        <Card className="max-w-full overflow-hidden">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>Clients</CardTitle>
            <Link
              href="/clients"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
            >
              All <ArrowUpRight className="size-3.5" />
            </Link>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="w-full min-w-130 text-left text-sm">
              <thead className="text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="pb-3 font-medium">Name</th>
                  <th className="pb-3 font-medium">Owner</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 text-right font-medium">MRR</th>
                </tr>
              </thead>
              <tbody>
                {clients.slice(0, 5).map((c) => (
                  <tr key={c.id} className="border-t border-border">
                    <td className="py-3">
                      <Link
                        href={`/clients/${c.id}`}
                        className="font-medium hover:underline"
                      >
                        {c.name}
                      </Link>
                      <p className="text-xs text-muted-foreground">{c.industry}</p>
                    </td>
                    <td className="py-3 text-muted-foreground">
                      {employeeById(c.ownerId)?.name}
                    </td>
                    <td className="py-3">
                      <ClientStatusBadge status={c.status} />
                    </td>
                    <td className="py-3 text-right tabular-nums">
                      {c.mrr ? formatCurrency(c.mrr) : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Delivery</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {projects.slice(0, 4).map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.id}`}
                  className="block"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="truncate text-sm font-medium">{p.name}</p>
                    <ProjectStatusBadge status={p.status} />
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-steel"
                      style={{ width: `${p.progress}%` }}
                    />
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle>Activity</CardTitle>
              <Link href="/activity" className="text-sm text-muted-foreground hover:text-foreground">
                Feed
              </Link>
            </CardHeader>
            <CardContent className="space-y-4">
              {activity.slice(0, 4).map((item) => (
                <div key={item.id}>
                  <p className="text-sm">{item.summary}</p>
                  <p className="text-xs text-muted-foreground">
                    {employeeById(item.actorId)?.name} ·{" "}
                    {formatDistanceToNow(new Date(item.at), { addSuffix: true })}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
      <p className="mt-6 text-xs text-muted-foreground">
        {team.length} people in the workspace
      </p>
    </div>
  );
}
