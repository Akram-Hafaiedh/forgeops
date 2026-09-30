import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsNotificationsPage() {

const items = [
  { title: "Project at risk", description: "When delivery slips past the agreed date." },
  { title: "New client notes", description: "When an owner updates an account." },
  { title: "File uploads", description: "When a document lands in shared folders." },
];

  return (
    <Card className="max-w-xl">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item) => (
          <label key={item.title} className="flex items-start justify-between gap-4">
            <span>
              <span className="block text-sm font-medium">{item.title}</span>
              <span className="text-sm text-muted-foreground">{item.description}</span>
            </span>
            <input
              type="checkbox"
              defaultChecked
              className="mt-1 size-4 accent-foreground"
            />
          </label>
        ))}
      </CardContent>
    </Card>
  );
}
