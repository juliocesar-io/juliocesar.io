import { NextResponse } from "next/server";

import { formatViews } from "@/lib/format";
import redis from "@/lib/redis";

type Props = {
  params: Promise<{ id: string }>;
};

export async function GET(_: Request, { params }: Props) {
  const { id } = await params;
  if (!id) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (!redis) {
    return NextResponse.json({ ok: true, views: 0, viewsFormatted: "0", source: "local-fallback" });
  }

  const views = Number((await redis.hget("views", id)) ?? 0);
  return NextResponse.json({ ok: true, views, viewsFormatted: formatViews(views) });
}

export async function POST(_: Request, { params }: Props) {
  const { id } = await params;
  if (!id) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (!redis) {
    return NextResponse.json({ ok: true, views: 0, viewsFormatted: "0", source: "local-fallback" });
  }

  const views = await redis.hincrby("views", id, 1);
  return NextResponse.json({ ok: true, views, viewsFormatted: formatViews(Number(views)) });
}
