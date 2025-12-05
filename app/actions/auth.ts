"use server";

import { db } from "@/src/db";
import { users } from "@/src/db/schema";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";

export async function registerUser(formData: FormData) {
  const name = String(formData.get("name") || "");
  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");

  if (!name || !email || !password) {
    throw new Error("All fields are required");
  }

  const existing = await db
    .select()
    .from(users)
    .where(eq(users.email, email));

  if (existing.length > 0) {
    throw new Error("User already exists");
  }

  const passwordHash = await bcrypt.hash(password, 10);

  await db.insert(users).values({
    name,
    email,
    passwordHash,
  });

  return { success: true };
}
