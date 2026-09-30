"use client"
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { employeeById, projects } from "@/lib/data/demo";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function TeamDetailPage() {
  const { id } = useParams<{ id: string }>();
  const person = employeeById(id);

  if (!person) {
    return <PageHeader title="Person not found" />;
  }

  const owned = projects.filter((p) => p.leadId === person.id);

  return (
    <div>
      <PageHeader
        title={person.name}
        description={person.title}
        actions={
          <Button variant="outline" asChild>
            <Link href="/team">Back</Link>
          </Button>
        }
      />
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <Row label="Email" value={person.email} />
            <Row label="Department" value={person.department} />
            <Row label="Location" value={person.location} />
            <Row label="Role" value={person.role} />
            <Row label="Status" value={person.status === "leave" ? "On leave" : "Active"} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Leading</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {owned.length === 0 ? (
              <p className="text-sm text-muted-foreground">No projects as lead.</p>
            ) : (
              owned.map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.id}`}
                  className="block rounded-lg bg-muted/60 px-3 py-2 text-sm hover:bg-muted"
                >
                  {p.name}
                </Link>
              ))
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-muted-foreground">{label}</span>
      <span className="capitalize">{value}</span>
    </div>
  );
}
