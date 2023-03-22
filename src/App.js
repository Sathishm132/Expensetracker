
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./App.css"
import Signuppage from './Routerpages/Signuppage';

const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Signuppage/>
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
