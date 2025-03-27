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
import Listing from "@lekoarts/gatsby-theme-minimal-blog/src/components/listing"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faXTwitter,
  faGithub,
  faLinkedin,
  faGoogleScholar,
  faOrcid
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

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
            <Image src="/img/me.png" variant="avatar"  sx={{
                width: [180, 180, 250],
                height: [180, 180, 250],
                borderRadius: 9999,
                float: `left`,
                marginTop: '110px',
                marginRight: 4,
                display: 'inline',
                boxShadow: `lg`
            
            }}/>
            <br /> <br />
            <Text children={`Julio César Castellanos`} sx={{ 
                fontSize: [3, 4, 5], 
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
            <br /> <br />
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
                    at <a href="https://uniandes.edu.co/en" target="_blank">Uniandes</a> 🔬 researching in AI Drug Design with small peptides using Boltz-1, AlphaFold2 and Protein Language Models with LLMs. <br /> <br />
                    Before that, I worked at <a href="https://www.globant.com/">Globant</a> as a Python/Bioscientist, where I was part of the founding team of the <a href="https://www.globant.com/studio/healthcare-life-sciences" target="_blank">Life Sciences Studio</a>. 
                    My work included developing medical imaging with <a href="https://www.nvidia.com/en-us/clara/" target="_blank">Nvidia Clara</a>  🩻 for hospitals, and collaborating with  <a href="https://verily.com/" target="_blank">Verily</a> (an Alphabet company) on a <a href="https://fhir.org/" >FHIR</a> implementation for Clinical Pathways.

                    <ul sx={{
                      listStyleType: 'none',
                      padding: 0,
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
                    <li><a href="https://twitter.com/juliocesar_io" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FontAwesomeIcon icon={faXTwitter} /></a></li>
                    <li><a href="https://github.com/juliocesar-io" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a href="https://www.linkedin.com/in/juliocesar-io/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href="https://scholar.google.com/citations?user=VsNVn08AAAAJ&hl=en" target="_blank" aria-label="Google Scholar"><FontAwesomeIcon icon={faGoogleScholar} /></a></li>
                    <li><a href="https://orcid.org/0000-0003-1547-7197" target="_blank" aria-label="ORCID"><FontAwesomeIcon icon={faOrcid} /></a></li>
                    </ul>
                    <br /> <br />
                </Text>
            </Box>
        </Flex>
      </section>
      <Title text="Research"></Title>
      <Research posts={researchData} showTags={false}  />
      <Title text="Code"></Title>
      <CodeHome posts={codeData} showTags={false}  />
      <Title text="🖋️ Poetry">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>Read all posts</Link>
      </Title>
      <Listing posts={posts} showTags={false} />
    </Layout>
  )
}

export default Homepage

export const Head: HeadFC = () => <Seo />