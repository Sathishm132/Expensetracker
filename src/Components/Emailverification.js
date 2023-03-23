import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

const Emailverification = (props) => {
    const clickhandler=()=>{
        console.log(props.data.email)
        fetch("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyA0lpUzoOCsGC3kldjNFc2I7Shdyo85qM0",{ method:"POST",
        body:JSON.stringify({
            requestType:"VERIFY_EMAIL",
            idToken:props.data.token,
          
          returnSecureToken:true,
        }),
        headers:{
            "Content-type":"application/json"
          }})
     props.onHide()}
          
         
           
           
        
    
    
    return(
    <><Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
         <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={clickhandler}>Verify</Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default Emailverification