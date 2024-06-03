import React from 'react'
import HeaderPages from './HeaderPages'
import Footer from './Footer'
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit'
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import img1 from './Images/Screenshot 2024-05-29 172016.png' 
import img2 from './Images/Screenshot 2024-05-29 172110.png' 
import img3 from './Images/Screenshot 2024-04-19 162631.png' 
import img4 from './Images/Screenshot 2024-05-29 172232.png' 
import Breadcrumb from './Breadcrumb';
import ProjectPagination from './ProjectsPagination';

const DisplayProject3 = () => {
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
              <h1 className='mb-3'>Third project</h1>
              <h4 className='mb-3'>An application displaying real-time temperature updates for regions in Morocco.</h4>
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
    <h2> Third Project : MoroccoWeather: Real-Time Temperature Updates Across Regions</h2>
    </div>
    <p className='justifyP'>
    Real-Time Temperature Updates for Regions in Morocco" is a sophisticated application engineered to provide instantaneous temperature updates for diverse regions across Morocco. The project encompasses a comprehensive system for capturing temperature data through various sensors strategically positioned throughout the country. This data is seamlessly integrated into the application's interface, offering users immediate access to current temperature readings for their desired locations. </p>


    <p className='justifyP'>
   
    Utilizing cutting-edge technology, the application ensures the accuracy and reliability of temperature data, enabling users to make informed decisions based on real-time weather conditions. Whether planning outdoor activities, assessing agricultural conditions, or simply staying informed about local weather patterns, users can rely on this application to deliver precise temperature information tailored to their needs.    </p>

    <p className='justifyP'>
    
    With its intuitive user interface and seamless functionality, the application offers a user-friendly experience for individuals and businesses alike. From urban centers to remote regions, users can access up-to-the-minute temperature updates, empowering them to navigate daily tasks and make informed decisions in any weather scenario. This project exemplifies the intersection of technology and utility, providing a valuable resource for anyone seeking real-time temperature insights in Morocco.
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
    </MDBCarousel>

     </section>



    </MDBContainer>

        <Footer/>
    </div>
  )
}

export default DisplayProject3