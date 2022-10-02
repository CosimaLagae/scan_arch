import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  picture,
  info,
  flex
} from '../index.module.css'


const IndexPage = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.image)
  const image2 = getImage(data.mdx.frontmatter.image2)

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className={flex}>
        <div className={picture}>
          <GatsbyImage
            image={image}
            alt={data.mdx.frontmatter.image_alt}
          />
          <GatsbyImage
            image={image2}
            alt={data.mdx.frontmatter.image_alt}
          />
        </div>
        <div className={info}>
          <h2>{data.mdx.frontmatter.title} </h2>
          <p>{data.mdx.frontmatter.date}</p>
          {children}
        </div>
      </div>

    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      date(formatString: "MMMM D, YYYY")
      image_alt
      image_credit_link
      image {
        childImageSharp {
          gatsbyImageData(quality: 100, height: 600)
        }
      }
      image2 {
        childImageSharp {
          gatsbyImageData(quality: 100, height: 600)
        }
      }
    }
  }
}


`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default IndexPage