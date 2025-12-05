"use server";

import { db } from "@/src/db";
import { posts } from "@/src/db/schema";
import { eq } from "drizzle-orm";

export async function createPostAction(formData: FormData) {
  const title = String(formData.get("title") || "");
  const content = String(formData.get("content") || "");
  const authorId = Number(formData.get("authorId"));

  await db.insert(posts).values({
    title,
    content,
    authorId,
  });

  return { success: true };
}

export async function updatePostAction(id: number, formData: FormData) {
  const title = String(formData.get("title") || "");
  const content = String(formData.get("content") || "");

  await db.update(posts).set({ title, content }).where(eq(posts.id, id));

  return { success: true };
}

export async function deletePostAction(id: number) {
  await db.delete(posts).where(eq(posts.id, id));
  return { success: true };
}
