import React, {  useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { ExpenseAction } from './Context/ExpenseSlice'

import Edit from './Edit'

const Expenselist = (props) => {
  const dispatch=useDispatch();
  
  const[show,setShow]=useState(false);
  const deletehandler=()=>{
    dispatch(ExpenseAction.deleteexpense(props.id))
  
   
  }
  const edithandler=()=>{
    setShow(true)
   
    }

  

  return (
    <>
    <Container>
    <Row>
      <Col>{props.money}</Col>
      <Col>{props.description}</Col>
      <Col>{props.category}</Col>
      <Col>
      <button onClick={deletehandler}>delete</button>
      <button onClick={edithandler}>edit</button>
      </Col>
    </Row>
    <Edit
      hide={()=>{setShow(false)}}
      show={show}
      money={props.money}
      description={props.description}
      category={props.category}
      id={props.id} ></Edit>
    </Container>
  </>
  )
}

export default Expenselist