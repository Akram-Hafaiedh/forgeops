"use client"
import { PageHeader } from "@/components/shared/page-header";
import { ClientStatusBadge } from "@/components/shared/status-badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { clientById, employeeById, projects } from "@/lib/data/demo";
import { formatCurrency } from "@/lib/utils";
import Link from "next/link";
import { useParams } from "next/navigation";


export default function ClientDetailPage() {
  const { id } = useParams<{ id: string }>();
  const client = clientById(id);

  if (!client) {
    return (
      <PageHeader title="Client not found" description="That record is not in the demo data." />
    );
  }

  const related = projects.filter((p) => p.clientId === client.id);
  const owner = employeeById(client.ownerId);

  return (
    <div>
      <PageHeader
        title={client.name}
        description={`${client.industry} · ${client.city}`}
        actions={
          <>
            <ClientStatusBadge status={client.status} />
            <Button variant="outline" asChild>
              <Link href="/clients">Back</Link>
            </Button>
          </>
        }
      />
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            <Field label="Owner" value={owner?.name ?? "—"} />
            <Field label="Email" value={client.email} />
            <Field label="Seats" value={String(client.seats)} />
            <Field label="MRR" value={client.mrr ? formatCurrency(client.mrr) : "—"} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-6 text-muted-foreground">{client.notes}</p>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Projects</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {related.length === 0 ? (
            <p className="text-sm text-muted-foreground">No projects on this account.</p>
          ) : (
            related.map((p) => (
              <Link
                key={p.id}
                href={`/projects/${p.id}`}
                className="flex items-center justify-between rounded-lg bg-muted/60 px-3 py-3 text-sm hover:bg-muted"
              >
                <span className="font-medium">{p.name}</span>
                <span className="tabular-nums text-muted-foreground">{p.progress}%</span>
              </Link>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm">{value}</p>
    </div>
  );
}
