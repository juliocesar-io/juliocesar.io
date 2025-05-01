/** @jsx jsx */
import * as React from "react"
import { Box, Text, Flex, Image, jsx } from 'theme-ui'
import ReactMarkdown from 'react-markdown';

type BlogListItemProps = {
  post: {
    markdown: string;
    img: string;
    link: string;
  }
  showTags?: boolean
}

const CodeHomeItem = ({ post, showTags = false }: BlogListItemProps) => (
<Flex>
  <Box mb={4}>
    <a href={post.link} target="_blank">
    <Image src={post.img} variant="avatar"  sx={{
                width: [130, 130, 130],
                height: [130, 130, 130],
              
                float: `left`,
                
                marginRight: 4,

                boxShadow: `lg`
            
            }}/>
    </a>    
    <Text style={{ textAlign: 'left'}} sx={{ display: 'inline'}}>
        <ReactMarkdown>{post.markdown}</ReactMarkdown>
    </Text>
  </Box>
  </Flex>
)

export default CodeHomeItem