import axios from "axios";
import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { ExpenseAction } from "../Components/Context/ExpenseSlice";
import Expenselist from "../Components/Expenselist";

const AddExpense = (props) => {
  const money = useRef();
  const description = useRef();
  const category = useRef();
 
  const dispatch=useDispatch()
  const expenses=useSelector(state=>state.expenses)

  const submithandler = (e) => {
    e.preventDefault();

    const expensedata = {
      money: money.current.value,
      description: description.current.value,
      category: category.current.value,
    };
   
    dispatch(ExpenseAction.addexpense(expensedata));


  };

  const expenselist = expenses.map((item) => (
    <ul>
      <Expenselist
        money={item.money}
        description={item.description}
        category={item.category}
        id={item.id}
      ></Expenselist>
    </ul>
  ));
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
            <Button variant="primary" type="submit">
              Add expense
            </Button>
          </Form>
          {expenselist}
        </Container>
      </div>
    </>
  );
};

export default AddExpense;
