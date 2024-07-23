import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MDBIcon } from 'mdb-react-ui-kit';

export default function Education() {

  

  return (
    <div >
<VerticalTimeline>
<VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2022 - 2023"
    iconStyle={{ background: 'radial-gradient(circle, rgba(66,136,150,1) 0%, rgba(31,20,62,1) 84%, rgba(31,5,26,1) 100%)', color: '#fff' }}
    contentStyle={{ background: 'radial-gradient(circle, rgba(66,136,150,1) 0%, rgba(31,20,62,1) 84%, rgba(31,5,26,1) 100%)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgba(31,20,62,1)' }}
   icon={<MDBIcon className='d-flex justify-content-center mt-4' size='2xl' fas icon="user-graduate" />}>
    <h3 className="vertical-timeline-element-title">Master <span className='h6'> (in progress ...)</span></h3>
    <h4 className="vertical-timeline-element-subtitle"> </h4>
    <p>
     software engineering
    </p>
  </VerticalTimelineElement>
<VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2022 - 2023"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<MDBIcon className='d-flex justify-content-center mt-4' size='2xl' fas icon="user-graduate" />}>
    <h3 className="vertical-timeline-element-title">Bachelor's degree</h3>
    <h4 className="vertical-timeline-element-subtitle">University of Science</h4>
    <p>
     Computer science
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2020 - 2022"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<MDBIcon className='d-flex justify-content-center mt-4' size='2xl' fas icon="user-graduate" />}>
    <h3 className="vertical-timeline-element-title">University diploma of technology</h3>
    <h4 className="vertical-timeline-element-subtitle">Advanced school of technology</h4>
    <p>
     Computer science : DATABASES ADMINISTRATION

    </p>
  </VerticalTimelineElement>
  
 
</VerticalTimeline>

    </div>
  );
}