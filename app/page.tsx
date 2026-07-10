import { getHomeEntries } from "@/lib/content";
import { Posts } from "@/app/posts";
import { enrichEntriesWithViews } from "@/lib/views";

export const revalidate = 60;

export default async function HomePage() {
  const entries = await enrichEntriesWithViews(await getHomeEntries());

  return <Posts entries={entries} />;
}
