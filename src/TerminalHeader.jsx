import React from 'react';
import './Terminal.css'
import { MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

export default function TerminalHeader() {
const Navigate = useNavigate()
  return (
    <div className='setHeaderT'>
<div class='setHeaderTeminal'>
  <div class='left-section'>
    <ul class='ul1'>
      <li class='li1'></li>
      <li class='li1'></li>
      <li class='li1'></li>
    </ul>
  </div>
  <div class='right-section'>
    <p class='center'>MB6DEVSPACE Terminal</p>
  </div>
  <div class='rightend-section d-flex align-items-center mb-3 me-2'>
 <MDBBtn onClick={()=>Navigate('/')} className='m-3 btn bg-danger hover-shadow btn-close'/>
  </div>
</div>
</div>
   

  );
}