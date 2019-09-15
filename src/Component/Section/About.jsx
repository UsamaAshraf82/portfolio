import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact'

class About extends React.Component {
  render () {
    return (

      <section className=' text-center my-5' id='about'>
        <MDBContainer>
          <h1 className='h1-responsive font-weight-bold my-5'>
            About Me
          </h1>
          <p className='lead grey-text w-responsive mx-auto mb-5 justify-center'>
            I graduated from Comsats University Islamabad, Lahore Campus.
                            Now, I am looking for my first full-time job. I cannot say with 100%
                            confidence where I see myself in five years or what my big career goal is.
                            The world is changing rapidly, and I don’t have enough professional experience
                            to be certain about such things. However, I know that I can provide a fresh take
                             and an extraordinary approach to every project. I am always open to challenges
                             and constructive feedback. I am open-minded and learn new things quickly.
                             I want to become a team player and dedicate all my skills and talents to develop
                             high-quality and unique products
          </p>
          <MDBRow className=''>
            <MDBCol md='4'>
              <MDBIcon icon='baby' size='3x' className='red-text' />
              <h5 className='font-weight-bold my-4'>Born Year</h5>
              <p className='grey-text '>
                1997
              </p>
            </MDBCol>
            <MDBCol md='4'>
              <MDBIcon icon='home' size='3x' className='cyan-text ' />
              <h5 className='font-weight-bold my-4'>Home City</h5>
              <p className='grey-text '>
                Faisalabad
              </p>
            </MDBCol>
            <MDBCol md='4'>
              <MDBIcon icon='at' size='3x' className='orange-text' />
              <h5 className='font-weight-bold my-4'>E-Mail</h5>
              <a href='mailto:usamaashraf82@live.com' className='grey-text'>usamaashraf82@live.com</a>
            </MDBCol>
          </MDBRow>
          <MDBRow className='mt-3'>
            <MDBCol md='1' />
            <MDBCol md='5'>
              <MDBIcon icon='business-time' size='3x' className='red-text' />
              <h5 className='font-weight-bold my-4'>Experience</h5>
              <p className='grey-text '>
              2 Month Internship
              </p>
            </MDBCol>
            <MDBCol md='5'>
              <MDBIcon icon='mobile-alt' size='3x' className='cyan-text' />
              <h5 className='font-weight-bold my-4'>Phone no.</h5>
              <p className='grey-text '>
                0313-0732539
              </p>
            </MDBCol>
            <MDBCol md='1' />
          </MDBRow>
        </MDBContainer>
      </section>
    )
  }
}
export default About
