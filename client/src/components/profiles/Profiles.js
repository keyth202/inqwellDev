import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/spinner/Spinner';
import { getProfiles} from '../../actions/profile';
import ProfilesItem from './ProfilesItem';
import { connect } from 'react-redux';

const Profiles = ({getProfiles, profile:{profiles, loading}})=> {
    useEffect(()=> {
        getProfiles();
    },[getProfiles]);
  return (
    <section className="container">
    {loading ? (
      <Spinner />
    ) : (
      <Fragment>
        <h1 className="large text-primary">Athletes</h1>
        <p className="lead">
          <i className="fab fa-connectdevelop" /> Browse and connect with
          atheletes and Trainers
        </p>
        
        <div className="profiles">
          {profiles.length > 0 ? (
            profiles.map((profile) => (
              <ProfilesItem key={profile._id} profile={profile} />
            ))
          ) : (
            <h4>No profiles found...</h4>
          )}
        </div>
      </Fragment>
    )}
  </section>
);
  
}

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps,{getProfiles})(Profiles)