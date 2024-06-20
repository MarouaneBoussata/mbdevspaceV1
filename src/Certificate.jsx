import React, { useState } from 'react';
import './Style.css'
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption, MDBRipple } from 'mdb-react-ui-kit';
import img1 from './Images/frontendCert.png' 
import img2 from './Images/backendce.png' 
 

export default function Certificate() {

  
  
  return (
    <section className='PrjtCarousels' data-aos-duration='5500'
    data-aos='zoom-in'> 
    <MDBCarousel showControls showIndicators dark fade>
   
      <MDBCarouselItem itemId={1}>
      <MDBRipple rippleColor='primary' rippleTag='div' className='bg-image hover-overlay'>
        <img src={img1} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5 className='text-dark fw-bold text-uppercase'> Back-end development</h5> 
          <a href='https://coursera.org/verify/2FC6G4GBZXR6' className=' hover-overlay fw-bolder bg-white text-pretty text-primary'>Click to check the credibility</a>
        </MDBCarouselCaption>
        </MDBRipple>
      </MDBCarouselItem>
 
      
      <MDBCarouselItem itemId={2}>
      <MDBRipple rippleColor='primary' rippleTag='div' className='bg-image hover-overlay'>
        <img src={img2} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5 className='text-dark text-uppercase'>Front-end Development</h5>
          <a href='https://coursera.org/verify/5HSBCZHB55J6' className=' hover-overlay fw-bolder bg-white text-pretty text-primary'>Click to check the credibility</a>
        </MDBCarouselCaption>
        </MDBRipple>
      </MDBCarouselItem>

    </MDBCarousel>

     </section>

  );
}