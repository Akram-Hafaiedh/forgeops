"use client"
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { roles } from "@/lib/data/demo";

export default function RolesPage() {
  return (
    <div>
      <PageHeader
        title="Roles"
        description="What each seat can see and change."
      />
      <div className="grid gap-3 lg:grid-cols-2">
        {roles.map((role) => (
          <Card key={role.key}>
            <CardHeader className="flex-row items-start justify-between">
              <div>
                <CardTitle>{role.name}</CardTitle>
                <p className="mt-1 text-sm text-muted-foreground">{role.description}</p>
              </div>
              <Badge variant="outline">{role.members} seats</Badge>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-1.5">
              {role.permissions.map((p) => (
                <Badge key={p} variant="default">
                  {p}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
