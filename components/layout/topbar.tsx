"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Bell, LogOut, Menu, Search } from "lucide-react";
import { CommandPalette } from "@/components/shared/command-palette";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { currentUser } from "@/lib/data/demo";

export function Topbar({ onMenu }: { onMenu: () => void }) {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-20 flex h-14 items-center gap-2 border-b border-border bg-background/90 px-3 backdrop-blur-sm sm:px-6">
      <Button
        type="button"
        size="icon"
        variant="ghost"
        className="lg:hidden"
        onClick={onMenu}
        aria-label="Open navigation"
      >
        <Menu className="size-4" />
      </Button>
      <Button
        type="button"
        size="icon"
        variant="ghost"
        className="md:hidden"
        onClick={() => window.dispatchEvent(new Event("forge:open-command"))}
        aria-label="Search"
      >
        <Search className="size-4" />
      </Button>
      <div className="flex-1">
        <CommandPalette />
      </div>
      <ThemeToggle />
      <Button type="button" size="icon" variant="ghost" aria-label="Notifications">
        <Bell className="size-4" />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button type="button" variant="ghost" className="h-10 gap-2 px-1.5">
            <Avatar className="size-8">
              <AvatarFallback>{currentUser.initials}</AvatarFallback>
            </Avatar>
            <span className="hidden text-left text-sm sm:block">
              <span className="block font-medium leading-none">{currentUser.name}</span>
              <span className="text-xs text-muted-foreground">{currentUser.title}</span>
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Workspace</DropdownMenuLabel>
          <DropdownMenuItem asChild>
            <Link href="/settings/profile">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/settings">Settings</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={() => {
              router.push("/login");
            }}
          >
            <LogOut className="size-4" />
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
