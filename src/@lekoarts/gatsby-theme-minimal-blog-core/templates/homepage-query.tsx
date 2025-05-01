import { graphql } from "gatsby"
import HomepageComponent, { Head } from "@lekoarts/gatsby-theme-minimal-blog-core/src/components/homepage"

export default HomepageComponent

export { Head }

export const query = graphql`
  query ($formatString: String!) {
    allPost(sort: { date: DESC }, limit: 10 ) {
      nodes {
        slug
        title
        date(formatString: $formatString)
        excerpt
        timeToRead
        description
        tags {
          name
          slug
        }
      }
    }
  }
`