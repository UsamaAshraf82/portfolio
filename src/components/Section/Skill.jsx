import React from 'react'

import { ProgressBar } from 'react-bootstrap'
// import PropTypes from 'prop-types'
// // import { Link } from "gatsby"
// import Typed from 'react-typed'
// import { Profile } from '../../assets/Images/ImagesLibrary'
/**
 * @component
 * @type {import('react').FunctionComponent}
 * @param {object} props
 * @param {string} props.siteTitle
 */
const Skill = ({ skills }) => {
  return (
    <section id='skills' className='skills section-bg'>
      <div className='container' data-aos='fade-up'>
        <div className='section-title'>
          <h2>Skills</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className='row skills-content'>
          {skills &&
            skills.map(({ skill, value }, index) => (
              <div className='col-lg-6' key={index}>
                <div className='progress'>
                  <span className='skill'>
                    {skill} <i className='val'>{value}%</i>
                  </span>
                  <div className='progress-bar-wrap'>
                    <ProgressBar now={value} min={0} max={100} />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Skill

