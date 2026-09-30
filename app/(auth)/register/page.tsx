"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export default function RegisterPage() {
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
        <h2 className="text-2xl font-medium tracking-tight">Create workspace</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Starts a Northline-style operations desk.
        </p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="name">Full name</Label>
        <Input id="name" defaultValue="Maya Chen" autoComplete="name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="company">Company</Label>
        <Input id="company" defaultValue="Northline" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" defaultValue="maya@northline.studio" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" defaultValue="••••••••" />
      </div>
      <Button type="submit" className="h-11">
        Create workspace
      </Button>
      <p className="text-sm text-muted-foreground">
        Already have access?{" "}
        <Link href="/login" className="text-foreground underline-offset-4 hover:underline">
          Sign in
        </Link>
      </p>
    </form>
  );
}
