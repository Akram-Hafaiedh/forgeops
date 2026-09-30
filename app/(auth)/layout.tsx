import type { ReactNode } from "react";
import { LogoMark } from "@/components/brand/logo";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-dvh lg:grid-cols-[1.05fr_0.95fr]">
      <aside className="relative hidden flex-col justify-between overflow-hidden bg-sidebar px-10 py-10 text-sidebar-foreground lg:flex">
        <div className="flex items-center gap-3">
          <LogoMark />
          <span className="text-sm font-semibold tracking-tight">Forge Ops</span>
        </div>
        <div className="max-w-md">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-steel">
            Internal tools
          </p>
          <h1 className="mt-4 text-4xl font-medium tracking-tight">
            Run the company from one desk.
          </h1>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            Clients, people, files, and permissions — laid out the way operations
            teams actually work.
          </p>
        </div>
        <p className="text-xs text-muted-foreground">Northline workspace · demo</p>
      </aside>
      <main className="relative flex flex-col bg-background">
        <div className="flex items-center justify-between px-5 py-4 lg:justify-end">
          <div className="flex items-center gap-2 lg:hidden">
            <LogoMark className="size-6" />
            <span className="text-sm font-semibold">Forge Ops</span>
          </div>
          <ThemeToggle />
        </div>
        <div className="flex flex-1 items-center justify-center px-5 py-10">
          <div className="w-full max-w-sm">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
