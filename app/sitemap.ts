import type { MetadataRoute } from "next";

import { getAllPosts } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();
  const root = "https://juliocesar.io";

  return [
    { url: `${root}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${root}/about/`, changeFrequency: "monthly", priority: 0.8 },
    ...posts.map((post) => ({
      url: `${root}/${post.slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
