"use client";

import { useState } from "react";
import { registerUser } from "../actions/auth";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      await registerUser(formData);
      router.push("/"); // go to login
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Register</h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 300 }}>
        <input name="name" placeholder="Name" />
        <input name="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}
