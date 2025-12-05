"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      style={{ marginTop: 20 }}
    >
      Logout
    </button>
  );
}
