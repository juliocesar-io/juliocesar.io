/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import ColorModeToggle from "@lekoarts/gatsby-theme-minimal-blog/src/components/colormode-toggle"
import Navigation from "@lekoarts/gatsby-theme-minimal-blog/src/components/navigation"
import HeaderTitle from "@lekoarts/gatsby-theme-minimal-blog/src/components/header-title"
import HeaderExternalLinks from "@lekoarts/gatsby-theme-minimal-blog/src/components/header-external-links"
import { Text } from "theme-ui"
const Header = () => {
  const { navigation: nav } = useMinimalBlogConfig()

  return (
    <header sx={{ mb: [5, 6], marginBottom: `0px !important`}}>
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>
        <HeaderTitle />
        <Text children={`Julio César`} sx={{ 
                fontSize: [3, 4, 4], 
                fontWeight: `bold`, 
                color: `heading`,
                '&::before': {
                  content: '"|"',
                  animation: 'blink 1s step-end infinite',
                  marginRight: '5px',
                  fontSize: '1.2em'
                },
                '@keyframes blink': {
                  '0%, 100%': { opacity: 1 },
                  '50%': { opacity: 0 }
                }
            }} />
        <ColorModeToggle />
      </Flex>
      <br />
    </header>
  )
}

export default Header