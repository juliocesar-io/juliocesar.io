/** @jsx jsx */
import { HeadFC, Link } from "gatsby"
import Layout from "./layout"
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title"
import Research from "./research"
import Code from "./code"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
import { visuallyHidden } from "@lekoarts/gatsby-theme-minimal-blog/src/styles/utils"
import Seo from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"
import { Box, Text, Flex, Image, jsx } from 'theme-ui'
import { researchData } from '../../../data/research'
import { codeData } from '../../../data/code'


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
            <Image src="/img/file.jpg" variant="avatar"  sx={{
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
            <Text style={{ textAlign: 'left'}} sx={{fontSize: 1, display: 'inline'}}>
                    Integration Engineer at <a href="https://thirdway.health/" target="_blank">Thirdway Health</a>, 
                    where I lead a small team that mostly focuses on scaling APIs for AI agents flows. 
                    Currently a M.Sc. student in Biomedical Engineering 
                    at <a href="https://uniandes.edu.co/en" target="_blank">Uniandes</a> researching in AI Drug Design using Protein LLMs. <br /> <br />
                    Before that, I worked at <a href="https://www.globant.com/">Globant</a> as a Python/Bioscientist, where I was part of the founding team of the <a href="https://www.globant.com/studio/healthcare-life-sciences" target="_blank">Life Sciences Studio</a>. 
                    My work included developing medical imaging with <a href="https://www.nvidia.com/en-us/clara/" target="_blank">Nvidia Clara</a>  for hospitals, and collaborating with  <a href="https://verily.com/" target="_blank">Verily</a> (an Alphabet company) on a <a href="https://fhir.org/" >FHIR</a> implementation for Clinical Pathways.
                    <br /> <br />
                    <ul>
                    <li> ✉️ <a href="mailto:jc@juliocesar.io">jc@juliocesar.io</a></li>
                    <li> 𝕏 <a href="https://twitter.com/juliocesar_io">juliocesar_io</a></li>
                   </ul>
                </Text>
            </Box>
        </Flex>
      </section>
      <Title text="Research"></Title>
      <Research posts={researchData} showTags={false}  />
      <Title text="Code"></Title>
      <Code posts={codeData} showTags={false}  />
    </Layout>
  )
}

export default Homepage

export const Head: HeadFC = () => <Seo />