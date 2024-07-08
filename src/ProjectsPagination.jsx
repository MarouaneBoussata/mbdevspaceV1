import React, { useState } from 'react';
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import { Link,useLinkClickHandler,useLocation } from 'react-router-dom'; 

export default function ProjectPagination() {

    
const [active,setActive]=useState(false);


  return (
    <nav aria-label='...'>
        
      <MDBPagination circle className='mb-0'>
      <label className='mt-1 fw-bold'>Navigate : </label>
        <MDBPaginationItem active={active}>
          <MDBPaginationLink href='/project' className='fw-bold' >1</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem active={active}>
          <MDBPaginationLink href='/project1'  className='fw-bold'>
            2 <span className='visually-hidden'>(current)</span>
          </MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem active={active}>
          <MDBPaginationLink href='/project2'  className='fw-bold'>3</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem active={active}>
          <MDBPaginationLink href='/project3'  className='fw-bold'>4</MDBPaginationLink>
        </MDBPaginationItem>
      </MDBPagination>
    </nav>
  );
}