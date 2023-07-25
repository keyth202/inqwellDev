import React, {Fragment, useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import {Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import NavSideBar from './sidebar/NavSideBar';
//import { NavbarDataGuest, NavbarDataAuth } from './NavbarData';


const Navbar = ({auth:{isAuthenticated}, logout}) => {
    //const {Navbar} = useState(false);
  const [visibility, setVisibility] = useState(true);

  const handleSidebar = () => {
    setVisibility((prevState)=> !prevState);
  }
  const authLinks = (
    <ul>
     <li><Link to="dashboard"><i className='fas fa-user' /><span className='hide-sm'>Dashboard</span></Link></li>  
    <li><Link to="profiles">Profiles</Link></li>   
    <li><Link to="workout">Workouts</Link></li>
    <li><Link to="posts">Posts</Link></li>
      <li>
        <a onClick={logout} href='#!'>
          <i className="fas fa-sign-out-alt"></i>{' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul>
    <li><Link to="profiles">Profiles</Link></li>
    <li><Link to="register">Register</Link></li>
    <li><Link to="login">Login</Link></li>
  </ul>
  );

  const authSidebar =(
    <div>
      <Button icon="pi pi-bars" onClick={handleSidebar} className="p-mr-2" />
      <Sidebar visible={visibility} onHide={() => setVisibility(false)}   position='left' className="ui-sidebar-sm">
          <ul className='sidebar-menu'>
          <li><Link to="dashboard"><i className='fas fa-user' /><span className='hide-sm'>Dashboard</span></Link></li>  
          <li><Link to="profiles">Profiles</Link></li>   
          <li><Link to="workout">Workouts</Link></li>
          <li><Link to="posts">Posts</Link></li>
            <li>
              <a onClick={logout} href='#!'>
                <i className="fas fa-sign-out-alt"></i>{' '}
                <span className="hide-sm">Logout</span>
              </a>
            </li>
          </ul>
    </Sidebar>
    </div>
  );

  return (
    <div>
      {isAuthenticated ? authSidebar : ''}
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fa-solid fa-square-z"></i> Zoe's Arena
          </Link>
      </h1>
      <ul>
     <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
       </ul>
    </nav>  
    
    </div>
    
  )
}

Navbar.propTypes ={
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
  auth: state.auth
})

export default connect(mapStateToProps,{logout})(Navbar);
