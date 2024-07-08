import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import img2 from './Images/mbdevspace-logos_transparent.png'
export default function App() {
  return (
    <MDBFooter className='text-center  text-lg-start text-muted setbgb'>
  
      <section className='d-flex justify-content-center justify-content-lg-between text-white p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

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
      </section>

      <section className='text-white'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
               
                <h2>  <MDBIcon color='secondary' icon='gem' className='' size='' /> MB6 DEVSPACE</h2>
              </h6>
              <div>
            <img src={img2} className='setSizeLogo'/>
            </div>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              
              <p>
                <a href='https://nodejs.org/en' target='_blank' className='text-reset'>
                  Node.js
                </a>
              </p>
              <p>
                <a href='https://react.dev/' target='_blank' className='text-reset'>
                  REACT.JS
                </a>
              </p>
              <p>
                <a href='https://laravel.com/' target='_blank' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/project' className='text-reset'>
                  PROJECTS
                </a>
              </p>
           
              <p>
                <a href='/skills' className='text-reset'>
                  SKILLS
                </a>
              </p>
              <p>
                <a href='/contactMe' className='text-reset'>
                  CONTACT ME
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                570 OXFORD ROAD, READING, UK
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                boussata80@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> +44 7947 544 657
              </p>
            
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='/'>
         www.devspace.com
        </a>
      </div>
    </MDBFooter>
  );
}