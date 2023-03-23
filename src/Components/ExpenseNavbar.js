import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import Profile from './Profile'

const ExpenseNavbar = () => {
  return (
  <>
   <Navbar bg='info'>
      <Container>
        <Navbar.Brand href="#home">Welcome to expense tracker</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          
           <Profile/>
        
        </Navbar.Collapse>
      </Container>
    </Navbar></>
  )
}

export default ExpenseNavbar