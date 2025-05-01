/** @jsx jsx */
import * as React from "react"
import { Box } from "theme-ui"

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
    <a href={post.publisherLink} sx={(t) => ({ fontSize: [1, 1, 1], color: `text` })}>
      {post.title}
    </a>
    <br />
    <small>{post.authorsList}</small>
    <p sx={{ color: `secondary`, mt: 1, a: { color: `secondary` }, fontSize: [0, 0, 0] }}>
      <time>{post.publisherName}, {post.yearOfPub} </time>  
      {post.codeUrl && (
        <React.Fragment>
           -  [<a href={post.codeUrl}>Code</a>] 
        </React.Fragment>
      )}
      {post.slides && (
        <React.Fragment>
          -  [<a href={post.slides}>Slides</a>] 
        </React.Fragment>
      )}
    </p>
  </Box>
)

export default ResearchItem