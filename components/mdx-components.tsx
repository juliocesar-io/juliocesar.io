import type { ComponentPropsWithoutRef } from "react";

function parseImageAlt(rawAlt?: string) {
  const source = (rawAlt ?? "").trim();
  const match = source.match(/^(.*?)(?:\s*\[(\d+)%\])?$/);
  if (!match) return { caption: source, widthPercent: 100 };
  const caption = (match[1] ?? "").trim();
  const widthPercent = match[2] ? Number(match[2]) : 100;
  return { caption, widthPercent };
}

export const mdxComponents = {
  a: (props: ComponentPropsWithoutRef<"a">) => {
    const href = props.href ?? "";
    const isInternal = href.startsWith("/") || href.startsWith("#");
    return <a {...props} rel={isInternal ? undefined : "noreferrer"} target={isInternal ? undefined : "_blank"} />;
  },
  img: (props: ComponentPropsWithoutRef<"img">) => {
    const { caption, widthPercent } = parseImageAlt(props.alt);
    return (
      <span className="post-inline-figure" style={{ maxWidth: `${Math.min(Math.max(widthPercent, 20), 100)}%` }}>
        <img {...props} alt={caption} loading="lazy" />
        {caption ? <span className="post-inline-caption">{caption}</span> : null}
      </span>
    );
  },
};
