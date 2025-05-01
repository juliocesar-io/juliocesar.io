/** @jsx jsx */
import { jsx } from "theme-ui"
import BlogListItem from "./blog-list-item"

type ListingProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }[]
  className?: string
  showTags?: boolean
  tagFilter?: string
}

const Listing = ({ posts, className = ``, showTags = true, tagFilter }: ListingProps) => {
  const filteredPosts = tagFilter 
    ? posts.filter(post => post.tags?.some(tag => tag.name === tagFilter))
    : posts

  return (
    <section  className={className}>
      {filteredPosts.map((post) => (
        <BlogListItem key={post.slug} post={post} showTags={showTags} />
      ))}
    </section>
  )
}

export default Listing
