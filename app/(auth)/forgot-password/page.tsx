"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";


export default function ForgotPage() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div>
        <h2 className="text-2xl font-medium tracking-tight">Reset password</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          We’ll send a reset link to the demo inbox.
        </p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" defaultValue="maya@northline.studio" />
      </div>
      <Button type="submit" className="h-11">
        Send link
      </Button>
      {sent ? (
        <p className="text-sm text-success">Reset link queued for Maya Chen.</p>
      ) : null}
      <Link href="/login" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
        Back to sign in
      </Link>
    </form>
  );
}
