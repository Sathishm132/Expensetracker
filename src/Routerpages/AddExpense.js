import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const AddExpense = () => {
  return (
    
    <>
    <div  className='mt-5'>
    <Container>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Money spent</Form.Label>
        <Form.Control type="number" placeholder="Enter  your money spent" />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Category</Form.Label>
        <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option >grocery</option>
      <option >Houserent</option>
      <option >Entertainment</option>
    </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add expense
      </Button>
    </Form>
    </Container>
    </div>
    </>
  )
}

export default AddExpense

