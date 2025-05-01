// components/header.tsx
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server"; // Updated import
import { Button } from "@/components/ui/button";

export async function Header() {
  const { userId } = await auth(); // Now correctly imported

  return (
    <header className="border-b">
      <div className="container flex items-center justify-between h-16">
        <Link href="/">Carolinian Events</Link>
        
        <div className="flex gap-4">
          {userId ? (
            <>
              <Button asChild variant="ghost">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <UserButton afterSignOutUrl="/" />
            </>
          ) : (
            <>
              <Button asChild variant="outline">
                <Link href="/sign-in">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/sign-up">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}