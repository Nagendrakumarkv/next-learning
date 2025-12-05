import { db } from "@/src/db";
import { posts } from "@/src/db/schema";
import Link from "next/link";

export default async function PostsPage() {
  const allPosts = await db.select().from(posts);

  return (
    <div style={{ padding: 20 }}>
      <h1>Posts</h1>
      <Link href="/posts/new">Create New Post</Link>

      <ul>
        {allPosts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <br />
            <Link href={`/posts/${post.id}/edit`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
