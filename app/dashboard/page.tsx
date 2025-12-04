"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = () => {
    // Clear cookie (simple way)
    document.cookie = "token=; Max-Age=0; path=/;";
    router.push("/");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard (Protected)</h1>
      <p>You should only see this if you are logged in.</p>
      <br />

      <Link href="/dashboard/settings"> Go to settings</Link>
      <br/><br/>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
