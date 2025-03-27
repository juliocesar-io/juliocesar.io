/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by Julio César. with ❤️
      </div>
      <div>
        
        Fork

        {` `}
        me on
        {` `}
        <Link
          aria-label="Link to the theme author's website"
          href="https://github.com/juliocesar-io/juliocesar.io"
        >
          GitHub 
        </Link>
      </div>
    </footer>
  )
}

export default Footer