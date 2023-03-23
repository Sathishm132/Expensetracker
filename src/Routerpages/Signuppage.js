import React, { useRef, useState } from 'react'
import { Button,  Form } from 'react-bootstrap'
import Validation from '../Components/Validation'

const Signuppage = () => {
 
   const [formvalue,setFormvalues]=useState({
    email:"",
    password:"",
    confirmpassword:""
   })
   const[error,setError]=useState(null)
   const changehandler=(e)=>{
 
    let {name,value}=e.target
    const enteredvalue= {...formvalue,[name]:value}
    setFormvalues(enteredvalue) 
   }
   const submithandler=(e)=>{
    e.preventDefault()
    setError(Validation(formvalue));

    
   
    
 
    if(!error){
      fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA0lpUzoOCsGC3kldjNFc2I7Shdyo85qM0",
  
      {
        method:"POST",
        body:JSON.stringify({
          email:formvalue.email,
          password:formvalue.password,
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
        <Form.Control type="email" name='email' onChange={changehandler} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
        {error&&<p style={{color:"red"}}>{error.email}</p>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" onChange={changehandler} placeholder="Password" />
        {error&&<p style={{color:"red"}}>{error.password}</p>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="confirmPassword">
        <Form.Label>Confirmpassword</Form.Label>
        <Form.Control type="password"name="confirmpassword"onChange={changehandler} placeholder="Password" />
       {error&&<p style={{color:"red"}}>{error.confirmpassword}</p>}
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