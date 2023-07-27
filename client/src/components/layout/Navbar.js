import React, {Fragment, useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import AuthSidebar from './sidebar/AuthSidebar';
import Topbar from './topbar/Topbar';
//import { NavbarDataGuest, NavbarDataAuth } from './NavbarData';


const Navbar = ({auth:{isAuthenticated}, logout}) => {
  const [isSidebar, setIsSidebar] = useState(true);
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => {
    setSidebar(!sidebar);
  }
  /*
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
  */
  const guestLinks = (
    <ul>
    <li><Link to="profiles">Profiles</Link></li>
    <li><Link to="register">Register</Link></li>
    <li><Link to="login">Login</Link></li>
  </ul>
  );

  return (
    <div>

      {isAuthenticated ? (
        <>
        <AuthSidebar isSidebar={isSidebar} />
        <main className='content'>
        <Topbar />
        
        </main>
        </>
        ):
          <nav className="navbar bg-dark">                   
            {guestLinks}          
          </nav>  
    }
  
    </div>
    
  )
}

Navbar.propTypes ={
  logout: PropTypes.func,
  auth: PropTypes.object
}

const mapStateToProps = state =>({
  auth: state.auth
})

export default connect(mapStateToProps,{logout})(Navbar);
