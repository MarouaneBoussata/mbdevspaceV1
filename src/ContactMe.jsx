import React, { useEffect } from 'react'
import HeaderPages from './HeaderPages'
import Footer from './Footer'
import 'aos/dist/aos.css'
import AOS from 'aos'
import {  MDBContainer } from 'mdb-react-ui-kit'
import 'react-phone-number-input/style.css'

import {
    MDBIcon,
  }

from 'mdb-react-ui-kit';
import Breadcrumb from './Breadcrumb';
import FormContact from './FormContact'
const ContactMe = () => {
  useEffect(() =>{
    AOS.init({duration: 3000});
      },[]);

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
              <h1 className='mb-3 text-uppercase'> <MDBIcon fas icon="at" className='text-white' /> | CONTACT </h1>
             </div>
          </div>
        </div>
      </div>
    </header>
    <MDBContainer>
      <Breadcrumb/>
    <section className='project.section1 setSection2 '>
     
    <MDBContainer fluid className='my-5'>

    <FormContact/>

</MDBContainer>


    </section>




    </MDBContainer>

        <Footer/>
    </div>
  )
}

export default ContactMe