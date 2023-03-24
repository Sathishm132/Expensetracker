
import React from 'react';
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import "./App.css"
import Expensepage from './Routerpages/Expensepage';
import Forgotpassword from './Routerpages/Forgotpassword';
import Signinpage from './Routerpages/Signinpage';
import Signuppage from './Routerpages/Signuppage';

const App = () => {
  const router=createBrowserRouter([
    {
      path:"/expense",
      element:<Expensepage/>,
      loader:()=>{
        if(localStorage.getItem("token")){
          return true
        }else{
          return redirect("/signin")
        }
      }
    },
    {
      path:"/signin",
      element:<Signinpage/>
      
    },
    {
      path:"/signup",
      element:<Signuppage/>
    },
    {
      path:"/forgot",
      element:<Forgotpassword/>
    }
  ])
  return (
    
    <body className='bg'>
     <RouterProvider router={router}></RouterProvider>
    </body>
  )
};

export default App;
