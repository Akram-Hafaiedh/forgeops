import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SettingsCompanyPage() {
  return (  
    <Card className="max-w-xl">
      <CardHeader>
        <CardTitle>Company</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="company">Workspace name</Label>
          <Input id="company" defaultValue="Northline" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="domain">Domain</Label>
          <Input id="domain" defaultValue="northline.studio" />
        </div>
        <Button type="button" className="w-fit">
          Save company
        </Button>
      </CardContent>
    </Card>
  );
}
