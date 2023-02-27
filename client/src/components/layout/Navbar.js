import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { NavbarData } from './NavBarData';

const Navbar = () => {
    const {NavBarData} = useState(false);


  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/"><i className="fas fa-code"></i> DevConnector</Link>
      </h1>
      <ul>
      {NavbarData.map((item,index)=>{
        return (
           
                <li key={index} >
                    <Link to={item.path}>{item.title}</Link>
                </li>
           
            );
            
        })}
       </ul>
    {/*
    <ul>
        <li><Link to="profiles">Profiles</Link></li>
        <li><Link to="register">Register</Link></li>
        <li><Link to="login">Login</Link></li>
      </ul>
       */}
    </nav>  
    
  )
}

export default Navbar
