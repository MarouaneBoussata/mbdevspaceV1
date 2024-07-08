import React from 'react'
import videobg from'./Images/video.mp4'
import './Redirect.css'
import Logo from './Images/mbdevspace-logos_transparent.png'
import {  MDBIcon } from 'mdb-react-ui-kit'
import { useNavigate } from 'react-router-dom'
import {  Typewriter } from 'react-simple-typewriter'
const RedirectTerminal = () => {


  const Navigate=useNavigate()


  return <div>

 
    
    <video autoPlay loop muted plays-inline className=' bgvideo'>     
<source src={videobg} type="video/mp4"/>
</video>

<div className='container2' >

<div><img src={Logo} className='setHeightLogo' alt='logo'/></div>
    <div className='d-flex flex-column justify-content-center'>
   
   <div> <p className='setP typewriter'> 
   Welcome to my terminal! Here, you can learn about me through <span>
    
   <Typewriter
            words={['simple modern and responsive interface, Give it a try!']}
            loop={1}
            cursor
            typeSpeed={120}
            deleteSpeed={20}
            
        
          />
    </span> </p></div>
      </div>
      
      <div className=' d-flex justify-content-center'>
        
<div className='center1 '>

<button className="btn1" onClick={(evt)=>Navigate('/Terminal')}>
        <svg width="180px" height="60px" viewBox="0 0 180 60" className="border1">
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
        </svg>
        <span className=' text-uppercase ' > Get started  <MDBIcon fas icon="play" className='ms-1' size='xl'/></span>
      </button>
   <div className=' d-flex justify-content-center mt-4'>  <button onClick={(evt)=>Navigate('/')} className='btn  btn-danger btn-outline-danger '>exit</button> </div>
      </div>
      </div>
 
  </div>




  </div>

}

export default RedirectTerminal