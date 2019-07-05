import React from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';


import Approsoft from '../../Images/Experience/Approsoft.png';

export default class Experience extends React.Component {
    render() {
        return (
            <section className="container section" id="experience">
                <h3>Experience</h3>
               <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Jul 2018 - Aug 2019"
                        iconStyle={{ background :'#6e665b' }}
                        icon = {<img src={Approsoft} alt="Approsoft" />}
                    >
                        <h1 className="vertical-timeline-element-title">FrontEnd Intern</h1>
                        <h4 className="vertical-timeline-element-subtitle">
                            Approsoft 
                            <a href='https://www.approsoft.com'><FontAwesomeIcon icon={faLink}/></a>
                        </h4>
                   
                    </VerticalTimelineElement>

               
                </VerticalTimeline> 
            </section >
        );
    }
}
