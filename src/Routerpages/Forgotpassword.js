import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const Forgotpassword = () => {
    const email=useRef();
    const navigate=useNavigate()
    const submithandler=async()=>{
        await fetch(
            "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyA0lpUzoOCsGC3kldjNFc2I7Shdyo85qM0",
            {
              body: JSON.stringify({
                requestType: "PASSWORD_RESET",
                email: email.current.value,
      
                returnSecureToken: true,
              }),
              headers: {
                "Content-type": "application/json",
              },
            }
          );
          navigate("/signin");


    }
  return (
    <div className="position-absolute p-5 top-50 start-50 translate-middle d-inline-block justify-content-center align-items-center">
    <div className="overlay p-5 shadow ">
      <Form onSubmit={submithandler}>
        <h1 className="d-flex justify-content-center mb-5">PASSWORD_RESET</h1>
        <p>Enter your regitered email</p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            ref={email}
            placeholder="Enter email"
          />
         
        </Form.Group>

       
        <div className="d-grid-2 ">
          <Button variant="primary" type="submit">
            Login
          </Button>
        </div>
       
        
      </Form>
      </div>
      </div>)

}

export default Forgotpassword