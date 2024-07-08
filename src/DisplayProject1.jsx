import React from 'react'
import HeaderPages from './HeaderPages'
import Footer from './Footer'
import './Style.css'
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit'
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import img1 from './Images/image-106.jpg' 
import img2 from './Images/image-108.jpg' 
import img3 from './Images/image-115.png' 
import Breadcrumb from './Breadcrumb';
import ProjectPagination from './ProjectsPagination';

const DisplayProject1 = () => {

 


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
              <h1 className='mb-3'>First project part 2</h1>
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
    <h2> First Project part 2 : Management Application for Resident Doctors: From Design to Realization   </h2>
    </div>
    <p className='justifyP'>
    This project involves the development and implementation of a sophisticated management application designed for resident doctors participating in the Residanat program. The application supports these doctors throughout their educational journey, from initial training through to graduation, while maintaining comprehensive records for each graduate.
    </p>

    <p className='justifyP'>
    The project begins with a meticulous design phase, including the creation of detailed UML (Unified Modeling Language) diagrams to visualize the system's architecture. These diagrams ensure a clear and structured outline of the various components, their interactions, and the overall workflow.
    </p>

    <p className=' justifyP'>
    Following the design, the realization phase involves selecting appropriate technical tools and setting up the development environment. The application is built using React.js for the frontend and Laravel for the backend. React.js provides a powerful and flexible framework for developing intuitive and responsive user interfaces, while Laravel offers a robust and scalable backend solution, known for its elegant syntax and comprehensive set of tools for web application development. The development environment also includes version control systems, integrated development environments (IDEs), and collaborative tools to facilitate efficient coding, testing, and deployment.
    </p>
    <p>
    Key features of the application include:
    <ul>
      <li>
     <span className=' fw-bold'> User Interfaces: </span> Developed with React.js, these interfaces are intuitive and user-friendly, enhancing the user experience for resident doctors and administrative staff.
      </li>
      <li>
      <span className=' fw-bold'> Database Management: </span>
      Laravel provides robust database solutions that ensure secure and efficient storage and retrieval of resident doctors' data.
      </li>
      <li>
<span className='fw-bold'> Real-Time Data Processing: </span>
Mechanisms for real-time tracking of academic progress, training schedules, and other essential metrics.
      </li>
    </ul>

    </p>
    </section>

    <section className='PrjtCarousels setSection'> 
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src={img1} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5 className='text-dark fw-bold'>HOME PAGE</h5>
          
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src={img2} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5 className='text-dark'>CONNEXION PAGE</h5>
         
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src={img3} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5 className='text-dark '>Dashboard</h5>
         
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>

     </section>



    </MDBContainer>

        <Footer/>
    </div>
  )
}

export default DisplayProject1