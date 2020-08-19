import PropTypes from 'prop-types'
import React, { useEffect, useCallback } from 'react'
import parse from 'html-react-parser'
import My_Data from '../My_Data'

const Main = props => {
  const close = () => (
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
      aria-hidden="true"
    />
  )

  const closeBtn = useCallback(
    e => {
      if (e.key === 'Escape') {
        props.onCloseArticle()
      }
    },
    [props]
  )

  useEffect(() => {
    if (props.article !== '') {
      document.addEventListener('keydown', closeBtn)
    } else {
      document.removeEventListener('keydown', closeBtn)
    }
  }, [closeBtn, props.article])

  return (
    <div
      ref={props.setWrapperRef}
      id="main"
      style={props.timeout ? { display: 'flex' } : { display: 'none' }}
    >
      {props.article === 'intro' && (
        <article
          id="intro"
          className={`${props.article === 'intro' ? 'active' : ''} ${
            props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <div className="centre">
            <span className="image main">
              <img src={My_Data.avatar} alt="" />
            </span>
          </div>
          {parse(My_Data.intro)}
          <p>
            <button onClick={() => props.changeArticle('work')}>
              Check Out My Works
            </button>
          </p>
          {close()}
        </article>
      )}
      {props.article === 'work' && (
        <article
          id="work"
          className={`${props.article === 'work' ? 'active' : ''} ${
            props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          {My_Data.works.map((work, index) => (
            <div key={index}>
              <h3 className="major">{work.app_name}</h3>
              <span className="image main">
                <img src={work.img} alt="" />
              </span>
              <p>Status : {work.status}</p>
              <p>Work : {work.work}</p>
              <p>{work.description}</p>
              <a href={work.link}>{work.link}</a>
            </div>
          ))}

          {close()}
        </article>
      )}
      {/* {props.article === 'about' && (
        <article
          id="about"
          className={`${props.article === 'about' ? 'active' : ''} ${
            props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close()}
        </article>
      )} */}
      {props.article === 'contact' && (
        <article
          id="contact"
          className={`${props.article === 'contact' ? 'active' : ''} ${
            props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value="Not Ready Yet"
                disabled
              />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                value="Not Ready Yet"
                id="email"
                disabled
              />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                value="Not Ready Yet"
                rows="4"
                disabled
              ></textarea>
            </div>
            <ul className="actions">
              <li>
                <input
                  type="submit"
                  value="Send Message"
                  className="special"
                  disabled
                />
              </li>
              <li>
                <input type="reset" value="Reset" disabled />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href={`https://www.twitter.com/${My_Data.social.twitter}`}
                className="icon fab fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href={`https://www.facebook.com/${My_Data.social.facebook}`}
                className="icon fab fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href={`https://www.instagram.com/${My_Data.social.instagram}`}
                className="icon fab fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href={`https://www.github.com/${My_Data.social.github}`}
                className="icon fab fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href={`https://api.whatsapp.com/send?phone=${My_Data.social.whatsapp}`}
                className="icon fab fa-whatsapp"
              >
                <span className="label">Whatsapp</span>
              </a>
            </li>
            <li>
              <a
                href={`https://www.linkedin.com/${My_Data.social.linkedin}`}
                className="icon fab fa-linkedin"
              >
                <span className="label">Linked In</span>
              </a>
            </li>
          </ul>
          {close()}
        </article>
      )}
    </div>
  )
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  changeArticle: PropTypes.func,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
