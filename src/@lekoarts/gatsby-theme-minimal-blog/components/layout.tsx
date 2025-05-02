/** @jsx jsx */
import * as React from "react"
import { Global } from "@emotion/react"
import { Box, Container, jsx, get } from "theme-ui"
import { MDXProvider } from "@mdx-js/react"
import MdxComponents from "@lekoarts/gatsby-theme-minimal-blog/src/components/mdx-components"
import Header from "./header"
import Footer from "./footer"
import CodeStyles from "@lekoarts/gatsby-theme-minimal-blog/src/styles/code"
import SkipNavLink from "@lekoarts/gatsby-theme-minimal-blog/src/components/skip-nav"
import { Analytics } from "@vercel/analytics/react"

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className = `` }: LayoutProps) => (
  <MDXProvider components={MdxComponents}>
    <Global
      styles={(t) => ({
        "*": {
          boxSizing: `inherit`,
        },
        "[hidden]": {
          display: `none`,
        },
        "::selection": {
          backgroundColor: get(t, `colors.text`),
          color: get(t, `colors.background`),
        },
      })}
    />
    <SkipNavLink>Skip to content</SkipNavLink>
    <Container 
    sx={{
      maxWidth: '680px',
    }}
    >
      <Header />
      <Box id="skip-nav" as="main" variant="layout.main" sx={{ ...CodeStyles }} className={className}>
        {children}
        <Analytics />
      </Box>
      <Footer />
    </Container>
  </MDXProvider>
)

export default Layout
