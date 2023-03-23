
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./App.css"
import Expensepage from './Routerpages/Expensepage';
import Signinpage from './Routerpages/Signinpage';
import Signuppage from './Routerpages/Signuppage';

const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Signuppage/>
    },
    {
      path:"/signin",
      element:<Signinpage/>
    },
    {
      path:"/expense",
      element:<Expensepage/>
    }
  ])
  return (
    <>
    <body className='bg'>
     <RouterProvider router={router}></RouterProvider>
    </body>
    </>
  );
};

export default App;
