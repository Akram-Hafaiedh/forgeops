"use client";

import { ThemeProvider } from "@/lib/theme";
import { TooltipProvider } from "./ui/tooltip";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider>
            <TooltipProvider delayDuration={200}>{children}</TooltipProvider>
        </ThemeProvider>
    );
}