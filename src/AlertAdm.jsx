import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import ContactMe from './ContactMe.Handle';

function AlertAdm() {
const{trueValue}=ContactMe()
 const[show,setShow]=useState(false)
  const showAlert=()=>{
    if(trueValue==true){
    return setShow(!show)
     
    }
  return show;
   
  }
  return (
    <>
      <Alert show={showAlert} variant="success">
        <Alert.Heading>My Alert</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>


    </>
  );
}

export default AlertAdm;