import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact'

class About extends React.Component {
  render () {
    return (
      <section className=' text-center my-5' id='contact'>
        <MDBContainer>
          <h1 className='h1-responsive font-weight-bold my-5'>
            Contact Me
          </h1>
          <MDBRow className=''>
            <MDBCol md='4'>
              <MDBIcon icon='facebook-f' fab size='3x' className='facebook' />
              <h5 className='font-weight-bold my-4 facebook'>Facebook</h5>
              <a className='grey-text' href='https://www.facebook.com/usamaashraf82' target='_blank' rel='noopener noreferrer'>
                usamaashraf82
              </a>
            </MDBCol>
            <MDBCol md='4'>
              <MDBIcon icon='twitter' fab size='3x' className='twitter' />
              <h5 className='font-weight-bold my-4 twitter'>twitter</h5>
              <a className='grey-text' href='https://www.twitter.com/usamaashraf82' target='_blank' rel='noopener noreferrer'>
                @usamaashraf82
              </a>
            </MDBCol>
            <MDBCol md='4'>
              <MDBIcon icon='instagram' fab size='3x' className='instagram' />
              <h5 className='font-weight-bold my-4 instagram'>instagram</h5>
              <a className='grey-text' href='https://www.instagram.com/usamaashraf82' target='_blank' rel='noopener noreferrer'>
                @usamaashraf82
              </a>
            </MDBCol>
          </MDBRow>
          <MDBRow className='mt-3'>
            <MDBCol md='4'>
              <MDBIcon icon='linkedin-in' fab size='3x' className='linkedin' />
              <h5 className='font-weight-bold my-4 linkedin'>linkedin-in</h5>
              <a className='grey-text' href='https://www.linkedin.com/in/muhammad-usama-ashraf-8b8760110/' target='_blank' rel='noopener noreferrer'>
              Muhammad Usama Ashraf
              </a>
            </MDBCol>
            <MDBCol md='4'>
              <MDBIcon icon='skype' fab size='3x' className='skype' />
              <h5 className='font-weight-bold my-4 skype'>skype</h5>
              <p className='grey-text '>
                live:usamaashraf82
              </p>
            </MDBCol>
            <MDBCol md='4'>
              <MDBIcon icon='quora' fab size='3x' className='quora' />
              <h5 className='font-weight-bold my-4 quora'>quora</h5>
              <a className='grey-text' href='https://www.quora.com/profile/Usama-Ashraf-23' target='_blank' rel='noopener noreferrer'>
              Usama-Ashraf-23
              </a>
            </MDBCol>
          </MDBRow>
          <MDBRow className='mt-3'>
            <MDBCol md='6'>
              <MDBIcon icon='stack-overflow' fab size='3x' className='stack' />
              <h5 className='font-weight-bold my-4 stack'>stack-overflow</h5>
              <a className='grey-text' href='https://stackoverflow.com/users/5894166/muhammad-usama-ashraf'>
                   Muhammad Usama Ashraf<br /> Reputation: 28
              </a>
            </MDBCol>
            <MDBCol md='6'>
              <MDBIcon icon='github' fab size='3x' className='github' />
              <h5 className='font-weight-bold my-4 github'>github</h5>
              <a className='grey-text' href='https://github.com/UsamaAshraf82' target='_blank' rel='noopener noreferrer'>
                UsamaAshraf82
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    )
  }
}
export default About
