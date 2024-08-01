import React from 'react'
import {   MDBSpinner, MDBTextArea } from 'mdb-react-ui-kit'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBRow,
    MDBCol,
  }
  from 'mdb-react-ui-kit';
  import contactMe from './ContactMe.Handle'
import img from './Images/composing-email-digital-device.jpg'

const FormContact = () => {
    
const {contactValue, contactHandler,sendMail,Gsm,setGsm,errors,spin} = contactMe();

  return (
    <div>   

<MDBRow className='g-0 align-items-center'>
  <MDBCol col='6' className='setcolwidth '  data-aos-duration='2500'
        data-aos='fade-right'>

    <MDBCard className='my-5 cascading-right setcolwidth' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
      <MDBCardBody className='p-5 shadow-5 text-center'>

        <h2 className="fw-bold mb-5"> CONTACT ME, DON'T BE SHY!</h2>


        <MDBRow>
          <MDBCol col='6'>
            <MDBInput wrapperClass='mb-4' value={contactValue.FirstName} onChange={contactHandler}  label='First name' id='FirstName' type='text'/>
            {errors.FirstName && <p className='text-danger'>{errors.FirstName}</p>}
          </MDBCol>
          <MDBCol col='6'>
            <MDBInput wrapperClass='mb-4' label='Last name' id='SecondName' onChange={contactHandler} value={contactValue.SecondName} type='text'/>
            {errors.SecondName && <p className='text-danger'>{errors.SecondName}</p>}
          </MDBCol>
        </MDBRow>
        <MDBInput wrapperClass='mb-4' label='Email' id='email' onChange={contactHandler} value={contactValue.email} type='email' required/>
        {errors.email && <p className='text-danger'>{errors.email}</p>}
        <div className='mt-2 mb-4'>
        <PhoneInput 
        wrapperClass='mb-4'
      placeholder="Enter phone number(optional)"
      value={Gsm}
      onChange={setGsm}
    
      />
      </div>
        <MDBInput wrapperClass='mb-4' label='Subject' id='subject' onChange={contactHandler} value={contactValue.subject} type='text'/>
        {errors.subject && <p className='text-danger'>{errors.subject}</p>}
        <MDBTextArea wrapperClass='mb-4' label='description' placeholder='Write you demand here ...' id='description' value={contactValue.description} onChange={contactHandler} type='text'/>
        {errors.description && <p className='text-danger'>{errors.description}</p>}
    
        <button onClick={sendMail} className='w-100 btn btn-primary shadow-lg mb-4 setbgbutton' size='md'>
      {spin ? (
        <MDBSpinner grow color='light'>
          <span className='visually-hidden'>Loading...</span>
        </MDBSpinner>
      ) : (
        <>
          <MDBIcon far icon="paper-plane" /> | SEND
        </>
      )}
    </button>

        <div className="text-center">

          <p>or you can direct me on social medias</p>

          <div>
          <a href='https://www.facebook.com/marwane.boussata' target='_blank' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
     
          <a href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=boussata80@gmail.com' target='_blank' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='https://www.instagram.com/marvane_mw?igsh=MXJlaTVkcWVidTNzNw%3D%3D&utm_source=qr' target='_blank' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='http://www.linkedin.com/in/marouaneboussata' target='_blank' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='https://github.com/MarouaneBoussata' target='_blank' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
        </div>

      </MDBCardBody>
    </MDBCard>
  </MDBCol>

  <MDBCol col='6'>
    <img src={img} class="w-100 rounded-4 shadow-4 setshowedimg"
      alt="" fluid/>
  </MDBCol>

</MDBRow>


    </div>
  )
}

export default FormContact