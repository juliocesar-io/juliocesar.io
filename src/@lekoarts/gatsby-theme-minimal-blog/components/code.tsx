
/** @jsx jsx */
import { jsx } from "theme-ui"
import CodeItem from "./code-item";


type ListingProps = {
  posts: {
    markdown: string;
    img: string;
    link: string;
  }[]
  className?: string
  showTags?: boolean
}

const Code = ({ posts, className = ``, showTags = true }: ListingProps) => (
  <section sx={{ }} className={className}>
    {posts.map((post) => (
        <CodeItem key={post.link} post={post} showTags={showTags} />
    ))}
  </section>
)

export default Code