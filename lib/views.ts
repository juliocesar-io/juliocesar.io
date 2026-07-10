import redis from "@/lib/redis";
import { formatViews } from "@/lib/format";
import type { HomeEntry } from "@/lib/types";

type RawViews = Record<string, unknown>;

export async function getViewsForPost(postId: string): Promise<number> {
  if (!redis) return 0;
  const raw = await redis.hget("views", postId);
  return Number(raw ?? 0);
}

export async function getFormattedViewsForPost(postId: string): Promise<string> {
  const views = await getViewsForPost(postId);
  return formatViews(views);
}

export async function getAllViews(): Promise<Record<string, number>> {
  if (!redis) return {};
  const raw = (await redis.hgetall("views")) as RawViews | null;
  if (!raw) return {};

  return Object.fromEntries(
    Object.entries(raw).map(([id, value]) => [id, Number(value ?? 0)]),
  );
}

export async function enrichEntriesWithViews(entries: HomeEntry[]): Promise<HomeEntry[]> {
  const viewsById = await getAllViews();

  return entries.map((entry) => {
    const views = Number(viewsById[entry.id] ?? 0);
    return {
      ...entry,
      views,
      viewsFormatted: formatViews(views),
    };
  });
}
