import * as React from 'react'
import Layout from '../components/layout'
//import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

import { graphql } from 'gatsby'

const IndexPage =  ({ data }) => {
  return (
    <Layout pageTitle="Home Page">      
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
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
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="Home Page" />

export default IndexPage