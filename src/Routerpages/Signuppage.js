import React, { useRef, useState } from 'react'
import { Button,  Form } from 'react-bootstrap'
import Validation from '../Components/Validation'

const Signuppage = () => {
   const email=useRef()
   const password=useRef();
   const confirmpassword=useRef();
   const [value,setValues]=useState({
    email:"",
    password:"",
    confirmpassword:""
   })
   const[error,setError]=useState(null)
   const submithandler=async(e)=>{
    e.preventDefault()
    const enteredemail=email.current.value;
    const enteredpassword=password.current.value;
    const enteredconfirmpassword=confirmpassword.current.value;
    
    const enteredvalue={
      email: enteredemail,
      password:enteredpassword,
      confirmpassword:enteredconfirmpassword
    }
     await setValues(enteredvalue)
    await setError(Validation(value));
    console.log(error)
    if(!error){
     await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA0lpUzoOCsGC3kldjNFc2I7Shdyo85qM0",
  
      {
        method:"POST",
        body:JSON.stringify({
          email:enteredemail,
          password:enteredpassword,
          returnSecureToken:true,
        }),
        headers:{
          "Content-type":"application/json"
        }
     })
      
    }
 
     
    
  }
  return (
   <>
   <div>
   <div bg="light" className=' position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center'>
 

    <Form onSubmit={submithandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" ref={email} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"ref={password} placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="confirmPassword">
        <Form.Label>Confirmpassword</Form.Label>
        <Form.Control type="password"ref={confirmpassword} placeholder="Password" />
       {error&&<p>{error.confirmpassword}</p>}
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Sign up
      </Button>
    </Form>

     
  </div>
 
   </div>
 
   
   </>
  )
}

export default Signuppage