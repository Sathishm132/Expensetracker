import React, { useRef, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

const Expensepage = () => {
  const[show,setShow]=useState();
  const name=useRef();
  const photo=useRef();
  const clickhandler=()=>{
   setShow(true)
  }
  const handleClose=()=>{
    setShow(false)
  }
  const savehandler=()=>{
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA0lpUzoOCsGC3kldjNFc2I7Shdyo85qM0",{
     method:"POST",
     body:JSON.stringify({
      idToken:localStorage.getItem("token"),
      displayName:name.current.value,
      photoUrl:photo.current.value,
      returnSecureToken:true,
    }),
    headers:{
      "Content-type":"application/json"
    }


    })
    setShow(false)

  }
  return (
    <>
    <div><h3>expense page</h3> 
    <h3 onClick={clickhandler}>complete</h3>
    </div>
     <Modal show={show} onHide={handleClose}>
     <Modal.Header closeButton>
       <Modal.Title>Contact detials</Modal.Title>
     </Modal.Header>
     <Modal.Body>
       <Form>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
           <Form.Label>Email address</Form.Label>
           <Form.Control
             type="text"
             placeholder="enter fullname"
             ref={name}
             autoFocus
           />
         </Form.Group>
         <Form.Group
           className="mb-3"
           controlId="exampleForm.ControlTextarea1"
         >
           <Form.Label>Photo url</Form.Label>
           <Form.Control type='url' ref={photo}/>
         </Form.Group>
       </Form>
     </Modal.Body>
     <Modal.Footer>
       <Button variant="secondary" onClick={handleClose}>
         Close
       </Button>
       <Button variant="primary" onClick={savehandler}>
         Save Changes
       </Button>
     </Modal.Footer>
   </Modal>
   </>
  )
}

export default Expensepage