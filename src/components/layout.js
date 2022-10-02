import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import {
  container,
  // navLinks,
  // navLinkItem,
  // navLinkText,
  siteTitle,
  headlink,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {

    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
      <header className={siteTitle}>
        <Link className={headlink} to="../../">
        {data.site.siteMetadata.title}
        </Link>
      </header>

      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout