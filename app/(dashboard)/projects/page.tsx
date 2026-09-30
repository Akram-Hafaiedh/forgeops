"use client"
import { PageHeader } from "@/components/shared/page-header";
import { ProjectStatusBadge } from "@/components/shared/status-badge";
import { clientById, employeeById, projects } from "@/lib/data/demo";
import { formatCurrency } from "@/lib/utils";
import Link from "next/link";


export default function ProjectsPage() {
  return (
    <div>
      <PageHeader title="Projects" description="Delivery across the book of work." />
      <div className="max-w-full overflow-x-auto rounded-xl bg-card shadow-(--shadow-border)">
        <table className="w-full min-w-180 text-left text-sm">
          <thead className="text-xs uppercase tracking-wide text-muted-foreground">
            <tr>
              <th className="px-5 py-3 font-medium">Project</th>
              <th className="px-5 py-3 font-medium">Client</th>
              <th className="px-5 py-3 font-medium">Lead</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Progress</th>
              <th className="px-5 py-3 text-right font-medium">Budget</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.id} className="border-t border-border">
                <td className="px-5 py-3">
                  <Link
                    href={`/projects/${p.id}`}
                    className="font-medium hover:underline"
                  >
                    {p.name}
                  </Link>
                  <p className="text-xs text-muted-foreground">Due {p.due}</p>
                </td>
                <td className="px-5 py-3 text-muted-foreground">
                  {clientById(p.clientId)?.name}
                </td>
                <td className="px-5 py-3 text-muted-foreground">
                  {employeeById(p.leadId)?.name}
                </td>
                <td className="px-5 py-3">
                  <ProjectStatusBadge status={p.status} />
                </td>
                <td className="px-5 py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-24 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full bg-steel"
                        style={{ width: `${p.progress}%` }}
                      />
                    </div>
                    <span className="tabular-nums text-xs text-muted-foreground">
                      {p.progress}%
                    </span>
                  </div>
                </td>
                <td className="px-5 py-3 text-right tabular-nums">
                  {formatCurrency(p.budget)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
