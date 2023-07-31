import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import SearchBar from '../search/Searchbar';
import './landing.css';
import { Container } from '@mui/material';

const Landing = ({isAuthenticated}) => {
  if(isAuthenticated){
    return <Navigate to='/dashboard' />
  }
  
  return (
    <Container>
  
        <h1 className="x-large">Zoe's Arena</h1>
        <p className="lead">
          Create a fitness profile, wager points versus friends and get help from trainers
        </p>
        <div className="buttons">
          <Link to="register" className="btn btn-primary">Sign Up</Link>
          <Link to="login" className="btn btn-light">Login</Link>
          <SearchBar items={[{name:'cat'},{name:'dog'}]}/>
        </div>
    </Container>

  )
}

Landing.propTypes ={
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing);

//racf and tab makes a component