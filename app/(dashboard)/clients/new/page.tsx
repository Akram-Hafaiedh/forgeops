"use client"
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function NewClientPage() {
  const router = useRouter();

  return (
    <div>
      <PageHeader
        title="New client"
        description="Demo form — nothing is persisted."
        actions={
          <Button variant="outline" asChild>
            <Link href="/clients">Cancel</Link>
          </Button>
        }
      />
      <Card className="max-w-xl">
        <CardContent className="grid gap-4 p-5">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Harbor & Co" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="industry">Industry</Label>
            <Input id="industry" placeholder="Insurance" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input id="city" placeholder="Hamburg" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Ops email</Label>
            <Input id="email" type="email" placeholder="ops@company.example" />
          </div>
          <Button
            type="button"
            onClick={() => {
              router.push("/clients");
            }}
          >
            Save client
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
