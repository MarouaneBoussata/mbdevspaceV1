import React from 'react';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import { Link,useLocation } from 'react-router-dom';    
export default function Breadcrumb() {
    const Location = useLocation();
    let currentLink = ''
    const crumb = Location.pathname.split('/')
    .filter(crumb => crumb !=='')
    .map(crumb=>{
        return (
          <Link to={currentLink}>{crumb}</Link>
          
        )})
        
  return (
    <>
      <MDBBreadcrumb className='mt-5 w-100 '>
      <MDBBreadcrumbItem> 
       <a href='/'>Home </a> 
    </MDBBreadcrumbItem>
          <MDBBreadcrumbItem>
          {crumb}
      </MDBBreadcrumbItem>
      </MDBBreadcrumb>

    </>
  );
}