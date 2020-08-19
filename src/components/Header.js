import PropTypes from 'prop-types'
import React from 'react'
import Typed from 'react-typed'
import My_Data from '../My_Data'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fas fa-laptop-code"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>{My_Data.name}</h1>
        <Typed
          strings={My_Data.who}
          loop
          typeSpeed={100}
          backDelay={1000}
          backSpeed={50}
        />
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>

        {/* <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li> */}
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
