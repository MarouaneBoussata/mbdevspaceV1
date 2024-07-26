import React, { useState } from 'react';
import  './HeaderPages.css'
import img44 from './Images/terminal_14618048 (1).png'
import logoPortfolio from './Images/mbdevspace-logos_transparent.png'
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
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from 'mdb-react-ui-kit';
import { Navigate, useNavigate } from 'react-router-dom';
export default function HeaderPages() {
  const Navigate= useNavigate();
  const [openBasic, setOpenBasic] = useState(false);
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
  return (
    <div className='setHeader1'> 
    
    <MDBNavbar expand='lg' fixed='top'  className='setHeader1'style={{ backdropFilter: 'blur(10px)'}}>
    <MDBContainer fluid className='position-sticky'>
    <MDBNavbarBrand className=''> 
       <div>
       <img src={logoPortfolio} className='brandIcon' /> </div>
       <div> <p className='brandText1'> <span className='brandSpan11'> MB6 </span> DevSpace </p> </div> 
        </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          className=' text-white'
          onClick={() => setOpenBasic(!openBasic)}>
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 d-flex justify-content-center '>
            <MDBNavbarItem>
            <MDBNavbarLink className=''  active aria-current='page' href='/'> 
            <span className='setItemNav1'> Home </span>
            </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <MDBNavbarLink  href='/skills' ><span className='setItemNav1'>Skills</span></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <MDBNavbarLink  href='/support'><span className='setItemNav1'>Support & help</span></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <MDBNavbarLink  href='/project'><span className='setItemNav1'>Projects</span></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink  href='/contactMe'><span className='setItemNav1'>Contact me</span></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link ' role='button'>
                <span className='setItemNav1'>Divertisement</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link onClick={()=>Navigate('/weather-apps')}>  <span className='setItemNav'>Weather apps</span></MDBDropdownItem>
                  <MDBDropdownItem link>  <span className='setItemNav'>Crypto apps</span></MDBDropdownItem>
                  <MDBDropdownItem link disabled>coming soon</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <MDBTooltip placement='bottom' tag='a' className='bg-transparent' title='Terminal'>    
     
              <MDBNavbarLink  href='/redtoTerminal'><span className='setItemNav'><img  src={img44}/></span></MDBNavbarLink>
              </MDBTooltip>
            </MDBNavbarItem>

            
          </MDBNavbarNav>
          <div className='d-flex setmgHeader'><label className=' text-light fw-bold '>NETWORKS </label> : 

<div><a href='https://www.facebook.com/marwane.boussata' target='_blank'><MDBIcon className='mx-2' size='lg' color='light' fab icon="facebook" /> </a></div>
<div><a href='https://www.instagram.com/marvane_mw?igsh=MXJlaTVkcWVidTNzNw%3D%3D&utm_source=qr' target='_blank'><MDBIcon className='mx-2' color='light' size='lg'  fab icon="instagram" /></a></div>
<div><a href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=boussata80@gmail.com' target='_blank'><MDBIcon className='mx-2'fab color='light'size='lg'  icon="google" /></a></div>
<div><a href='http://www.linkedin.com/in/marouaneboussata' target='_blank'><MDBIcon className='mx-2'fab color='light' size='lg'  icon="linkedin" /></a></div>
</div>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </div>
    
  );
}