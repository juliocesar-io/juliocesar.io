import { NextResponse } from "next/server";

import { getHomeEntries } from "@/lib/content";
import { enrichEntriesWithViews } from "@/lib/views";

export const dynamic = "force-dynamic";

export async function GET() {
  const enriched = await enrichEntriesWithViews(await getHomeEntries());

  return NextResponse.json({ entries: enriched });
}
