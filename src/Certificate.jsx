import React, { useState } from 'react';
import './Style.css'
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption, MDBRipple } from 'mdb-react-ui-kit';
import img1 from './Images/frontendCert.png' 
import img2 from './Images/backendce.png' 
import img3 from './Images/datascience.png' 
export default function Certificate() {
  
  return (
    <section className='PrjtCarousels' > 
    <p className=' text-center'>Navigate the carousel forward  or backward</p>
    <MDBCarousel showControls showIndicators dark >
   
      <MDBCarouselItem itemId={1}>
      <MDBRipple rippleColor='primary' rippleTag='div' className='bg-image hover-overlay'>
        <img src={img1} className='d-block w-100 zoom' alt='...' />
        <MDBCarouselCaption>
          <h5 className='text-dark fw-bold text-uppercase'> Back-end development</h5> 
          <a href='https://coursera.org/verify/2FC6G4GBZXR6' className=' hover-overlay fw-bolder bg-white text-pretty text-primary'>check the credibility</a>
        </MDBCarouselCaption>
        </MDBRipple>
      </MDBCarouselItem>
 
      
      <MDBCarouselItem itemId={2}>
      <MDBRipple rippleColor='primary' rippleTag='div' className='bg-image hover-overlay'>
        <img src={img2} className='d-block w-100 zoom' alt='...' />
        <MDBCarouselCaption>
          <h5 className='text-dark text-uppercase'>Front-end Development</h5>
          <a href='https://coursera.org/verify/5HSBCZHB55J6' className=' hover-overlay fw-bolder bg-white text-pretty text-primary'>check the credibility</a>
        </MDBCarouselCaption>
        </MDBRipple>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
      <MDBRipple rippleColor='primary' rippleTag='div' className='bg-image hover-overlay'>
        <img src={img3} className='d-block w-100 zoom' alt='...' />
        <MDBCarouselCaption>
        <h5 className='text-dark text-uppercase'>INTRODUCTION TO DATA SCIENCE</h5>
        <a href='https://coursera.org/verify/YA494KLVZBJZ' className=' hover-overlay fw-bolder bg-white text-pretty text-primary'>check the credibility</a>
        </MDBCarouselCaption>
        </MDBRipple>
      </MDBCarouselItem>

    </MDBCarousel>

     </section>

  );
}