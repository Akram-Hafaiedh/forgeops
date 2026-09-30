"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { navItems, settingsItem } from "@/lib/nav";
import { cn } from "@/lib/utils";

function isActive(pathname: string, to: string, end?: boolean) {
  if (end) return pathname === to;
  return pathname === to || pathname.startsWith(`${to}/`);
}

export function Sidebar({
  collapsed,
  onToggle,
  onNavigate,
}: {
  collapsed: boolean;
  onToggle: () => void;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col bg-sidebar text-sidebar-foreground">
      <div
        className={cn(
          "flex items-center gap-2 px-3 py-4",
          collapsed ? "justify-center" : "justify-between",
        )}
      >
        <Link href="/" onClick={onNavigate} className="min-w-0">
          <Logo collapsed={collapsed} />
        </Link>
        {!collapsed ? (
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="size-8 shrink-0"
            onClick={onToggle}
            aria-label="Collapse sidebar"
          >
            <ChevronsLeft className="size-4" />
          </Button>
        ) : null}
      </div>
      <nav className="flex flex-1 flex-col gap-1 px-2">
        {navItems.map((item) => {
          const active = isActive(pathname, item.to, "end" in item && item.end);
          const link = (
            <Link
              key={item.to}
              href={item.to}
              onClick={onNavigate}
              className={cn(
                "flex h-10 items-center gap-3 rounded-md px-2.5 text-sm transition-colors duration-150",
                collapsed && "justify-center px-0",
                active
                  ? "bg-sidebar-accent text-foreground"
                  : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground",
              )}
            >
              <item.icon className="size-4 shrink-0" />
              {!collapsed ? <span>{item.label}</span> : null}
            </Link>
          );
          if (!collapsed) return link;
          return (
            <Tooltip key={item.to}>
              <TooltipTrigger asChild>{link}</TooltipTrigger>
              <TooltipContent side="right">{item.label}</TooltipContent>
            </Tooltip>
          );
        })}
      </nav>
      <div className="px-2 pb-3">
        <Separator className="mb-2 bg-sidebar-border" />
        {collapsed ? (
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={settingsItem.to}
                onClick={onNavigate}
                className={cn(
                  "flex size-10 items-center justify-center rounded-md text-muted-foreground hover:bg-sidebar-accent hover:text-foreground",
                  isActive(pathname, settingsItem.to) &&
                    "bg-sidebar-accent text-foreground",
                )}
              >
                <settingsItem.icon className="size-4" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        ) : (
          <Link
            href={settingsItem.to}
            onClick={onNavigate}
            className={cn(
              "flex h-10 items-center gap-3 rounded-md px-2.5 text-sm text-muted-foreground hover:bg-sidebar-accent hover:text-foreground",
              isActive(pathname, settingsItem.to) &&
                "bg-sidebar-accent text-foreground",
            )}
          >
            <settingsItem.icon className="size-4" />
            Settings
          </Link>
        )}
        {collapsed ? (
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="mt-1 w-full"
            onClick={onToggle}
            aria-label="Expand sidebar"
          >
            <ChevronsRight className="size-4" />
          </Button>
        ) : null}
      </div>
    </div>
  );
}
