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
  }

   // (Taken from register.js) example of how to make a request from a form button and hit the DB
  const onSubmit = async e => {
    e.preventDefault(); 
    if(password !== password2) {
       console.log('Passwords do not match');
    }else{
        const newUser ={name, email, password};
        try {
            const config = {
                headers: {
                    'Content-type':'Application/json'
                }
            }

            const body = JSON.stringify(newUser);

            const res = await axios.post('/api/users', body, config);
            console.log(res.data);
        } catch (err) {
            console.error(err.response.data);
        }
    }

}

//used for nav bar data, but failed
links.map((item,index)=>{
  return (
     
          <li key={index} >
              <Link to={item.path}>{item.title}</Link>
          </li>
     
      );
      
  })

  // NavBar.js line 38 add  {loading &&  {(<Fragment>{isAuthenticated? authLinks : guestLinks}</Fragment>)  } -- failed because it did not load links, not sure why

//From App.js using older method  
  (<Fragment>
      
  <RouterProvider router ={router} />
 <section className='container'><Alert /></section>
</Fragment>)