"use client";

import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useTheme } from "@/lib/theme";

export default function SettingsGeneralPage() {
  const { theme } = useTheme();

  return (
    <Card className="max-w-xl">
      <CardHeader>
        <CardTitle>Appearance</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between gap-4">
        <div>
          <Label>Theme</Label>
          <p className="text-sm text-muted-foreground">
            Currently {theme}. Switch without leaving the desk.
          </p>
        </div>
        <ThemeToggle />
      </CardContent>
    </Card>
  );
}
