import React, { Fragment, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import {connect} from "react-redux";
import { login } from "../../actions/auth";
import PropTypes from 'prop-types';
import './auth.css';

const Login = ({login, isAuthenticated}) => {
    const [formData, setFormData] =useState({
        email:'',
        password:''
    });

    const { email, password} = formData;
    const onChange = e => setFormData({...formData,[e.target.name]:e.target.value });
    // example of how to make a request and hit the DB
    const onSubmit = async e => {
        e.preventDefault(); 
        console.log('Login success');
        login(email, password);
    
    }
    // redirect if logged in 
    if(isAuthenticated){
      return <Navigate to="/dashboard" />
    }
  return (
    <Fragment >
    {/*
    <section className="container">
      <h1 className="large text-primary">Sign Into Your Account</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} required/>

        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={e => onChange(e)}
            required
          />
        </div>
        
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </section>
  */}
  <div className='container'>
     <h1>Welcome to Zoe's Arena</h1>
  </div>
   
    <div className='loginBody'>
      
      <div className='loginBox'>
       
          <form className="formBox" onSubmit={e => onSubmit(e)}>
            <h2>Sign In</h2>
                
              <div className='inputBox'> 
                <input 
                  type="email" 
                  name="email" 
                  value={email} 
                  onChange={e => onChange(e)} 
                  required
                />
                <span>Email Address</span>
                <i></i>
              </div>
              <div className='inputBox'>
                <input
                  type="password"
                  name="password"
                  minLength="6"
                  value={password}
                  onChange={e => onChange(e)}
                  required
                />
                <span>Password</span>
                <i></i>
              </div>
              <input type="submit" className="subForm" value="Login" />
              <div className='links'>
                <Link to="/register">Don't have an account, sign up!</Link>
              </div>
          </form>
       
      </div>
    </div>

    </Fragment>
    )
}
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login})(Login);
