"use client";

import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { clients, team } from "@/lib/data/demo";
import { navItems, settingsItem } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("forge:open-command", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("forge:open-command", onOpen);
    };
  }, []);

  const go = (to: string) => {
    setOpen(false);
    router.push(to);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden h-9 min-w-48 items-center gap-2 rounded-md border border-border bg-background px-3 text-left text-sm text-muted-foreground transition-colors hover:bg-muted md:flex"
      >
        <Search className="size-3.5" />
        <span className="flex-1">Search</span>
        <kbd className="rounded-sm border border-border px-1.5 py-0.5 font-mono text-[10px]">
          ⌘K
        </kbd>
      </button>
      {open ? (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            aria-label="Close search"
            className="absolute inset-0 bg-background/70"
            onClick={() => setOpen(false)}
          />
          <div className="relative mx-auto mt-[12vh] w-[min(520px,calc(100%-2rem))] overflow-hidden rounded-xl bg-popover shadow-(--shadow-border)">
            <Command className="text-popover-foreground" label="Command menu">
              <div className="flex items-center gap-2 border-b border-border px-3">
                <Search className="size-4 text-muted-foreground" />
                <Command.Input
                  autoFocus
                  placeholder="Jump to a page, client, or person"
                  className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
              <Command.List className="max-h-80 overflow-y-auto p-2">
                <Command.Empty className="px-3 py-8 text-center text-sm text-muted-foreground">
                  Nothing matches.
                </Command.Empty>
                <Command.Group
                  heading="Pages"
                  className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:text-muted-foreground"
                >
                  {[...navItems, settingsItem].map((item) => (
                    <Command.Item
                      key={item.to}
                      value={item.label}
                      onSelect={() => go(item.to)}
                      className={cn(
                        "flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-sm data-[selected=true]:bg-muted",
                      )}
                    >
                      <item.icon className="size-4 text-muted-foreground" />
                      {item.label}
                    </Command.Item>
                  ))}
                </Command.Group>
                <Command.Group
                  heading="Clients"
                  className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:text-muted-foreground"
                >
                  {clients.map((c) => (
                    <Command.Item
                      key={c.id}
                      value={`${c.name} ${c.industry}`}
                      onSelect={() => go(`/clients/${c.id}`)}
                      className="flex cursor-pointer items-center justify-between rounded-md px-2 py-2 text-sm data-[selected=true]:bg-muted"
                    >
                      <span>{c.name}</span>
                      <span className="text-xs text-muted-foreground">{c.industry}</span>
                    </Command.Item>
                  ))}
                </Command.Group>
                <Command.Group
                  heading="Team"
                  className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:text-muted-foreground"
                >
                  {team.map((p) => (
                    <Command.Item
                      key={p.id}
                      value={`${p.name} ${p.title}`}
                      onSelect={() => go(`/team/${p.id}`)}
                      className="flex cursor-pointer items-center justify-between rounded-md px-2 py-2 text-sm data-[selected=true]:bg-muted"
                    >
                      <span>{p.name}</span>
                      <span className="text-xs text-muted-foreground">{p.title}</span>
                    </Command.Item>
                  ))}
                </Command.Group>
              </Command.List>
            </Command>
          </div>
        </div>
      ) : null}
    </>
  );
}
