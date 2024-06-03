import React from 'react'
import HeaderPages from './HeaderPages'
import Footer from './Footer'
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit'
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import img1 from './Images/Screenshot 2024-05-29 155716.png' 
import img2 from './Images/Screenshot 2024-05-29 155813.png' 
import img3 from './Images/Screenshot 2024-05-29 160136.png' 
import img4 from './Images/Screenshot 2024-05-29 160406.png' 
import Breadcrumb from './Breadcrumb';
import ProjectPagination from './ProjectsPagination';


const DisplayProject2 = () => {
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
              <h1 className='mb-3'>Second project</h1>
              <h4 className='mb-3'>Apps of Electronic Invoice Signature and Bills Management Systems</h4>
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
    <section className='project.section1'>
      <div className='mt-5'>
    <h2> Second Project : Enhanced Electronic Invoice Management: Revolutionizing Supplier Relationships</h2>
    </div>
    <p className='justifyP'>
    Embark on a journey of seamless electronic invoice management and optimized supplier relationship dynamics with our innovative Electronic Invoice Signature Application and Supplier Management system. Our meticulously crafted solution is designed to revolutionize your invoicing process and elevate your supplier interactions to new heights.    </p>

<h4>Key Features:</h4>
    <p className='justifyP'>
    <h6>Electronic Invoice Management:</h6>
    Say goodbye to paper-based invoices and manual processes. Our system allows for the efficient creation, storage, and management of electronic invoices, streamlining your invoicing workflow and saving valuable time and resources.
    </p>

    <p className='justifyP'>
    <h6>Signature Application :</h6>
    Ensure the integrity and authenticity of your invoices with our built-in signature application feature. Electronically sign invoices with ease, providing a secure and legally binding method of document validation.

</p>
    <p className='justifyP'>
    <h6>Supplier Management:</h6>
    Foster stronger relationships with your suppliers through our comprehensive supplier management tools. Keep track of supplier details, communication history, and performance metrics all in one centralized platform.    </p>
    <p className='justifyP'>
    <h6>Efficiency and Scalability:</h6>
    Engineered with precision on the robust REACT.JS and EXPRESS.JS (NODE.JS) frameworks, our solution is built for efficiency and scalability. Whether you're a small business or a large enterprise, our system can adapt to your needs and grow with your business.    </p>
    <p className='justifyP'>
    <h6>User-Friendly Interface: </h6>
    Our intuitive user interface makes it easy for users to navigate the system and perform tasks with minimal training. Enjoy a seamless user experience that maximizes productivity and minimizes frustration.    </p>
    <p className='justifyP'>
    <h6>Security and Compliance:</h6>
    Rest assured that your data is safe and secure with our system. We implement industry-standard security measures to protect sensitive information and ensure compliance with relevant regulations and standards.
    </p>
    <p className='justifyP'>
    
    Transform your invoicing process and elevate your supplier relationships with our Electronic Invoice Signature Application and Supplier Management system. Experience unparalleled efficiency, scalability, and reliability with a solution that's tailored to meet your business needs.    </p>

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
    </MDBCarousel>

     </section>



    </MDBContainer>

        <Footer/>
    </div>
  )
}

export default DisplayProject2