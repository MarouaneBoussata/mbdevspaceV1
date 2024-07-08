import React from 'react'
import HeaderPages from './HeaderPages'
import Footer from './Footer'
import { MDBBtn, MDBContainer, MDBIcon } from 'mdb-react-ui-kit'
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import img1 from './Images/image-106.jpg' 
import img2 from './Images/image-108.jpg' 
import img3 from './Images/image-115.png' 
import Breadcrumb from './Breadcrumb';
const Support = () => {
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
              <h1 className='mb-3 text-uppercase'> <MDBIcon fas icon="info-circle" className='text-white' /> | HELP CENTER </h1>
             </div>
          </div>
        </div>
      </div>
    </header>

    <MDBContainer>
      <Breadcrumb/>
    <section className='project.section1 '>
      <div className='mt-5'>
    <h2> HELP AND SUPPORT CENTER  </h2>
    </div>
    <p className='justifyP'>
    Welcome to the Support Center for my portfolio! Here you can find information about various sections of my portfolio, including "About Me", "Skills", "Projects", "Contact Me", "Client Reviews", and "Blog/News".
    </p>
    <h4> <a href='/'>ABOUT ME</a></h4>
    <p className='justifyP'>
    In the "About Me" section, you will find a detailed overview of my professional background, experiences, and personal interests. This section includes:
    <ul>
    <li><strong>Professional Journey:</strong> A narrative of my career path, highlighting significant milestones, achievements, and the various roles I've undertaken.</li>
    <li><strong>Educational Background: </strong>Information about my academic qualifications, certifications, and any relevant training programs I have completed.</li>
    <li><strong>Personal Interests:</strong> A glimpse into my hobbies, passions, and activities outside of work that contribute to my overall growth and creativity.</li>
    <li><strong>Professional Philosophy:</strong> My work ethic, values, and the principles that guide my professional life.</li>
    </ul>
    </p>

    <h4><a href='/project'>PROJECTS</a></h4>
    <p className=' justifyP'>
    In the "Projects" section, I showcase a selection of my most significant and impactful work. Each project includes a detailed description, the technologies used, my role, and the outcomes achieved. This section is a testament to my practical experience and ability to deliver successful projects.
    </p>

    <h4><a href=''>SKILLS</a></h4>
    <p>
    The "Skills" section highlights my core competencies and technical proficiencies. Here, you'll see a list of the programming languages, tools, frameworks, and methodologies I am skilled in. This section is designed to give you a clear idea of what I bring to the table and how I can contribute to various projects.
    </p>
    <h4><a href=''>Contact Me</a></h4>
    <p>
    I'm excited to connect with you! Whether you have a project you'd like to collaborate on, need assistance with a technical challenge, or just want to chat about the latest in web development    </p>

    </section>




    </MDBContainer>

        <Footer/>
    </div>
  )
}

export default Support