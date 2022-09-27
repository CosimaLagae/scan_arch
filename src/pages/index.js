import * as React from 'react'
import Layout from '../components/layout'
//import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import {Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  navLinks,
  navLinkItem
} from './index.module.css'


const IndexPage =  ({ data }) => {

  return (
    <Layout pageTitle="Home Page">      
      {
        data.allMdx.nodes.map((node) => (
          <article  key={node.id}>
            <ul className={navLinks}>
              <li className={navLinkItem}>
                <Link to={`/scans/${node.frontmatter.slug}`}>
                  <GatsbyImage image={getImage(node.frontmatter.image)}/>
                </Link>
              </li>
            </ul>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
          image {
            childImageSharp {
              gatsbyImageData(width: 200)
            }
          }
          image_alt
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="Home Page" />

export default IndexPage