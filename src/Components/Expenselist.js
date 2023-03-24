import React from 'react'
import { Container, ListGroup } from 'react-bootstrap'

const Expenselist = (props) => {
  return (
    <>
    <Container>
    <ListGroup >
          <ListGroup.Item>{props.money}</ListGroup.Item>
          <ListGroup.Item>{props.description}</ListGroup.Item>
          <ListGroup.Item>{props.category}</ListGroup.Item>
          <ListGroup.Item>and above!</ListGroup.Item>
        </ListGroup>
    </Container>
    </>
  )
}

export default Expenselist