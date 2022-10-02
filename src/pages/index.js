import * as React from 'react'
import Layout from '../components/layout'
//import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import {Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  flexi,
  scan,
} from './index.module.css'
import { motion } from "framer-motion"


const IndexPage =  ({ data }) => {

  return (
    <Layout>
      <div className={flexi}>
        {
          data.allMdx.nodes.map((node) => (
              <motion.div 
              initial={{opacity:0}} 
              animate={{opacity:1}}
              transition={{duration:3}} 
              className={scan} 
              key={node.id}>
                <Link to={`/scans/${node.frontmatter.slug}`}>
                  <GatsbyImage image={getImage(node.frontmatter.image)}/>
                </Link>
              </motion.div>
          ))
        }
      </div>
    </Layout>

  )
}

export const query = graphql`
{
  allMdx(sort: {fields: frontmatter___slug, order: ASC}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        slug
        image {
          childImageSharp {
            gatsbyImageData(width: 200, quality: 100)
          }
        }
        image_alt
        image2 {
          childImageSharp {
            gatsbyImageData(width: 200, quality: 100)
          }
        }
      }
      id
      excerpt
    }
  }
}

`

export const Head = () => <Seo title="Home Page" />

export default IndexPage