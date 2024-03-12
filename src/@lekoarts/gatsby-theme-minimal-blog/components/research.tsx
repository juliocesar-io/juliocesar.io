
/** @jsx jsx */
import { jsx } from "theme-ui"
import ResearchItem from "./research-item";


type ListingProps = {
  posts: {
    title: string;
    yearOfPub: number;
    publisherLink: string;
    publisherName: string;
    authorsList?: string;
    codeUrl?: string;
    slides?: string;
  }[]
  className?: string
  showTags?: boolean
}

const Research = ({ posts, className = ``, showTags = true }: ListingProps) => (
  <section sx={{ mb: [5, 6, 7] }} className={className}>
    {posts.map((post) => (
        <ResearchItem key={post.publisherLink} post={post} showTags={showTags} />
    ))}
  </section>
)

export default Research