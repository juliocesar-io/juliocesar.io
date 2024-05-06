
/** @jsx jsx */
import { jsx } from "theme-ui"
import CodeHomeItem from "./code-home-item";


type ListingProps = {
  posts: {
    markdown: string;
    img: string;
    link: string;
  }[]
  className?: string
  showTags?: boolean
}

const CodeHome = ({ posts, className = ``, showTags = true }: ListingProps) => (
  <section sx={{ }} className={className}>
    {posts.map((post) => (
        <CodeHomeItem key={post.link} post={post} showTags={showTags} />
    ))}
  </section>
)

export default CodeHome