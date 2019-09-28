import React from 'react'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { MDBContainer } from 'mdbreact'
import Approsoft from '../../Images/Experience/Approsoft.png'

export default class Experience extends React.Component {
  render () {
    return (
      <section className=' text-center my-5' id='experience'>
        <MDBContainer>
          <h1 className='h1-responsive font-weight-bold my-5'>
          Experience
          </h1>
          <VerticalTimeline>
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              date='Jul 2018 - Aug 2018'
              iconStyle={{ background: '#6e665b' }}
              icon={<img src={Approsoft} alt='Approsoft' />}
            >
              <h1 className='vertical-timeline-element-title'>FrontEnd Intern</h1>
              <h4 className='vertical-timeline-element-subtitle'>
                            Approsoft
                {/* <a href='https://www.approsoft.com'><FontAwesomeIcon icon={faLink}/></a> */}
              </h4>

            </VerticalTimelineElement>

          </VerticalTimeline>
        </MDBContainer>
      </section>
    )
  }
}
