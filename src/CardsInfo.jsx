import React, { useState } from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBSpinner
} from 'mdb-react-ui-kit';
import img22 from './Images/1000075708.jpg'
import img2 from './Images/istockphoto-1344939844-612x612.jpg'
import img3 from './Images/istockphoto-1459313027-612x612.jpg'
import img5 from './Images/360_F_633010478_nv1cWaUesz6cemPGZMtlgDjmSVNA3leq.jpg'
import ExperienceModal from './ExperienceModal';
import ProjectModal from './ProjectsModal';
import ServiceModal from './ServiceModal';
const PDF_FILE_URL = "https://mb6devops.netlify.app/Marouane_Boussata_CV.pdf";
export default function App() {
  const [downloading, setDownloading] = useState(false);
      
  const downloadFileAtURL = (url) => {
    setDownloading(true);
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.blob();
        })
        .then((blob) => {
          const blobURL = window.URL.createObjectURL(blob);
          const fileName = url.split("/").pop();
          const aTag = document.createElement("a");
          aTag.href = blobURL;
          aTag.setAttribute("download", fileName);
          document.body.appendChild(aTag);
          aTag.click();
          aTag.remove();
          window.URL.revokeObjectURL(blobURL); // Free up memory
          setDownloading(false);
        })
        .catch((error) => {
          console.error('Download failed:', error);
          setDownloading(false);
        });
    }, 2500); // Delay for 3 seconds before initiating the download
  };

  return (
    <MDBCard  className='cardInfo' >
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src={img22}  alt='devspace mb6devspace portfolio images' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardText className='setCards '>
             <p className='d-flex justify-content-center about-t '>  As a JavaScript developer, I specialize in leveraging frameworks to craft websites from inception to deployment. My expertise spans the entire project lifecycle, from designing robust databases to deploying seamless updates. I prioritize clean, simple designs coupled with powerful backend functionality for optimal user experiences. </p>
            </MDBCardText>

            <MDBRow className='row-cols-1 row-cols-md-3 g-3 ms-3'>
      <MDBCol >
        
        <MDBCard className='Subcard'>
        <div className='bg-image'>
        <MDBCardImage
            src={img2}
            className='setSubcImage'
            alt='mb6devspace portfolio images devspace'
            position='top'
          />
      <div className='mask subCards ' >
        <div className='d-flex justify-content-center align-items-center h-100'>
          <p className='text-white fw-bolder text-uppercase mb-0'>Junior</p>
        </div>
      </div>
    </div>
         
          <MDBCardBody>
           <div className=' d-flex justify-content-center'> <MDBCardTitle> <MDBIcon fas icon="business-time" /> | EXPERIENCE</MDBCardTitle> </div>
            <MDBCardText  className=' d-flex justify-content-center'>
                 <ExperienceModal/>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='Subcard'>
          
                  <div className='bg-image'>
            <MDBCardImage
            src={img3}
            className='setSubcImage'
            alt='mb6devspace portfolio images devspace'
            position='top'
          />
      <div className='mask subCards ' >
        <div className='d-flex justify-content-center align-items-center h-100'>
          <p className='text-white fw-bolder text-uppercase mb-0'>+5 PROJECTS</p>
        </div>
      </div>
    </div>
          <MDBCardBody>
          <div className=' d-flex justify-content-center'> <MDBCardTitle> <MDBIcon fas icon="project-diagram" /> | PROJECT</MDBCardTitle> </div>
            <MDBCardText className=' d-flex justify-content-center '>
       <ProjectModal/>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='Subcard'>
        <div className='bg-image'>
        <MDBCardImage
            src={img5}
            className='setSubcImage'
            alt='mb6devspace portfolio images devspace'
            position='top'
          />
      <div className='mask subCards ' >
        <div className='d-flex justify-content-center align-items-center h-100'>
          <p className='text-white fw-bolder text-uppercase mb-0'>AVAILABLE 24/7</p>
        </div>
      </div>
    </div>
     
          <MDBCardBody>
          <div className=' d-flex justify-content-center'> <MDBCardTitle> <MDBIcon fas icon="headset" /> | SERVICE</MDBCardTitle> </div>
            <MDBCardText  className=' d-flex justify-content-center'>
            <ServiceModal/>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
 
    </MDBRow>
          
    <div className=' m-4 d-flex justify-content-center'>
    <button className='btn setbgbutton text-white border' onClick={() => downloadFileAtURL(PDF_FILE_URL)}>
      {downloading ? (
        <MDBSpinner color='light' size='sm'>
          <span className='visually-hidden'>Loading...</span>
        </MDBSpinner>
      ) : (
        <>
          <MDBIcon fas icon="cloud-download-alt" size='xl' /> | DOWNLOAD CV
        </>
      )}
    </button>
  
</div>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}