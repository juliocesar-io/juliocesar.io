/** @jsx jsx */
import * as React from "react"
import { jsx, Box } from "theme-ui"
import { Link } from "gatsby"

type BlogListItemProps = {
  post: {
    title: string;
    yearOfPub: number;
    publisherLink: string;
    publisherName: string;
    authorsList?: string;
    codeUrl?: string;
    slides?: string;
  }
  showTags?: boolean
}

const ResearchItem = ({ post, showTags = true }: BlogListItemProps) => (
  <Box mb={4}>
    <Link to={post.publisherLink} sx={(t) => ({ fontSize: [1, 1, 1], color: `text`, fontWeight: `bold` })}>
      {post.title}
    </Link>
    <br />
    <small>{post.authorsList}</small>
    <p sx={{ color: `secondary`, mt: 1, a: { color: `secondary` }, fontSize: [0, 0, 0] }}>
      <time>{post.publisherName}, {post.yearOfPub} </time>  
      {post.codeUrl && (
        <React.Fragment>
           -  [<Link to={post.codeUrl}>Code</Link>] 
        </React.Fragment>
      )}
      {post.slides && (
        <React.Fragment>
          -  [<Link to={post.slides}>Slides</Link>] 
        </React.Fragment>
      )}
    </p>
  </Box>
)

export default ResearchItem