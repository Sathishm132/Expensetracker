
import axios from 'axios';
import { useRef } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { ExpenseAction } from './Context/ExpenseSlice';



const Edit = (props) => {
  const money=useRef();
  const description=useRef();
  const category=useRef();
  const dispath=useDispatch()
    const handleClose=()=>{
        props.hide()
        const editvalue={
          money:money.current.value,
          description:description.current.value,
          category:category.current.value,
        }
        axios.put(
          `https://crud-12e65-default-rtdb.asia-southeast1.firebasedatabase.app/expense/${props.id}.json`,editvalue
         
        ) 
        dispath(ExpenseAction.editexpense({...editvalue,id:props.id}))

    }
    const handleSave=()=>{


    }

    
  return (
    <Modal show={props.show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>
   
      <Form
      >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Spent money</Form.Label>
         
          <Form.Control
            type="number"
            defaultValue={props.money}
            autoFocus
            ref={money}
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Expensedescription</Form.Label>
          <Form.Control as="textarea" rows={3}  defaultValue={props.description} ref={description}/>
        </Form.Group>
        <Form.Select aria-label="Default select example" defaultValue={props.category} ref={category}>
                <option>Open this select menu</option>
                <option>grocery</option>
                <option>Houserent</option>
                <option>Entertainment</option>
              </Form.Select>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleSave}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default Edit