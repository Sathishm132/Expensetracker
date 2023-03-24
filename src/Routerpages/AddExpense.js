import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import Expenselist from '../Components/Expenselist';

const AddExpense = () => {
    const money=useRef();
    const description=useRef();
    const category=useRef();
    const[expense,setExpense]=useState([])
  
    const submithandler=(e)=>{
     
        e.preventDefault()
       
        const expensedata={
            money:money.current.value,
            description:description.current.value,
            category:category.current.value,
        }
       
         setExpense([...expense,expensedata])
         axios.post(
          `https://crud-12e65-default-rtdb.asia-southeast1.firebasedatabase.app/expense.json`,expensedata
         
        )
      
        console.log(expense)
         
    }
    useEffect(() => {
      const fetch = async () => {
        const response = await axios.get(
          `https://crud-12e65-default-rtdb.asia-southeast1.firebasedatabase.app/expense.json`
        );
        let fetchdata = [];
        for (let key in response.data) {
          fetchdata.push({ ...response.data[key], id: key });
        }
        
        setExpense(fetchdata)
      
      };
      fetch();
      
      
    }, []);

    const expenselist=expense.map((item)=>(<ul><Expenselist
    money={item.money}
    description={item.description} >
      </Expenselist></ul>));
  return (
    
    <>
    <div  className='mt-5'>
    <Container>
    <Form onSubmit={submithandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Money spent</Form.Label>
        <Form.Control type="number" placeholder="Enter  your money spent" ref={money} />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Write description" ref={description} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Category</Form.Label>
        <Form.Select aria-label="Default select example" ref={category}>
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
       {expenselist}
  
    </Container>
   
    </div>
    </>
  )
}

export default AddExpense

