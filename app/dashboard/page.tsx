import { getServerSession } from "next-auth";
import { authOptions } from "@/src/auth.config";
import { redirect } from "next/navigation";
import LogoutButton from "../components/LogoutButton";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>
      <p>Welcome, {session.user?.name}</p>

      <LogoutButton />
    </div>
  );
}
