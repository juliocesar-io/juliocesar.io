export function formatViews(views: number): string {
  return new Intl.NumberFormat("en-US").format(views);
}

export function formatDate(date: string): string {
  const parsed = new Date(date);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(parsed);
}

export function normalizeTags(tags: unknown): string[] {
  if (!tags) return [];
  if (Array.isArray(tags)) {
    return tags.map((tag) => String(tag).trim()).filter(Boolean);
  }
  return [String(tags).trim()].filter(Boolean);
}

export function rewriteRelativeAssetPaths(content: string, slug: string): string {
  const mdLinkPattern = /\]\((\.\/[^)\s]+)\)/g;
  const htmlSrcPattern = /src=(["'])(\.\/[^"']+)\1/g;
  const mdImagePattern = /!\[([^\]]*)\]\((\.\/[^)\s]+)\)/g;

  const convert = (rawPath: string) => {
    const cleanPath = rawPath.replace(/^\.\//, "");
    return `/post-assets/${slug}/${cleanPath}`;
  };

  return content
    .replace(mdImagePattern, (_full, alt, rawPath) => `![${alt}](${convert(rawPath)})`)
    .replace(mdLinkPattern, (_full, rawPath) => `](${convert(rawPath)})`)
    .replace(htmlSrcPattern, (_full, quote, rawPath) => `src=${quote}${convert(rawPath)}${quote}`);
}
