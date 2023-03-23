import React, { useRef, useState } from 'react'
import { Button,  Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Validation from '../Components/Validation'

const Signuppage = () => {
 
   const [formvalue,setFormvalues]=useState({
    email:"",
    password:"",
    confirmpassword:""
   })
   const[error,setError]=useState(null)
   const navigate=useNavigate()
   const changehandler=(e)=>{
    e.preventDefault()
 
    let {name,value}=e.target
    const enteredvalue= {...formvalue,[name]:value}
    setFormvalues(enteredvalue) 
   }
   const submithandler=(e)=>{
    e.preventDefault()
    setError(Validation(formvalue));

    
   navigate("/signin")
    
 
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
     }).then((res)=>{
        if(res.ok){
          return res.json()

        }else{
          return res.json().then((data)=>{
            let Errormessage="Authentication failed";
            // if(data&&data.error&&data.error.message){
            //   Errormessage=data.error.message
           // } 
           throw new Error(Errormessage) 
           
          })
        }
      }).then((data)=>{
       

      }).catch((err)=>{
        alert(err.message)


      })
    }
      
    }
 
     

  
  return (
   <>
   <div className='position-absolute p-5 top-50 start-50 translate-middle d-inline-block justify-content-center align-items-center'>
   <div  className='overlay p-5 shadow '>
    

    <Form onSubmit={submithandler}>
      <h1 className='d-flex justify-content-center mb-5'>SignUp</h1>
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
      <div className="d-grid ">
      <Button variant="primary" type='submit' >
        signUp
      </Button>
      
    </div>
     
    </Form>
    
     
  </div>
  <br/>
  <div className='position-relative d-grid'>
  <Button variant="outline-success"onClick={()=>{navigate("/signin")}}>Have an account? login</Button>
    </div>


   </div>
 
   
   </>
  )
}

export default Signuppage