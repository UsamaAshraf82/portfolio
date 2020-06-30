import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/Layout'
// import Image from '../components/image'
import SEO from '../components/Seo'
import About from '../components/Section/About'
import Skill from '../components/Section/Skill'
import { useStaticQuery, graphql } from 'gatsby'

import PersonalData from '../assets/Data'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='' />
      <About about={PersonalData.about} />
      <Skill skills={PersonalData.skills} />
    </Layout>
  )
}

export default IndexPage
