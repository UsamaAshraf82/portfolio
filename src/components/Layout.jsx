/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import 'bootstrap/dist/css/bootstrap.css'
// import 'boxicons/css/boxicons.min.css'
import '../assets/CSS/Site.css'

import '../assets/FaLibrary/FaLibrary'

import Header from './header'
import Hero from './Section/Hero'
import Footer from './Footer'
import PersonalData from '../assets/Data'

/**
 * @component
 * @type {import('react').FunctionComponent}
 * @param {object} props
 * @param {node} props.children
 */
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Hero
        name={PersonalData.name}
        who={PersonalData.who}
        social={PersonalData.social}
      />
      <main id='main'>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout

