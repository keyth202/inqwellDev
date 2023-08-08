import { Fragment, useState } from "react";
import React  from 'react';
import {connect} from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from 'prop-types';


const Register = ({setAlert, register, isAuthenticated}) => {

    const [formData, setFormData] =useState({
        name:'',
        email:'',
        password:'',
        password2:''
    });

    const {name, email, password, password2} = formData;
    const onChange = e => setFormData({...formData,[e.target.name]:e.target.value });
    // example of how to make a request and hit the DB
    const onSubmit = async e => {
        e.preventDefault(); 
        if(password !== password2) {
           setAlert('Passwords do not match', 'danger', 6000);
        }else{
            console.log('Registration success');
            setAlert('Registration Success', 'success', 6000);
            register({name, email, password});

        }

    }
     // redirect if logged in 
     if(isAuthenticated){
      return <Navigate to="/dashboard" />
    }
  return (
    <Fragment >
    <section className="authBody">
        <h2>Sign Up</h2>
      <div className="loginBody">
      <div className="registerBox">   
      <form className="formBox" onSubmit={e => onSubmit(e)}>
        <h2>Create Your Account</h2>
        <div className="inputBox">
          <input 
            type="text" 
            name="name" 
            value ={name} 
            onChange={e => onChange(e)}
            required
          />
          <span>Name</span>
                <i></i>
        </div>
        <div className="inputBox">
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
        <div className="inputBox">
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
        <div className="inputBox">
          <input
            type="password"
            name="password2"
            minLength="6"
            value = {password2}
            onChange={e => onChange(e)}
            required
          />
          <span>Confirm Password</span>
                <i></i>
        </div>
        <input type="submit" className="subForm" value="Register" />
        <div className='links'>
           <Link to="/login">Already have an account? Sign In</Link>
        </div>
      </form>

      </div>
      </div>
    </section>
    </Fragment>
  )
}
Register.propTypes = {
  setAlert:PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(
  mapStateToProps,
  {setAlert, register}
  )(Register);
