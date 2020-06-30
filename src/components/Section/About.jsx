import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from "gatsby"
import Typed from 'react-typed'
import { Profile } from '../../assets/Images/ImagesLibrary'
/**
 * @component
 * @type {import('react').FunctionComponent}
 * @param {object} props
 * @param {string} props.siteTitle
 */
const About = ({ about }) => {
  return (
    <section id='about' className='about'>
      <div className='container' data-aos='fade-up'>
        <div className='section-title'>
          <h2>About</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className='row'>
          <div className='col-lg-4'>
            <img src={Profile} className='img-fluid' alt='' />
          </div>
          <div className='col-lg-8 pt-4 pt-lg-0 content'>
            <h3>{about.desination}</h3>
            <p className='font-italic'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className='row'>
              <div className='col-lg-6'>
                <ul>
                  <li>
                    <i className='icofont-rounded-right'></i>
                    <strong>Birthday:</strong> {about.birthday}
                  </li>
                  <li>
                    <i className='icofont-rounded-right'></i>
                    <strong>Website:</strong> {about.website}
                  </li>

                  <li>
                    <i className='icofont-rounded-right'></i>
                    <strong>City:</strong> {about.city}
                  </li>
                </ul>
              </div>
              <div className='col-lg-6'>
                <ul>
                  <li>
                    <i className='icofont-rounded-right'></i>
                    <strong>Degree:</strong> {about.degree}
                  </li>
                  <li>
                    <i className='icofont-rounded-right'></i>
                    <strong>Email:</strong>{' '}
                    <a href={`mailto:${about.email}`}>{about.email}</a>
                  </li>
                  <li>
                    <i className='icofont-rounded-right'></i>
                    <strong>Freelance:</strong> {about.freelance}
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio
              vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
              incidunt officia tempore. Et eius omnis. Cupiditate ut dicta
              maxime officiis quidem quia. Sed et consectetur qui quia
              repellendus itaque neque. Aliquid amet quidem ut quaerat
              cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium
              dolores.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// About.propTypes = {
//   about: PropTypes.object
// }

// About.defaultProps = {
//   about: {}
// }

export default About

