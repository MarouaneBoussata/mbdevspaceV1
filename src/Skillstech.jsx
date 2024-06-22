import React, { useState } from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader,
  MDBProgress,
  MDBProgressBar,
  MDBTooltip,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import data from './data.skills.js'
export default function Skillstech() {
  const [showNof,setShow]=useState(4)
  const slice = data.SkillsDATA.slice(0,showNof);
  const [ButtonValue,setButtonValue]=useState('view more');
  const [Icon,setIcon]=useState('caret-square-down');
  const loadMore = ()=>{
    setShow(showNof + showNof)
if(showNof <= 4) {
  setButtonValue('show more')
  setIcon('caret-square-down')
}
else if(showNof >= 4 && showNof <= 13) {
  setButtonValue('show less')
  setIcon('caret-square-up')
}
    else if(showNof > 13){
  setShow(4)     
  setButtonValue('show more')
  setIcon('caret-square-down')
    }
  }
  return (
    <div >
      
      <MDBCard background='white' className='d-flex justify-content-center text-white setbgCrd'>
        <MDBCardHeader className='fw-bold fs-5 d-flex justify-content-center setbgb text-white'> Technical skills  </MDBCardHeader>
        <MDBCardBody>
        {slice.map((item,index)=>{
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


      


            
            <div className='d-flex justify-content-center '>
           
             <MDBBtn className=' bg-transparent font-sans hover-overlay text-primary' onClick={()=>loadMore()}>  {ButtonValue} | <MDBIcon fas icon={Icon} size='xl' /></MDBBtn>
            </div>
     
                  
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}