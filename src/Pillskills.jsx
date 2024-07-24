import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import {
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBProgress,
    MDBProgressBar,
    MDBTooltip,
  } from 'mdb-react-ui-kit';
import data from './data.skills.js'
export default function Pillskills() {

  const [justifyActive, setJustifyActive] = useState('tab1');
const webDevelopment=data.webDevelopment
const languages=data.languages
const databases=data.databases
const other=data.decisionalToolsOthers
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <>
      <MDBTabs pills justify className='mb-3'>
        <MDBTabsItem >
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
          Web Development
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
          programming languages
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab3')} active={justifyActive === 'tab3'}>
          Databases
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab4')} active={justifyActive === 'tab4'}>
          Decisional tools/IDE/Other
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane open={justifyActive === 'tab1'}>
        <MDBCard background='white' className='d-flex justify-content-center text-white setbgCrd'>
        <MDBCardHeader className='fw-bold fs-5 d-flex justify-content-center setbgb text-white'> Web development  </MDBCardHeader>
        <MDBCardBody>
        {webDevelopment.map((item,index)=>{
          return(
            <div className='d-flex align-items-center' key={index} >
            <div> <img className='' src={item.img}/> 
            <MDBTooltip  placement='bottom' tag='p'  title={item.toolTips}>
          
            <p className=' d-flex text-dark justify-content-center' >{item.name}</p>
            </MDBTooltip>
            </div>
              <MDBProgress height='20' className='w-75 '>
            <MDBProgressBar bgColor={item.color} animated  width={item.width} valuemin={0} valuemax={100} >{item.percent}</MDBProgressBar>
          </MDBProgress>
          </div>
          )
        })}      
        </MDBCardBody>
      </MDBCard>

        </MDBTabsPane>
        <MDBTabsPane open={justifyActive === 'tab2'}>   
         <MDBCard background='white' className='d-flex justify-content-center text-white setbgCrd'>
        <MDBCardHeader className='fw-bold fs-5 d-flex justify-content-center setbgb text-white'> Programming languages </MDBCardHeader>
        <MDBCardBody>
        {languages.map((item,index)=>{
          return(
            <div className='d-flex align-items-center' key={index} >
            <div> <img className='' src={item.img}/> 
            <MDBTooltip  placement='bottom' tag='p'  title={item.toolTips}>
          
            <p className=' d-flex text-dark justify-content-center' >{item.name}</p>
            </MDBTooltip>
            </div>
              <MDBProgress height='20' className='w-75 '>
            <MDBProgressBar bgColor={item.color} animated  width={item.width} valuemin={0} valuemax={100} >{item.percent}</MDBProgressBar>
          </MDBProgress>
          </div>
          )
        })}      
        </MDBCardBody>
      </MDBCard>
      </MDBTabsPane>
        <MDBTabsPane open={justifyActive === 'tab3'}>
        <MDBCard background='white' className='d-flex justify-content-center text-white setbgCrd'>
        <MDBCardHeader className='fw-bold fs-5 d-flex justify-content-center setbgb text-white'> Databases  </MDBCardHeader>
        <MDBCardBody>
        {databases.map((item,index)=>{
          return(
            <div className='d-flex align-items-center' key={index} >
            <div> <img className='' src={item.img}/> 
            <MDBTooltip  placement='bottom' tag='p'  title={item.toolTips}>
          
            <p className=' d-flex text-dark justify-content-center' >{item.name}</p>
            </MDBTooltip>
            </div>
              <MDBProgress height='20' className='w-75 '>
            <MDBProgressBar bgColor={item.color} animated  width={item.width} valuemin={0} valuemax={100} >{item.percent}</MDBProgressBar>
          </MDBProgress>
          </div>
          )
        })}      
        </MDBCardBody>
      </MDBCard>

        </MDBTabsPane>

        <MDBTabsPane open={justifyActive === 'tab4'}>
        <MDBCard background='white' className='d-flex justify-content-center text-white setbgCrd'>
        <MDBCardHeader className='fw-bold fs-5 d-flex justify-content-center setbgb text-white'> Other  </MDBCardHeader>
        <MDBCardBody>
        {other.map((item,index)=>{
          return(
            <div className='d-flex align-items-center' key={index} >
            <div> <img className='' src={item.img}/> 
            <MDBTooltip  placement='bottom' tag='p'  title={item.toolTips}>
          
            <p className=' d-flex text-dark justify-content-center' >{item.name}</p>
            </MDBTooltip>
            </div>
              <MDBProgress height='20' className='w-75 '>
            <MDBProgressBar bgColor={item.color} animated  width={item.width} valuemin={0} valuemax={100} >{item.percent}</MDBProgressBar>
          </MDBProgress>
          </div>
          )
        })}      
        </MDBCardBody>
      </MDBCard>

        </MDBTabsPane>
      </MDBTabsContent>
    </>
  );
}