import React,{useEffect, useRef, useState} from 'react'
import Header from'./Header' 
import Footer from'./Footer'
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import {MDBCardTitle} from 'mdb-react-ui-kit';
import imgprfl from './Images/f7b84a34-0f3a-49b6-8f5f-6979ad153779.jpg'
import './Style.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import Project from './Projects';
import CardsInfo from './CardsInfo';
import Skillstech from './Skillstech';
import FormContact from './FormContact';
import Certificate from './Certificate';
import {  Typewriter } from 'react-simple-typewriter'
import Education from './Education';

function Home() {

  const[bttb,setBttb]=useState(false)
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>100){
        setBttb(true)
      }else{
        setBttb(false)
      }
    })
  },[])
  
  const top = () => {
    window.scrollTo(0, 0);
  }
  
  useEffect(() =>{
AOS.init({duration: 3000});
  },[]);
  const ref = useRef(null)
const scrollClick = () => {
ref.current?.scrollIntoView({behavior: 'smooth'})
}
  return (
    <div className='homeBackground'>
      

      
    <header>

      <Header />
      </header>
      <MDBContainer className='container'> 

  
      <section className='contentSection1  '>
      <MDBRow className='w-100'> 
     <MDBCol col='12' md='6'>
<div className=''>
        <h1 className=" my-5 display-5 fw-bold ls-tight px-1 pt-5 setColorTypoh1 " 
        data-aos-duration='2500'
        data-aos='fade-up' >
            Hi I 'am Marouane <span class="wave">👋</span>  <br/>
           <span className='setColorTypoh2' >   <Typewriter
            words={['Full-stack developer','software developer']}
            loop={100}
            cursor
            typeSpeed={120}
            deleteSpeed={20}
            
        
          /> </span> 
          </h1>
          </div>

          <div >         
<p className='p' data-aos-duration='5500' data-aos='fade-right' >
  I am a Node.js developer proficient in React.js and Express, with a strong background in website and application development, as well as database administration.feel free to <a href='/contactMe' className='btn-one text-primary bold'>Contact me </a> for any help ! 
  </p>
        <a href='https://github.com/MarouaneBoussata' target='_blank' className=' hover-shadow m-2'><MDBIcon fab icon="github" size='2xl' color='black' /></a>
        <a href='http://www.linkedin.com/in/marouaneboussata' target='_blank' className=' hover-shadow m-2'><MDBIcon fab icon="linkedin" size='2xl' color='black' /></a>
        </div>
        <div className='setButton'>
        <button  data-aos-duration='2500'
        data-aos='fade-right' className='btnSet' onClick={scrollClick} ><span href='' className='btnSetSpan'>Explore more!</span></button>

        </div>
</MDBCol>

<MDBCol col='10' md='6'>


 
          <div className='setProfilePosition' data-aos-duration='6500' data-aos='zoom-in'>
          <img src={imgprfl} className='profilePicture' alt='devspace portfolio images devspace marouane'/>
          </div>




</MDBCol>
</MDBRow>
      </section>

      <section className='setSection setSectionAbout' ref={ref}>
     <div className=' mb-5 mt-5'> <MDBCardTitle className='setTitleCard '>ABOUT ME </MDBCardTitle> </div>
    <div data-aos='zoom-in' data-aos-duration='2500' data-aos-delay='500'> <p className="Philosophy" > " Prioritizing the needs and preferences of users. " </p> </div>
  <div data-aos='fade-up' data-aos-duration='500'>
   <CardsInfo/>
   </div>
      </section>
      <section className='setMttech ' >
     <div className=' mb-5' > <MDBCardTitle className='setTitleCard text-uppercase '>most technologies i use </MDBCardTitle> </div>
 <div data-aos='zoom-in' data-aos-duration='500' data-aos-delay='50' >
<Skillstech />
</div>
      </section>

      
    </MDBContainer>
  <section className='setCertificate setSection  setIndexP'>   
<div className=' setIndexP '>
  <h1 className='setTitle mb-5'>
  <div className='setIndexP' > <MDBCardTitle className='setTitleCard '> CERTIFICATION </MDBCardTitle> </div>
  </h1>
  <div className='setmaxwith' data-aos-duration='500'
    data-aos='zoom-in'>
    <Certificate/>
    </div>  
    </div>
  </section>


  <section className='Projects setSection  setIndexP'>   
<div className=' setIndexP '>
  <h1 className='setTitle mb-5'>
  <div className='setIndexP' data-aos-duration='2500'
 data-aos='fade-right' > <MDBCardTitle className='setTitleCard '> MAIN PROJECT </MDBCardTitle> </div>
  </h1>
  
    <Project/>
    </div>  
  </section>

  <section className=''>
  <div className=' mb-5'> <MDBCardTitle className='setTitleCard '> Academic career </MDBCardTitle> </div>
<Education/>
      </section>
  


  <section className='setSection2 '>
  <div className=' mb-5'> <MDBCardTitle className='setTitleCard '>CONTACT ME </MDBCardTitle> </div>

<FormContact/>

      </section>
     { bttb && (<a className='gotoTop' onClick={()=> top()} href='#'> <MDBIcon fas icon="chevron-up" /> </a>)}

<footer>
    <Footer/>
      </footer>
      </div>     

      )

}


export default Home