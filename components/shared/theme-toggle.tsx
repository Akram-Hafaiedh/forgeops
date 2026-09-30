"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { Button } from "../ui/button";


export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <span className="relative size-4">
        <Sun
          className={
            isDark
              ? "absolute inset-0 size-4 scale-100 opacity-100"
              : "absolute inset-0 size-4 scale-[0.25] opacity-0"
          }
        />
        <Moon
          className={
            isDark
              ? "absolute inset-0 size-4 scale-[0.25] opacity-0"
              : "absolute inset-0 size-4 scale-100 opacity-100"
          }
        />
      </span>
    </Button>
  );
}
