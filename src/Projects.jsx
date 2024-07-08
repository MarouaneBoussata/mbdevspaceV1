import React, { useState } from 'react';
import './Style.css'
import {
  MDBIcon,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import prjt1 from './Images/image-106.jpg'
import prjt2 from './Images/Screenshot 2024-05-13 170611.png'
import prjt3 from './Images/Screenshot 2024-05-29 172529.png'
import prjt7 from './Images/Screenshot 2024-05-29 173802.png'
import { useNavigate } from 'react-router-dom';

export default function Project() {
  const [iconsActive, setIconsActive] = useState('pill1');
  const Navigate = useNavigate()
  function handleIconsClick(value) {
        if (value === iconsActive) {
            return;
      }

        setIconsActive(value);
    }
    const  submit = (evt)=>{
      Navigate('/project')
    }
    
 
  
  
  return (
    <div className='setIndexP' >
     
      <MDBTabs pills className='mb-5 setIndexP setTabsDir  '>
        <MDBTabsItem >
          <MDBTabsLink className=' setbga text-white' onClick={() => handleIconsClick('pill1')} active={iconsActive === 'pill1'}>
           <MDBIcon fas icon="laptop" /> Website and web application
          </MDBTabsLink>
        </MDBTabsItem>
      
        <MDBTabsItem>
          <MDBTabsLink className=' setbga text-white'    onClick={() => handleIconsClick('pill2')} active={iconsActive === 'pill2'}>
          <MDBIcon fas icon='cogs' size='xl' className='me-2' /> Other
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      
      <MDBTabsContent  className='set-cardsfirst'>
        <MDBTabsPane open={iconsActive === 'pill1'}>
          <div className='m-5'>

          <MDBRow className='row-cols-1 row-cols-md-4 d-flex justify-content-center setPosCards'>

          <MDBCol data-aos-duration='900'
          data-aos-delay='50'
          data-aos='zoom-in'>
        <MDBCard className='setPrjctH zoom' >
          <MDBCardImage
            src={prjt1}
            alt='Medicines plateform'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle><span className='setCardTitle'>first project part One </span>: application for the management of a residency competition. </MDBCardTitle>
            <MDBCardText className='card_previewText'>
            Our web application is designed to offer a streamlined and efficient experience for both users and administrators. By leveraging modern technologies like ReactJS for the front end and Laravel for the back end, we ensure a responsive and robust platform.
           
            </MDBCardText>
            <MDBBtn className=' btn setbga' onClick={submit} >View more ...</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>



      <MDBCol
      data-aos-duration='1500'
      data-aos-delay='100'
      data-aos='zoom-in'
>
        
        <MDBCard className='setPrjctH zoom'>
          <MDBCardImage
            src={prjt1}
            alt='mb6 devspace portfolio images devspace'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle><span className='setCardTitle'>first project part two </span>: application for the management of a residency competition. </MDBCardTitle>
            <MDBCardText className='card_previewText'>
            Handling the frontend following the completion of a resident doctors management application based on the REACT.JS and LARAVEL frameworks.
            </MDBCardText>
            <MDBBtn className=' btn setbga' onClick={(evt)=>Navigate('/project1')} >View more ...</MDBBtn>
          </MDBCardBody>
        </MDBCard >
      </MDBCol>
      <MDBCol
         data-aos-duration='2000'
         data-aos-delay='150'
   data-aos='zoom-in'> 

        <MDBCard className='setPrjctH zoom'>
          <MDBCardImage
            src={prjt2}
            alt='mb6 devspace portfolio images devspace'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle><span className='setCardTitle'>Second project</span>:  
Apps of Electronic Invoice Signature and Bills Management Systems </MDBCardTitle>
            <MDBCardText className='card_previewText'>
            Embark on a journey of streamlined electronic invoice management and enhanced supplier relationship dynamics with our meticulously crafted Electronic Invoice Signature Application and Supplier Management system. Engineered with precision on the robust REACT.JS and EXPRESS.JS frameworks (NODE.JS), our solution promises unparalleled efficiency and scalability.
            </MDBCardText>
            <MDBBtn className='btn setbga' onClick={(evt)=>Navigate('/project2')} >View more ...</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol 
            data-aos-duration='1500'
            data-aos-delay='200'
            data-aos='zoom-in'>
      <MDBCard className='setPrjctH zoom'>
          <MDBCardImage
            src={prjt3}
            height={183}
            alt='mb6 devspace portfolio images devspace'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle><span className='setCardTitle'>Third project </span>: An application displaying real-time temperature updates for regions in Morocco. </MDBCardTitle>
            <MDBCardText className='card_previewText'>
            Real-Time Temperature Updates for Regions in Morocco" is an application that provides live temperature updates for various regions across Morocco. This project entails the operation of collecting temperature data from different locations in Morocco and displaying it in real-time on the application interface. Users can easily access up-to-date temperature information for specific regions, enabling them to make informed decisions based on current weather conditions. This application serves as a convenient tool for individuals and businesses alike, offering valuable insights into temperature variations across different parts of Morocco.
           
            </MDBCardText>
            <MDBBtn className='btn setbga' onClick={(evt)=>Navigate('/project3')}>View more ...</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>

    </div>
        </MDBTabsPane>

        <MDBTabsPane open={iconsActive === 'pill2'}>

        <div className='m-5'>

<MDBRow className='row-cols-1 row-cols-md-4 d-flex justify-content-center setPosCards'>

<MDBCol data-aos-duration='900'
data-aos-delay='50'
data-aos='zoom-in'>
<MDBCard className='setPrjctH zoom' >
<MDBCardImage
  src={prjt7}
  alt='mb6 devspace portfolio images devspace'
  position='top'
/>
<MDBCardBody>
  <MDBCardTitle> Migration of a website along with HTML, CSS, Bootstrap, and JavaScript resources to a WordPress theme </MDBCardTitle>
  <MDBCardText className='card_previewText'>
  The Migration to a WordPress Theme" involves transferring a website, originally built using HTML, CSS, Bootstrap, and JavaScript, into a WordPress theme. This migration process seamlessly transitions all existing resources and functionalities to the WordPress platform, ensuring compatibility and optimal performance. 
  </MDBCardText>
  <MDBBtn className=' btn setbga' href='https://www.digiflow.ma/'target="_blank" >View more ...</MDBBtn>
</MDBCardBody>
</MDBCard>
</MDBCol>

</MDBRow>

</div>


        </MDBTabsPane>
      </MDBTabsContent>
    </div>
  );
}