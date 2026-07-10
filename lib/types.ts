export type EntryTag = "Poetry" | "Code" | "Research" | string;

export type BaseEntry = {
  id: string;
  title: string;
  date: string;
  year: number;
  tags: EntryTag[];
  description?: string;
  views?: number;
  viewsFormatted?: string;
};

export type PostEntry = BaseEntry & {
  kind: "post";
  slug: string;
  sourcePath: string;
  banner?: string;
};

export type CuratedEntry = BaseEntry & {
  kind: "curated";
  url: string;
};

export type HomeEntry = PostEntry | CuratedEntry;

export type PostWithContent = {
  meta: PostEntry;
  content: string;
};
