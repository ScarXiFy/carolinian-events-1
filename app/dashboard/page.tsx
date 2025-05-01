// app/dashboard/page.tsx
import { auth } from "@clerk/nextjs/server"; // Updated import
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  return <h1>Private Dashboard</h1>;
}