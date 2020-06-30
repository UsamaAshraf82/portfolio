import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from "gatsby"
import Typed from 'react-typed'

/**
 * @component
 * @type {import('react').FunctionComponent}
 * @param {object} props
 * @param {string} props.siteTitle
 */
const Hero = ({ name, who, social }) => {
  return (
    <section id='hero' className='d-flex flex-column justify-content-center'>
      <div className='container heroContainer'>
        <h1>{name}</h1>
        <p>
          I'm{' '}
          <Typed
            strings={who}
            loop
            typeSpeed={100}
            backDelay={1000}
            backSpeed={50}
          />
        </p>
        <div className='social-links'>
          <a
            href={`https://www.facebook.com/${social.facebook}`}
            target='_blank'
            rel='noopener noreferrer'
            className='facebook'
          >
            <i className='bx bxl-facebook'></i>
          </a>
          <a
            href={`https://www.twitter.com/${social.twitter}`}
            target='_blank'
            rel='noopener noreferrer'
            className='twitter'
          >
            <i className='bx bxl-twitter'></i>
          </a>
          <a
            href={`https://www.instagram.com/${social.instagram}`}
            target='_blank'
            rel='noopener noreferrer'
            className='instagram'
          >
            <i className='bx bxl-instagram'></i>
          </a>
          <a
            href={`https://www.github.com/${social.github}`}
            target='_blank'
            rel='noopener noreferrer'
            className='github'
          >
            <i className='bx bxl-github'></i>
          </a>
          <a
            href={`https://www.linkedin.com/in/${social.linkedin}`}
            target='_blank'
            rel='noopener noreferrer'
            className='linkedin'
          >
            <i className='bx bxl-linkedin'></i>
          </a>
          <a
            href={`https://api.whatsapp.com/send?phone=${social.whatsapp}`}
            target='_blank'
            rel='noopener noreferrer'
            className='whatsapp'
          >
            <i className='bx bxl-whatsapp'></i>
          </a>
        </div>
      </div>
    </section>
  )
}

Hero.propTypes = {
  name: PropTypes.string,
  who: PropTypes.arrayOf(PropTypes.string),
  social: PropTypes.objectOf(PropTypes.string)
}

Hero.defaultProps = {
  name: ``,
  who: [``],
  social: {
    facebook: ``,
    twitter: ``,
    instagram: ``,
    github: ``,
    linkedin: ``,
    whatsapp: ``
  }
}

export default Hero

