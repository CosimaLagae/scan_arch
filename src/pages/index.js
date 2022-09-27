import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

import { graphql } from 'gatsby'

const IndexPage =  ({ data }) => {
  return (
    <Layout pageTitle="Home Page"> 
          <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
     
{/*       <StaticImage
        alt="archive pitures of graphic design"
        src="../images/arch/Scan_202110195.jpg"
        className='img'
      /> */}
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export const Head = () => <Seo title="Home Page" />

export default IndexPage