{
    path:"/",
    element: <Landing />,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"/",
        element: <Navbar />
      }
    ]
  },
  {
    path:"register",
    element: <Register />
  },
  {
    path:"login",
    element: <Login />
  },