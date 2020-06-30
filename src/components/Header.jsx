import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Icofont from 'react-icofont'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Nav } from 'react-bootstrap'
/**
 * @component
 * @type {import('react').FunctionComponent}
 * @param {object} props
 * @param {string} props.siteTitle
 */
const Header = ({ siteTitle }) => {
  const [naviagtionState, setNavigationState] = useState(false)
  return (
    <div className={naviagtionState ? 'mobile-nav-active' : ''}>
      <button
        type='button'
        className='mobile-nav-toggle d-xl-none'
        onClick={() => {
          setNavigationState(!naviagtionState)
        }}
      >
        {naviagtionState ? (
          <FontAwesomeIcon icon={['fas', 'times']} size='' />
        ) : (
          <FontAwesomeIcon icon={['fas', 'bars']} size='' />
        )}
      </button>

      <header id='header' className='d-flex flex-column justify-content-center'>
        <Nav className='nav-menu'>
          <div>
            <Nav.Item className='active'>
              <Nav.Link
                href='#hero'
                onClick={() => {
                  setNavigationState(false)
                }}
              >
                <i className='bx bx-home'></i> <span>Home</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href='#about'
                onClick={() => {
                  setNavigationState(false)
                }}
              >
                <i className='bx bx-user'></i> <span>About</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href='#resume'
                onClick={() => {
                  setNavigationState(false)
                }}
              >
                <i className='bx bx-file-blank'></i> <span>Resume</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href='#portfolio'
                onClick={() => {
                  setNavigationState(false)
                }}
              >
                <i className='bx bx-book-content'></i> <span>Portfolio</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href='#services'
                onClick={() => {
                  setNavigationState(false)
                }}
              >
                <i className='bx bx-server'></i> <span>Services</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href='#contact'
                onClick={() => {
                  setNavigationState(false)
                }}
              >
                <i className='bx bx-envelope'></i> <span>Contact</span>
              </Nav.Link>
            </Nav.Item>
          </div>
        </Nav>
      </header>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header

