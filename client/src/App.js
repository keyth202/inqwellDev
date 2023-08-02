
import React, {Fragment, useEffect } from 'react'; 
//import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import{ BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Topbar from  './components/layout/topbar/Topbar'
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NotFound from './components/error/NotFound';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddEducation from './components/profile-forms/AddEducation';
import AddExperience from './components/profile-forms/AddExperience';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import AuthSidebar from './components/layout/sidebar/AuthSidebar';
//redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import { ColorModeContext, useMode } from './themes/theme';
import {CssBaseline, ThemeProvider} from "@mui/material"
import './App2.css';



const App= ()  => {
  
  useEffect(() => {
    if(localStorage.token){
      setAuthToken(localStorage.token);
    
    }
    store.dispatch(loadUser);
    // log user out from all tabs if they log out in one tab
    /*
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
    */
    
  }, []);
  
 const [theme, colorMode ] =useMode();

  
  return (
    <ColorModeContext.Provider value ={colorMode} >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        <Provider store ={store}>
       
             
          <Router> <div className='app'>
            {/*<AuthSidebar /> */}
              <main className='content'>
                <Topbar />
              {/* <Navbar />*/}
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="Profiles" element={<Profiles />} />
              <Route path='Profile/:id' element={<Profile />} />
              <Route
                path="dashboard"
                element={<PrivateRoute component={Dashboard} />}
              />
              <Route
                path="create-profile"
                element={<PrivateRoute component={CreateProfile} />}
              />
              <Route
                path="edit-profile"
                element={<PrivateRoute component={EditProfile} />}
              />
              <Route
                path="add-experience"
                element={<PrivateRoute component={AddExperience} />}
              />
              <Route
                path="add-education"
                element={<PrivateRoute component={AddEducation} />}
              />
              <Route
                path="posts"
                element={<PrivateRoute component={Posts} />}
              />
              <Route
                path="posts/:id"
                element={<PrivateRoute component={Post} />}
              />
              <Route
                path="*"
                element={<NotFound />}
                />
          </Routes>
          </main>
        </div>
          </Router >
           
        </Provider>
         
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
