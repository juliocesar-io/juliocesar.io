import Link from "next/link";

export default function NotFoundPage() {
  return (
    <article className="post-page">
      <h1>404</h1>
      <p>That page does not exist.</p>
      <p>
        <Link href="/">Go back home</Link>
      </p>
    </article>
  );
}
