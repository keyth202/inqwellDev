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
  //const [visibility, setVisibility] = useState(true);
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => {
    setSidebar(!sidebar);
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
  /*  
  const authSidebar =(
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
      <div className="sidebar">
        <Link to="/" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        </div>
        <nav className={sidebar ? "side-menu active" : "side-menu"}>
        <ul className="side-menu-items" onClick={showSidebar}>
          <li className="sidebar-toggle">
            <Link to="/" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      </IconContext.Provider>
  </>
 
  );
*/
  return (
    <div>
      <h1>
        {/*}
        <Link to="/">
          <i className="fa-solid fa-square-z"></i> 
      </Link>*/}
      </h1>
      {isAuthenticated ? <NavSideBar /> :
          <nav className="navbar bg-dark">       
            <ul>
          <Fragment>{isAuthenticated ? '' : guestLinks}</Fragment>
            </ul>
          </nav>  
    }
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
