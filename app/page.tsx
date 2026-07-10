import { getHomeEntries } from "@/lib/content";
import { formatViews } from "@/lib/format";
import { Posts } from "@/app/posts";

export const revalidate = 60;

export default async function HomePage() {
  const entries = (await getHomeEntries()).map((entry) => ({
    ...entry,
    views: 0,
    viewsFormatted: formatViews(0),
  }));

  return <Posts entries={entries} />;
}
