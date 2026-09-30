import { formatDistanceToNow } from "date-fns";
import { PageHeader } from "@/components/shared/page-header";
import { activity, employeeById } from "@/lib/data/demo";

export default function ActivityPage() {
  return (
    <div>
      <PageHeader title="Activity" description="A single stream of workspace changes." />
      <ol className="relative space-y-0 border-l border-border pl-6">
        {activity.map((item) => (
          <li key={item.id} className="relative pb-8 last:pb-0">
            <span className="absolute -left-7.25 top-1 size-2.5 rounded-full bg-steel" />
            <p className="text-sm">{item.summary}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              {employeeById(item.actorId)?.name} ·{" "}
              {formatDistanceToNow(new Date(item.at), { addSuffix: true })}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
