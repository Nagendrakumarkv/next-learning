"use client";

import { useSession } from "next-auth/react";
import { createPostAction } from "@/app/actions/posts";
import { useRouter } from "next/navigation";

export default function NewPostPage() {
  const router = useRouter();
  const session = useSession();

  async function handleSubmit(e: any) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    formData.append("authorId", String(session.data?.user?.id ?? "1")); 

    await createPostAction(formData);
    router.push("/posts");
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Create New Post</h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 10, width: 300 }}>
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Content"></textarea>

        <button type="submit">Create</button>
      </form>
    </div>
  );
}
