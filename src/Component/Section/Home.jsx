import React from 'react'

import { MDBMask, MDBView } from 'mdbreact'
import Back from '../../Images/background.jpg'
import Profile from '../../Images/Profile.jpg'

export default class Home extends React.Component {
  render () {
    return (
      <section id='home'>
        <MDBView src={Back}>
          <MDBMask overlay='blue-grey-light' className='flex-center flex-column text-black text-center'>
            <img src={Profile} alt='Logo Full' style={{ width: '185px', 'border-radius': '110px' }} />
            <div className='grid-container white-text'>
              <h1>Muhammad Usama Ashraf</h1>
              <h2>Software Engineer</h2>
            </div>
          </MDBMask>
        </MDBView>

      </section>
    )
  }
}
