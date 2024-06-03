import React from 'react'
import HeaderPages from './HeaderPages'
import Footer from './Footer'
import {  MDBContainer } from 'mdb-react-ui-kit'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import img1 from './Images/imagep1.jpg' 
import img2 from './Images/image-116p2.jpg' 
import img3 from './Images/image-117p3.png' 
import img4 from './Images/image-119p4.png' 
import img5 from './Images/image-098p5.png' 
import img6 from './Images/image-101p6.jpg' 
import Breadcrumb from './Breadcrumb';
import ProjectPagination from './ProjectsPagination';

const DisplayProject = () => {

  return (
    <div>
        
        <header>

        <HeaderPages />

      <div
        className='p-5 text-center setHeaderPrjct bg-image'
        
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>First project part 1</h1>
              <h4 className='mb-3'>Application for the management of a residency competition.</h4>
            </div>
          </div>
        </div>
      </div>
    </header>

    <MDBContainer>
      <Breadcrumb/>
      <div className='d-flex justify-content-center'>
      <ProjectPagination/>
      </div>
    <section className='project.section1 '>
      <div className='mt-5'>
    <h3> 
In-Depth Overview of Our Applicant Management System Features   </h3>
<p className='justifyP'>Our web application is designed to offer a streamlined and efficient experience for both users and administrators. By leveraging modern technologies like ReactJS for the front end and Laravel for the back end, we ensure a responsive and robust platform.</p>
    </div>
  
    <h4>User Section</h4>
    <p className='justifyP'>
   <h6> Account Creation and Verification</h6>
Users begin their journey by creating an account, providing their email address and setting a password. A verification email is sent to confirm the email address, which users must verify by clicking the link in the email. This crucial step ensures the security and integrity of the platform.
    </p>
    
    <p className='justifyP'>
   <h6> Personal Information Registration</h6>
   Once the account is verified, users complete a comprehensive registration form with their personal information, including name, date of birth, address, and contact details. This data is securely stored and managed using Laravel on the back end, safeguarding personal information.    </p>

    <p className='justifyP'>
   <h6> Application for a Discipline</h6>
   After registering their personal information, users can apply for a specific discipline or program. They select their desired discipline from a curated list and submit the required documents and information. ReactJS handles this process on the front end, providing a smooth and seamless user experience.    </p>

    <p className='justifyP'>
   <h6> Notification Zone</h6>
   Users have access to a dedicated notification area where they receive updates about their application status. This area is vital for maintaining clear and timely communication, informing users whether their application has been accepted or rejected and providing further instructions if necessary.    </p>

    <p className='justifyP'>
      <h4>Administration Section</h4>
   <h6>Management of Registered Candidates</h6>
   Administrators have comprehensive tools to manage the list of all registered candidates. This includes viewing, updating, and organizing candidate information efficiently. Laravel's robust back-end functionality supports these administrative tasks securely and effectively.    </p>

    <p className='justifyP'>
   <h6> Viewing Candidate Data</h6>
   Admins can access detailed information about each candidate, including personal details and application statuses. This feature is essential for making informed decisions about candidate applications and ensuring that all necessary information is readily accessible.    </p>

    <p className='justifyP'>
   <h6>Sending Notifications</h6>
   The platform enables administrators to send tailored notifications to candidates regarding their application status. These notifications can include acceptance messages or information about the next steps, such as invitations to take entrance exams. The integration of ReactJS ensures that notifications are displayed promptly and clearly to users.    </p>

    <p className='justifyP'>
   <h6> Account Management and Password Recovery</h6>
   Administrators can manage user accounts comprehensively, including resetting passwords for users who have forgotten theirs. The password recovery process is user-friendly: users request a password reset, triggering an email with instructions. Laravel handles these processes securely, protecting user data throughout.    </p>

   
   <p className='justifyP'>
   By leveraging ReactJS for the front-end development and Laravel for the back end, our application provides a secure, efficient, and user-friendly platform for managing applications and candidate data. These technologies ensure a responsive interface and robust data management, catering to the needs of both users and administrators.


   </p>
   



    </section>

    <section className='PrjtCarousels setSection'> 
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src={img1} className='d-block w-100' alt='...' />
    
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src={img2} className='d-block w-100' alt='...' />
     
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src={img3} className='d-block w-100' alt='...' />
   
      </MDBCarouselItem>

      <MDBCarouselItem itemId={4}>
        <img src={img4} className='d-block w-100' alt='...' />
     
      </MDBCarouselItem>

      <MDBCarouselItem itemId={5}>
        <img src={img5} className='d-block w-100' alt='...' />
  
      </MDBCarouselItem>
      <MDBCarouselItem itemId={6}>
        <img src={img6} className='d-block w-100' alt='...' />
  
      </MDBCarouselItem>
    </MDBCarousel>

     </section>



    </MDBContainer>

        <Footer/>
    </div>
  )
}

export default DisplayProject