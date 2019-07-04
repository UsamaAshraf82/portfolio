import React from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';


import Comsats from '../../Images/Education/Comsats.png';
import College from '../../Images/Education/College.png';
import School from '../../Images/Education/School.png';

export default class Education extends React.Component {
    render() {
        return (
            <section className="container section" id="education">
               <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2015 - 2019"
                        iconStyle={{  }}
                        icon = {<img src={Comsats} alt="Comsats" />}
                    >
                        <h3 className="vertical-timeline-element-title">BS in Software Engineering</h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Comsats University Islamabad 
                            <a href='lahore.comsats.edu.pk'><FontAwesomeIcon icon={faLink}/></a>
                        </h4>
                        <p>
                       ????????????????????????????????????
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2013 - 2015"
                        iconStyle={{  }}
                        icon = {<img src={College} alt="College" />}
                    >
                        <h3 className="vertical-timeline-element-title">ICS</h3>
                        <h4 className="vertical-timeline-element-subtitle">
                        Govt. Postgraduate College of Science
                            <a href='www.google.com/search?q=govt+postgraduate+college+of+science+faisalabad'><FontAwesomeIcon icon={faLink}/></a>
                        </h4>
                        <p>
                       ????????????????????????????????????
                        </p>
                    </VerticalTimelineElement>
                    
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2013 - 2015"
                        iconStyle={{  }}
                        icon = {<img src={School} alt="School" />}
                    >
                        <h3 className="vertical-timeline-element-title">Matric</h3>
                        <h4 className="vertical-timeline-element-subtitle">
                        Kamil Foundation Secondary School
                            <a href='www.google.com/search?q=kamil+foundation+secondary+school+faisalabad'><FontAwesomeIcon icon={faLink}/></a>
                        </h4>
                        <p>
                       ????????????????????????????????????
                        </p>
                    </VerticalTimelineElement>

                </VerticalTimeline> 
            </section >
        );
    }
}
