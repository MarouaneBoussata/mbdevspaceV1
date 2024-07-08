export default function Validation(contactValue){
const errors = {}
const email_pattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
if(contactValue.FirstName ===""){
    errors.FirstName = "First name required!";   
}
if(contactValue.SecondName ===""){
    errors.SecondName = "Second name required!";   
}
if(contactValue.email ===""){errors.email="Email is required!"}
else if(!email_pattern.test(contactValue.email))
{errors.email="Email is not correct"}

if(contactValue.subject==="")
{errors.subject="Subject required!"}
else if(contactValue.subject.length<=10)
{errors.subject="write at least 20 characters"}

if(contactValue.description==="")
{errors.description="Description required!"}
else if(contactValue.description.length<=50)
{errors.description="write at least 50 characters"}

return errors;
}