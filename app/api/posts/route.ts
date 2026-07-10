import { NextResponse } from "next/server";

import { getHomeEntries } from "@/lib/content";
import { formatViews } from "@/lib/format";
import redis from "@/lib/redis";

type Views = Record<string, string>;

export async function GET() {
  const entries = await getHomeEntries();
  const allViews: Views | null = redis ? await redis.hgetall("views") : null;

  const enriched = entries.map((entry) => {
    const views = Number(allViews?.[entry.id] ?? 0);
    return {
      ...entry,
      views,
      viewsFormatted: formatViews(views),
    };
  });

  return NextResponse.json({ entries: enriched });
}
