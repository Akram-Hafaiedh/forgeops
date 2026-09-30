"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const router = useRouter();

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        router.push("/");
      }}
    >
      <div>
        <h2 className="text-2xl font-medium tracking-tight">Sign in</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Demo workspace — any credentials continue.
        </p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          defaultValue="maya@northline.studio"
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          <Link
            href="/forgot-password"
            className="text-xs text-muted-foreground underline-offset-4 hover:underline"
          >
            Forgot
          </Link>
        </div>
        <Input
          id="password"
          type="password"
          autoComplete="current-password"
          defaultValue="••••••••"
        />
      </div>
      <Button type="submit" className="h-11">
        Continue
      </Button>
      <p className="text-sm text-muted-foreground">
        New workspace?{" "}
        <Link href="/register" className="text-foreground underline-offset-4 hover:underline">
          Create one
        </Link>
      </p>
    </form>
  );
}
