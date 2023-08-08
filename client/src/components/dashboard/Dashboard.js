import React, { Fragment, useEffect } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import PointTracker from '../points/PointTracker';
import Spinner from '../layout/spinner/Spinner'
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import Box from '@mui/material/Box';
import Paper  from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import '../../styles/component/componentStyle.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Dashboard = ({ 
  getCurrentProfile,
  deleteAccount, 
  auth :{ user}, 
  profile:{profile, loading}}) => {
  
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  return loading && profile ===null ? <Spinner /> : (
    <Box sx={{flexGrow:1}}>
        <div className="container">
        <h1 className="large text-primary">Dashboard</h1>
        <p className="lead">
        <i className="fas fa-user" /> Welcome {user && user.name}
      </p>
      <DashboardActions />
      {profile != null ? (<Grid container spacing={2} >
        <Grid item xs={4}>
            <Item> <PointTracker profile={profile}/></Item> 
          </Grid>

          <Grid item xs={4}>
            <Item> <Experience experience={profile.experiences}/></Item> 
          </Grid>
       
          <Grid item xs={4}>
            <Item><Education education={profile.education} /></Item>
          </Grid>
        
          <Grid item xs={2}>
            <Item>
              <div className="my-2">
            <button className="btn btn-danger" onClick={() => deleteAccount()}>
              <i className="fas fa-user-minus" /> Delete My Account
            </button>
          </div>
            </Item>
            </Grid>
        
           
        </ Grid>
        ):(
         <Fragment>
        <p>You have not setup a profile, please add some info</p>
        <Link to='/create-profile' className="btn btn-primary my-1">
          Create Profile
        </Link>
        </Fragment>)}
      
      </div>
    </Box>
  );
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount:PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile : state.profile
})

export default connect(mapStateToProps, {getCurrentProfile, deleteAccount})(Dashboard);