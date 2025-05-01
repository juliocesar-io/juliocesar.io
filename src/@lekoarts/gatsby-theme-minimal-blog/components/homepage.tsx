/** @jsx jsx */
import { HeadFC, Link } from "gatsby"
import Layout from "./layout"
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title"
import Research from "./research"
import CodeHome from "./codeHome"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
import { visuallyHidden } from "@lekoarts/gatsby-theme-minimal-blog/src/styles/utils"
import Seo from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"
import { Box, Text, Flex, Image, jsx } from 'theme-ui'
import { researchData } from '../../../data/research'
import { codeData } from '../../../data/code'
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import Listing from "./listing"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faXTwitter,
  faGithub,
  faLinkedin,
  faGoogleScholar,
  faOrcid,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faExternalLink } from '@fortawesome/free-solid-svg-icons'

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
            <Text style={{ textAlign: 'left'}} sx={{fontSize: 1, display: 'inline'}}>
                   
                    <span sx={{ 
                      backgroundColor: '#000', 
                      padding: '0 4px', 
                      borderRadius: '4px',
                      color: '#fff',
                      a: { color: '#fff' }
                    }}>Co-Founder & CEO at <a href="https://fastfold.ai/" target="_blank">Fastfold</a></span>, building AI agents for biotech and pharma. ⚛️ Lead Engineer at <a href="https://thirdway.health/" target="_blank">Thirdway Health</a>, 
                    where I lead a small team scaling voice agents for medical practices.
                     M.Sc. in Biomedical Engineering 
                    at <a href="https://uniandes.edu.co/en" target="_blank">Uniandes</a> 🔬 researching in AI Drug Design with small peptides. <br /> <br />
                    Before that, I worked at <a href="https://www.globant.com/">Globant</a> as a Python/Bioscientist, where I was part of the founding team of the <a href="https://www.globant.com/studio/healthcare-life-sciences" target="_blank">Life Sciences Studio</a>. 
                    My work included developing medical imaging with <a href="https://www.nvidia.com/en-us/clara/" target="_blank">Nvidia Clara</a>  🩻 for hospitals, and collaborating with  <a href="https://verily.com/" target="_blank">Verily</a> (an Alphabet company) on a <a href="https://fhir.org/" >FHIR</a> implementation for Clinical Pathways.
                   
                    <ul sx={{
                      listStyleType: 'none',
                      padding: 0,
                      textAlign: 'center',
                      
                      margin: 0,
                      display: 'flex',
                      gap: 3,
                      a: { 
                        textDecoration: 'none',
                        color: 'inherit',
                        '&:hover': { opacity: 0.8 }
                      }
                    }}>
                    <li><a href="mailto:jc@juliocesar.io" aria-label="Email"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                    <li><a href="https://github.com/juliocesar-io" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a></li>
                    </ul>

                </Text>
            </Box>
        </Flex>
      </section>
      <h2>Essays</h2>
      <Listing posts={posts} showTags={false} tagFilter="Essays" />
      <h2>Research</h2>
      <Research posts={researchData} showTags={false}  />
      <h2>Poetry</h2>
      <Listing posts={posts} showTags={false} tagFilter="Poetry" />
      <h2>Code</h2>
      <CodeHome posts={codeData} showTags={false}  />
    </Layout>
  )
}

export default Homepage

export const Head: HeadFC = () => <Seo />