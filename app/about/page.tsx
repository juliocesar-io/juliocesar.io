import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";

import { getAboutContent } from "@/lib/content";
import { mdxComponents } from "@/components/mdx-components";

export const metadata = {
  title: "Julio César",
};

export default async function AboutPage() {
  const source = await getAboutContent();
  return (
    <article className="about-page">
      <div className="about-layout">
        <div className="about-content post-body">
          <MDXRemote components={mdxComponents} source={source} />
        </div>
        <aside className="about-avatar-wrap" aria-label="Julio César avatar">
          <Image
            src="/static/julio-avatar.png"
            alt="Julio César"
            width={300}
            height={300}
            className="about-avatar"
            priority
          />
        </aside>
      </div>
    </article>
  );
}
