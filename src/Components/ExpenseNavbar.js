import React from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import { redirect, useNavigate } from 'react-router-dom'
import Profile from './Profile'



const ExpenseNavbar = () => {
  const navigate=useNavigate()

  const clickhandler=()=>{
    localStorage.removeItem("token")
    navigate("/signin")


   

  }
  return (
  <>
   <Navbar bg='info'>
      <Container>
        <Navbar.Brand href="#home">Welcome to expense tracker</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button type='primary' onClick={clickhandler}> logout</Button>
           <Profile/>
        
        </Navbar.Collapse>
      </Container>
    </Navbar></>
  )
}

export default ExpenseNavbar