import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

import { curatedCodeEntries, curatedResearchEntries } from "@/lib/curated-content";
import { normalizeTags, rewriteRelativeAssetPaths } from "@/lib/format";
import type { HomeEntry, PostEntry, PostWithContent } from "@/lib/types";

const ROOT = process.cwd();
const POSTS_DIR = path.join(ROOT, "content", "posts");
const ABOUT_PATH = path.join(ROOT, "content", "pages", "about", "index.mdx");

function normalizeDate(raw: unknown): string {
  if (raw instanceof Date && !Number.isNaN(raw.valueOf())) {
    return raw.toISOString().slice(0, 10);
  }
  if (typeof raw === "string") {
    const parsed = new Date(raw);
    if (!Number.isNaN(parsed.valueOf())) return parsed.toISOString().slice(0, 10);
  }
  return "1970-01-01";
}

function makePostFromFrontmatter(
  slug: string,
  sourcePath: string,
  frontmatter: Record<string, unknown>,
): PostEntry {
  const tags = normalizeTags(frontmatter.tags);
  const date = normalizeDate(frontmatter.date);
  return {
    kind: "post",
    id: slug,
    slug,
    sourcePath,
    title: String(frontmatter.title ?? slug),
    description: frontmatter.description ? String(frontmatter.description) : undefined,
    date,
    year: new Date(date).getFullYear(),
    banner: frontmatter.banner ? String(frontmatter.banner) : undefined,
    tags,
  };
}

export async function getAllPosts(): Promise<PostEntry[]> {
  const dirs = await fs.readdir(POSTS_DIR, { withFileTypes: true });
  const posts: PostEntry[] = [];

  for (const dir of dirs) {
    if (!dir.isDirectory()) continue;
    const slug = dir.name;
    const mdxPath = path.join(POSTS_DIR, slug, "index.mdx");
    const mdPath = path.join(POSTS_DIR, slug, "index.md");

    let sourcePath = mdxPath;
    let source: string;

    try {
      source = await fs.readFile(mdxPath, "utf8");
    } catch {
      sourcePath = mdPath;
      source = await fs.readFile(mdPath, "utf8");
    }

    const parsed = matter(source);
    posts.push(makePostFromFrontmatter(slug, sourcePath, parsed.data));
  }

  return posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export async function getPostBySlug(slug: string): Promise<PostWithContent | null> {
  const mdxPath = path.join(POSTS_DIR, slug, "index.mdx");
  const mdPath = path.join(POSTS_DIR, slug, "index.md");

  let sourcePath = mdxPath;
  let source: string;

  try {
    source = await fs.readFile(mdxPath, "utf8");
  } catch {
    try {
      sourcePath = mdPath;
      source = await fs.readFile(mdPath, "utf8");
    } catch {
      return null;
    }
  }

  const parsed = matter(source);
  const meta = makePostFromFrontmatter(slug, sourcePath, parsed.data);
  const content = rewriteRelativeAssetPaths(parsed.content, slug);
  return { meta, content };
}

export async function getHomeEntries(): Promise<HomeEntry[]> {
  const posts = await getAllPosts();
  const entries = [...posts, ...curatedResearchEntries, ...curatedCodeEntries];
  return entries.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export async function getAboutContent(): Promise<string> {
  const source = await fs.readFile(ABOUT_PATH, "utf8");
  const parsed = matter(source);
  return parsed.content;
}
