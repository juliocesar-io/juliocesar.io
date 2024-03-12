/** @jsx jsx */
import { jsx } from "theme-ui"
import { HeadFC, Link } from "gatsby"
import Layout from "./layout"
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title"
import Listing from "@lekoarts/gatsby-theme-minimal-blog/src/components/listing"
import List from "./list"
import Research from "./research"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import { visuallyHidden } from "@lekoarts/gatsby-theme-minimal-blog/src/styles/utils"
import Seo from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"
import { Box, Text, Flex, Image } from 'theme-ui'

import { researchData } from '../../../data/research'


export type MBHomepageProps = {
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
}

const Homepage = ({ posts }: MBHomepageProps) => {

  const { basePath, blogPath } = useMinimalBlogConfig()
  const { siteTitle } = useSiteMetadata()

  return (
    <Layout>
      <h1 sx={visuallyHidden}>{siteTitle}</h1>
      <section  sx={{ p: { fontSize: [1, 2, 3], mt: 2 }, variant: `section_hero` }}>
        <Flex>
            <Box p={1} >
            <Image src="/img/avatar.jpeg" variant="avatar"  sx={{
                width: [180, 180, 210],
                height: [180, 180, 210],
                borderRadius: 9999,
                float: `left`,
                marginTop: '110px',
                marginRight: 4,
                display: 'inline',
                boxShadow: `lg`
            
            }}/>
            <br /> <br />
            <Text children={`Julio César`} sx={{ fontSize: [3, 4, 5], fontWeight: `bold`, color: `heading` }} />
            <br /> <br />
            <Text
                    style={{ textAlign: 'left'}}
                    sx={{
                        fontSize: 1,
                        display: 'inline',
                        
                    }}
                    >
                    
                    Integration Engineer at <a href="https://thirdway.health/" target="_blank">Thirdway Health</a>, 
                    where I lead a small team that mostly focuses on data pipelines and APIs. 
                    Currently a M.Sc. student in Biomedical Engineering 
                    at <a href="https://uniandes.edu.co/en" target="_blank">Uniandes</a>, 
                    doing research in AI Drug Design. <br /> <br />

                    Before that, I worked at <a href="https://www.globant.com/">Globant</a> as a Bioscientist, where I was part of the founding team of the <a href="https://www.globant.com/studio/healthcare-life-sciences">Life Sciences Studio</a>, 
                    did research on architectural design and AI in healthcare, and collaborated with  <a href="https://verily.com/">Verily</a> (an Alphabet company) on a <a href="https://fhir.org/">FHIR</a> implementation for Clinical Pathways.

                    <br /> <br />

                   <ul>
                    <li> ✉️ <a href="mailto:jc@juliocesar.io">jc@juliocesar.io</a></li>
                    <li> 𝕏 <a href="https://twitter.com/juliocesar_io">juliocesar_io</a></li>
                   </ul>
                </Text>
            </Box>
        </Flex>
      </section>
      <Title text="Research">
       
      </Title>

      <Research posts={researchData} showTags={false}  />
      <Title text="Latest Posts">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>Read all</Link>
      </Title>
     
      
     
    </Layout>
  )
}



export default Homepage

export const Head: HeadFC = () => <Seo />