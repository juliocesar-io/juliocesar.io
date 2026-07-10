import fs from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

const MIME_BY_EXT: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
};

type Props = {
  params: Promise<{ slug: string; asset: string[] }>;
};

export async function GET(_: Request, { params }: Props) {
  const { slug, asset } = await params;
  const baseDir = path.join(process.cwd(), "content", "posts", slug);
  const target = path.resolve(baseDir, ...asset);

  if (!target.startsWith(baseDir)) {
    return NextResponse.json({ error: "Invalid asset path" }, { status: 400 });
  }

  try {
    const buffer = await fs.readFile(target);
    const ext = path.extname(target).toLowerCase();
    const contentType = MIME_BY_EXT[ext] ?? "application/octet-stream";

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
