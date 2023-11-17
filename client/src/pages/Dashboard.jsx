import React, { Fragment, useEffect } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import DashboardActions from '../components/dashboard/DashboardActions';
import Experience from '../components/dashboard/Experience';
import Education from '../components/dashboard/Education';
import PointTracker from '../components/points/PointTracker';
import Spinner from '../components/layout/spinner/Spinner';
import { getCurrentProfile, deleteAccount } from '../actions/profile';

import Box from '@mui/material/Box';
import Paper  from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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
      
      {profile != null ? (<Paper elevation={3}>
        <Grid container spacing={2} >
            <Grid item xs={3}>
                <PointTracker points={profile.points}/>
            </Grid>

            <Grid item xs={3}>
                <Experience experience={profile.experiences}/>
            </Grid>
        
            <Grid item xs={3}>
                <Education education={profile.education} />
            </Grid>
            
            <Grid item xs={3}>
                
                <div className="my-2">
                <button className="btn btn-danger" onClick={() => deleteAccount()}>
                <i className="fas fa-user-minus" /> Delete My Account
                </button>
            </div>
            
                </Grid>
            </ Grid>
        </ Paper>
        ):(
         <Fragment>
        <p>You have not setup a profile, please add some info</p>
        <Link to='/create-profile' className="btn btn-primary my-1">
          Create Profile
        </Link>
        </Fragment>)}
        <DashboardActions />
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