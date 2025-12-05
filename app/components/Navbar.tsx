"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session, status } = useSession();

  // While session is loading, don't flash the navbar
  if (status === "loading") return null;

  // If no session → user is not logged in → hide navbar
  if (!session) return null;

  // If session exists → user is logged in → show navbar
  return (
    <nav
      style={{
        padding: "10px 20px",
        background: "#eee",
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}
    >
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/posts">Posts</Link>
    </nav>
  );
}
