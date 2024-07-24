import React, { useRef, useState } from 'react';
import  './Style.css'
import logoPortfolio from './Images/mbdevspace-logos_transparent.png'
import img43 from './Images/terminal_14618048.png'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBTooltip,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdown,
  MDBDropdownItem,
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';


export default function Header() {
  const [openBasic, setOpenBasic] = useState(false);
  const Navigate = useNavigate()
  const [fixed,setfixed]=useState(false);
  function setFixed(){
    if(window.scrollY>=200)
    {
      setfixed(true)
      return <></>
    }
    else{
      setfixed(false)
    }
  }
window.addEventListener('scroll', setFixed)
const ref = useRef(null)
const scrollClick = () => {
ref.current?.scrollIntoView({behavior: 'smooth'})
}
  return (
  
    <div className='setHeader'> 
    <MDBNavbar expand='lg' fixed='top' className='setHeader'>
    <MDBContainer fluid className='position-sticky'>
    <MDBNavbarBrand className=''> 
       <div 
         data-aos-duration='500'
         data-aos-delay='50'
         data-aos='fade-right'>
       <img src={logoPortfolio} className='brandIcon' alt='mb6 devspace mb6 devspace' /> </div>
       <div> <p className='brandText'> <span className='brandSpan1'> MB6 </span> DevSpace </p> </div> 
        </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          className=' text-dark'
          onClick={() => setOpenBasic(!openBasic)}>
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto d-flex justify-content-center align-items-center mb-2 mb-lg-0 '>
            <MDBNavbarItem>
            <MDBNavbarLink className=''  active aria-current='page' href='/'> 
            <span className='setItemNav'> Home </span>
            </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <MDBNavbarLink  href='/skills' ><span className='setItemNav'>Skills</span></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <MDBNavbarLink  href='/support'><span className='setItemNav'>Support & help</span></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink  href='/project'><span className='setItemNav'>Projects</span></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink  href='/contactMe'><span className='setItemNav'>Contact me</span></MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link ' role='button'>
                <span className='setItemNav'>Divertisement</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link onClick={()=>Navigate('weather-apps')}>  <span className='setItemNav'>Weather apps</span></MDBDropdownItem>
                  <MDBDropdownItem link>  <span className='setItemNav'>Crypto apps</span></MDBDropdownItem>
                  <MDBDropdownItem link disabled>coming soon</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
                      
            <MDBNavbarItem>
           
            <MDBTooltip placement='bottom' tag='a' className='bg-transparent' title='Terminal'>    
     
              <MDBNavbarLink  href='/redtoTerminal'><span className='setItemNav'><img  src={img43}/></span></MDBNavbarLink>
              </MDBTooltip>
            </MDBNavbarItem>
           
          </MDBNavbarNav>
       
<div className='d-flex setmgHeader'><label className='fw-bold '>NETWORKS </label> : 

<div><a href='https://www.facebook.com/marwane.boussata' target='_blank'><MDBIcon className='mx-2' size='lg' color='primary' fab icon="facebook" /> </a></div>
<div><a href='https://www.instagram.com/marvane_mw?igsh=MXJlaTVkcWVidTNzNw%3D%3D&utm_source=qr' target='_blank'><MDBIcon className='mx-2' color='primary' size='lg'  fab icon="instagram" /></a></div>
<div><a href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=boussata80@gmail.com' target='_blank'><MDBIcon className='mx-2'fab color='primary'size='lg'  icon="google" /></a></div>
<div><a href='http://www.linkedin.com/in/marouaneboussata' target='_blank'><MDBIcon className='mx-2'fab color='primary' size='lg'  icon="linkedin" /></a></div>

</div>


        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </div>
    
  );
}