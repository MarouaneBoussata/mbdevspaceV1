import  { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import Validation from './Validation'

const ContactMe = () => {
  const initContactValue = {
    FirstName :"",
    SecondName :"",
    email:"",
    subject :"",
    description:""
  }
  const[Gsm,setGsm]=useState()
  const [spin,setSpin]=useState(false)
  const [errors,setErrors]=useState({})
  const [contactValue,setContactValue] = useState(initContactValue)
  const contactHandler = (e)=>{
    const newValue={...contactValue}
    newValue[e.target.id]=e.target.value
    setContactValue(newValue)
  }
var trueValue = false

  const sendMail = (e) => {
    setSpin(true)
    e.preventDefault()
     setErrors(Validation(contactValue))
    axios.get("https://mb-6devspace-backend.vercel.app",{
        params:{
            email:contactValue.email,
            subject:contactValue.subject,
            description:contactValue.description,
            FirstName:contactValue.FirstName,
            SecondName:contactValue.SecondName,
            Gsm,
           
        },
        
    })
    
    .then(()=>{
       
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Email sent successfully",
          showConfirmButton: false,
          timer: 4000
        });
        setContactValue(initContactValue);
        setSpin(false)
   
    })
    .catch(()=>{
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Email not sent, something went wrong!",
            showConfirmButton: true,
            timer: 4000
          });
     setSpin(false)

    });
  }
  

  return{contactValue,contactHandler,sendMail,Gsm,setGsm,trueValue,errors,spin}
}

export default ContactMe