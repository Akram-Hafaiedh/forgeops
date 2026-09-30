"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PageHeader } from "@/components/shared/page-header";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const tabs: Array<{ to: "/settings" | "/settings/profile" | "/settings/company" | "/settings/notifications"; label: string; exact?: boolean }> = [
  { to: "/settings", label: "General", exact: true },
  { to: "/settings/profile", label: "Profile" },
  { to: "/settings/company", label: "Company" },
  { to: "/settings/notifications", label: "Notifications" },
];

export default function SettingsLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div>
      <PageHeader
        title="Settings"
        description="Workspace appearance, profile, and company."
      />
      <div className="mb-6 flex flex-wrap gap-1 rounded-lg bg-muted p-1">
        {tabs.map((tab) => {
          const active = tab.exact
            ? pathname === tab.to
            : pathname === tab.to || pathname.startsWith(`${tab.to}/`);
          return (
            <Link
              key={tab.to}
              href={tab.to}
              className={cn(
                "rounded-md px-3 py-2 text-sm",
                active
                  ? "bg-card text-foreground shadow-(--shadow-border)"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>
      {children}
    </div>
  );
}
