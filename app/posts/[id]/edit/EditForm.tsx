"use client";

import { updatePostAction, deletePostAction } from "@/app/actions/posts";
import { useRouter } from "next/navigation";

export default function EditForm({ post }: any) {
  const router = useRouter();

  async function handleSubmit(e: any) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await updatePostAction(post.id, formData);
    router.push("/posts");
  }

  async function handleDelete() {
    await deletePostAction(post.id);
    router.push("/posts");
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Edit Post</h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 10, width: 300 }}>
        <input name="title" defaultValue={post.title} />
        <textarea name="content" defaultValue={post.content}></textarea>

        <button type="submit">Update</button>
        <button type="button" onClick={handleDelete} style={{ color: "red" }}>
          Delete
        </button>
      </form>
    </div>
  );
}
