import redis from "@/lib/redis";
import { formatViews } from "@/lib/format";

export async function getViewsForPost(postId: string): Promise<number> {
  if (!redis) return 0;
  const raw = await redis.hget("views", postId);
  return Number(raw ?? 0);
}

export async function getFormattedViewsForPost(postId: string): Promise<string> {
  const views = await getViewsForPost(postId);
  return formatViews(views);
}
