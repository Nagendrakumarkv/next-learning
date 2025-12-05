import { db } from "@/src/db";
import { posts } from "@/src/db/schema";
import { eq } from "drizzle-orm";
import EditForm from "./EditForm";

export default async function EditPost({ params }: any) {
  const { id } = await params;

  const [post] = await db.select().from(posts).where(eq(posts.id, Number(id)));

  return (
    <EditForm post={post} />
  );
}
