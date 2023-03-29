import axios from "axios";import React, { useEffect, useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch,  } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ExpenseAction } from "../Components/Context/ExpenseSlice";


const { v4: uuidv4 } = require('uuid');


const AddExpense = (props) => {
  const navigate=useNavigate();
  const money = useRef();
  const description = useRef();
  const category = useRef();
 
  const dispatch=useDispatch()
 
 
  const submithandler = (e) => {
    e.preventDefault();

    const expensedata = {
      money: money.current.value,
      description: description.current.value,
      category: category.current.value,
      uuid:uuidv4()
    };
    
    axios.post(
      `https://crud-12e65-default-rtdb.asia-southeast1.firebasedatabase.app/expense.json`,expensedata
     
    ).then((response)=>{
    
     expensedata.id=response.data.name
  
        }).then(()=>dispatch(ExpenseAction.addexpense(expensedata)));
    
        navigate("/")

  };

 
  return (
    <>
      <div className="mt-5">
        <Container>
          <Form onSubmit={submithandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Money spent</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter  your money spent"
                ref={money}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Write description"
                ref={description}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Category</Form.Label>
              <Form.Select aria-label="Default select example" ref={category}>
                <option>Open this select menu</option>
                <option>grocery</option>
                <option>Houserent</option>
                <option>Entertainment</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary"  type="submit">
              Add expense
            </Button>
          </Form>
          
        </Container>
      </div>
    </>
  );
};

export default AddExpense;
