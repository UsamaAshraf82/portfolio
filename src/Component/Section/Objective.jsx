import React from 'react'
import { MDBContainer } from 'mdbreact'

export default class Objective extends React.Component {
  render () {
    return (
      <section className=' text-center my-5' id='objective'>
        <MDBContainer>
          <h1 className='h1-responsive font-weight-bold my-5'>
          My Objective
          </h1>
          <p className='lead grey-text w-responsive mx-auto mb-5 justify-center'>
          To enhance my working capabilities , knowledge and utilize my Skills
          in a organization with learning perspective.
          </p>
        </MDBContainer>
      </section>
    )
  }
}
