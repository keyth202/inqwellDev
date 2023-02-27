
import React, {Fragment } from 'react'; 
import {createBrowserRouter,RouterProvider,Link, Outlet, Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ErrorPage from './components/ErrorPage';


import './App.css';

const AppLayout =() =>(
   <>
      <Navbar />
      <Outlet />
   </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Landing />
      },
      {
        path:"register",
        element: <Register />
      },
      {
        path:"login",
        element: <Login />
      },
    ]
  }
]);

const App= ()  => {
  return (
    
      <Fragment>
      
        <RouterProvider router ={router} />

      </Fragment>
    
  );
}

export default App;
