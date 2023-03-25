import React, { useContext } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Expenscontext from './Context/ExpenseContext'

const Expenselist = (props) => {
  const cntx=useContext(Expenscontext)
  const deletehandler=()=>{
    cntx.deleteexpense(props.id)
  }
  const edithandler=()=>{
    cntx.editExpense(props.newexpense)
  }
  return (
    <>
    <Container>
    <Row>
      <Col>{props.newexpense.money}</Col>
      <Col>{props.newexpens.description}</Col>
      <Col>{props.category}</Col>
      <Col>
      <button onclick={deletehandler}>delete</button>
      <button onclick={edithandler}>edit</button>
      </Col>
    </Row>
    </Container>
  </>
  )
}

export default Expenselist