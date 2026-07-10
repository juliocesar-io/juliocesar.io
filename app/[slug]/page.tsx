import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import { getAllPosts, getPostBySlug } from "@/lib/content";
import { formatDate } from "@/lib/format";
import { mdxComponents } from "@/components/mdx-components";
import { PostViewsMeta } from "@/components/post-views-meta";
import { getFormattedViewsForPost } from "@/lib/views";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.meta.title,
    description: post.meta.description,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }
  const defaultViews = await getFormattedViewsForPost(post.meta.id);

  return (
    <article className="post-page">
      <h1>{post.meta.title}</h1>
      <div className="post-meta-row">
        <div className="post-meta-left">
          <a href="https://x.com/juliocesar_io" rel="noreferrer" target="_blank">
            @juliocesar_io
          </a>
          <span className="post-meta-sep">|</span>
          <span>{formatDate(post.meta.date)}</span>
          {post.meta.tags.length > 0 ? (
            <>
              <span className="post-meta-sep">|</span>
              <span>{post.meta.tags.join(", ")}</span>
            </>
          ) : null}
        </div>
        <div className="post-meta-right">
          <PostViewsMeta defaultViews={defaultViews} postId={post.meta.id} />
        </div>
      </div>
      <div className="post-body">
        <MDXRemote components={mdxComponents} source={post.content} />
      </div>
    </article>
  );
}
