import { useEffect, useRef, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const Profile=()=>{
    const[show,setShow]=useState();
    const[profile, setprofile]=useState(null);
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
    
  
  
      });
      setShow(false)
  
    }
    useEffect(()=>{
      fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA0lpUzoOCsGC3kldjNFc2I7Shdyo85qM0",{
        method:"POST",
        body:JSON.stringify({
          idToken:localStorage.getItem("token"),
        }),
        headers:{
          "Content-type":"application/jason"
        }
      
      }).then((res)=>{
        if(res.ok){
          
  
          return res.json();
         
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
     
        console.log(data);
        setprofile({name:data.displayName,photo:data.photoUrl});
       
       
  
      }).catch((err)=>{
       
  
      })
    },[])
    return (
      <>
      <div>
      {!profile&&<h3 onClick={clickhandler}>complete</h3>}
      {profile&&<div>
        <img src={profile.photo} class="rounded-circle shadow-4"
  style={{width: "70px"}} alt="Avatar" /><h5 > {profile.name}</h5></div>}
      
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
     </>)
}
export default Profile;