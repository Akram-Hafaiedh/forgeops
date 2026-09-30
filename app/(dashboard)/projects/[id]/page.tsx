"use client"
import { PageHeader } from "@/components/shared/page-header";
import { ProjectStatusBadge } from "@/components/shared/status-badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { clientById, employeeById, projectById } from "@/lib/data/demo";
import { formatCurrency } from "@/lib/utils";
import Link from "next/link";
import { useParams } from "next/navigation";



export default function ProjectDetailPage() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  if (!id) {
    return <PageHeader title="Project not found" />;
  }
  const project = projectById(id);

  if (!project) {
    return <PageHeader title="Project not found" />;
  }

  const client = clientById(project.clientId);
  const lead = employeeById(project.leadId);

  return (
    <div>
      <PageHeader
        title={project.name}
        description={client?.name}
        actions={
          <>
            <ProjectStatusBadge status={project.status} />
            <Button variant="outline" asChild>
              <Link href="/projects">Back</Link>
            </Button>
          </>
        }
      />
      <Card>
        <CardHeader>
          <CardTitle>Delivery</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Field label="Lead" value={lead?.name ?? "—"} />
          <Field label="Due" value={project.due} />
          <Field label="Budget" value={formatCurrency(project.budget)} />
          <Field label="Progress" value={`${project.progress}%`} />
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
